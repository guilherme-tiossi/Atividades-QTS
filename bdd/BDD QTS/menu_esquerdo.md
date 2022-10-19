# BDD---TCC---BARKANET
#encoding: UTF-8
#language: pt

Funcionalidade: Publicação de um post
-
 - Com um usuário logado no Barkanet
 - Usuário deseja publicar um post

Contexto:
 - Dado que o usuário já esteja logado em sua conta

Cenário: Preenchimento dos campos de post (título e postagem)
 - E ele preencha ambos os campos de título e de postagem
 - E clique no botão de enviar post
 - O post será publicado em seu nome na página onde ele estiver (se o usuário publicar em uma página de algum grupo, tal post estará nesse grupo, se publicar na timeline apenas de seus amigos, o post ficará visível apenas para seus amigos)

Cenário: Não preenchimento de um dos dois campos (título e postagem)
 - E ele não preencha um dos campos de título ou de postagem
 - E clique no botão de enviar post
 - O usuário receberá uma mensagem na tela de "Preencha ambos os campos"

--------------------------------------------------------------------------------------------------------------