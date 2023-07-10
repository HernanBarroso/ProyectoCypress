class CartPage{

    webElements = {
        yourCartText: () => cy.get('.title'),
        continueShoppingButton: () => cy.get('[data-test="continue-shopping"]'),
        checkoutButton: () => cy.get('[data-test="checkout"]')
    }

}

export default new CartPage()