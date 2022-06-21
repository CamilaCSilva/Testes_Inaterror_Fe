/// <reference types="cypress" />

describe('Cenario de Teste:  Testar o botão de voltar nas páginas do app Interror', () => {
  it('Cenario de Teste: Entrar na página de Hunt Ghosts e voltar ao menu', () => {
    cy.visit('https://inaterror2.vercel.app/menu')
    cy.get('.hunt').click()
    cy.get('#back').click()
    cy.url().should('contain','/menu')
  })

  it('Cenario de Teste: Entrar na página de Infernal Dictionary e voltar ao menu', () => {
    cy.visit('https://inaterror2.vercel.app/menu')
    cy.get('.sc-ksluID > :nth-child(2)').click()
    cy.get('#back').click()
    cy.url().should('contain','/menu')
  })

  it('Cenario de Teste: Entrar na página de Ghost Sightings e voltar ao menu', () => {
    cy.visit('https://inaterror2.vercel.app/menu')
    cy.get('.sc-ksluID > :nth-child(3)').click()
    cy.get('#back').click()
    cy.url().should('contain','/menu')
  })

  it('Cenario de Teste: Entrar na Câmera Sobrenatural e voltar ao menu', () => {
    cy.visit('https://inaterror2.vercel.app/menu')
    cy.get('.sc-ksluID > :nth-child(4)').click()
    cy.get('#back').click()
    cy.url().should('contain','/menu')
  })

})