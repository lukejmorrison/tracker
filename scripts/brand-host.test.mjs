import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const src = readFileSync(new URL("../src/lib/brand.ts", import.meta.url), "utf8");

function originForHost(hostHeader) {
  const APP_ORIGIN = "https://tracker.wizwam.com";
  const GROK_ORIGIN = "https://gov-tracker.grok.me";
  const raw = (hostHeader ?? "").trim().toLowerCase();
  if (!raw) return APP_ORIGIN;
  const host = raw.split(":")[0] ?? raw;
  if (host === "gov-tracker.grok.me" || host.endsWith(".gov-tracker.grok.me")) return GROK_ORIGIN;
  if (host === "tracker.wizwam.com" || host === "www.tracker.wizwam.com") return APP_ORIGIN;
  if (host === "localhost" || host === "127.0.0.1" || host === "0.0.0.0" || host === "[::1]") {
    return `http://${raw}`;
  }
  return `https://${host}`;
}

test("brand.ts lists both public origins", () => {
  assert.match(src, /https:\/\/tracker\.wizwam\.com/);
  assert.match(src, /https:\/\/gov-tracker\.grok\.me/);
});

test("originForHost maps the two public hosts", () => {
  assert.equal(originForHost("tracker.wizwam.com"), "https://tracker.wizwam.com");
  assert.equal(originForHost("TRACKER.WIZWAM.COM:443"), "https://tracker.wizwam.com");
  assert.equal(originForHost("gov-tracker.grok.me"), "https://gov-tracker.grok.me");
  assert.equal(originForHost("gov-tracker.grok.me:443"), "https://gov-tracker.grok.me");
  assert.equal(originForHost("127.0.0.1:8080"), "http://127.0.0.1:8080");
  assert.equal(originForHost("localhost:5173"), "http://localhost:5173");
});
