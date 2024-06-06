import DateOfBirthMain from "../components/date-of-birth-main";
import DOBLocators from "../components/dob-locators";
import dobData from "../fixtures/dob-unit-data.json"

describe('Test the date of birth functionality', () => {
    beforeEach('Check Age of the Person', () => {
        cy.mount(<DateOfBirthMain />);
    })

    it('check everything is displayed in ui', () => {
        cy.isVisible(DOBLocators.headerLabel);
        cy.shouldHaveText(DOBLocators.headerLabel, dobData.headerLabel);
        cy.isVisible(DOBLocators.datePicker);
        cy.isVisible(DOBLocators.calculateAgeBtn);
    })

    it('check if user can select date and calculate age will be enabled', () => {
        cy.notDisabled(DOBLocators.datePicker);
        cy.isDisabled(DOBLocators.calculateAgeBtn);
        cy.fill(DOBLocators.datePicker, dobData.firstSelectionDate);
        cy.notDisabled(DOBLocators.calculateAgeBtn);
    })

    it('check if user age will be displayed based on the calculated date of birth', () => {
        cy.fill(DOBLocators.datePicker, dobData.firstSelectionDate);
        cy.shouldHaveValue(DOBLocators.datePicker, dobData.firstSelectionDate);
        cy.clickBtn(DOBLocators.calculateAgeBtn);
        cy.shouldHaveText(DOBLocators.resultTextValue, dobData.firstCalculateAgeResult);
    })

    it('check if age value will change when user update the date of birth', () => {
        cy.fill(DOBLocators.datePicker, dobData.secondSelectionDate);
        cy.shouldHaveValue(DOBLocators.datePicker, dobData.secondSelectionDate);
        cy.clickBtn(DOBLocators.calculateAgeBtn);
        cy.shouldNotHaveText(DOBLocators.resultTextValue, dobData.firstCalculateAgeResult);
        cy.shouldHaveText(DOBLocators.resultTextValue, dobData.secondCalculateAgeResult);
    })
})