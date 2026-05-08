import { test, expect } from '@playwright/test';

test('page loads with HTTP 200 and non-empty title', async ({ page }) => {
  const response = await page.goto('/');
  expect(response?.status()).toBe(200);
  const title = await page.title();
  expect(title.length).toBeGreaterThan(0);
  await page.screenshot({ path: 'e2e/screenshots/page-load.png', fullPage: true });
});

test('header name and job title are visible', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');
  await expect(page.getByRole('heading', { name: /Trung Nguyen/i })).toBeVisible();
  await expect(page.locator('[itemprop="jobTitle"]')).toBeVisible();
  await page.screenshot({ path: 'e2e/screenshots/header.png', fullPage: false });
});

test('Experience section is visible', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /experience/i })).toBeVisible();
  await expect(page.getByText('Zuehlke Engineering Vietnam')).toBeVisible();
  await expect(page.getByText('FPT Software')).toBeVisible();
  await page.screenshot({ path: 'e2e/screenshots/experience.png', fullPage: true });
});

test('Skills section is visible', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');
  await expect(page.getByRole('heading', { name: /skills/i })).toBeVisible();
  // target skill badge spans specifically to avoid matching text in experience bullets
  await expect(page.locator('.rounded-sm').filter({ hasText: /^Java$/ })).toBeVisible();
  await expect(page.locator('.rounded-sm').filter({ hasText: /^Spring Boot$/ })).toBeVisible();
  await page.screenshot({ path: 'e2e/screenshots/skills.png', fullPage: true });
});

test('Projects section is visible', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /projects/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Digital Banking Platform' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Adobe Service Offering' })).toBeVisible();
  await page.screenshot({ path: 'e2e/screenshots/projects.png', fullPage: true });
});

test('contact links are present', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: /nguyentrung0435@gmail\.com/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /linkedin/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /github/i })).toBeVisible();
  await page.screenshot({ path: 'e2e/screenshots/contact-links.png', fullPage: false });
});

test('no broken internal links', async ({ page }) => {
  await page.goto('/');
  const internalLinks = await page.$$eval(
    'a[href^="/"], a[href^="#"]',
    (anchors) => anchors.map((a) => (a as HTMLAnchorElement).href)
  );
  for (const href of internalLinks) {
    const response = await page.request.get(href);
    expect(response.status(), `Broken link: ${href}`).toBeLessThan(400);
  }
  await page.screenshot({ path: 'e2e/screenshots/full-page.png', fullPage: true });
});
