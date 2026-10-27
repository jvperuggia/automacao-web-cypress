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

        cy.fixture('dadosPessoais').then((dadosPessoais) => {

            cy.get('#id_gender1').check()
            cy.xpath('//input[@type="password"]').type(dadosPessoais.senha)
            cy.get('[data-qa="days"]').select(dadosPessoais.dia)
            cy.get('[data-qa="months"]').select(dadosPessoais.mes)
            cy.get('[data-qa="years"]').select(dadosPessoais.ano)
            cy.get('#newsletter').check()
            cy.xpath('//input[@data-qa="first_name"]').type(dadosPessoais.nome)
            cy.xpath('//input[@data-qa="last_name"]').type(dadosPessoais.sobrenome)
            cy.xpath('//input[@data-qa="company"]').type(dadosPessoais.empresa)
            cy.get('[data-qa="address"]').type(dadosPessoais.endereco)
            cy.get('[data-qa="country"]').select(dadosPessoais.pais)
            cy.get('[data-qa="state"]').type(dadosPessoais.estado)
            cy.get('[data-qa="city"]').type(dadosPessoais.cidade)
            cy.get('[data-qa="zipcode"]').type(dadosPessoais.cep)
            cy.get('[data-qa="mobile_number"]').type(dadosPessoais.telefone)

            cy.get('[data-qa="create-account"]').click()
        })
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
        
        //tela de cadastro
        cy.visit('/login')
        cy.get('[data-qa="signup-name"]').type('Victor Bragança')
        cy.get('[data-qa="signup-email"]').type(usuario.email)
       //usando xpath para clicar no botão de cadastro
        cy.xpath('//button[@data-qa="signup-button"]').click()


        cy.fixture('dadosPessoais').then((dadosPessoais) => {

            cy.get('#id_gender1').check()
            cy.xpath('//input[@type="password"]').type(dadosPessoais.senha)
            cy.get('[data-qa="days"]').select(dadosPessoais.dia)
            cy.get('[data-qa="months"]').select(dadosPessoais.mes)
            cy.get('[data-qa="years"]').select(dadosPessoais.ano)
            cy.get('#newsletter').check()
            cy.xpath('//input[@data-qa="first_name"]').type(dadosPessoais.nome)
            cy.xpath('//input[@data-qa="last_name"]').type(dadosPessoais.sobrenome)
            cy.xpath('//input[@data-qa="company"]').type(dadosPessoais.empresa)
            cy.get('[data-qa="address"]').type(dadosPessoais.endereco)
            cy.get('[data-qa="country"]').select(dadosPessoais.pais)
            cy.get('[data-qa="state"]').type(dadosPessoais.estado)
            cy.get('[data-qa="city"]').type(dadosPessoais.cidade)
            cy.get('[data-qa="zipcode"]').type(dadosPessoais.cep)
            cy.get('[data-qa="mobile_number"]').type(dadosPessoais.telefone)

            cy.get('[data-qa="create-account"]').click()
        })
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