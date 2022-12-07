/// <reference types="cypress" />

class Comprar {
  
    get #menuHome() { 
        return cy.get('.breadcrumb > :nth-child(1) > a') 
    }
    get #menuComprar() { 
        return cy.get('#primary-menu > .menu-item-629 > a') 
    }
    get #btnPagina11() { 
        return cy.get(':nth-child(7) > .page-numbers') 
    }
    get #itemCalça() { 
        return cy.get('.post-3641 > .product-block > .caption > .meta > .infor > .name > a') 
    }
    get #btnSelecTamanhoL() { 
        return cy.get('.button-variable-item-L') 
    }

    get #btnSelecCorPreta() { 
        return cy.get('.button-variable-item-Black') 
    }

    get #btnComprar() { 
        return cy.get('.single_add_to_cart_button') 
    }
    get #msgAdicionadoCarrinho() { 
        return cy.get('.woocommerce-message') 
    }
    get #menuRoupas() { 
        return cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a') 
    }
    get #btnPagina10() { 
        return cy.get(':nth-child(7) > .page-numbers') 
    }
    get #itemShort() { 
        return cy.get('.post-3491 > .product-block > .caption > .meta > .infor > .name > a') 
    }
    get #SelecTamanho33() { 
        return cy.get('.button-variable-item-33') 
    }
    get #SelecCorVerde() { 
        return cy.get('.button-variable-item-Green') 
    }
    get #itemCamiseta() { 
        return cy.get('.post-3674 > .product-block > .caption > .meta > .infor > .name > a') 
    }
    get #selecTamanhoM() { 
        return cy.get('.button-variable-item-M') 
    }
    get #selecCorAmarelo() { 
        return cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item') 
    }
    get #btnVerCarinho() { 
        return cy.get('.woocommerce-message > .button') 
    }
    get #nomeItem01() { 
        return cy.get('tbody > :nth-child(1) > .product-name') 
    }
    get #nomeItem02() { 
        return cy.get('tbody > :nth-child(2) > .product-name') 
    }
    get #nomeItem03() { 
        return cy.get(':nth-child(3) > .product-name') 
    }

      

    adicionarItensCarinho() {

        for (let i = 0; i < 3; i++) {



            if (i == 0) {

                this.#menuHome.click()
                this.#menuComprar.click()
                this.#btnPagina11.click()
                this.#itemCalça.click()
                this.#btnSelecTamanhoL.click()
                this.#btnSelecCorPreta.click()


            } else if (i == 1) {

                this.#btnPagina10.click()
                this.#itemShort.click()
                this.#SelecTamanho33.click()
                this.#SelecCorVerde.click()


            } else if (i == 2) {

                this.#btnPagina10.click()
                this.#itemCamiseta.click()
                this.#selecTamanhoM.click()
                this.#selecCorAmarelo.click()
                this.#btnComprar.should('be.enabled')
                this.#btnComprar.click()
                this.#msgAdicionadoCarrinho.should('contain', 'foi adicionado no seu carrinho')
                this.#btnVerCarinho.click()
                cy.url().should('be.equal', 'http://lojaebac.ebaconline.art.br/carrinho/')
                this.#nomeItem01.should('contain', 'Vulcan Weightlifting Tank - L, Black')
                this.#nomeItem02.should('contain', 'Troy Yoga Short - 33, Green')
                this.#nomeItem03.should('contain', 'Tiberius Gym Tank - M, Yellow')

                break
            }

            this.#btnComprar.should('be.enabled')
            this.#btnComprar.click()
            this.#msgAdicionadoCarrinho.should('contain', 'foi adicionado no seu carrinho')
            this.#menuRoupas.click()


        }


    }



}

module.exports = new Comprar()