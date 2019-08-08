it('landing page has access to root and signs up and logins user', () => {
    cy.visit('http://localhost:3001')

    cy.get('div').should('have.id', 'root')

  
     cy.get('div').should('have.class', 'landingpage') 
    // cy.location('pathname').should('eq', 'http://localhost:3000/auth/login')
}) 