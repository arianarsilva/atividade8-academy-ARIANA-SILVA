# language: pt


Funcionalidade: Login de usuários
  Como uma pessoa cadastrada no sistema
  Desejo acessar minha conta
  Para gerenciar meus dados

Contexto: O usuário deve ter acessado a funcionalidade de registro
Dado que acessei a página de login


Cenário: Acesso à conta com sucesso
  Quando informar email cadastrado
  E informar senha cadastrada
  E confirmar a operação
  Então serei direcionado para minha conta


Esquema do Cenário: Não deve ser possível acessar conta com email inválido
  Quando informar email "<email>" inválido 
  E informar senha cadastrada
  E confirmar a operação
  Então aparecerá a mensagem "<mensagem>"
  Exemplos:
    | email       | mensagem                    |
    | umemail     | Usuário ou senha inválidos. |
    | umemail.com | Usuário ou senha inválidos. |
    | umemail@com | Usuário ou senha inválidos. |
    | @           | Usuário ou senha inválidos. |
    | @.com       | Usuário ou senha inválidos. |
    | .com        | Usuário ou senha inválidos. |



Cenário: Não deve ser possível acessar conta com senha inválida
  Quando informar email cadastrado
  E informar senha inválida
  E confirmar a operação
  Então o login não será efetuado com sucesso


Cenário: Não deve ser possível acessar conta com o campo de email em branco
  Quando informar apenas senha cadastrada
  E confirmar a operação
  Então aparecerá a mensagem de alerta para o campo de email


Cenário: Não deve ser possível acessar conta com o campo de senha em branco
  Quando informar apenas email cadastrado
  E confirmar a operação
  Então aparecerá a mensagem de alerta para o campo de senha
