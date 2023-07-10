// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => { 
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
 })

 Cypress.Commands.add('addProductsToCart', (productToAdd) => { 
    cy.get('.inventory_item').each(($producto) => {
       let productName = $producto.find('.inventory_item_name').text()
        
        if (productToAdd.includes(productName)) {
          cy.wrap($producto).find('[class$="inventory"]').click()
        }   
      })  
      cy.get('.shopping_cart_badge').should('be.visible').then(($quantity) => {
        let productsNumber = $quantity.text()
        cy.log(`The quantity of products in the cart is: ${productsNumber}`)
      })
 })