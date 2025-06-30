const {test, expect} = require('@playwright/test')


test("popup validations",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    // await page.goto("http://google.com");
    //await page.goBack();
    //await page.goForward();
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    page.on("dialog",dialog => dialog.accept());
    await page.locator("#confirmbtn").click();
    await page.locator("#mousehover").click();
});