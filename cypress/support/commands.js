Cypress.Commands.add('AcessarContaUsuario', (email, senha) => {

    cy.get('#username').type(email)
    cy.get('#password').type(senha)
    cy.get('[name="login"]').click()
    cy.get('.page-title').should('have.text', 'Minha conta')  
})

Cypress.Commands.add('ListarCupons', () => {

    cy.request({
        method: 'GET',
        url: '/wp-json/wc/v3/coupons',
        headers: {

            authorization: "Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy"
        }

    }).should((response) => {

        expect(response.status).to.equal(200)            
        expect(response.body[0]).to.have.property('code')

    })

})

Cypress.Commands.add('CriarCupons', () =>{

    let Cupom = `Cupom ID_${Math.floor(Math.random() * 1000000000)}`        

    cy.request({
        method: 'POST',
        url: '/wp-json/wc/v3/coupons',
        headers: {

            authorization: "Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy"
        },
        body:{

            "code": `DojoGanha10${Cupom}`,
            "amount": "10",
            "discount_type": "fixed_product",
            "description": "Cupom de desconto de teste_Dojo"


        }

    }).should((response) => {

        expect(response.status).to.equal(201)            
        expect(response.body.code).to.have.contain('dojoganha10')

    })
})