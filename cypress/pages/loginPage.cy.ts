class LoginPage{

    webElements = {
        usernameInput: () => cy.get('[data-test="username"]'),
        passwordInput: () => cy.get('[data-test="password"]'),
        loginButton: () => cy.get('[data-test="login-button"]')  
    }

    login(username: string, password: string){
        this.webElements.usernameInput().type(username)
        this.webElements.passwordInput().type(password)
        this.webElements.loginButton().click()
    }

}

export default new LoginPage()