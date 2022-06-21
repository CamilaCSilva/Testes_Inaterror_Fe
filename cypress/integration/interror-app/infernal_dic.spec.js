/// <reference types="cypress" />
  
describe('Cenario de Teste:  Testar a página infernal dictionary do app Inaterror', () => {
    it('Cenario de Teste: Entrar na página de Infernal Dictionary e confere se as três primeiras aparições têm forças, fraquezas e evidências', () => {
        cy.visit('https://inaterror2.vercel.app/menu/article')
        cy.get('.sc-fnVZcZ > div > :nth-child(4)').should('contain','Unique Strengths:')
        cy.get('div > :nth-child(9)').should('contain','Unique Strengths:')
        cy.get(':nth-child(14)').should('contain','Unique Strengths:')

        cy.get('.sc-fnVZcZ > div > :nth-child(5)').should('contain','Weaknesses:')
        cy.get('div > :nth-child(10)').should('contain','Weaknesses:')
        cy.get(':nth-child(15)').should('contain','Weaknesses:')

        cy.get('div > :nth-child(6)').should('contain','Evidence:')
        cy.get('div > :nth-child(11)').should('contain','Evidence:')
        cy.get(':nth-child(16)').should('contain','Evidence:')
    })
})