/// <reference types="cypress"/>


import loginPageCy from "../pages/loginPage.cy"
import productPageCy from "../pages/productPage.cy"
import cartPageCy from "../pages/cartPage.cy"


describe('Set of test cases to add products to cart', function() {
 
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl')) 
    cy.fixture('credentials').then((credentials) => {
      loginPageCy.login(credentials.username, credentials.password)

      cy.url().should('include', '/inventory.html')
    }) 
  })

  it('add several products to cart', { tags: 'Smoke'}, function() {
    cy.fixture('products').then((data) => {
      productPageCy.addProductsToCart(data.products) 
    })
  })

  it('Enter the cart page and verify the page is visible', { tags: 'Regression'}, function() {
    productPageCy.clickOnCartLink()

    cartPageCy.webElements.yourCartText().should('be.visible')
    cartPageCy.webElements.continueShoppingButton().should('be.visible')
    cartPageCy.webElements.checkoutButton().should('be.visible')
  })

  it('Sprint - The user is logged out of the page', { tags: 'Sprint'}, function() {
    productPageCy.clickOnLogoutLink()
  })
  
  after(() => {
    cy.window().then((win) => {
      win.close();
    });
  });

})