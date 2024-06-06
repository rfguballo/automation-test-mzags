// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "cypress-real-events";
import "cypress-downloadfile/lib/downloadFileCommand";

Cypress.Commands.add('isVisible', selector => {
    cy.get(selector).should('be.visible');
});

Cypress.Commands.add('notVisible', selector => {
    cy.get(selector).should('not.be.visible');
});

Cypress.Commands.add('isHidden', selector => {
    cy.get(selector).should('not.exist');
});

Cypress.Commands.add('isDisabled', selector => {
    cy.get(selector).should('be.disabled');
});

Cypress.Commands.add('notDisabled', selector => {
    cy.get(selector).should('not.be.disabled');
});

Cypress.Commands.add('isEmpty', selector => {
    cy.get(selector).invoke('val').should('be.empty');
});

Cypress.Commands.add('shouldHaveText', (selector, text) => {
    cy.get(selector).should('have.text', text);
});

Cypress.Commands.add('shouldNotHaveText', (selector, text) => {
    cy.get(selector).should('not.have.text', text);
});

Cypress.Commands.add('shouldHaveValue', (selector, text) => {
    cy.get(selector).should('have.value', text);
});

Cypress.Commands.add('fill', (selector, data) => {
    cy.get(selector).type(data);
});

Cypress.Commands.add('hover', selector => {
    cy.get(selector).realHover('mouse');
});

Cypress.Commands.add('clickBtn', selector => {
    cy.get(selector).click();
});


