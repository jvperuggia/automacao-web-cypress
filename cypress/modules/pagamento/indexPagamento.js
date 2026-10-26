function verificarTelaDePagamento() {
    cy.get('.active').should('be.visible').and('contain.text', 'Payment')
}

function pagar() {
    cy.xpath('//input[@name="name_on_card"]').type('Victor Bragança')
    cy.xpath('//input[@data-qa="card-number"]').type('1234567891002026')
    cy.xpath('//input[@name="cvc"]').type('106')       
    cy.xpath('//input[@name="expiry_month"]').type('05')
    cy.xpath('//input[@data-qa="expiry-year"]').type('2035')

    cy.get('[data-qa="pay-button"]').click()

}

module.exports = {
    verificarTelaDePagamento,
    pagar
}



