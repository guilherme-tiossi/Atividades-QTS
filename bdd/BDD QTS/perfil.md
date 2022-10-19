# BDD---TCC---BARKANET
#encoding: UTF-8
#language: pt

Funcionalidade: Edição de informações do usuário 
-
 - Com um usuário logado no Barkanet
 - E com a página de seu perfil aberta
 - Usuário deseja alterar alguma informação pública de seu perfil 

Contexto:
 - Dado que o usuário já esteja logado em sua conta, com a sua página de perfil aberta e tenha clicado nos ícones de edição de informações representados por um lápis 

Cenário: Preenchimento dos campos do formulário de edição 
 - E ele preencha todos os campos do formulário de edição 
 - E clique no botão de salvar edições 
 - As alterações serão feitas na página do usuário para ele como também para seus amigos

Cenário: Não preenchimento de um dos campos do formulário de edição 
 - E ele não preencha um dos campos
 - E clique no botão de salvar edições 
 - O usuário receberá uma mensagem na tela de "Preencha todos os campos"

Cenário: Usuário insere uma Bio maior que X (nao lembro qnts sao) caracteres 
 - E ele insira no campo de biografia um texto maior que X caracteres
 - E clique no botão de salvar alterações 
 - O usuário receberá uma mensagem na tela de "Sua bio deve ter X caracteres no máximo"

--------------------------------------------------------------------------------------------------------------