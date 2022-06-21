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

describe('Cenario de Teste:  Testar as páginas de login e cadastro do app Inaterror', () => {
  it('Cenario de Teste: Fazer o login com dados errados e retornar mensagem de erro', () => {
    login('camila.silva@gmail.com','1234')
    cy.on('window:alert', (str) =>{
      expect(str).to.equal('Login ou senha incorretos!')
    })
  })

  it('Cenario de Teste: Criar uma conta com sucesso e retornar mensagem de sucesso', () => {
    // permite criar a mesma conta duas vezes
    criarConta('camila.silva@inatel.br', '1234')
    cy.on('window:alert', (str) =>{
      expect(str).to.equal('Conta criada com sucesso!')
    })
  })

  it('Cenario de Teste: Fazer o login com sucesso e retornar mensagem de sucesso', () => {
    login('camila.silva@inatel.br','1234')
    cy.on('window:alert', (str) =>{
      expect(str).to.equal('Login realizado com sucesso!')
    })
  })
})