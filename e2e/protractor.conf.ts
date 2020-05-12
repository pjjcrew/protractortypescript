
import { Config, browser } from "protractor";

export let config: Config = {

  seleniumAddress: "http://localhost:4444/wd/hub",
  specs: [
    "../e2e/features/Patients.feature",
    // "../e2e/features/BEORN.feature",
    // "../e2e/features/OHD.feature",
    // "../e2e/features/Delayedfile.feature",
    // "../e2e/features/Damagedfile.feature",
    // "../e2e/features/Missingfile.feature",
    // "../e2e/features/Matching.feature",
    // "../e2e/features/LostFound.feature",
   //  "../e2e/features/LFmatching.feature",
    // "../e2e/features/LFupdatepage.feature",
    // "../e2e/features/LFSalvage.feature",

  ],
  ignoreUncaughtExceptions: true,
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  //baseUrl: 'https://app-qa1.nettracer.aero/agent/jetblue/auth/login?bypass=1',  
  baseUrl: 'https://qa-clinicplus.whitecoats.com/#/app/dashboard',
  //directConnect: true,
  ntadmin: "gtaadmin",
  ntpassword: "Nettracer1!",
  Automation: "UIuser",
  autopassword: "Nettracer1!",
  language: "en",
  seleniumArgs: [
    "-Dwebdriver.ie.driver=C:/Users/rishe/AppData/Roaming/npm/node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer3.150.1.exe"],


  multiCapabilities: [

    // {
    // browserName: 'internet explorer',

    //   metadata: {        
    //     device: 'Localhost',
    //     platform: {
    //         name: 'windows',
    //     }
    
    //   }
    //  },

    {
      browserName: 'chrome',
      'shardTestFiles': true,
      'maxInstances': 5,
            chromeOptions: {
           // args: [ '--headless', '--disable-gpu', '--no-sandbox', '--window-size=1920x1080' ]
        //  args: [ '--headless', '--disable-gpu', '--no-sandbox', '--window-size=1366x768' ]
      },
      metadata: {

        device: 'localhost',
        platform: {
          name: 'windows',
          Tenant: 'WN',
          // Version: 'V4.0.20.12'
        }
      }

    },

    //    {
    //     browserName: 'chrome',
    //     'shardTestFiles': true,
    //     'maxInstances': 3,
    //     metadata: {

    //       device: 'localhost',
    //       platform: {
    //           name: 'windows',
    //           Tenant: 'B6',
    //          // Version: 'V4.0.20.12'
    //       }
    //   }

    //  }

  ],
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'NT' },
      { label: 'Release', value: 'v5.2.0_27.2' }
    ]
  },
  cucumberOpts: {
    compiler: "ts:ts-node/register",
    require: ["../e2e/steps/*.js", "../e2e/hooks/*.js"],
    format: 'json:reports/.tmp/results.json',
    strict: true,
   // tags: "@SmokeTest and @Alltenants or  @SmokeTest and @OnlyWN"
    

  },

  params: {
    env: {
      doctorname: 'demodoc2@whitecoats.com',
      password: '10204'
    }
  },
  plugins: [{
    package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
    //package: 'protractor-multiple-cucumber-html-reporter-plugin',
    options: {
      automaticallyGenerateReport: true,
      removeExistingJsonReportFile: true,
      //customMetadata: true,
      metadata: true,
      displayDuration: true,
      customData: {
        title: 'Run info',
        data: [
          { label: 'Project', value: 'NetTracer' },
          { label: 'Release', value: 'v5.2.0_27.4' },
          { label: 'Tenant', value: '' }
        ]
      }


    },

  }],

  onPrepare: function () {
    browser.waitForAngularEnabled(false);
   // browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(2000);


  }
};
