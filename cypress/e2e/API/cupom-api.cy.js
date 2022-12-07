/// <reference types="cypress" />

describe('Funcionalidade: Cupons via API', () => {


    it('GET - Deve listar os cupons cadastrados com sucesso', () => {

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


    });
    it('POST - Deve criar um cupom de desconto com sucesso', () => {

        let Cupom = `Cupom ID_${Math.floor(Math.random() * 10000)}`        

        cy.request({
            method: 'POST',
            url: '/wp-json/wc/v3/coupons',
            headers: {
    
                authorization: "Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy"
            },
            body:{
    
                "code": `DojoGanha10${Cupom}`,              //Template String
                "amount": "10",
                "discount_type": "fixed_product",
                "description": "Cupom de desconto de teste_Dojo"
    
    
            }
    
        }).should((response) => {
    
            expect(response.status).to.equal(201)            
            expect(response.body.code).to.have.contain('dojoganha10')
            
    
        })
    });

});