import { TableDefinition, Given, When, Then } from "cucumber";
import { patientspage } from "../pages/patientspage";
import { expect, assert } from "chai";
import { async, when } from "q";
import { browser } from "protractor";
import { config } from "../protractor.conf";

let patientpage = new patientspage();


Given(/^Set to patients page$/, async () => {
  await patientpage.navigate_PatientsPage();
});
When(/^Add patient details with$/, async (dataTable) => {

  await patientpage.addnewpatient();
  let tableRows = dataTable.hashes();
  let header = dataTable.raw();
  for (let i = 0; i < tableRows.length; i++) {
    for (let j = 0; j <= i; j++) {
    //  if (tableRows[i]['tenant'] === config.params.env.tenant) {
      for (let k = 0; k <header[0].length; k++) {     
       await patientpage.enterpatientdetails(header[0][k],tableRows[i][header[0][k]]);       
      }      
    }  
  }       
      await patientpage.patiebntsave();

  });

  Then(/^Verify patient added successmessage$/, async () => {
    await expect("Patient added successfully: true").to.equal("Patient added successfully: "+await patientpage.verifyPatientaddsucessMessage());

  });
