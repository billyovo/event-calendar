import { test, expect } from '@playwright/test';

const url = "https://minigame.letsdream.today";

test('News can load', async ({ page }) => {
    await page.goto(`${url}/news`);
    await page.waitForSelector(".line");

    expect(await page.locator(".line").count()).toBeGreaterThan(0);
})


test("Calendar Working and value is correct", async({page})=>{
    await page.goto(`${url}/calendar`);
    let nextPageButton = await page.locator('button:has-text("下一頁")');
    
    let startingDate = new Date();

    while(await nextPageButton.isVisible()){
        let lastDate = new Date(startingDate.getFullYear(), startingDate.getMonth()+1, 0);
        await page.waitForSelector(".cell");

        //calendar has correct cells
        expect(await page.locator(".cell:not(.empty)").count()).toEqual(lastDate.getDate());
        startingDate = new Date(startingDate.getFullYear(), startingDate.getMonth()+1, 1); 
        
        //and events are shown
        expect(await page.locator(".cell img").count()).toBeGreaterThan(0);
        await nextPageButton.click();
    }
    
})

test('Records are shown', async ({ page }) => {
    await page.goto(`${url}/record`);
    await page.waitForSelector(".card");

    expect(await page.locator(".card").count()).toBeGreaterThan(0);
})