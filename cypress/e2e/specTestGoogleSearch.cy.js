import GoogleSearchMain from "../page-locators/google-search-main";
import GoogleSearchedDetails from "../page-locators/google-searched-details";
import searchData from "../fixtures/search-data.json";

describe('template spec', () => {
    before(function () {
        cy.visit('/');
    });

    it('check if google search functionality is working as expected', () => {
        cy.isVisible(GoogleSearchMain.searchBox);
        cy.fill(GoogleSearchMain.searchBox, searchData.data);
        cy.clickBtn(GoogleSearchMain.googleSearchButton);

        cy.isHidden(GoogleSearchMain.searchBox);
        cy.isHidden(GoogleSearchMain.googleSearchButton);
        cy.isVisible(GoogleSearchedDetails.searchButton);
        cy.hover(GoogleSearchedDetails.searchButton);

        cy.isVisible(GoogleSearchedDetails.googleLogo);
        cy.hover(GoogleSearchedDetails.googleLogo);
        cy.clickBtn(GoogleSearchedDetails.googleLogo);

        cy.isVisible(GoogleSearchMain.searchBox);
        cy.isEmpty(GoogleSearchMain.searchBox);

    })
})