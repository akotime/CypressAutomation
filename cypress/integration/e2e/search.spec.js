import { baseUrl, 
         searchingStringAccount,
         searchingStringEmpty,
         searchingStringJakisTekst,
         selectorReturnsElementOfSearch,
         noElementsFoundBySearch,
         resultsNumberForAccountInSearch,
         resultsNumberForEmptyStringInSearch,
         defaultElementsFoundBySearchEmptyString 
        } from "../../../config"
import Navbar from "../../pages-objects/components/Navbar"

describe('Searchbox in Zero Bank tests', () => {
    beforeEach('Go to the Zero Bank website', () => {
        cy.visit(baseUrl)
    })

    it('Validate the number of found searching items', () => {
        Navbar.search(searchingStringAccount)
        cy.get(selectorReturnsElementOfSearch).its('length').should('eq', resultsNumberForAccountInSearch)
    })

    it('Validate message where no results were found for query', () => {
        Navbar.search(searchingStringJakisTekst)
        cy.contains(noElementsFoundBySearch).should('exist')
    })

    it('Validate the number of found searching items for empty query', () => {
        Navbar.search(searchingStringEmpty)
        cy.contains(defaultElementsFoundBySearchEmptyString).should('exist')
        cy.get(selectorReturnsElementOfSearch).its('length').should('eq', resultsNumberForEmptyStringInSearch)
    })
})