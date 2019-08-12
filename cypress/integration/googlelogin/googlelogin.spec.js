const options = {
    method: 'POST',
    url: "https://localhost:3000/auth/callback",

    body: {
        username: ""
    }
}

describe('Log in Process', () => {
    it('landing page has access to root and button exists', () => {
        cy.visit('http://localhost:3001')

        cy.get('div').should('have.id', 'root')

  
        cy.get('div').should('have.class', 'landingpage') 
    
        cy.get('button').should('have.id', 'sign_up')

    }) 

    it('posts to auth0', () => {
        cy.login()
    })
})