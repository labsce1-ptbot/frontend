describe('Log in Process', () => {
    it('landing page has access to root and button exists', () => {
        cy.visit('http://localhost:3001')

        cy.get('div').should('have.id', 'root')

  
        cy.get('div').should('have.class', 'landingpage') 
    
        cy.get('button').should('have.id', 'sign_up')

    }) 

    it('posts to auth0', () => {
        cy.login().then((resp) => {
            return resp.body
        })
        .then((body) => {
            const {access_token, expires_in, id_token} = body;
            const auth0State = {
                nonce: "",
                state: 'some-random-state'
            }
            const callbackUrl = `/callback#access_token=${access_token}&scope=openid&id_token=${id_token}&expires_in=${expires_in}&token_type=Bearer&state=${auth0State.state}`;
            cy.visit(callbackUrl, {
          onBeforeLoad(win) {
            win.document.cookie = 'com.auth0.auth.some-random-state=' + JSON.stringify(auth0State);
            }
          });
       })
    })
})