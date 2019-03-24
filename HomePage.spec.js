describe ('Should have working buttons ',()=>{
    beforeEach( () => {
        cy.visit('http://localhost:3000/')
    })

    it ('Presses on JoinUs and go back ',()=>{
    cy.get('[id="GoDown"]').click();
    cy.wait(1000);
    cy.get('[data-testid=JoinUs]').click();
    cy.url().should('equal','http://localhost:3000/signup');
    cy.wait(500);
    })

    it('Presses on Login Button and go back',()=>{

        cy.get('.nav-item').contains('Login').click();
        cy.url().should('equal','http://localhost:3000/login');
        cy.wait(500);
    })
    it('Presses on github Button and go back',()=>{

        cy.get('[href="https://github.com/AyahElSamadoni/FrontEnd"]').click();
        cy.wait(500);
        cy.go(-1);
        cy.url().should('equal','http://localhost:3000/');
    })
    it('Presses on twitter Button and go back',()=>{

        cy.get('[id="1"]').click();
        cy.url().should('equal','http://localhost:3000/');
        cy.wait(500);
    })
    it('Presses on Nova Button and go back',()=>{

        cy.get('[id="Nova"]').click();
        cy.url().should('equal','http://localhost:3000/');
    })
    it('Presses on templatemo and go back',()=>{

        cy.get('[id="Templatemo"]').click();
        cy.url().should('equal','https://templatemo.com/');
    })
   

})