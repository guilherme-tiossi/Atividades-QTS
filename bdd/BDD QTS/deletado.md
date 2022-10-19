# BDD---TCC---BARKANET
#encoding: UTF-8
#language: pt

Funcionalidade: Mensagem de conta excluida
-
 - Usuário do Barkanet "Fulano" deletou sua conta e foi redirecionada para a página deletado.php tendo agora acesso para uma opção de criar uma nova conta

Contexto:
 - Dado que o "Fulano" tenha acabado de deletar sua conta

Cenário: Conta deletada
 - E aparece a página de deletado
 - Quando ele aciona o botão de Criar Nova Conta
 - Então ele é redirecionado para a pagina Cadastro
