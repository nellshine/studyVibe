const { chromium } = require("playwright");
const fs = require("fs");

(async () => {
  const keyword = process.argv[2] || "AI";
  const url = `https://search.naver.com/search.naver?where=news&query=${encodeURIComponent(keyword)}`;

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.log(`네이버 뉴스에서 "${keyword}" 검색 중...\n`);
  await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });

  const articles = await page.evaluate(() => {
    const root = document.querySelector("[data-block-id*='news']");
    if (!root) return [];

    // 각 뉴스 아이템 그룹: Profile 컴포넌트를 기준으로 분리
    const profiles = root.querySelectorAll("[data-sds-comp='Profile']");
    const seen = new Set();
    const results = [];

    profiles.forEach((profile) => {
      // 가장 가까운 뉴스 아이템 컨테이너 탐색
      let container = profile.parentElement;
      while (container && !container.classList.contains("sds-comps-full-layout")) {
        container = container.parentElement;
      }
      if (!container || seen.has(container)) return;

      // 중복 방지: 같은 컨테이너 내 하위 Profile 무시
      const parentProfiles = container.querySelectorAll("[data-sds-comp='Profile']");
      if (parentProfiles[0] !== profile) return;

      seen.add(container);

      const links = container.querySelectorAll("a[href]");
      let press = "";
      let title = "";
      let titleLink = "";
      let description = "";
      let date = "";

      // 시간 정보 추출
      const timeEl = container.querySelector("[data-sds-comp='DotDivider']");
      if (timeEl) {
        const parent = timeEl.parentElement;
        if (parent) {
          const spans = parent.querySelectorAll("span");
          spans.forEach((s) => {
            const t = s.textContent.trim();
            if (t.match(/\d+(시간|분|일|초)\s*전/) || t.match(/\d{4}\.\d{2}\.\d{2}/)) {
              date = t;
            }
          });
        }
      }

      links.forEach((a) => {
        const href = a.href || "";
        const text = a.textContent.trim();

        // 언론사 (media.naver.com/press)
        if (href.includes("media.naver.com/press") && text && !press) {
          press = text;
          return;
        }

        // 유틸리티 링크 제외
        if (!text || text === "네이버뉴스" || text.includes("Keep에") || href.includes("#")) {
          return;
        }

        // 제목 (외부 링크, 적당한 길이)
        if (!title && !href.includes("naver.com") && text.length > 5 && text.length < 200) {
          title = text;
          titleLink = href;
          return;
        }

        // 설명 (제목 이후, 긴 텍스트)
        if (title && !description && text.length > 20 && href === titleLink) {
          description = text;
        }
      });

      if (title) {
        results.push({ title, link: titleLink, press, description, date });
      }
    });

    return results;
  });

  if (articles.length === 0) {
    console.log("검색 결과가 없습니다.");
  } else {
    console.log(`총 ${articles.length}개의 뉴스를 찾았습니다.\n`);
    console.log("=".repeat(80));

    articles.forEach((article, i) => {
      console.log(`\n[${i + 1}] ${article.title}`);
      if (article.press) console.log(`    언론사: ${article.press}`);
      if (article.date) console.log(`    시간: ${article.date}`);
      if (article.description) console.log(`    요약: ${article.description}`);
      console.log(`    링크: ${article.link}`);
      console.log("-".repeat(80));
    });

    // JSON 저장
    const output = {
      keyword,
      scrapedAt: new Date().toISOString(),
      count: articles.length,
      articles,
    };
    fs.writeFileSync("naver-news-results.json", JSON.stringify(output, null, 2), "utf-8");
    console.log(`\n결과가 naver-news-results.json 에 저장되었습니다.`);
  }

  await browser.close();
})();
