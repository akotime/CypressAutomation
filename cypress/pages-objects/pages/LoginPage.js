import BasePage from "../BasePage"
import Navbar from "../components/Navbar"

export default class LoginPage extends BasePage{
    static login(username, password) {
        cy.login(username, password)
    }

    static clickForgotPasswordLink() {
        cy.contains('Forgot your password ?').click()
    }

    static displayErrorMessage() {
        cy.isVisible('.alert-error')
    }

    static logout() {
        Navbar.clickUsername()
        Navbar.clickLogoutLink()
    }
}