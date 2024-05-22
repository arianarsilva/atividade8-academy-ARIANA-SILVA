export default class LoginPage {

inputEmail = 'input[placeholder="E-mail"]';
inputSenha = 'input[placeholder="Password"]';

loginButton = '.login-button';

spanEmail = '.input-error';
spanSenha = '.input-error span Informe a senha';

modalFalha = '.modal-body';
buttonOk = '.modal-actions';

typeEmail(email) {
    cy.get(this.inputEmail).type(email);
}

typeSenha(senha) {
    cy.get(this.inputSenha).type(senha);
}

clickbuttonLogin() {
    cy.get(this.loginButton).click();
}

}