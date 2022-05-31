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

describe('Cenario de Teste:  Testar a UI do Inaterror App', () => {
  // =================================LOGIN & CADASTRO==========================================
  it('Cenario de Teste: Fazer o login com dados errados e retornar mensagem de erro', () => {
    login('camila.silva@gmail.com','1234')
    cy.on('window:alert', (str) =>{
      expect(str).to.equal('Login ou senha incorretos!')
    })
  })

  it('Cenario de Teste: Fazer o login com sucesso e retornar mensagem de sucesso', () => {
    login('camila.silva@ges.inatel.br','1234')
    cy.on('window:alert', (str) =>{
      expect(str).to.equal('Login realizado com sucesso!')
    })
  })

  it('Cenario de Teste: Criar uma conta com sucesso e retornar mensagem de sucesso', () => {
    // permite criar a mesma conta duas vezes
    criarConta('camila.silva@ges.inatel.br', '1234')
    cy.on('window:alert', (str) =>{
      expect(str).to.equal('Conta criada com sucesso!')
    })
  })

  // ======================================GO BACK BUTTON===========================================
  it('Cenario de Teste: Entrar na página de Hunt Ghosts e voltar ao menu', () => {
    login('camila.silva@ges.inatel.br','1234')
    cy.get('.hunt').click()
    cy.get('#back').click()
    cy.url().should('contain','/menu')
  })

  it('Cenario de Teste: Entrar na página de Infernal Dictionary e voltar ao menu', () => {
    login('camila.silva@ges.inatel.br','1234')
    cy.get('.sc-ksluID > :nth-child(2)').click()
    cy.get('#back').click()
    cy.url().should('contain','/menu')
  })

  it('Cenario de Teste: Entrar na página de Ghost Sightings e voltar ao menu', () => {
    login('camila.silva@ges.inatel.br','1234')
    cy.get('.sc-ksluID > :nth-child(3)').click()
    cy.get('#back').click()
    cy.url().should('contain','/menu')
  })

  it('Cenario de Teste: Entrar na Câmera Sobrenatural e voltar ao menu', () => {
    login('camila.silva@ges.inatel.br','1234')
    cy.get('.sc-ksluID > :nth-child(4)').click()
    cy.get('#back').click()
    cy.url().should('contain','/menu')
  })

  // ===========================================PÁGINAS=======================================
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
    cy.log('-22.2582757 -45.692972')
  })

  it('Cenario de Teste: Entrar na página de Infernal Dictionary e confere se as três primeiras prições têm forças, fraquezas e evidências', () => {
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

  it('Cenario de Teste: Entrar na página de Ghost Sightings e mostrar a minha latitude e longitude às 19:8', () => {
    cy.visit('https://inaterror2.vercel.app/menu/sightings')
    cy.get(':nth-child(642)').should('contain.text','lat: -22.2582493')
    cy.get(':nth-child(643)').should('contain.text','lon: -45.6929185')
    cy.get(':nth-child(644)').should('contain.text','time: 19:8')
  })

  it('Cenario de Teste: Entrar na Câmera Sobrenatural e confirmar se a permissão para ligar a câmera foi concedida', () => {
    cy.visit('https://inaterror2.vercel.app/menu/camera', {
      onBeforeLoad(win) {
        cy.stub(win.Notification, 'requestPermission').resolves('granted')
      }
    }); 
  })
})