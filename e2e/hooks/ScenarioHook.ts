const { BeforeAll } = require("cucumber");
import { browser } from "protractor";
//import { config } from "../../protractor.conf";
import { async } from "q";
import { setDefaultTimeout, AfterAll, After, Status } from "cucumber";
import { CucumberReportExtension } from "../utilities/CucumberReportExtension";
import { HomePage } from "../pages/HomePage";
import { config } from "../protractor.conf";
let homePage = new HomePage();



setDefaultTimeout(1000000);

BeforeAll(async () => {
  var jsonDir = process.cwd() + "/reports/json";
  CucumberReportExtension.CreateReportFile(jsonDir);
  console.log("starting the application !");
  await browser.get(config.baseUrl);
  browser.debugger();
  await browser.getCapabilities();
  await browser.manage().getCookies();
 await homePage.logintotheapp("", "");

});

After(async function (Scenario) {
  console.log("Executing After feature !!");
  if (Scenario.result.status == Status.FAILED) {    
  // await  homePage.checkerrorpopup();  
  // await homePage.checkwarningpopup();
  // await filePage.navigationpopup();
  // await filePage.DBErrorpopup();
  }
  if (Scenario.result.status == Status.FAILED) {    
    const screenShot = await browser.takeScreenshot();
    this.attach(new
      Buffer(screenShot, 'base64'), 'image/png');
  }

  if (Scenario.result.status == Status.UNDEFINED) {
    const screenShot = await browser.takeScreenshot();
    this.attach(new
      Buffer(screenShot, 'base64'), 'image/png');
  }
  if (Scenario.result.status == Status.AMBIGUOUS) {
    const screenShot = await browser.takeScreenshot();
    this.attach(new
      Buffer(screenShot, 'base64'), 'image/png');
  }
  if (Scenario.result.status == Status.SKIPPED) {
    const screenShot = await browser.takeScreenshot();
    this.attach(new
      Buffer(screenShot, 'base64'), 'image/png');
  }
});



