import { chromium } from "playwright";

const url = process.argv[2] || "http://127.0.0.1:8080/";
const out = process.argv[3] || "/workspace/screenshots/mobile-home.png";

const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));
page.on("console", (m) => {
  if (m.type() === "error") errors.push(m.text());
});
await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
const overflow = await page.evaluate(() => {
  const doc = document.documentElement;
  return {
    scrollWidth: doc.scrollWidth,
    clientWidth: doc.clientWidth,
    overflow: doc.scrollWidth > doc.clientWidth + 1,
  };
});
await page.screenshot({ path: out, fullPage: false });
console.log(JSON.stringify({ url, overflow, errors }, null, 2));
await browser.close();
if (errors.length || overflow.overflow) process.exit(1);
