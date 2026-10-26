function acessarCarrinho() {
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
}

function verificarAcessoAoCarrinho() {
    cy.get('.active').should('be.visible').and('contain.text', 'Shopping Cart')
}

function verificarProdutoAdicionadoAoCarrinho() {
    cy.get('.cart_description > h4 > a').should('be.visible').and('contain.text', 'Blue Top')
}

function finalizarCompra() {
    cy.get('.col-sm-6 > .btn').click()
}

module.exports = {
    acessarCarrinho,
    verificarAcessoAoCarrinho,
    verificarProdutoAdicionadoAoCarrinho,
    finalizarCompra
}