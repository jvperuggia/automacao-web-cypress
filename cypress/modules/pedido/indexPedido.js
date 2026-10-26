function verificarEnderecoDeEntrega() {
        
        cy.get('#address_delivery > .address_firstname').should('be.visible').and('contain.text', 'Victor Bragança')
        cy.get('#address_delivery > :nth-child(3)').should('be.visible').and('contain.text', 'SOS Micro')
        cy.get('#address_delivery > :nth-child(4)').should('be.visible').and('contain.text', 'Rua dos Tombamento, 400')
        cy.get('#address_delivery > .address_city').should('be.visible').and('contain.text', 'Nicteroy Ryo de Janeyrow')
        cy.get('#address_delivery > .address_country_name').should('be.visible').and('contain.text', 'Canada')
        cy.get('#address_delivery > .address_phone').should('be.visible').and('contain.text', '+355 05 99999-9999')
    }

function preencherComentarioDoPedido() {
    /** Rolar para o final da página */
    cy.scrollTo('bottom')
    /** Preencher campo de comentário do pedido */
    cy.get('.form-control').type('Espero que esse pedido me  renda uma ótima nota!!!')
  //  cy.get(':nth-child(7) > .btn').click()
}

function clicarNoBotaoFinalizarPedido() {
    /** Clicar no botão de finalizar pedido */
    cy.get(':nth-child(7) > .btn').click()
}

function verificarMensagemDePedidoFinalizado() {
    /** Verificar mensagem de pedido finalizado */
    cy.get('.col-sm-9 > p').should('be.visible').and('contain.text', 'Congratulations! Your order has been confirmed!')
}   


module.exports = {
    verificarEnderecoDeEntrega,
    preencherComentarioDoPedido,
    clicarNoBotaoFinalizarPedido,
    verificarMensagemDePedidoFinalizado
}