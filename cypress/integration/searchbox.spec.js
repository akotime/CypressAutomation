describe('Searchbox in Zero Bank tests', () => {
    beforeEach('Go to the Zero Bank website', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Validate the number of found searching items', () => {
        cy.get('#searchTerm').type('account{enter}')
        cy.get('.top_offset ul a').its('length').should('eq', 2)
    })

    it('Validate message where no results were found for query', () => {
        cy.get('#searchTerm').type('jakis tekst{enter}')
        cy.contains('No results were found').should('exist')
    })

    it('Validate the number of found searching items for empty query', () => {
        cy.get('#searchTerm').type('{enter}')
        cy.contains('The following pages were found').should('exist')
        cy.get('.top_offset ul a').its('length').should('eq', 12)
        cy.get('.top_offset ul li a:nth-of-type(1)').should('include.text','Zero - Log in')
    })

})
    