# BDD---TCC---BARKANET
#encoding: UTF-8
#language: pt

Funcionalidade: Criação de um grupo 
-
 - Com um usuário logado no Barkanet
 - Usuário deseja criar um grupo 

Contexto:
 - Dado que o usuário já esteja logado em sua conta

Cenário: Preenchimento dos campos do formulário de criação de grupo
 - E ele preencha todos os campos do formulário 
 - E clique no botão de criar grupo 
 - O grupo será criado e outros usuários poderão solicitar entrada se o grupo for privado ou entrar diretamente se for público 

Cenário: Não preenchimento de um dos campos do formulário 
 - E ele não preencha um dos campos
 - E clique no botão de criar grupo 
 - O usuário receberá uma mensagem na tela de "Preencha todos os campos"


--------------------------------------------------------------------------------------------------------------