import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "https://demoqa.com/automation-practice-form";
  }
  
  static get nameField() {
    return cy.get("#firstName");
  }
  
  static get surnameField() {
    return cy.get("#lastName");
  }
  
  static get emailField() {
    return cy.get("#userEmail");
  }
  
  static get genderRadioBtn() {
    return cy.get('label[for="gender-radio-2"]');
  }
  
  static get numberField() {
    return cy.get("#userNumber");
  }
  
  static get dateOfBirthInput() {
    return cy.get("#dateOfBirthInput");
  }
  
  static get monthSelect() {
    return cy.get(".react-datepicker__month-select");
  }
  
  static get yearSelect() {
    return cy.get(".react-datepicker__year-select");
  }
  
  static get daySelect() {
    return cy.get(".react-datepicker__day");
  }
  
  static get subjectField() {
    return cy.get("#subjectsInput");
  }
  
  static get hobbieCheckBox() {
    return cy.get('label[for="hobbies-checkbox-3"]');
  }
  
  static get pictureUpload() {
    return cy.get("#uploadPicture");
  }
  
  static get addressField() {
    return cy.get("#currentAddress");
  }
  
  static get stateDropDown() {
    return cy.get("#state");
  }
  
  static get stateSelect() {
    return cy.get("#react-select-3-input");
  }
  
  static get cityDropDown() {
    return cy.get("#city");
  }
  
  static get citySelect() {
    return cy.get("#react-select-4-input");
  }
  
  static get submitButton() {
    return cy.get("#submit");
  }
  
  static get validation() {
    return cy.get("#example-modal-sizes-title-lg");
  }

}
