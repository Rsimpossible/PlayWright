const {test, expect, request} = require('@playwright/test');
const loginPayLoad = {userEmail: "rowl86@hotmail.com", userPassword: "Rahul@sri86"};

test.beforeAll( async ()=>
{
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
        {
            data:loginPayLoad
        } )
        expect(loginResponse.ok())
    const loginResponseJson = await loginResponse.json();
    const token = loginResponseJson.token;
    console.log(token);

});

test.beforeEach( () =>
{

});


test('Browser context Playwright test', async ({page})=>
{
        page.addInitScript(value => {
            window.localStorage.setItem('token', value);
        }, token );
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
                await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
                const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
                console.log(orderID);
                await page.locator("button[routerlink*='myorders']").click();
                await page.locator("tbody").waitFor();
                const rows = await page.locator("tbody tr");
                for(let i = 0; i<await rows.count(); ++i)
                {
                        const rowOrderID = await rows.nth(i).locator("th").textContent();
                        if (orderID.includes(rowOrderID))
                        {
                                await rows.nth(i).locator("button").first().click();
                                break;
                        }
                }
                const orderIDDetails = await page.locator(".col-text").textContent();
                expect(orderID.includes(orderIDDetails)).toBeTruthy
                
        
});