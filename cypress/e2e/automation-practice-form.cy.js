import { HomePage } from "../pageObjects/HomePage";

describe("Selectable scenarios", () => {
	context("Select elements", () => {
		beforeEach(() => {
			HomePage.visit();
		});
		
		it("Automation tasks", () => {
			//Input all the necessary information in the text fields, buttons, etc, where it is not stated otherwise.
			HomePage.nameField.type("Ieva")
			HomePage.surnameField.type("Tests")
			HomePage.emailField.type("ieva@tests.com")
			HomePage.genderRadioBtn.click();
			HomePage.numberField.type("2123456789");
			HomePage.dateOfBirthInput.click();
			//Set the - Date of Birth - with Calendar widget to - 28th of February, 1930.
			HomePage.monthSelect.select("1");
			HomePage.yearSelect.select("1930");
			HomePage.daySelect.contains("28").click();
			//Set Subjects to Economics.
			HomePage.subjectField.type("Economics{enter}");
			//Set Hobbies to Music.
			HomePage.hobbieCheckBox.click();
			//Upload an image of your choice.
			//Create folder “files” and put the image there
			//Might come in handy: https://docs.cypress.io/api/commands/selectfile
			HomePage.pictureUpload.click();
			HomePage.pictureUpload.selectFile("cypress/files/foto.png");
			HomePage.addressField.type("Ventspils, Testa iela 101");
			//Set State to NCR.
			HomePage.stateDropDown.click();
			HomePage.stateSelect.type("NCR{enter}");
			//Set City to Delhi.
			HomePage.cityDropDown.click();
			HomePage.citySelect.type("Delhi{enter}");
			//Click Submit.
			HomePage.submitButton.click();
			//Validate that each Labeled row contains the correct information.
			HomePage.validation.contains("Thanks for submitting the form");
		});
	});
});
