/// <reference types="cypress" />

function login(username, pass){
    cy.visit('https://inaterror2.vercel.app/')
    cy.get(':nth-child(1) > input').click()
    cy.get(':nth-child(1) > input').type(username)
    cy.get('form > :nth-child(2) > input').click()
    cy.get('form > :nth-child(2) > input').type(pass)
    cy.get('button').click()
}
  
function criarConta(username, pass) {
    cy.visit('https://inaterror2.vercel.app/')
    cy.get(':nth-child(1) > input').click()
    cy.get(':nth-child(1) > input').type(username)
    cy.get('form > :nth-child(2) > input').click()
    cy.get('form > :nth-child(2) > input').type(pass)
    cy.get("[type='submit']").click()
}
  
describe('Cenario de Teste:  Testar a página infernal dictionary do app Inaterror', () => {
    it('Cenario de Teste: Entrar na Câmera Sobrenatural e confirmar se a permissão para ligar a câmera foi concedida', () => {
        cy.visit('https://inaterror2.vercel.app/menu/camera', {
            onBeforeLoad(win) {
            cy.stub(win.Notification, 'requestPermission').resolves('granted')
            }
        }); 
    })

    it('Cenario de Teste: Entrar na Câmera Sobrenatural e ao clicar no botão trocar para a página gameover', () => {
        cy.visit('https://inaterror2.vercel.app/menu/camera')
        cy.get('.sc-fKgJPI').click()
        cy.url().should('contain','/gameover')
    })

    it('Cenario de Teste: Entrar na Câmera Sobrenatural e ao clicar no botão dar um alert game over', () => {
        cy.visit('https://inaterror2.vercel.app/menu/camera')
        cy.get('.sc-fKgJPI').click()
        cy.on('window:alert', (str) =>{
            expect(str).to.equal('game over')
        })
    })

    it('Cenario de Teste: Entrar na Câmera Sobrenatural e ao clicar no botão mostrar a mensagem The Ghost Escaped', () => {
        cy.visit('https://inaterror2.vercel.app/menu/camera')
        cy.get('.sc-fKgJPI').click()
        cy.get('h1').should('contain.text','The Ghost Escaped...')
    })
})