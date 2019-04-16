describe('Should have working buttons ', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/')
    })

    it('Presses on JoinUs and go back ', () => {
        cy.get('[id="GoDown"]').click();
        cy.wait(1000);
        cy.get('[data-testid=JoinUs]').click();
        cy.url().should('equal', 'http://localhost:3001/signup');
        cy.wait(500);
    })

    it('Presses on Login Button and go back', () => {

        cy.get('.nav-item').contains('Login').click();
        cy.url().should('equal', 'http://localhost:3001/login');
        cy.wait(500);
    })
    it('Presses on github Button and go back', () => {

        cy.get('[href="https://github.com/AyahElSamadoni/FrontEnd"]').click();
        cy.wait(500);
        cy.go(-1);
        cy.url().should('equal', 'http://localhost:3001/');
    })
    it('Presses on twitter Button and go back', () => {

        cy.get('[id="1"]').click();
        cy.url().should('equal', 'https://twitter.com/');
        cy.wait(500);
    })
    it('Presses on Nova Button and go back', () => {

        cy.get('[id="Nova"]').click();
        cy.url().should('equal', 'http://localhost:3001/');
    })
    it('Presses on About Button and go back', () => {

        cy.get('[id="AboutButton"]').click();
        cy.url().should('equal', 'https://about.twitter.com/en_us.html');
        cy.wait(500);
    })

})