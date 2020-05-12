import { browser, element, by, protractor, $$, $ } from "protractor";
import { IdentificationType, BasePage } from "./BasePage";

const Locators = {
leftnav_patientstab: {
        type: IdentificationType[IdentificationType.Xpath],
        value: "//span[contains(text(),'Patients')]"
    },
 addpatientbutton: {
        type: IdentificationType[IdentificationType.Css],
        value: "button[id=addNewPatient]"
    },
    patientsavebutton: {
        type: IdentificationType[IdentificationType.Xpath],
        value: "//input[@placeholder='Age']/following::button[contains(text(),'Save')]"
    },
    patientaddedasuccessmessage: {
        type: IdentificationType[IdentificationType.Xpath],
        value: "//h4[contains(text(),'Patient added successfully')]"
    },

    closesuscesspopup:{
        type:IdentificationType[IdentificationType.Xpath],
        value: "//button[contains(text(),'Close')][@ng-click='$dismiss();']"
    }

    

   


  
  
};
let EC = protractor.ExpectedConditions;
export class patientspage extends BasePage {


    async navigate_PatientsPage(){
        await browser.sleep(10000);
        await browser.wait(EC.elementToBeClickable(this.ElementLocator(Locators.leftnav_patientstab)),10000);
        await this.ElementLocator(Locators.leftnav_patientstab).click();

    }

    async addnewpatient(){
        await browser.sleep(10000);
        await browser.wait(EC.elementToBeClickable(this.ElementLocator(Locators.addpatientbutton)),10000);
        await this.ElementLocator(Locators.addpatientbutton).click();
    

    }
    async patiebntsave(){
        await browser.wait(EC.elementToBeClickable(this.ElementLocator(Locators.patientsavebutton)),10000);
        await this.ElementLocator(Locators.patientsavebutton).click();

    }
    async enterpatientdetails(fieldname,value){
        await browser.findElement(by.css("input[placeholder='"+fieldname+"']")).sendKeys(value);
    }

    async verifyPatientaddsucessMessage(){
        await browser.wait(EC.elementToBeClickable(this.ElementLocator(Locators.patientaddedasuccessmessage)),10000);
        await this.ElementLocator(Locators.patientaddedasuccessmessage).isDisplayed();
        await this.ElementLocator(Locators.closesuscesspopup).click(); 
        return true;
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

}


