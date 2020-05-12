import { browser, element, by, protractor, $$, $ } from "protractor";
import { IdentificationType, BasePage } from "./BasePage";
import * as json from "load-json-file";
import { config } from "../protractor.conf";
import { ExcelUtil } from "../utilities/ExcelUtil";

const Locators = {

    UserName: {
    type: IdentificationType[IdentificationType.Css],
    value: "#username"
  },
  userprofile: {
    type: IdentificationType[IdentificationType.Xpath],
    value: "//img[@alt='User-Profile-Image']"
  },
  // userprofile:{
  //   type: IdentificationType[IdentificationType.Css],
  //   value: "//span[@touranchor='username']"
  // },
  logout: {
    type: IdentificationType[IdentificationType.Xpath],
    value: "//li[contains(text(),'Log out')]"
  },
  Password: {
    type: IdentificationType[IdentificationType.Id],
    value: "password"
  },
  AirlinesLogoindashboard: {
    type: IdentificationType[IdentificationType.Xpath],
    value: "img.menu-logo.d-flex.justify-content-start.align-items-center"
  },

  Bagicon: {
    type: IdentificationType[IdentificationType.Css],
    value: "i.feather.icon-menu"
  },
  Login: {
    type: IdentificationType[IdentificationType.Xpath],
    value: "//input[@id='password']/following::button[1]"
  },
  Baggageicon: {
    type: IdentificationType[IdentificationType.Xpath],
   // value: "div.icon-baggage"
   value: "//a[@id='baggage']"
  },
  cliamsIcon: {
    type: IdentificationType[IdentificationType.Css],
    value: "div.icon-claims"
  },
  Messageicon: {
    type: IdentificationType[IdentificationType.Css],
    value: "span.badge.bg-c-red"
  },

  createfile: {
    type: IdentificationType[IdentificationType.Xpath],
    value: "//a[@href='/agent/baggage/file']"
  },
  Skip: {
    type: IdentificationType[IdentificationType.Xpath],
    value: "//button[contains(text(),'Skip')]"
  },
  Dashboard: {
    type: IdentificationType[IdentificationType.Xpath],
    value: "//a[@id='Dashboard']"
  },
  filetasks: {
    type: IdentificationType[IdentificationType.Xpath],
    value: "//p[contains(text(),'File Tasks')]"
  },
  overlayring: {
    type: IdentificationType[IdentificationType.Xpath],
    value: "//div[@class='nettracer-dual-ring']"
  },

  Homebutton: {
    type: IdentificationType[IdentificationType.Id],
    value: "logo"
  },
  Showme: {
    type: IdentificationType[IdentificationType.Xpath],
    value: "//span[contains(text(),'Show Me')]"
  },
  nextBtn: {
    type: IdentificationType[IdentificationType.Xpath],
    value: "//button[contains(text(),'Next')]"
  },
  gotitBtn: {
    type: IdentificationType[IdentificationType.Xpath],
    value: "//button[contains(text(),'Got it')]"
  },

  Dashboardbutton: {
    type: IdentificationType[IdentificationType.Xpath],
    value:
      "//a[contains(text(),'Dashboard')][@href='/agent/american/dashboard/file']"
  },
  closepopup: {
    type: IdentificationType[IdentificationType.Css],
    value: "#hide"
  },
  navigationpopup: {
    type: IdentificationType[IdentificationType.Xpath],
    value: "//div[contains(text(),'There are unsaved changes on this page.')]/following::button[@class='btn btn-primary right search-btn']"
  },
  warningnpopup2: {
    type: IdentificationType[IdentificationType.Xpath],
    value: "//div[contains(text(),'There are unsaved changes on this page.')]/following::button[@class='btn btn-primary right search-btn'][2][contains(text(),'Yes')]"
  },
  
  closeerrorpopup: {
    type: IdentificationType[IdentificationType.Xpath],
    value: "//*[@data-dismiss='alert']"
  },
  fileid: {
    type: IdentificationType[IdentificationType.Xpath],
    value: "//input[@name='OnhandNumber']"
  },
  searchbtn: {
    type: IdentificationType[IdentificationType.Xpath],
    value: "//span[contains(text(),'Search')]"
  },
  logo: {
    type: IdentificationType[IdentificationType.Id],
    value: "logo"
  }
  
};
let EC = protractor.ExpectedConditions;
export class HomePage extends BasePage {
  async OpenBrowser() {
    await browser.get(config.baseUrl);
    await browser.getCapabilities();
    await browser.manage().getCookies();
  }
  async shippingportal() {
    await browser.get(config.params.env.shippingUrl);
    await browser.refresh();
    await browser.getCapabilities();
    await browser.manage().getCookies();
  }
  async updateportal() {
    await browser.get(config.params.env.updateUrl);
    await browser.refresh();
    await browser.getCapabilities();
    await browser.manage().getCookies();
  }
 async landingportal(){
  await browser.get(config.params.env.landingUrl);
  await browser.getCapabilities();
  await browser.manage().getCookies();
 }
  async navigateBack() {
    await browser.navigate().back();
  }
  async checkerrorpopup() {
    try {
      while (await this.ElementLocator(Locators.closeerrorpopup).isDisplayed())
       {
        await this.ElementLocator(Locators.closeerrorpopup).click();
      }
    } catch (exception) {
       console.log(exception);
    }
  }
  async navigatedodashboard() { 
    try{
    
    await this.ElementLocator(Locators.logo).click();
  //  await this.ElementLocator(Locators.createfile).click();
    }
    catch(e){
 console.log(e)
    }
   
  }

  
  async checkwarningpopup() {
    browser.set
    try{
      while(await this.ElementLocator(Locators.warningnpopup2).isDisplayed()){
        await this.ElementLocator(Locators.warningnpopup2).click();
    }}
    catch(e){

    }

    try {
      while(await this.ElementLocator(Locators.navigationpopup).isDisplayed()){
      await this.ElementLocator(Locators.navigationpopup).click();
      }
    } 
    catch (e) {
       console.log(e);
    }
   

  }

  async logintotheapp(username1: string, password1: string) {
    await browser.get(config.baseUrl);
    await this.ElementLocator(Locators.UserName).sendKeys(config.params.env.doctorname);
    await this.ElementLocator(Locators.Password).sendKeys(config.params.env.password);
    await this.ElementLocator(Locators.Login).click();
    await this.ElementLocator(Locators.Login).sendKeys(protractor.Key.ENTER);
    // await browser.wait(
    //   EC.elementToBeClickable(this.ElementLocator(Locators.filetasks)),
    //   100000
    // );
  }
  async logouttheApp() {
    try{
    await browser.wait(EC.elementToBeClickable(this.ElementLocator(Locators.userprofile)),10000);
     await browser.executeScript("arguments[0].click()", this.ElementLocator(Locators.userprofile));
     await browser.executeScript("arguments[0].click()", this.ElementLocator(Locators.logout));
    await browser.wait(EC.invisibilityOf(this.ElementLocator(Locators.logout)),5000);
    }
    catch(exception){ 
    await browser.executeScript("arguments[0].click()", this.ElementLocator(Locators.logout));
     await browser.wait(EC.invisibilityOf(this.ElementLocator(Locators.logout)),5000);
    }
    // await browser.manage().deleteAllCookies();
  }

  async logintotheappwithotheruser(username: string) {
    if (username === "tenantAdmin") {
      await this.ElementLocator(Locators.UserName).sendKeys(config.params.env.tenantAdmin);
    await this.ElementLocator(Locators.Password).sendKeys(config.params.env.password);
    
    } else {
      await this.ElementLocator(Locators.UserName).sendKeys(config.Automation);
      await this.ElementLocator(Locators.Password).sendKeys(
        config.autopassword
      );
    }
    await this.ElementLocator(Locators.Login).click();
    await this.ElementLocator(Locators.Login).sendKeys(protractor.Key.ENTER);
    // await browser.wait(
    //   EC.presenceOf(this.ElementLocator(Locators.filetasks)),
    //   100000
    // );
  }
  async respectdoctor(){
    // await browser.wait(await EC.elementToBeClickable(element(by.xpath("//li[@href='#/app/dashboard']/following::span[5]"))), 10000);
    // await browser.findElement(by.xpath("//li[@href='#/app/dashboard']/following::span[5]")).click(); 
    await browser.sleep(15000);
    await browser.wait(await EC.elementToBeClickable(element(by.xpath("//span[contains(text(),'Patients')]"))), 10000);
    await browser.findElement(by.xpath("//span[contains(text(),'Patients')]")).click();  
    await browser.wait(await EC.elementToBeClickable(element(by.css("button[id=addNewPatient]"))), 10000);
    await browser.sleep(15000);
    await browser.findElement(by.css("button[id=addNewPatient]")).click();  
   await browser.sleep(15000);
    await browser.findElement(by.css("input[placeholder='Name*']")).sendKeys("Kalam");
    await browser.findElement(by.css("input[placeholder='Phone*']")).sendKeys("8886165080");
   // await browser.findElement(by.css("input[placeholder='Email']")).sendKeys("");
    await browser.findElement(by.css("input[placeholder='Age']")).sendKeys("28");
    await (await browser.findElement(by.xpath("//input[@placeholder='Age']/following::button[contains(text(),'Save')]"))).click();
    //await browser.sleep(10000);
    // await browser.findElement(by.css("input[placeholder='']")).sendKeys("1234567890");
    // await browser.findElement(by.css("input[placeholder='']")).sendKeys("1234567890");
    // await browser.findElement(by.css("input[placeholder='']")).sendKeys("1234567890");
    // await browser.findElement(by.css("input[placeholder='']")).sendKeys("1234567890");
    


  }

  async waitforoverLay() {
    await browser.wait(EC.invisibilityOf(this.ElementLocator(Locators.overlayring)),
      500000
    );
  }
  async leftpageicons(name) {
    await browser.wait(await EC.elementToBeClickable(element(by.css("div.icon-"+ name +""))), 10000);
    await browser.findElement(by.css("div.icon-"+ name +"")).click();  
  }
  async subcategories(categories) {
    await browser.wait(await EC.elementToBeClickable(element(by.xpath("//span[text()='"+ categories +"']/following::i[starts-with(@class,'icon-vertChevron')][1]"))), 10000);
    await browser.findElement(by.xpath("//span[text()='"+ categories +"']/following::i[starts-with(@class,'icon-vertChevron')][1]")).click();  
  }

  async EnterDataInSearchFromExcel() {
    let sheet = <any>ExcelUtil.ReadExcelSheet("C:/Users/bulls/Downloads/UdemyCourse-2019Update/UdemyCourse-2019Update/Test/steps/data.xlsx");


   await sheet.then(async (x) => {
    //  this.searchText.sendKeys((<any>x).SearchValue);
    await  console.log((x).SearchValue);
  });
 
    //console.log(sheet.SearchValue);
    
  



}
  

}


