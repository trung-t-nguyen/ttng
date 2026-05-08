# E2E Test with Playwright

Run end-to-end tests for this Next.js CV site using Playwright.

## Steps

1. **Check if Playwright is installed** by looking for `@playwright/test` in `package.json` devDependencies or in `node_modules/.bin/playwright`.

2. **If Playwright is not installed**, install it and set up the config:
   - Run `npm install --save-dev @playwright/test`
   - Run `npx playwright install chromium` (chromium only is enough for this site)
   - Create `playwright.config.ts` at the project root:
     ```ts
     import { defineConfig, devices } from '@playwright/test';

     export default defineConfig({
       testDir: './e2e',
       fullyParallel: true,
       retries: 1,
       use: {
         baseURL: 'http://localhost:3000',
         trace: 'on-first-retry',
       },
       projects: [
         { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
       ],
       webServer: {
         command: 'npm run dev',
         url: 'http://localhost:3000',
         reuseExistingServer: true,
         timeout: 30000,
       },
     });
     ```
   - Add `"test:e2e": "playwright test"` to the `scripts` section of `package.json`.

3. **Check if the `e2e/` directory exists**. If it doesn't, create the following baseline tests at `e2e/cv.spec.ts`:
   - Page loads with HTTP 200 and a non-empty title
   - Key CV sections are visible: header/name, Experience, Skills, Projects, Education
   - Profile photo renders (`<img>` with `alt` matching the user's name or containing "profile")
   - Contact links (email, LinkedIn, GitHub) are present in the document
   - Page has no broken internal links (all `<a href="...">` with relative or `#` hrefs resolve)
   - Print media: confirm the page has at least one element with a `print:` Tailwind class or that `@media print` is referenced in styles (optional, can skip if complex)

   When writing the tests, inspect the actual component files in `src/components/` to use the right text, aria roles, or test ids rather than guessing. Read `Header.tsx`, `Experience.tsx`, `Skills.tsx`, `Projects.tsx`, and `Education.tsx` first.

4. **Run the tests**: `npx playwright test --reporter=list`

5. **Report results**: Show which tests passed/failed. If any fail, read the error output, investigate the relevant component, fix either the test (if the selector was wrong) or the component (if there is a real bug), then re-run.
