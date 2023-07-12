// @ts-check
import { test, expect } from '@playwright/test';

const LOCAL_HOST_URL = 'http://localhost:5173/'
const CAT_API_URL = 'https://cataas.com'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  console.log({textContent, imageSrc});

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_API_URL)).toBeTruthy
});
