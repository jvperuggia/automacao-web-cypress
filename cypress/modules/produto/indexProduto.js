

    // Função para preencher o cadastro
    // ESSA FUNÇÃO USA XPATH PARA PREENCHER CAMPOS DE SENHA, NOME, SOBRENOME E COMPANY
    function acessarProdutos() {
//       cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    //   cy.xpath('//a[@href="/products"]').click()
       cy.visit('/products')
    }

    // Função para verificar se Acesso à Produtos foi efetuado com sucesso
    function verificarAcessoAosProdutos() {
        cy.xpath("//h2[text()='All Products']").should('contain.text', 'All Products')
    }

     // Função para verificar se a mensagem de cadastro existente é exibida
    function verificarListaDeProdutos() {
    cy.get('.left-sidebar > :nth-child(1)').should('be.visible')
    }
    // Função para iniciar o cadastro com email já existente
    function clicarNoPrimeiroProduto() {
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
    }
    // Função para verificar os detalhes do produto
    function verificarDetalhesDoProduto() {
        //verificar nome do produto
        cy.get('.product-information > h2').should('be.visible').and('contain', 'Blue Top')
        //verificar categoria do produto
        cy.get('.product-information > p').should('be.visible').and('contain', 'Category: Women > Tops')
        //verificar preço do produto
        cy.get('.product-information > span > span').should('be.visible').and('contain', 'Rs. 500')
        //verificar disponibilidade do produto
        cy.get('.product-information > :nth-child(6)').should('be.visible').and('contain', 'Availability: In Stock')
        //verificar condição do produto
        cy.get('.product-information > :nth-child(7)').should('be.visible').and('contain', 'Condition: New')
        //verificar marca do produto
        cy.get('.product-information > :nth-child(8)').should('be.visible').and('contain', 'Brand: Polo')

    }

     // Função para preencher campo e buscar produto
    // produto = "Colour Blocked Shirt"
    function buscarProduto(produto) {
        cy.get('#search_product').type(produto)
        cy.get('#submit_search').click()
    }

    // Função para verificar se o produto buscado está visível e está correto
    function verificarProdutoBuscado(produto) {
        cy.get('.productinfo > p').should('be.visible').and('contain.text', produto)
    }

    function adicionarProdutoAoCarrinho() {
        cy.get(':nth-child(5) > .btn').click()
    }

    function adicionarProdutoAoCarrinhoSemVisualizar() {
        cy.get('.productinfo > .btn').click()
        cy.get('.productinfo > .btn')
    }

    function verificarProdutoAdicionadoAoCarrinhoContinuarComprando() {
        cy.get('.modal-body > :nth-child(1)').should('be.visible').and('contain.text', 'Your product has been added to cart.')
        cy.get('.modal-footer > .btn').click()
    }


    module.exports = {
        acessarProdutos,
        verificarAcessoAosProdutos,
        verificarListaDeProdutos,
        clicarNoPrimeiroProduto,
        verificarDetalhesDoProduto,
        buscarProduto,
        verificarProdutoBuscado,
        adicionarProdutoAoCarrinho,
        verificarProdutoAdicionadoAoCarrinhoContinuarComprando,
        adicionarProdutoAoCarrinhoSemVisualizar
    }