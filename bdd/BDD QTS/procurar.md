# BDD---TCC---BARKANET
#encoding: UTF-8
#language: pt

Funcionalidade: Pesquisa de grupos e usuários
-
 - Com um usuário logado no Barkanet
 - Usuário deseja pesquisar por um usuário ou grupo
 - Para adicionar um novo amigo ou entrar em um grupo

Contexto:
 - Dado que o usuário já esteja logado em sua conta

Cenário: Preenchimento do campo de pesquisa com um código válido de outro usuário
 - E ele preencha corretamente um código válido referente a algum outro usuário que não ele mesmo
 - O resultado da pesquisa mostrará o nome do usuário referido pelo código
 - Quando o usuário logado clicar nesse nome
 - Ele deverá receber a opção de enviar uma solicitação de amizade para esse outro usuário
 - E visualizar uma mensagem de "solicitação pendente" em sua tela

Cenário: Preenchimento do campo de pesquisa com um valor que corresponda parcialmente ou totalmente ao nome de algum grupo
 - E ele preencha parcialmente ou totalmente um valor que seja correspondente a um nome de um grupo
 - O resultado da pesquisa mostrará o nome do(s) grupo(s) correspondente(s)
 - E o usuário ao clicar no grupo poderá, se o grupo for público, se tornar membro deste imediatamente ou, se for privado, enviar uma solicitação para se tornar membro do grupo para o dono do mesmo
 - E visualizar uma mensagem de "solicitação enviada" na tela

Cenário: Preenchimento do campo de pesquisa com valores não correspondentes nem a um grupo nem ao código de um usuário
 - E ele preencha um valor não correspondente nem a um grupo nem a um usuário
 - Ele visualizará a mensagem de "não houveram correspondências a sua pesquisa"

--------------------------------------------------------------------------------------------------------------