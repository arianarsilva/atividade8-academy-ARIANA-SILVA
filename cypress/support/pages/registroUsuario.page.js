export default class RegistroPage{

    inputNome = 'input[placeholder="Nome"]';
    inputEmail = 'input[placeholder="E-mail"]';
    inputSenha = 'input[placeholder="Senha"]';
    inputConfirmeSenha = 'input[placeholder="Confirmar senha"]';

    buttonCadastrar = '.account-save-button';

    modalSucesso = '.modal-content';
    spanName = '.input-error';
    spanEmail = '.input-error';
    spanSenha = '.input-error';
    erroMessageEmail = '.error-message';
    
    buttonOk = '.modal-actions';

    typeNome(nome) {
        cy.get(this.inputNome).type(nome);
    }

    typeEmail(email) {
        cy.get(this.inputEmail).type(email);
    }

    typeSenha(senha) {
        cy.get(this.inputSenha).type(senha);
    }

    typeConfirmeSenha(senha) {
        cy.get(this.inputConfirmeSenha).type(senha);
    }

    clickButtonCadastrar() {
        cy.get(this.buttonCadastrar).click();
    }

    cadastrar(nome, email, senha, senhaConfirma) {
        cy.get(this.inputNome).type(nome);
        cy.get(this.inputEmail).type(email);
        cy.get(this.inputSenha).type(senha);
        cy.get(this.inputConfirmeSenha).type(senhaConfirma);

    }    

}