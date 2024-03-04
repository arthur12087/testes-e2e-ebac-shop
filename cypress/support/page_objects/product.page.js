class productPage {

    searchProduct(productName){
        cy.get('[placeholder="Enter your search ..."]').type(productName).type('{enter}')
        cy.get('.product_title entry-title').should('have.text',productName)
    }

    addProductToCart(productName,productSize,productColor,quantity) {
        cy.get(`li[data-title=${productSize}]`).click()
        cy.get(`li[data-title=${productColor}]`).click()
        cy.get('input[name="quantity"]').type(quantity)
        cy.get('button[type="submit"]').click()
        cy.contains(productName + ' foi adicionado no seu carrinho.')
    }

}

export default new productPage()