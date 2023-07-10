class ProductPage{

    webElements = {
        productList: () => cy.get('.inventory_item'),
        cartLink: () => cy.get('.shopping_cart_link'),
        menuButton: () => cy.get('#react-burger-menu-btn'),
        logoutLink: () => cy.get('#logout_sidebar_link')
    }

    addProductsToCart(productToAdd: string[]){
       this.webElements.productList().each(($producto) => {
        let productName = $producto.find('.inventory_item_name').text()
         
         if (productToAdd.includes(productName)) {
           cy.wrap($producto).find('[class$="inventory"]').click()
         }   
       })  
       cy.get('.shopping_cart_badge').should('be.visible').then(($quantity) => {
         let productsNumber = $quantity.text()
         cy.log(`The quantity of products in the cart is: ${productsNumber}`)
       })
    }

    clickOnCartLink(){
        this.webElements.cartLink().click()   
    }

    clickOnLogoutLink(){
      this.webElements.menuButton().click()
      this.webElements.logoutLink().click()   
    }

}

export default new ProductPage()