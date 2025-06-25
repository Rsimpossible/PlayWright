const {test, expect} = require('@playwright/test');


test('Browser context Playwright test', async ({page})=>
{
        const email = "anshika@gmail.com"
        const productName = 'Fav Gucci'
        const products = page.locator(".card-body");
        await page.goto("https://rahulshettyacademy.com/client");
        await page.locator("#userEmail").fill("anshika@gmail.com");
        await page.locator("#userPassword").fill("Iamking@000");
        await page.locator("[value='Login']").click();
        await page.waitForLoadState('networkidle');
        //await page.locator(".card-body b").first().waitFor();
        const titles= await page.locator(".card-body b").allTextContents();
        console.log(titles);
        const count = await products.count();
        for(let i = 0; i < count; ++i)
        {
        if (await products.nth(i).locator("b").textContent()===productName)
                {
                await products.nth(i).locator("text= Add To Cart").click();
                break;
                }
        }
        await page.locator("[routerlink*='cart']").click();
        await page.locator("div li").first().waitFor();
        const bool =await page.locator("h3:has-text('Fav Gucci')").isVisible();
        expect(bool).toBeTruthy();
        await page.locator("text=Checkout").click();
        await page.locator("[placeholder*='Country']").pressSequentially("ind",{delay:100});
        const dropdown = page.locator(".ta-results");
        await dropdown.waitFor();
        await dropdown.locator("button").count();
        const optionsCount = await dropdown.locator("button").count();
        for (let i = 0; i < optionsCount; ++i)
        {
                const text = await dropdown.locator("button").nth(i).textContent();
                if (text == " India")
                        {
                                await dropdown.locator("button").nth(i).click();
                                break;
                        }
        }
                expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
                await page.locator(".action__submit").click();
        await page.pause()
        
});