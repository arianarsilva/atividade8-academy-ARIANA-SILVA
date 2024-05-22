import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";
import LoginPage from "../pages/loginUsuario.page";

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
});

Given('que acessei a página de login', function () {
    cy.visit('/login');
})

When('informar email cadastrado', function () {
    loginPage.typeEmail(user.email);

})

When('informar senha cadastrada', function () {
    loginPage.typeSenha(user.password);

})

When('confirmar a operação', function () {
    loginPage.clickbuttonLogin();

})

Then('serei direcionado para minha conta', function () {
    cy.contains(loginPage.paginaInicial, 'Perfil').should('be.visible');

})

When('informar email {string} inválido', function (email) {
    loginPage.typeEmail(email)

})

Then('aparecerá a mensagem {string}', function (mensagem) {
    cy.get(loginPage.modalFalha).contains(mensagem);
    cy.get(loginPage.buttonOk).should('be.visible');
});

When('informar senha inválida', function () {
    loginPage.typeSenha(1)

})

Then('o login não será efetuado com sucesso', function () {
    loginPage.clickbuttonLogin();
    cy.contains('Usuário ou senha inválidos.').should('be.visible');

})

When('informar apenas senha cadastrada', function () {
    loginPage.typeSenha(user.password);
})

Then('aparecerá a mensagem de alerta para o campo de email', function () {
    cy.contains('Informe o e-mail').should('be.visible');

})

When('informar apenas email cadastrado', function () {
    loginPage.typeEmail(user.email);
})

Then('aparecerá a mensagem de alerta para o campo de senha', function () {
    cy.contains('Informe a senha').should('be.visible');

})