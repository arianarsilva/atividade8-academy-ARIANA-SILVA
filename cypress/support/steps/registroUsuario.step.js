import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";
import RegistroPage from "../pages/registroUsuario.page";


var registroPage = new RegistroPage();

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

Then('o usuário não será cadastrado', function (){
    registroPage.clickButtonCadastrar();
    cy.contains(registroPage.spanName, 'Informe o nome').should('be.visible');
})

When('informar um nome e senha válidos', function () {
    registroPage.typeNome('Silva Sauro');
    registroPage.typeSenha('123456');
    registroPage.typeConfirmeSenha('123456');

})
Then('o cadastro não será realizado', function (){
    registroPage.clickButtonCadastrar();
    cy.contains(registroPage.spanEmail, 'Informe o e-mail').should('be.visible');
})



// Quando informar um nome e senha válidos
// E confirmar operação
// Então o cadastro não será realizado
