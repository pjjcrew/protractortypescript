
import { element, by, browser, ElementFinder, protractor } from "protractor";
import { CommonUtils } from "./commonutils";
import { Alert } from "selenium-webdriver";
import { tmpdir } from "os";
import { SSL_OP_EPHEMERAL_RSA } from "constants";
import { config } from "../protractor.conf";

let filedetails: Map<string, string> = new Map<string, string>();
let filedetails1: Map<String,String> = new Map<String,String>();
let expect = require('chai').expect;
let EC = protractor.ExpectedConditions; 
export class AppUtils {

   // let apputils = new Utils();
    readjosn (keyvalue: string){
        const fs = require('fs');
            let rawdata = fs.readFileSync("../e2e/testdata/"+config.language+".json"
            );
            let jsonobject = JSON.parse(rawdata);
            let value = jsonobject[keyvalue];
        return value;
      }

      async clickAccordian(accordian){
        await browser.findElement(by.xpath("//a[contains(text(),'"+accordian+"')]")).click();
      }
      async clickHorizantalrecord(record){
       
        await browser.wait(EC.presenceOf(element(by.xpath("//div[contains(@class, 'flex-active ng-star-inserted')][contains(text(),'"+record+"')]"))),10000);
        await browser.executeScript("arguments[0].click()", element(by.xpath("//div[contains(text(),'"+record+"')]")));   
        }

      async dropdownselection(filtertype: String, filterkey: string) {
   
        await element(by.xpath("//*[contains(text(),'"+filtertype+"')]/following::select[1]/option[text()='"+filterkey+"']")).click();
      }

      async clickondetails(Details){
        // await browser.findElement(by.xpath("//a[contains(text(),'"+Details+"')]")).click();
        await browser.executeScript("arguments[0].click()", element(by.xpath("//a[contains(text(),'"+Details+"')]")));
      }
      
      async deleteItinerary(itinerary){
        await browser.findElement(by.xpath("//input[@id='"+itinerary+"ActualDepartTime-1']/following::span[1]")).click();
        
      } 
        async confirmDelete(confirm){
        await browser.findElement(by.css("[id=ok-"+confirm+"-1]")).click();
           
      }
          
      async addNumtobagtag(){
        await browser.findElement(by.xpath("//*[@id='addBagTag']/preceding::input[3]")).sendKeys(CommonUtils.genrateRandomNumber());
           
      }

    async filformdetails(locatortype, elementtext, value){
      let   actionelement =null;
      try{
        let key;  
     
        
        if(locatortype==='id'){
          await browser.wait(EC.presenceOf(element(by.id(elementtext))),10000);        
          actionelement=  element(by.id(elementtext));
        }
        else{     
          await browser.wait(EC.presenceOf(element(by.css('[formcontrolname='+elementtext+']'))),10000);  
          actionelement=element(by.css('[formcontrolname='+elementtext+']'));

        }
        await browser.executeScript("arguments[0].scrollIntoView();",actionelement);

        await   CommonUtils.action(locatortype,actionelement,value,elementtext);      

      }
        catch(e){
        
         actionelement=  element(by.id(elementtext));
         await browser.executeScript("arguments[0].scrollIntoView();",actionelement);
           await   CommonUtils.action("id",actionelement,value,elementtext);      

        }     
     
    }
  
  
    async clickaccoridan(accrodianntext:string){      
        let key= CommonUtils.readjosn(accrodianntext);
       await browser.findElement(by.xpath("//a[contains(text(),'"+key+"')]")).click();        

       }
    
      async clickonfilelink(filelink: string) {
       let key=  CommonUtils.readjosn(filelink)
      await   browser.executeScript("arguments[0].click()", element(by.xpath("//p[contains(text(),'"+key+"')]")));
      }

      async setformdetails(filetype,elementtext:string){      
        
                
        await browser.findElement(by.xpath("//dt[contains(text(),'"+elementtext+"' )]/following::dd[1]")).getText().then(function (text) {
          let actualtext;
          actualtext = text; 
         filedetails.set(filetype+elementtext, text);   
       
        });

      } 
      async setformdetails2(bagnum,filetype,elementtext:string){      
        
          await browser.findElement(by.xpath("//a[contains(text(),'"+elementtext+"')]/following::dt["+bagnum+"][contains(text(),'"+elementtext+"' )]/following::dd[1]")).getText().then(function (text) {
          let actualtext;
          actualtext = text; 
         filedetails.set(filetype+elementtext, text);   
       
        });

      }
      async setformdetails3(bagnum:string,filetype){      
        
        await browser.findElement(by.xpath("//*[contains(text(),'"+bagnum+"')]/following::dt[4]/following::dd[1]")).getText().then(function (text) {
        let actualtext;
        actualtext = text; 
       filedetails.set(filetype, text);   
     
      });

    }
    async setClaimdetails(filetype,elementtext:string){      
        
                
      await browser.findElement(by.xpath("//span[text()='"+elementtext+":']/following::label[1]")).getText().then(function (text) {              
     
       filedetails.set(filetype+elementtext, text);  
                   
      });
  }


      async  clickBaggagelink(id:string){
        await browser.wait(await EC.elementToBeClickable(element(by.css("a[id='"+id+"']"))), 10000);
        await browser.findElement(by.css("a[id='"+id+"']")).click();

      }
      async addbagtagnumbers(bagtagno){
        await browser.findElement(by.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Matched On-hand ID'])["+bagtagno+"]/preceding::input[1]")).sendKeys(CommonUtils.genrateRandomNumber());
      }
        
      async enterbaggedetails(bagtagno,field,value){        
        let actionelement=element(by.xpath("//*[contains(text(),'"+bagtagno+"')]/following::*[@formcontrolname='"+field+"'][1]"));
         await browser.executeScript("arguments[0].scrollIntoView();",actionelement)
        //await browser.actions().mouseMove(actionelement).perform();
        await   CommonUtils.action("xpath",actionelement,value,field);   
      }

      async searchfields(mapkey,searchkey){ 
            
        await browser.findElement(by.xpath("//label[contains(text(),'"+searchkey+"')]/following::*[1]")).clear();
        await browser.findElement(by.xpath("//label[contains(text(),'"+searchkey+"')]/following::*[1]")).sendKeys(filedetails.get(mapkey+searchkey));
        await browser.sleep(5000);


      }

      async adminSalvage(mapkey,searchkey){ 
            
        await browser.findElement(by.xpath("//*[contains(text(),'"+searchkey+"')]/following::input[1]")).clear();
        await browser.findElement(by.xpath("//*[contains(text(),'"+searchkey+"')]/following::input[1]")).sendKeys(filedetails.get(mapkey+searchkey));
        await browser.sleep(5000);


      }
      async verifyfiledetails(mapkey){
        //browser.waitForAngularEnabled
       
        let temp=await browser.findElement(by.xpath("//dt[contains(text(),'"+mapkey+"' )]/following::dd[1]")).getText();       
        return  temp;
        }
        async verifyfiledetailsOHD(mapkey,subcatagory){
          //browser.waitForAngularEnabled
         
          let temp1=await browser.findElement(by.xpath("//*[contains(text(),'"+subcatagory+"')]/following::dt[contains(text(),'"+mapkey+"' )]/following::dd[1]")).getText();       
          return  temp1;
          }  
        async getfiledetails(mapkey){
        let value= await filedetails.get(mapkey)
        return await value;
      }

      async verifyvalidationmessage(validationmessage){
     
     let text=   await browser.element(by.id("serverErrorMessage")).getText();
     return  text;
      }

      async verifySelecteddropdownvalue(dropdowname: string, option: string) {
        let expect = require('chai').expect;
        let actualtext;
        await browser.wait(await EC.elementToBeClickable(element(by.id(dropdowname))), 10000);      
        await browser.executeScript("return $('select[id=" + dropdowname + "] option:selected').text();").then(async function (text) {
          actualtext = text;
          console.log("actualtext" + actualtext);
          expect(actualtext).equal(option);
        });
    
      }

      async getFaultCodeInAdmin(dropdowname: string) {
       let actualtext;      
        await browser.executeScript("return $('ng-select[formcontrolname=" + dropdowname + "]').text();").then(async function (text) {
          actualtext = text;
          filedetails.set("FaultCode",actualtext);
        });       
      
      }
      async getSelectedDropdownvalue(dropdowname: string) {
                 let  actualtext ;
                 let gettext;
        await browser.executeScript("return $('select[formcontrolname=" + dropdowname + "] option:selected').text();").then(async function (text) {
        
          actualtext= text;
           
        });
       
        return actualtext; 
       
      }


     async verifypopupvalidationmessage(validationmessage){
     
      let text=   await browser.element(by.xpath("//*[contains(text(),'"+validationmessage+"')]")).getText();
      return  text;
       }
       async getfileno(fieldname: string) {
        let expect = require('chai').expect;
        await element(by.xpath("//label[contains(text(),'" + fieldname + "')]/following::input[1]")).getAttribute("value").then(function (text) {
          let actualtext;
          actualtext = text;
          var lastFive = actualtext.substr(actualtext.length - 6);
          filedetails.set(fieldname, lastFive);
          console.log("=====actualtext=====" + actualtext);
        });
      }
      async getohdno(fieldname: string) {

        await browser.findElement(by.xpath("//div[contains(text(),'" + fieldname + "')]/following::a[2]")).getText().then(function (text) {
          let actualtext;
          actualtext = text; 
          filedetails.set("OHD ID", actualtext); 
       
        });

        
      }

      async enterohdBagTagNumber(searchkey: string) {
        await element(by.xpath("//label[contains(text(),'" + searchkey + "')]/following::input[1]")).sendKeys(+'2980'+filedetails.get(searchkey));
      }
      async enterohdid(searchkey: string) {
        await element(by.xpath("//label[contains(text(),'" + searchkey + "')]/following::input[1]")).sendKeys(filedetails.get(searchkey));
      }
   async getcustomerType(customer:string){
     let customertype;
     switch(customer){
       case "WNAdmin":
        customertype="Fullcustomer"
        break;

        case "AAadmin":
        customertype="Fullcustomer"
        break;
        case "B6admin":
        customertype="Fullcustomer"
        break;
        case "F9admin":
        customertype="Fullcustomer"
        break;
        case "NKadmin":
        customertype="Fullcustomer"
        break;
        case "Y4admin":
        customertype="Fullcustomer"
        break;
     }
     return customertype;     

   } 

      }