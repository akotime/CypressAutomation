/// <reference types="Cypress" />

describe('Rest API Test with Cypress', () => {
    it('API Test - Validate Headers', () => {
        cy.request('https://swapi.dev/api/people').as('people')
        cy.get('@people')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json')
    });

    it('API Test - Validate Response Statu Code', () => {
        cy.request('https://swapi.dev/api/people').as('people')
        cy.get('@people')
            .its('status')
            .should('equal', 200)
    });

    it('API Test - Validate Name Value of person 1', () => { 
        cy.request('https://swapi.dev/api/people/1').as('person')
        cy.get('@person')
            .its('body')
            .should('include', {name: 'Luke Skywalker'})
    });

    it('API Test - Validate Negative Status Code', () => { 
        cy.request({
            method: 'GET',
            url: 'https://swapi.dev/api/people/1000',
            failOnStatusCode: false
        }).as('person')
        cy.get('@person')
            .its('status')
            .should('equal', 404)
    });
    
});
