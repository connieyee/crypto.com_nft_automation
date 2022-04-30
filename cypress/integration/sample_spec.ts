import Page from '../../pages/page'
const page = new Page()

describe('My Init', () => {
  it('HomePage check', () => {
    cy.visit('/')
    cy.get(page.getLocator('homepage', 'appContainer'))
  })
})
