# language: pt

Funcionalidade: Registro de Usuários
    Como uma pessoa qualquer
    Desejo me cadastrar no sistema
    Para conseguir avaliar filmes

Contexto: O usuário deve ter acessado a funcionalidade de registro 
    Dado que acessei a página inicial

@ignore
Cenário: Registro de Usuário com sucesso
    Quando informar nome, email e senha válidos
    E confirmar operação
    Então o usuário será cadastrado

@ignore
Cenário: Não deve ser possível cadastrar usuário sem nome
    Quando informar um email e senha válidos
    E confirmar operação
    Então o usuário não será cadastrado

@ignore
Cenário: Não deve ser possível cadastrar usuário sem e-mail
    Quando informar um nome e senha válidos
    E confirmar operação
    Então o cadastro não será realizado

@ignore
Cenário: Não deve ser possível cadastrar usuário sem senha
    Quando informar um nome e email válidos
    E confirmar operação
    Então o cadastro não será concluído

@ignore
Cenário: Não deve ser possível cadastrar usuário com e-mail existente
    Quando informar um novo nome válido
    E informar um email que já está em uso
    E informar e confirmar senha válida
    E confirmar operação
    Então irei visualizar a mensagem de erro "E-mail já cadastrado. Utilize outro e-mail"


@cadastro
Cenário: O usuário criado deve ser do tipo comum
    Quando criar um novo usuário
    Então o usuário criado será do tipo Comum

# Esquema do Cenário: Não deve ser possível registrar usuário com e-mail inválido
#     Quando informar um nome válido
#     E informar email "<email>"
#     E informar e confirmar senha válida;
#     E confirmar a operação
#     Então irei visualizar o erro de formulário "<mensagem>"
#     Exemplos:
#     | email       | mensagem                              |
#     | umemail     | Não foi possível cadastrar o usuário. |
#     | umemail.com | Não foi possível cadastrar o usuário. |
#     | umemail@com | Não foi possível cadastrar o usuário. |
#     | @           | Não foi possível cadastrar o usuário. |
#     | @.com       | Não foi possível cadastrar o usuário. |
#     | .com        | Não foi possível cadastrar o usuário. |

# Esquema do Cenário: Não deve ser possível cadastrar usuário com senha entre 6 e 12 dígitos
#     Quando informar um nome válido
#     E informar um email válido
#     E informar e confirmar senha "<senha>"
#     E validar operação
#     Então irei visualizar a mensagem "<mensagem>"
#     Exemplos:
#     | senha         | mensagem                               |
#     | 12345         | A senha deve ter pelo menos 6 dígitos. |
#     | 123456        | Cadastro realizado!                    |
#     | 123456789123  | Cadastro realizado!                    |
#     | 1234567891234 | 1234567891234                          |

# Esquema do Cenário: Deve ser possível cadastrar usuário com qualquer caracter
#     Quando informar um nome "<nome>"
#     E informar um email válido
#     E informar e confirmar uma senha válida
#     E confirmar a operação
#     Então o cadastro será realizado com sucesso
#     Exemplos:
#     | nome  |
#     | Rui   |
#     | Ana!  |
#     | @@123 |
#     | "    "|

# Cenário: Não deve ser possível digitar senhas diferentes durante o cadastro
#     Quando informar um nome válido
#     E informar um email válido
#     E informar senha válida
#     E informar senha diferente da digitada anterior
#     E confirmar a operação
#     Então não será possível realizar cadastro