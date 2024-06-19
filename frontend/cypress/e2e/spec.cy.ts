describe('Sistema de gerenciamento de Usuário', () => {
  it('Criar usuário', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a[class="cadastrar"]').click()
    cy.get('input[type="text"]').type('Andre')
    cy.get('input[type="email"]').type('andre@gmail.com')
    cy.get('input[type="password"]').type('123')
    cy.get('button[type="submit"]').click()
    cy.wait(2000)
  })
  it('Logar com o usuário criado', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input[type="email"]').type('andre@gmail.com')
    cy.get('input[type="password"]').type('123')
    cy.get('button[type="submit"]').click()
    cy.wait(2000)
  })
  it('Verificar usuário criado', () => {
    cy.visit('http://localhost:3000/listagem')
    cy.get('ul li:last').should("have.text", "Andre - andre@gmail.comExcluirEditar")
  })
  it('Editar usuário criado', () => {
    cy.visit('http://localhost:3000/listagem')
    cy.get('ul li:last').contains('button', 'Editar').click()
    cy.get('input[type="text"]').clear().type('Fernando')
    cy.get('input[type="email"]').clear().type('fernando@gmail.com')
    cy.get('button[type="submit"]').click()
    cy.get('ul li:last').should("have.text", "Fernando - fernando@gmail.comExcluirEditar")
  })
  it('Excluir usuário criado', () => {
    cy.visit('http://localhost:3000/listagem')
    cy.get('ul li:last').should("have.text", "Fernando - fernando@gmail.comExcluirEditar").contains('button', 'Excluir').click()
  })
})