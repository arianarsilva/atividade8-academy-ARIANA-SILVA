# language: pt

Funcionalidade: Gerenciar conta
Como um usuário cadastrado e autenticado
Desejo acessar meu perfil
Para conseguir gerenciar meus dados

Contexto: O usuário deve ter acessado a funcionalidade de registro
Dado que acessei minha conta


Cenário: Deve ser possível visualizar todos os dados relevantes do perfil
  Quando acesso à página de gerenciamento de conta
  Então é possível visualizar todos os dados relevantes do perfil


Cenário: Deve ser possível atualizar somente o nome
  Quando habilitar a edição do cadastro
  E informar novo nome
  E informar e confirmar senha
  E confirmar operação
  Então a atualização será realizada com sucesso


Cenário: Não deve ser possível atualizar conta sem informar e confirmar senha
  Quando habilitar a edição do cadastro
  E informar novo nome
  E confirmar operação
  Então será possível visualizar mensagem de erro


Cenário: Não deve ser possível atualizar conta sem informar nova senha
  Quando habilitar a edição do cadastro
  E informar novo nome
  E informar nova senha apenas no campo de confirmação
  E confirmar operação
  Então não será possível atualizar cadastro


Cenário: Não deve ser possível atualizar conta sem confirmar nova senha
  Quando habilitar a edição do cadastro
  E informar novo nome
  E informar nova senha apenas no primeiro campo
  E confirmar operação
  Então não será possível atualizar cadastro sem confirmar senha


Cenário: Não deve ser possível deixar o campo nome em branco
  Quando habilitar a edição do cadastro
  E apagar o nome atual
  E informar e confirmar senha
  E confirmar operação
  Então não será possível atualizar cadastro sem informar um nome