class checkoutPage {

    preencherCheckout() {
        cy.get('#cart > .dropdown-toggle').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout')
        .click()
        cy.get('#billing_first_name').type('Black')
        cy.get('#billing_last_name').type('Cardillac')
        cy.get('#billing_country').select('Brasil', {force: true})
        cy.get('#billing_address_1').clear().type('Rua das Rosas, 123')
        cy.get('#billing_city').clear().type('Sao Paulo')
        cy.get('#billing_state').select('São Paulo', {force: true})
        cy.get('#billing_postcode').clear().type('05999-999')
        cy.get('#billing_phone').clear().type('11999998888')
        cy.get('#billing_email').clear().type('naliloc680@minhlun.com')
        cy.get('#terms').check()
        cy.get('#place_order').click()

        cy.get('.page-title').should('have.text','Pedido recebido')

    }
}

export default new checkoutPage()