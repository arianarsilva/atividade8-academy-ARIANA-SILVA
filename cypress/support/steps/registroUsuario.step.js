import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";
import RegistroPage from "../pages/registroUsuario.page";


var registroPage = new RegistroPage();

var novoUsuario = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: '1234567'
}

Before({ tags: '@cadastro' }, () => {
    cy.request({
        method: 'POST',
        url: 'https://raromdb-3c39614e42d4.herokuapp.com/api/users',
        body: novoUsuario
    }).as('postUser')
});

Given('que acessei a página inicial', function () {
    cy.visit('/register');
})

When('informar nome, email e senha válidos', function () {
    const nome = faker.person.firstName() + ' Silva';
    const email = faker.internet.email();
    const senha = '1234567';

    registroPage.cadastrar(nome, email, senha, senha);
    cy.wrap(email).as('emailFaker');
    cy.get('@emailFaker').then((email) => cy.log(email));
})

When('confirmar operação', function () {
    cy.intercept({
        method: 'POST',
        url: 'https://raromdb-3c39614e42d4.herokuapp.com/api/users',
    }).as('postUsuario');
    registroPage.clickButtonCadastrar();
})

Then('o usuário será cadastrado', function () {
    cy.contains(registroPage.modalSucesso, 'Cadastro realizado!').should('be.visible');
})

When('informar um email e senha válidos', function () {
    const email = faker.internet.email();
    const senha = '1234567';
    registroPage.typeEmail(email);
    registroPage.typeSenha(senha);
    registroPage.typeConfirmeSenha(senha);
})

Then('o usuário não será cadastrado', function () {
    registroPage.clickButtonCadastrar();
    cy.contains(registroPage.spanName, 'Informe o nome').should('be.visible');
})

When('informar um nome e senha válidos', function () {
    registroPage.typeNome('Silva Sauro');
    registroPage.typeSenha('123456');
    registroPage.typeConfirmeSenha('123456');
})

Then('o cadastro não será realizado', function () {
    registroPage.clickButtonCadastrar();
    cy.contains(registroPage.spanEmail, 'Informe o e-mail').should('be.visible');
})

When('informar um nome e email válidos', function () {
    registroPage.typeNome('Fulano de Tal');
    registroPage.typeEmail('fulano@teste.com');
})

Then('o cadastro não será concluído', function () {
    registroPage.clickButtonCadastrar();
    cy.contains(registroPage.spanSenha, 'Informe a senha').should('be.visible');
})

When('informar um novo nome válido', function () {
    const nome = faker.person.fullName();
    registroPage.typeNome(nome);
})

When('informar um email que já está em uso', function () {
    cy.intercept(
        'POST',
        'https://raromdb-3c39614e42d4.herokuapp.com/api/users',
        {
            statusCode: 409,
            body: {
                message: "Email already in use",
            },
        }).as('postUser');
    registroPage.typeEmail(faker.internet.email());
});

When('informar e confirmar senha válida', function () {
    const senha = '1234567'
    registroPage.typeSenha(senha);
    registroPage.typeConfirmeSenha(senha);
})

Then('irei visualizar a mensagem de erro {string}', function (mensagem) {
    cy.get(registroPage.erroMessageEmail).contains(mensagem);
    cy.get(registroPage.buttonOk).should('be.visible');
})

When('criar um novo usuário', function () {
    registroPage.cadastrar(novoUsuario.name, novoUsuario.email, novoUsuario.password, novoUsuario.password);

})

Then('o usuário criado será do tipo Comum', function () {
    cy.get('@postUser').then((response) => {
        expect(response.body.type).be.equal(0)
    })
})