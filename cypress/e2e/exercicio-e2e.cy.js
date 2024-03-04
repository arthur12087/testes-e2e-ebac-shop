/// <reference types="cypress" />

import productPage from "../support/page_objects/product.page";
import dadosProdutos from "../fixtures/produtos.json"

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    before(() => {
        cy.visit('/my-account')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
        
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //1 selecionar produtos ao carrinho, 2- preencher opções no checkout, 3 -validar compra

        for(let i =0; i<dadosProdutos.length; i++){

        productPage.searchProduct(dadosProdutos[i].nomeproduto1)
        productPage.addProductToCart(dadosProdutos[i].nomeproduto1, dadosProdutos[i].tamanho, dadosProdutos[i].cor, dadosProdutos[i].quantidade)
        }
    });


})
