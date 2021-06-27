import { baseUrl, login_username, login_password } from "../../../config";
import Navbar from "../../pages-objects/components/Navbar"
import LoginPage from "../../pages-objects/pages/LoginPage"

describe('Login Failed Test', () => {
    before(function() {
        cy.visit(baseUrl)
        Navbar.clickSignIn()
    })

    it('should try to login with invalid credentials', () => {
        LoginPage.login('invalid username', 'invalid password')
        LoginPage.displayErrorMessage()
    })

})

describe('Login Success Test', () => {
    before(function() {
        cy.visit(baseUrl)
        Navbar.clickSignIn()
    })

    it('should login into application', () => {
        LoginPage.login(login_username, login_password)
        cy.contains('username')
    })

    it('should logout application', () => {
        LoginPage.logout()
        cy.url().should('include', 'index.html')
    })
})