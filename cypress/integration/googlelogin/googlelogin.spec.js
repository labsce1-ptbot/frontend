it('signs up and logins user', () => {
    cy.visit('http://localhost:3001/home')

    cy.get('MuiButtonBase-root MuiButton-root RegularButton-button-19 RegularButton-primary-22 LandingPage-landing_page_btn-6 MuiButton-text').click()

    cy.location('pathname').should('eq', 'http://localhost:3000/auth/login')
})