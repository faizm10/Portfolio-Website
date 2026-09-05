// Integration smoke checks against a running local production build.
// Usage: npm run test:smoke (PORTFOLIO_ORIGIN overrides localhost:3000).
import assert from "node:assert/strict";
const origin = process.env.PORTFOLIO_ORIGIN || "http://localhost:3000";
const routes = [
  "/",
  "/blog",
  "/photos",
  "/travel",
  "/resume",
  "/uoguelphcourses",
  "/octree",
  "/arcki",
  "/transit-flow",
  "/hc26",
  "/jachacks",
  "/hackathons",
  "/footy",
  "/soccer-stats",
  "/uwreflection",
  "/uogreflection",
  "/fast-tracked-uni-career",
];
for (const route of routes) {
  const response = await fetch(new URL(route, origin));
  assert.equal(response.status, 200, `${route} must render`);
  const html = await response.text();
  assert.match(html, /id="main-content"/, `${route}: skip-link destination`);
  assert.match(html, /Faiz Mustansar home/, `${route}: shared home link`);
  if (route === "/") {
    for (const content of [
      "5k+ users",
      "75k+ views",
      "8k–9k mau",
      "300+ users in 72 hours",
      "teaching assistant · mcs2000",
      "undergraduate research assistant",
      "university of waterloo",
      "Say hello to the little robot",
      "University of Guelph",
      "Outside of work",
      "Guelph webring",
      "fast-tracked-uni-career",
    ]) {
      assert.ok(html.includes(content), `Homepage must preserve ${content}`);
    }
    assert.ok(
      !html.includes("university of ottawa"),
      "Homepage must omit uOttawa",
    );
    assert.ok(
      !html.includes('id="loading-gate"'),
      "Homepage must not be gated by a timer",
    );
  }
  console.log(`PASS ${route}`);
}
assert.equal(
  (await fetch(new URL("/this-page-does-not-exist", origin))).status,
  404,
);
assert.equal((await fetch(new URL("/resume.pdf", origin))).status, 200);
console.log("PASS missing route returns 404; résumé PDF is available");
