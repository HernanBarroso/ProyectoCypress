class LoginPage{

    webElements = {
        usernameInput: () => cy.get('[data-test="username"]'),
        passwordInput: () => cy.get('[data-test="password"]'),
        loginButton: () => cy.get('[data-test="login-button"]'),
        errorMessage: () => cy.get("[data-test='error']")
    }

    login(username: string, password: string){
        this.webElements.usernameInput().type(username)
        this.webElements.passwordInput().type(password)
        this.webElements.loginButton().click()
    }

    verifyErrorMessageOnLogin() {
        // Agregar el listener para el evento de clic en el botón de login
        this.webElements.loginButton().then(($button) => {
          $button.on("click", () => {
            // Verificar que el mensaje de error se muestra después de hacer clic en el botón de login
            this.webElements.errorMessage().should("be.visible");
          });
        });
      }

}

export default new LoginPage()