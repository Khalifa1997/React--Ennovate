describe ('Home page Should have working buttons ',()=>{
    beforeEach( () => {
        cy.visit('http://3.19.122.178/')
    })

    it ('Presses on JoinUs and go back ',()=>{
    cy.get('.tm-next > .text-center > .svg-inline--fa').click();
    cy.wait(1000);
    cy.get('.tm-section-pad-top.text-center > a > .btn').click();
    cy.url().should('equal','http://3.19.122.178/signup');
    cy.wait(500);
    })              

    it('Presses on Login Button and go back',()=>{

        cy.get('.nav-item').contains('Login').click();
        cy.url().should('equal','http://3.19.122.178/login');
        cy.wait(500);
    })
    it('Presses on github Button and go back',()=>{

        cy.get('[href="https://github.com/AyahElSamadoni/FrontEnd"]').click();
        cy.wait(500);
        cy.go(-1);
        cy.url().should('equal','http://3.19.122.178/');
    })
    it('Presses on twitter Button and go back',()=>{

        cy.get(':nth-child(1) > .aclass > .svg-inline--fa').click();
        cy.go(-1);
        cy.url().should('equal','http://3.19.122.178/');
        cy.wait(500);
    })
    it('Presses on Nova Button and go back',()=>{

        cy.get('.NavBarLogoLanding').click();
        cy.url().should('equal','http://3.19.122.178/');
    })
   

})