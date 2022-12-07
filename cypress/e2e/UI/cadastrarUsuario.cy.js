/// <reference types="cypress" />

import ContaUsuario from "../../support/pages/ContaUsuario.page"

describe('Funcionalidade: Criar conta', () => {

    beforeEach(() => {

        ContaUsuario.PaginaLogin()

    });

    it('Deve cadastrar conta de usuário válido com sucesso', () => {

        ContaUsuario.CriarConta()

    });


});