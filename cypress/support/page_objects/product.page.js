class productPage {

    searchProduct(productName){
        cy.get('input[placeholder="Enter your search ..."]').click({multiple: true, force:true}).eq(1).type(productName).type('{enter}')
        cy.get('.product_title').should('have.text',productName)
    }

    addProductToCart(productName,productSize,productColor,quantity) {
        cy.get(`li[data-title=${productSize}]`).click()
        cy.get(`li[data-title=${productColor}]`).click()
        cy.get('input[name="quantity"]').clear().type(quantity)
        cy.get('.single_add_to_cart_button').click({multiple: true, force: true})
        cy.get('.woocommerce-message').should('be.visible')
    }

}

export default new productPage()