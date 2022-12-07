/// <reference types="cypress" />
import Usuario from '../../e2e/factories/cadastroFactory'

let cadastro = Usuario.cadastroUsuario()

class ContaUsuario {
    get #btnMinhaConta() { return cy.get('.icon-user-unfollow') }
    get #cmpEmail() { return cy.get('#reg_email') }
    get #cmpSenha() { return cy.get('#reg_password') }
    get #btnRegistrar() { return cy.get('[name="register"]') }
    get #btnLogout() { return cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a') }

    PaginaLogin() {

        cy.visit('minha-conta')
    }
    CriarConta() {


        this.#cmpEmail.type(cadastro.email)
        this.#cmpSenha.type(cadastro.password)
        this.#btnRegistrar.click()
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').invoke('text').then((UsuarioCriado) => {
            cy.log(UsuarioCriado)
            
        }) 

    }


}

module.exports = new ContaUsuario()