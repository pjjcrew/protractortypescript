import * as fs from "fs";
import { mkdirp } from "mkdirp";
import * as report from "cucumber-html-reporter";
const Cucumber = require("cucumber");

export class CucumberReportExtension {
  private static jsonDir = process.cwd() + "/reports/json";
  private static htmlDir = process.cwd() + "/reports/html";
  private static jsonFile = CucumberReportExtension.jsonDir + "/cucumber_report.json";

  private static cucumberReporterOptions = {
    theme: "bootstrap",
    jsonFile: CucumberReportExtension.jsonFile,
    output: CucumberReportExtension.htmlDir + "/cucumber_reporter.html",
    reportSuiteAsScenarios: true,
    reportTitle: 'Protractor Test Execution Report'
  };

  public static CreateReportFile(dirName) {
    //Check if the directory exist
    if (!fs.existsSync(dirName)) mkdirp.sync(dirName);
  }

  public static GenerateCucumberReport() {
    report.generate(CucumberReportExtension.cucumberReporterOptions);
  }
}
