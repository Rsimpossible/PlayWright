const {test, expect} = require('@playwright/test');
const { clear } = require('console');


test('Browser context Playwright test', async ({browser})=>
{
    //chrome browser context and page settings
        const context = await browser.newContext();
        const page = await context.newPage();
        const userName = page.locator('#username');
        const signIn = page.locator('#signInBtn');
//website navigation
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        console.log(await page.title());
        await page.locator('#username').type("rahulshetty");
        await page.locator("[type='password']").type("learning");
        await signIn.click();
        console.log(await page.locator("[style*='block']").textContent());
        await expect(page.locator("[style*='block']")).toContainText('Incorrect');
        await userName.fill("");
        await userName.fill("rahulshettyacademy");
        await signIn.click();
        console.log (await page.locator(".card-body a").first().textContent());
        console.log (await page.locator(".card-body a").nth(1).textContent());
        const alltitles = await page.locator(".card-body a").allTextContents();
        console.log(alltitles);
});

test('UI Controls', async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    const documentLink = page.locator("[href*=documents-request]");
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("consult");
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    await page.locator('#terms').click();
    await expect(page.locator('#terms')).toBeChecked();
    await page.locator('#terms').uncheck();
    expect(await page.locator('#terms').isChecked()).toBeFalsy();
    await expect(documentLink).toHaveAttribute("class","blinkingText");
});

test('Child windows handler', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
    const [newpage]=await Promise.all(
    [
    context.waitForEvent('page'),   
    documentLink.click(),
    ])
    const text = await newpage.locator(".red").textContent();
    const arrayText = text.split("@")
    const domain = arrayText[1].split(" ")[0]
    console.log(domain);
    await page.locator('#username').fill(domain);
    console.log(await page.locator("#username").textContent());

});