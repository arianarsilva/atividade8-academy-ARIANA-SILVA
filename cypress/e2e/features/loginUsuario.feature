# language: pt


Funcionalidade: Login de usuários
    Como uma pessoa cadastrada no sistema
    Desejo acessar minha conta
    Para gerenciar meus dados

Contexto: O usuário deve ter acessado a funcionalidade de registro 
    Dado que acessei a página de login

# @ignore
Cenário: Acesso à conta com sucesso
    Quando informar email cadastrado
    E informar senha cadastrada
    E confirmar a operação
    Então serei direcionado para minha conta

  Cenário: Não deve ser possível acessar conta com email inválido
    Quando informar email inválido
    E informar senha cadastrada
    E confirmar a operação
    Então o login não será efetuado com sucesso

  Cenário: Não deve ser possível acessar conta com senha inválida
    Quando informar email cadastrado
    E informar senha inválida
    E confirmar a operação
    Então o login não será efetuado com sucesso

  Cenário: Não deve ser possível acessar conta com o campo de email em branco
    Quando informar senha cadastrada
    E confirmar a operação
    Então o login não será efetuado com sucesso
  
   Cenário: Não deve ser possível acessar conta com o campo de senha em branco
    Quando informar email cadastrado
    E confirmar a operação
    Então o login não será efetuado com sucesso 
  