export default class GerenciarPage {

    inputNome = 'input[placeholder="Nome"]';
    inputSenha = 'input[placeholder="Senha"]';
    inputConfirma = 'input[placeholder="Confirmar senha"]';

    buttonAlterar = '.account-password-button';
    spanNome = '.input-error';

    typeNome(nome) {
        cy.get(this.inputNome).type(nome);
    }

    typeSenha(senha) {
        cy.get(this.inputSenha).type(senha);
    }

    typeConfirma(senha) {
        cy.get(this.inputConfirma).type(senha);
    }
}