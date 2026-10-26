/// <reference types="cypress" />

const cadastro = require('../../modules/cadastro/indexCadastro.js')
const login = require('../../modules/login/indexLogin.js')
const produto = require('../../modules/produto/indexProduto.js')
const assinatura = require('../../modules/assinatura/indexAssinatura.js')
const carrinho = require('../../modules/carrinho/indexCarrinho.js')
const pedido = require('../../modules/pedido/indexPedido.js')
const pagamento = require('../../modules/pagamento/indexPagamento.js')

describe('Testes para validação do site "Automation Exercise".', () => {

  it('01 - Cadastrar um novo usuário com sucesso', () => {
    login.acessarTelaDeLogin()

    cadastro.iniciarCadastro()
    cadastro.preencherCadastro()
    /** Verificar Cadastro com sucesso */
    cadastro.verificarSeCadastroFoiEfetuadoComSucesso()
    })

  it('02 - Fazer login de usuário com sucesso', () => {
    login.acessarTelaDeLogin()
    login.preencherLogin(`arrasca@teste.com`, `123456`)
    /** Verificar Login com sucesso */
    login.verificarSeLoginFoiEfetuadoComSucesso()
    })

  it('03 - Fazer login de usuário com email ou senha incorretos', () => {
    login.acessarTelaDeLogin()
    login.preencherLogin(`email_nao_cadastrado@teste.com`, `123456`)
    /** Verificar Login com sucesso */
    login.verificarSeLoginFalhou()
    })

  it('04 - Fazer logout', () => {
    login.acessarTelaDeLogin()
    login.preencherLogin(`arrasca@teste.com`, `123456`)
    login.verificarSeLoginFoiEfetuadoComSucesso()
    /** Efetuar Logout */
    login.efetuarLogout()
    login.verificarSeUsuarioFoiDeslogadoComSucesso()
    })

  it('05 - Tentar cadastrar um usuário com email já existente', () => {
    login.acessarTelaDeLogin()

    cadastro.iniciarCadastroEmailExistente()
    /** Verificar Cadastro com sucesso */
    cadastro.verificarMensagemDeCadastroExistente()
    })  

  it('08 - Acessar tela de Produtos e verificar detalhes de um produto', () => {
    
    login.acessarHome()

    produto.acessarProdutos()
    produto.verificarAcessoAosProdutos()
    produto.verificarListaDeProdutos()
    produto.clicarNoPrimeiroProduto()
    /** Verificar se os detalhes do produto estão visíveis */
    produto.verificarDetalhesDoProduto()   
    })

it('09 - Validar a busca de um produto', () => {
    
    login.acessarHome()

    produto.acessarProdutos()
    produto.verificarAcessoAosProdutos()
    produto.verificarListaDeProdutos()
    /** Buscar produto */
    produto.buscarProduto("Colour Blocked Shirt")
    /** Verificar se o produto buscado está visível */
    produto.verificarProdutoBuscado("Colour Blocked Shirt")
    })
    
it('10 - Verificar a Assinatura no final da página', () => {
    login.acessarHome()
    /* Assinatura */
    assinatura.verificarAssinatura()
    assinatura.preencherAssinatura("nome_test@email.com")
    assinatura.clicarBotaoAssinatura()
    assinatura.verificarMensagemDeAssinatura()
    })

it('15 - Cadastrar usuário e realizar de pedido com sucesso, em seguida realizar a exclusao da conta', () => {
    login.acessarTelaDeLogin()

    cadastro.iniciarCadastro()
    cadastro.preencherCadastro()
    cadastro.verificarSeCadastroFoiEfetuadoComSucesso()
    cadastro.clicarBotaoContinuar()
    login.verificarNomeDeUsuarioLogado()

    // produto 
    produto.acessarProdutos()
    produto.verificarAcessoAosProdutos()
    produto.verificarListaDeProdutos()
    produto.clicarNoPrimeiroProduto()
    produto.verificarDetalhesDoProduto()
    produto.adicionarProdutoAoCarrinho()

    //carrinho
    carrinho.acessarCarrinho()
    carrinho.verificarAcessoAoCarrinho()
    carrinho.verificarProdutoAdicionadoAoCarrinho()
    carrinho.finalizarCompra()

    //pedido
    pedido.verificarEnderecoDeEntrega()
    pedido.preencherComentarioDoPedido()
    pedido.clicarNoBotaoFinalizarPedido()

    //Pagamento
    pagamento.verificarTelaDePagamento()
    //enviar dados de pagamento e submeter
    pagamento.pagar()
    
    //verificar mensagem de pedido finalizado com sucesso
    pedido.verificarMensagemDePedidoFinalizado()

    //Excluir conta
    cadastro.excluirConta()
    //Verifica e Continuar
    cadastro.verificarSeContaFoiExcluidaComSucesso()
    })

it('16 - Realizar login e efetuar pedido com sucesso, em seguida realizar a exclusao da conta', () => {
    const usuario = cadastro.cadastrarUsuarioTeste()
    login.efetuarLogout()

    /*Realizar Login*/
    login.acessarTelaDeLogin()
    login.preencherLogin(usuario.email, usuario.senha)
    login.verificarNomeDeUsuarioLogado()

    // produto 
    produto.acessarProdutos()
    produto.verificarAcessoAosProdutos()
    produto.verificarListaDeProdutos()
    produto.clicarNoPrimeiroProduto()
    produto.verificarDetalhesDoProduto()
    produto.adicionarProdutoAoCarrinho()

    //carrinho
    carrinho.acessarCarrinho()
    carrinho.verificarAcessoAoCarrinho()
    carrinho.verificarProdutoAdicionadoAoCarrinho()
    carrinho.finalizarCompra()

    //pedido
    pedido.verificarEnderecoDeEntrega()
    pedido.preencherComentarioDoPedido()
    pedido.clicarNoBotaoFinalizarPedido()

    //Pagamento
    pagamento.verificarTelaDePagamento()
    //enviar dados de pagamento e submeter
    pagamento.pagar()
    
    //verificar mensagem de pedido finalizado com sucesso
    pedido.verificarMensagemDePedidoFinalizado()

    //Excluir conta
    cadastro.excluirConta()
    //Verifica e clica em Continuar
    cadastro.verificarSeContaFoiExcluidaComSucesso()
    })
 
})