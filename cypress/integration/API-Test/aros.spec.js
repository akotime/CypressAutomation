describe('Searchbox in bonito.pl book shop', () => {
    beforeEach('Go to the aros.pl book shop', () => {
        cy.fixture('areos').then(areos => {
            const baseURL = areos.baseUrl
            cy.visit(baseURL)
        })
    })

    it('Validate the number of found books (intercept)', () => {

        cy.intercept('GET', '/szukaj/*/*').as('loadFoundBooks')

        cy.fixture('areos').then(areos => {
            const fRowerBooksEnter = areos.findBooksWithRower+'{enter}'
            const resRower = String(areos.resultsForRower)
            
            cy.get('#searchbox').type(fRowerBooksEnter)
            cy.wait('@loadFoundBooks')
            
            cy.contains(resRower)
        })
    })

    it('Validate that the number of founded books is zero (intercept)', () => {

        cy.intercept('GET', '/szukaj/*/*').as('loadFoundBooks')

        cy.fixture('areos').then(areos => {
            const noBooks = areos.noBooksSearchString
            const resNoBooks = String(areos.resultsForNoBooksSearch)

            cy.get('#searchbox').type(noBooks)
            cy.get('input[alt="Szukaj"]').click()

            cy.wait('@loadFoundBooks')

            cy.contains(resNoBooks)
        })
    })

    it('Validate that empty search string returns advanced searching (intercept)', () => {
        
        cy.intercept('GET', '/zaawansowane').as('loadFoundBooks')

        cy.fixture('areos').then(areos => {
            const empty = areos.emptySearchString
            const resEmpty = String(areos.resultforEmptyString)

            cy.get('#searchbox').invoke('val', empty)
            cy.get('input[alt="Szukaj"]').click()

            cy.wait('@loadFoundBooks')

            cy.contains(resEmpty)
        })
    })
})