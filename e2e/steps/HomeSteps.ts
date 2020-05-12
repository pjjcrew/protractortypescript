import { TableDefinition, Given, When, Then } from "cucumber";
import { HomePage } from "../pages/HomePage";
import { expect, assert } from "chai";
import { async, when } from "q";
import { browser } from "protractor";
import { config } from "../protractor.conf";

let homePage = new HomePage();


Given(/^Launch the application$/, async () => {
  await homePage.OpenBrowser();
});

Given(/^Launch shipping portal$/, async () => {
  await homePage.shippingportal();
});
Given(/^Launch update portal$/, async () => {
  await homePage.updateportal();
})
Given(/^Launch the landing portal$/, async ()=>{
  await homePage.landingportal();
})
Given(/^Set to dashboard$/,  async() => {
 await homePage.respectdoctor();

 //await homePage.EnterDataInSearchFromExcel();
  // await homePage.waitforoverLay();
  // await  homePage.checkerrorpopup();
  // await homePage.navigatedodashboard();
  // await homePage.waitforoverLay();
  // await homePage.checkwarningpopup();
  // await homePage.waitforoverLay();

  //=========
  //await filePage.navigationpopup();
  // await homePage.waitforoverLay();
  // await filePage.DBErrorpopup();
 });

 Given(/^Check warning popup$/,  async() => {
  await homePage.waitforoverLay();
  await homePage.checkwarningpopup();
  await homePage.waitforoverLay();
 });


When(/^navigate back to home$/, async () => {
  await homePage.navigateBack();
});

When(/^wait for overlay$/,async()=>{
  await homePage.waitforoverLay();

});

When(  /^Login to the application with '([^\"]*)' and '([^\"]*)'$/,
  async (username, password) => {
    await homePage.logintotheapp(username.toString(), password.toString());
  }
  );
  
  
  When(/^Logout from the application$/,
  async () => {
    await homePage.logouttheApp();
  }
);
 
When(  /^Login to the application with agent '([^\"]*)'$/,
  async (username) => {
    await homePage.logintotheappwithotheruser(username.toString());
  }
);

When(/^Login to the application as tenant '([^\"]*)'$/,async(tenanat)=>{
    
    let url = "https://app-qa1.nettracer.aero/agent/"+tenanat+"/auth/login?bypass=1"
    await browser.get(url);
    await browser.refresh();
    browser.debugger();
    await browser.getCapabilities();
    await browser.manage().getCookies();
    await homePage.logintotheapp("", "");
}

  );

  When(/^Login to the application as current tenant$/,async()=>{
    let url = "https://app-qa1.nettracer.aero/agent/"+config.params.env.client+"/auth/login?bypass=1"
    await browser.get(url);
    await browser.refresh();
    browser.debugger();
    await browser.getCapabilities();
    await browser.manage().getCookies();
    await homePage.logintotheapp("", "");
}

  );  

When(  /^Naviagate to '([^\"]*)' icon on the left page$/,async (iconname) => {
  await homePage.leftpageicons(iconname);
  }
);
When(  /^Naviagate to subcategories of '([^\"]*)' in admin$/,async (categories) => {
  await homePage.subcategories(categories);
  }
);


                    