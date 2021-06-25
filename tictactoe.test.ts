import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test('I can add an X to the upper left square', async ()=> {
    let button = await driver.findElement(By.id('cell-0')
    )
    await button.click();
    await driver.sleep(2000);
});

test('I can add a X to the upper right square', async () => { 
    let button = await driver.findElement(By.id('cell-2'))
    await button.click();
    await driver.sleep(2000);
});

test('I can click the lower right square', async () => {
    let button = await driver.findElement(By.id('cell-8'))
    await button.click();
    await driver.sleep(2000)
}
)

test('Check for O', async () => {
    let button = await driver.findElement(By.xpath("//*[contains(text(), 'O')]"))

}) //not sure if actually worked but did not get error