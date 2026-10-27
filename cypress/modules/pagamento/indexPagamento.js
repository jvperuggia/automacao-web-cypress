function verificarTelaDePagamento() {
    cy.get('.active').should('be.visible').and('contain.text', 'Payment')
}

function pagar() {
    cy.fixture('dadosCartao').then((dadosCartao) => {
        cy.xpath('//input[@name="name_on_card"]').type(dadosCartao.nome)
        cy.xpath('//input[@data-qa="card-number"]').type(dadosCartao.numero)
        cy.xpath('//input[@name="cvc"]').type(dadosCartao.cvc)
        cy.xpath('//input[@name="expiry_month"]').type(dadosCartao.mes)
        cy.xpath('//input[@data-qa="expiry-year"]').type(dadosCartao.ano)

        cy.get('[data-qa="pay-button"]').click()
        })
    }

module.exports = {
    verificarTelaDePagamento,
    pagar
}



