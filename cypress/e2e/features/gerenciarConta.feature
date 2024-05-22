# language: pt

Funcionalidade: Gerenciar conta
Como um usuário cadastrado e autenticado
Desejo acessar meu perfil
Para conseguir gerenciar meus dados

Contexto: O usuário deve ter acessado a funcionalidade de registro
Dado que acessei minha conta

# @ignore
Cenário: Deve ser possível visualizar todos os dados relevantes do perfil
  Quando acesso à página de gerenciamento de conta
  Então é possível visualizar todos os dados relevantes do perfil

# @ignore
Cenário: Deve ser possível atualizar somente o nome
  E habilitei a edição do cadastro
  Quando informar novo nome
  E informar e confirmar senha
  E confirmar operação
  Então devo visualizar a mensagem "Informações atualizadas!"

# @ignore
Cenário: Não deve ser possível atualizar conta sem informar e confirmar senha
  E habilitei a edição do cadastro
  Quando informar novo nome
  E confirmar operação
  Então não será possível atualizar cadastro

# @ignore
Cenário: Não deve ser possível atualizar conta sem informar nova senha
  E habilitei a edição do cadastro
  Quando informar novo nome
  E informar nova senha apenas no campo de confirmação
  E confirmar operação
  Então não será possível atualizar cadastro

# @ignore
Cenário: Não deve ser possível atualizar conta sem confirmar nova senha
  E habilitei a edição do cadastro
  Quando informar novo nome
  E informar nova senha
  E confirmar operação
  Então não será possível atualizar cadastro

# @ignore
Cenário: Não deve ser possível deixar o campo nome em branco
  E habilitei a edição do cadastro
  Quando apagar o nome atual
  E informar e confirmar senha
  E confirmar operação
  Então não será possível atualizar cadastro