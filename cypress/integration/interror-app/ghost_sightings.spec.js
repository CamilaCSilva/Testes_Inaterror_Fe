
/// <reference types="cypress" />

describe('Cenario de Teste:  Testar a página ghost sightings do app Inaterror', () => {
    it('Cenario de Teste: Entrar na página de Ghost Sightings e mostrar as informações nome, localizção, raridade e tipo', () => {
        cy.visit('https://inaterror2.vercel.app/menu/sightings')
        cy.get(':nth-child(185)').should('contain.text','Nome:')
        cy.get(':nth-child(186)').should('contain.text','Localização:')
        cy.get(':nth-child(187)').should('contain.text','Raridade:')
        cy.get(':nth-child(188)').should('contain.text','Tipo:')

        // if(cy.get(':nth-child(143)').should('contain.text','Nome: Chris Lockridge')){
        //   cy.get(':nth-child(145)').should('contain.text','Raridade: rare')
        // }
    })
})