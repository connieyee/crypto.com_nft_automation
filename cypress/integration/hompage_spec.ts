import Page from '../pages/page'
const page = new Page()

describe('HomePage testing', () => {
  // it('HomePage components check', () => {
  //   cy.visit('/')
  //   page.checkPageElem('homepage')
  // })

  it('HomePage redirection check', () => {
    cy.visit('/')
    cy.get(page.getElem('homepage', 'consentAcceptAll'), { timeout: 5000 }).click()
    page.checkPageRedirect('homepage')
  })
})
