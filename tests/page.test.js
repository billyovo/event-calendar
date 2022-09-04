import { test, expect, errors } from '@playwright/test';

const url = "https://minigame.letsdream.today";

test('Landing page is working', async ({ page }) => {
    await page.goto(url);
    await page.waitForLoadState('domcontentloaded')
    await expect(page).toHaveScreenshot();
})

test('News can load', async ({ page }) => {
    await page.goto(`${url}/news`);
    await page.waitForSelector(".line");

    expect(await page.locator(".line").count()).toBeGreaterThan(0);
})

test("Calendar Working", async({page})=>{
    await page.goto(`${url}/calendar`);
    const nextPageButton = await page.locator('.control-button');

    let startingDate = new Date();
    while(nextPageButton.isVisible()){
        let lastDate = new Date(startingDate.getFullYear(), startingDate.getMonth()+1, 0);
        await page.waitForSelector(".cell");
        expect(await page.locator(".cell:not(.empty)").count()).toEqual(lastDate.getDate());
        startingDate = new Date(startingDate.getFullYear(), startingDate.getMonth()+1, 1);
        nextPageButton.click();
    }   
})