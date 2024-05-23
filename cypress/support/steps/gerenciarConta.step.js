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

//  before(() =>{
//     cy.visit('/account');
//     loginPage.typeEmail(user.email);
//     loginPage.typeSenha(user.password);
//     loginPage.clickbuttonLogin();
//  })

Given('que acessei minha conta', function () {
    cy.visit('/account');
    loginPage.typeEmail(user.email);
    loginPage.typeSenha(user.password);
    loginPage.clickbuttonLogin();

})

When('acesso à página de gerenciamento de conta', function () {
    gerenciarPage.clickLinkPerfil();
    gerenciarPage.clickAccountLink();

})

Then('é possível visualizar todos os dados relevantes do perfil', function () {
    cy.get(gerenciarPage.inputNome).invoke('val').should('equal', user.name);
})

When('habilitar a edição do cadastro', function () {

})

When('informar novo nome', function () {

})

When('informar e confirmar senha', function () {

})

When('confirmar operação', function () {

})

Then('a atualização será realizada com sucesso', function () {

})

Then('será possível visualizar mensagem de erro', function () {

})
When('informar nova senha apenas no primeiro campo', function () {

})

When('informar nova senha apenas no campo de confirmação', function () {

})

Then('não será possível atualizar cadastro', function () {

})

Then('não será possível atualizar cadastro sem confirmar senha', function () {

})

When('apagar o nome atual', function () {

})

Then('não será possível atualizar cadastro sem informar um nome', function () {

})