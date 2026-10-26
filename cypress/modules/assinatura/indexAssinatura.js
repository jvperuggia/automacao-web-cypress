function verificarAssinatura() {
    /** Rolar para o final da página */
    cy.scrollTo('bottom')
    /** Verificar texto da Assinatura */
    cy.get('.single-widget > h2').should('be.visible').and('contain', 'Subscription')
}

function preencherAssinatura(email) {
    /** preencher email para assinatura */
    cy.get('#susbscribe_email').type(email)
}

function clicarBotaoAssinatura() {
    /** clicar no botão de assinatura */
    cy.get('#subscribe').click()
}

function verificarMensagemDeAssinatura() {
    /** Verificar mensagem de assinatura */
    cy.get('.alert-success').should('be.visible').and('contain', 'You have been successfully subscribed!')
}

module.exports = {
        verificarAssinatura,
        preencherAssinatura,
        clicarBotaoAssinatura,
        verificarMensagemDeAssinatura
    }