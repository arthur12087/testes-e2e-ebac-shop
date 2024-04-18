class checkoutPage {

    preencherCheckout(país,rua,cidade,estado,codPostal) {
        cy.get('#cart > .dropdown-toggle').click()
        cy.get('.checkout').click({multiple: true, force:true})
        cy.get('#billing_first_name').clear().type('Black')
        cy.get('#billing_last_name').clear().type('Cardillac')
        cy.get('#billing_country').select(país, {force: true})
        cy.get('#billing_address_1').clear().type(rua)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#billing_state').select(estado, {force: true})
        cy.get('#billing_postcode').clear().type(codPostal)
        cy.get('#billing_phone').clear().type('11999998888')
        cy.get('#billing_email').clear().type('naliloc680@minhlun.com')
        cy.get('#terms').check()
        cy.get('#place_order').click()

        

    }
}

export default new checkoutPage()