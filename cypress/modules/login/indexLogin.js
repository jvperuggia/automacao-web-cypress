    // Função para preencher o login
    function preencherLogin(email, senha) {
        
        
    // realizar login
    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(senha)
    cy.get('[data-qa="login-button"]').click()
    }

    // Função para verificar se o login foi efetuado com sucesso
    function verificarSeLoginFoiEfetuadoComSucesso() {
    cy.get('a > b').should('contain.text', 'Georgian de Arrascaeta')
    }

    // Função para verificar se o login falhou
    function verificarSeLoginFalhou() {
    cy.get('.login-form > form > p').should('contain.text', 'Your email or password is incorrect!')
    }

    // Função para efetuar logout
    function efetuarLogout() {
    cy.get('a[href*=logout]').click()
    }
    
    // Função para verificar se o usuário foi deslogado com sucesso
    function verificarSeUsuarioFoiDeslogadoComSucesso() {
    cy.get('.login-form > h2').should('be.visible').and('contain', 'Login to your account')
    }

    function verificarNomeDeUsuarioLogado() {
    //cy.get('a > b').should('contain.text', 'Victor Bragança')
    cy.xpath('//a[contains(.,"Logged in as") and .//b[text()="Victor Bragança"]]').should('be.visible').and('contain.text', 'Victor Bragança')
    }

    //tela de login
    function acessarTelaDeLogin(){
    cy.visit('https://www.automationexercise.com')    
    cy.get('a[href*=login]').click()
    }

    //acessar a home
    function acessarHome(){
    cy.visit('https://www.automationexercise.com')
    }

    
    module.exports = {
        preencherLogin,
        verificarSeLoginFoiEfetuadoComSucesso,
        verificarSeLoginFalhou,
        efetuarLogout,
        verificarSeUsuarioFoiDeslogadoComSucesso,
        verificarNomeDeUsuarioLogado,
        acessarTelaDeLogin,
        acessarHome
    }