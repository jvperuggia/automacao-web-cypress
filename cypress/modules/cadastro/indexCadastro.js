      // Função para iniciar o cadastro
      // ESSA FUNÇÃO USA XPATH PARA CLICAR NO BOTÃO DE CADASTRO
    function iniciarCadastro() {
        const timestamp = Date.now();

        //const email = `${timestamp}@email.com`
        const email = `${timestamp}@${gerarQuatroLetras()}.com`;

        cy.get('[data-qa="signup-name"]').type('Victor Bragança')
        cy.get('[data-qa="signup-email"]').type(email)
       //usando xpath para clicar no botão de cadastro
        cy.xpath('//button[@data-qa="signup-button"]').click()
    }

    // Função para preencher o cadastro
    // ESSA FUNÇÃO USA XPATH PARA PREENCHER CAMPOS DE SENHA, NOME, SOBRENOME E COMPANY
    function preencherCadastro() {

        cy.get('#id_gender1').check()
       // usando xpath para preencher o campo de senha
        cy.xpath('//input[@type="password"]').type('123456')
        cy.get('[data-qa="days"]').select('13')
        cy.get('[data-qa="months"]').select('May')
        cy.get('[data-qa="years"]').select('1990')
        cy.get('#newsletter').check()
       //usando xpath para preencher o campo nome
        cy.xpath('//input[@data-qa="first_name"]').type('Victor')
       //usando xpath para preencher o campo sobrenome
        cy.xpath('//input[@data-qa="last_name"]').type('Bragança') 
       //usando xpath para preencher o campo Company
        cy.xpath('//input[@data-qa="company"]').type('SOS Micro')
        cy.get('[data-qa="address"]').type('Rua dos Tombamento, 400')
        cy.get('[data-qa="country"]').select('Canada')
        cy.get('[data-qa="state"]').type('Ryo de Janeyrow')
        cy.get('[data-qa="city"]').type('Nicteroy')
        cy.get('[data-qa="zipcode"]').type('30528-000')
        cy.get('[data-qa="mobile_number"]').type('+355 05 99999-9999')

        cy.get('[data-qa="create-account"]').click()
    }

    // Função para verificar se o cadastro foi efetuado com sucesso
    function verificarSeCadastroFoiEfetuadoComSucesso() {
    cy.get('[data-qa="account-created"]').should('be.visible').and('contain', 'Account Created!')
    cy.get('.col-sm-9 > :nth-child(2)').should('contain.text', 'Congratulations! Your new account has been successfully created!')
    }

     // Função para verificar se a mensagem de cadastro existente é exibida
    function verificarMensagemDeCadastroExistente() {
    cy.get('.signup-form > form > p').should('contain.text', 'Email Address already exist!')
    }
    // Função para iniciar o cadastro com email já existente
    function iniciarCadastroEmailExistente() {
        const email = `arrasca@teste.com`
        cy.get('[data-qa="signup-name"]').type('Joao Silva')
        cy.get('[data-qa="signup-email"]').type(email)
        cy.get('[data-qa="signup-button"]').click()
    }

       // Função para gerar quatro letras aleatórias
    function gerarQuatroLetras() {
        const letras = "abcdefghijklmnopqrstuvwxyz";
        let resultado = "";
        for (let i = 0; i < 4; i++) {
            const indice = Math.floor(Math.random() * letras.length);
        resultado += letras[indice];
        }
        return resultado;
    }
    // Função para clicar no botão continuar após o cadastro ser efetuado com sucesso
    function clicarBotaoContinuar() {
        cy.get('[data-qa="continue-button"]').click()
    }

    function excluirConta() {
        cy.get(':nth-child(5) > a').click()
    }

    function verificarSeContaFoiExcluidaComSucesso() {
        cy.get('b').should('be.visible').and('contain', 'Account Deleted!')
        cy.get('.col-sm-9 > :nth-child(2)').should('contain.text', 'Your account has been permanently deleted!')
        //clicar em continuar
        cy.get('[data-qa="continue-button"]').click()
    }

    function cadastrarUsuarioTeste(){
        const timestamp = Date.now();
        const usuario = {
            email: `${timestamp}@${gerarQuatroLetras()}.com`,
            senha: '123456'
        }

        cy.visit('https://www.automationexercise.com')
       //tela de cadastro
        cy.get('a[href*=login]').click()

        cy.get('[data-qa="signup-name"]').type('Victor Bragança')
        cy.get('[data-qa="signup-email"]').type(usuario.email)
       //usando xpath para clicar no botão de cadastro
        cy.xpath('//button[@data-qa="signup-button"]').click()
        



        cy.get('#id_gender1').check()
       // usando xpath para preencher o campo de senha
        cy.xpath('//input[@type="password"]').type(usuario.senha)
        cy.get('[data-qa="days"]').select('13')
        cy.get('[data-qa="months"]').select('May')
        cy.get('[data-qa="years"]').select('1990')
        cy.get('#newsletter').check()
       //usando xpath para preencher o campo nome
        cy.xpath('//input[@data-qa="first_name"]').type('Victor')
       //usando xpath para preencher o campo sobrenome
        cy.xpath('//input[@data-qa="last_name"]').type('Bragança') 
       //usando xpath para preencher o campo Company
        cy.xpath('//input[@data-qa="company"]').type('SOS Micro')
        cy.get('[data-qa="address"]').type('Rua dos Tombamento, 400')
        cy.get('[data-qa="country"]').select('Canada')
        cy.get('[data-qa="state"]').type('Ryo de Janeyrow')
        cy.get('[data-qa="city"]').type('Nicteroy')
        cy.get('[data-qa="zipcode"]').type('30528-000')
        cy.get('[data-qa="mobile_number"]').type('+355 05 99999-9999')
        //criar conta
        cy.get('[data-qa="create-account"]').click()
        //continue
        cy.get('[data-qa="continue-button"]').click()
        //retornar dados de usuário para realização do login
        return usuario
    }

    module.exports = {
        iniciarCadastro,
        preencherCadastro,
        verificarSeCadastroFoiEfetuadoComSucesso,
        verificarMensagemDeCadastroExistente,
        iniciarCadastroEmailExistente,  
        clicarBotaoContinuar,
        excluirConta,
        verificarSeContaFoiExcluidaComSucesso,
        cadastrarUsuarioTeste
    }