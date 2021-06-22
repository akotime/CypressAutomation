describe('Login/Logout test in Zero Bank', () => {
    beforeEach('Go to the login page and click signing button', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    })

    it('Try to login with valid data', () => {
        cy.get('#login_form').should('be.visible')

        //cy.fixture('user').then(user => {
            
            const username = Cypress.env('USERNAME_ZERO')
            const password = Cypress.env('PASSWORD_ZERO')

            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
            cy.contains('Sign in').click()
        //})
        
        cy.url().should('include','account-summary.html')
        cy.contains('Account Summary').should('be.visible')
    });

    it('Try to login with invalid data', () => {
        cy.fixture('user').then(user => {
            const invalid_usr = user.invalid_usr
            const invalid_psw = user.invalid_psw

            cy.get('#user_login').type(invalid_usr)
            cy.get('#user_password').type(invalid_psw)
            cy.contains('Sign in').click()    
        })

        cy.get('.alert-error')
                .should('be.visible')
                .and('contain', 'Login and/or password are wrong.')
    });
    
    
});
