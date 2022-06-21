/// <reference types="cypress" />

describe('Cenario de Teste:  Testar a página hunt ghosts do app Inaterror', () => {
it('Cenario de Teste: Entrar na página de Hunt Ghosts e receber a mensagem de RUN após ligar a localização', () => {
    cy.visit('https://inaterror2.vercel.app/menu/emf')
    cy.get('.sc-jrsJWt').click()
    cy.get('.sc-crzoAE').should('contain.text','RUN')
  }) 
  

  it('Cenario de Teste: Entrar na página de Hunt Ghosts e ao clicar em PRESS mostrar o alert enviando e o dar ok, printar as coodernadas da minha casa no console', () => {
    cy.visit('https://inaterror2.vercel.app/menu/emf')
    cy.get('.sc-jrsJWt').click()
    cy.on('window:alert', (str) =>{
      expect(str).to.equal('enviando')
    })
    cy.on('window:alert', (str) =>{
      expect(str).to.be.ok
    })
    cy.on('window:alert', (str) =>{
      expect(str).to.equal('Aparição regisdrada com sucesso!')
    })
  })
})