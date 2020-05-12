import {
  element,
  browser,
  by,
  WebElement,
  ElementFinder,
  protractor
} from "protractor";
import * as json from "load-json-file";
import { async } from "q";
import { X_OK } from "constants";
import { toASCII } from "punycode";
import { config } from "../protractor.conf";
let EC = protractor.ExpectedConditions;

export class CommonUtils {
  static readjosn(keyvalue: string) {
    const fs = require("fs");
    let rawdata = fs.readFileSync(
      "../e2e/testdata/" + config.language + ".json"
    );
    let jsonobject = JSON.parse(rawdata);
    let value = jsonobject[keyvalue];
    return value;
  }

  async getattribute(fieldname: string) {
    let expect = require("chai").expect;
    await element(
      by.xpath(
        "//label[contains(text(),'" + fieldname + "')]/following::input[1]"
      )
    )
      .getAttribute("value")
      .then(function (text) {
        let actualtext;
        actualtext = text;
      });
  }

  static async action(
    elementtype,
    actionelement: ElementFinder,
    value,
    elementtext
  ) {
    let tagname = await actionelement.getTagName();

    let type = null;
    if (tagname !== "textarea") {
      type = await actionelement.getAttribute("type");
    }

    switch (tagname && type) {
      case "input" && "text": {
        await actionelement.clear();
        switch (value)        
      {
        case "$":
        value = CommonUtils.genrateRandomNumber();
        break;
        case "#":
        value = CommonUtils.randStr();
        break;
        case '%':
          value = CommonUtils.genrandstr();
          break;
          case '$date$':
            value = await CommonUtils.getcurrentdate();
            break;
        }   
        await actionelement.clear();      

        await actionelement.sendKeys(value);

        break;
      }
    


      case "textarea" && "text": {
        await actionelement.sendKeys(value);
        break;
      }

      case "textarea" && null: {
        await actionelement.sendKeys(value);

        break;
      }
      case "button" && "button": {
        await actionelement.click();

        break;
      }

      case "input" && "checkbox": {
        await browser
          .element(
            by.xpath(
              "//input[@id='" +
              elementtext +
              "']/following::label[1]"
            )
          )
          .click();
        
        break;
      }

  //   //   case "select" && "select-one": {
  //   //     await browser.wait(EC.visibilityOf(actionelement), 3000);
  //   //     let desiredOption;
  //   //     if (value !== "") {
  //   //       if (elementtype === "id") {
  //   //         await element(
  //   //           by.xpath(
  //   //             "//select[@id='" +
  //   //             elementtext +
  //   //             "']/option[@value='" +
  //   //             value +
  //   //             "']"
  //   //           )
  //   //         ).click();
  //   //       } else {
  //   //         await element(
  //   //           by.xpath(
  //   //             "//select[@formcontrolname='" +
  //   //             elementtext +
  //   //             "']/option[@value='" +
  //   //             value +
  //   //             "']"
  //   //           )
  //   //         ).click();
  //   //       }
  //   //     } else {
  //   //       desiredOption = actionelement.all(by.tagName("option")).get(1);
  //   //       await browser.wait(EC.visibilityOf(desiredOption), 5000);
  //   //       await desiredOption.click();
  //   //     }

  //   //     break;
  //   //   }
  //   // }
  // }

  case "select" && "select-one": {
    let istrue=  await value.includes('%');
    let isoption= await value.includes('option');
    await browser.wait(EC.visibilityOf(actionelement), 3000);
    let desiredOption;
    if (istrue === false && value !=="" && isoption === false) {
      if (elementtype === "id") {
        await element(
          by.xpath(
            "//select[@id='" +
            elementtext +
            "']/option[@value='" +
            value +
            "']"
          )
        ).click();
      } else {
        await element(
          by.xpath(
            "//select[@formcontrolname='" +
            elementtext +
            "']/option[@value='" +
            value +
            "']"
          )
        ).click();
      }
    }

       
   if(istrue===true){
    let re = /\%/gi;
    let result = value.replace('%', '');
    let fresult=result.replace(' ','');
    let option=fresult.trim();
    if (elementtype === "id") {
      await element( by.xpath("//select[@id='"+elementtext+"']/option[contains(text(),' "+option+" ')]")).click();
    }
     else {
       console.log("//select[@formcontrolname='"+elementtext+"']/option[contains(text(),'"+result+"')]")
      await element( by.xpath("//select[@formcontrolname='"+elementtext+"']/option[contains(text(),'"+result+"')]")).click();
        }
   }

     if(value==="") {
      desiredOption = actionelement.all(by.tagName("option")).get(1);
      await browser.wait(EC.visibilityOf(desiredOption), 5000);
      await desiredOption.click();
    }
    if(isoption===true){
      let option = value.replace('option', '');
      desiredOption = actionelement.all(by.tagName("option")).get(option);
      await browser.wait(EC.visibilityOf(desiredOption), 5000);
      await desiredOption.click();
    }

    if(isoption===true){
      let option = value.replace('option', '');
      desiredOption = actionelement.all(by.tagName("option")).get(option);
      await browser.wait(EC.visibilityOf(desiredOption), 5000);
      await desiredOption.click();
    }

    break;
  }
}
}
  async isEnabled(text:string) {
    try{
    await browser.findElement((by.xpath("//div[contains(text(),'"+text+"')]"))).isEnabled();
    return true;
    }
    catch(exception){
      return false;
    }
    }  

    async isdisplayed(expectedVaule3:string) {
      try{
      await browser.findElement(by.xpath("//a[contains(text(),'" +expectedVaule3+ "')]")).isDisplayed();
      return true;
    }
    catch(exception){
      return false;
    }
    }
   
  static genrateRandomNumber() {
    let randomNumber = "";
    let possible = "0123456789";
    for (let i = 0; i < 10; i++) {
      randomNumber += possible.charAt(
        Math.floor(Math.random() * possible.length)
      );
    }
    return randomNumber;
  }
  static randStr(){
  let alphanum = "";
    let chars = "ABC0123";
    for(let i = 0; i < 6; i++) {
      alphanum += chars[Math.floor(Math.random() * chars.length)];
    }
    return alphanum;
  }


static async getcurrentdate(){
 let  now =   await new Date();
   let day =   await ("0" + now.getDate()).slice(-2);
    let month =    await ("0" + (now.getMonth() + 1)).slice(-2);
    let currentdate =   await now.getFullYear() + "-" + (month) + "-" + (day);
    return   await currentdate;
}

  static genrandstr() {
    let randomAlph = "";
    let possible = "AXYVGH";
    for (let i = 0; i < 6; i++) {
      randomAlph += possible.charAt(
        Math.floor(Math.random() * possible.length)
      );
    }
    return randomAlph;
  }
}
