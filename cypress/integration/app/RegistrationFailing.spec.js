
describe('The Failure Signup Test', () => {

    it('Should have some error msgs ', () => {
        cy.visit('http://localhost:3001/');

        cy.get('[data-testid=SignUp]').click();

        cy.get('input[placeholder="Your Screen Name"]').type('1Mohamed');
        cy.get(':nth-child(2) > .ValidationError').should('have.text', ' The screen name should start with a letter and with no spaces');
        cy.wait(500);

        cy.get('input[placeholder="Your UserName"]').type('MyUserName111111111111');
        cy.get(':nth-child(3) > .ValidationError').should('have.text', ' Maximum length is 15');
        cy.wait(500);

        cy.get('input[placeholder="Your E-Mail"]').type('m');
        cy.get(':nth-child(4) > .ValidationError').should('have.text', ' Please enter a valid email');
        cy.wait(500);

        cy.get('input[placeholder="Your password"]').type('pass');
        cy.get(':nth-child(5) > .ValidationError').should('have.text', ' Password should be between 8 and 25 characters long');
        cy.wait(500);

        cy.get('input[placeholder="Re-enter Password"]').type('password');
        cy.get(':nth-child(6) > .ValidationError').should('have.text', ' Passwords mismatch');
        // cy.get('.btn').click();
        //  cy.url().should('equal', hhtp)

    });
});