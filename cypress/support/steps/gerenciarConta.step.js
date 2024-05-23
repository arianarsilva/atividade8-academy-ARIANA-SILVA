import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";
import GerenciarPage from "../pages/gerenciarConta.page";
import LoginPage from "../pages/loginUsuario.page";

var gerenciarPage = new GerenciarPage();
var loginPage = new LoginPage();

var user = {
    name: faker.person.firstName(),
    email: faker.internet.email(),
    password: '1234567'
}

before(() => {
    cy.request({
        method: 'POST',
        url: 'https://raromdb-3c39614e42d4.herokuapp.com/api/users',
        body: user
    })
})

Given('que acessei minha conta', function () {
    cy.visit('/account');
    loginPage.typeEmail(user.email);
    loginPage.typeSenha(user.password);
    loginPage.clickbuttonLogin();
    gerenciarPage.clickLinkPerfil();
    gerenciarPage.clickAccountLink();
})

When('acesso à página de gerenciamento de conta', function () {})

Then('é possível visualizar todos os dados relevantes do perfil', function () {
    cy.get(gerenciarPage.inputNome).invoke('val').should('equal', user.name);
    cy.get(gerenciarPage.inputEmail).invoke('val').should('equal', user.email);
    cy.contains('Comum').should('be.visible');
})

When('habilitar a edição do cadastro', function () {
    gerenciarPage.clickButtonAlterar();
})

When('informar novo nome', function () {
    cy.get(gerenciarPage.inputNome).clear();
    gerenciarPage.typeNome('Marilda Silva')
})

When('informar e confirmar senha', function () {
    gerenciarPage.typeSenha(user.password);
    gerenciarPage.typeConfirma(user.password);
})

When('confirmar operação', function () {
    gerenciarPage.clickButtonSalvar();
})

Then('a atualização será realizada com sucesso', function () {
    cy.contains('Informações atualizadas!').should('be.visible');
})

Then('será possível visualizar mensagem de erro', function () {
    cy.contains('Campo obrigatório').should('be.visible');
    cy.contains('As senhas devem ser iguais.').should('be.visible');
})

When('informar nova senha apenas no primeiro campo', function () {
    gerenciarPage.typeSenha('abcdefgh');
})

Then('não será possível atualizar cadastro', function () {
    cy.contains('Campo obrigatório').should('be.visible');
})

When('informar nova senha apenas no campo de confirmação', function () {
    gerenciarPage.typeConfirma('abcdefgh');
})

Then('não será possível atualizar cadastro sem confirmar senha', function () {
    cy.contains('As senhas devem ser iguais.').should('be.visible');
})

When('apagar o nome atual', function () {
    cy.get(gerenciarPage.inputNome).clear();
})

Then('não será possível atualizar cadastro sem informar um nome', function () {
    cy.contains('Informe o nome').should('be.visible');
})