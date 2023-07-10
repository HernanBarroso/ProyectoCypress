declare namespace Cypress {
    interface Chainable {
      login(username: string, password: string): void
      addProductsToCart(productToAdd: string[]): Chainable<any>
    }
  }