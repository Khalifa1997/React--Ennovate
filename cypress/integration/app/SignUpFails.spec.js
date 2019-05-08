
describe ('The Failure Signup Test',()=>{

    it ('Should have some error msgs ',()=> {
        cy.visit('http://3.19.122.178/');

        cy.get('.aclass > .btn').click();

        cy.get(':nth-child(2) > .form-control').type('1Mohamed');
        cy.get(':nth-child(2) > .ValidationError').should('have.text',' The screen name should start with a letter and with no spaces');
        cy.wait(500);
        
        cy.get(':nth-child(3) > .form-control').type('MyUserName111111111111');
        cy.get(':nth-child(3) > .ValidationError').should('have.text',' Maximum length is 15');
        cy.wait(500);

        cy.get(':nth-child(4) > .form-control').type('m');
        cy.get(':nth-child(4) > .ValidationError').should('have.text',' Please enter a valid email');
        cy.wait(500);

        cy.get(':nth-child(5) > .form-control').type('pass');
        cy.get(':nth-child(5) > .ValidationError').should('have.text',' Password should be between 8 and 25 characters long');
        cy.wait(500);

        cy.get(':nth-child(6) > .form-control').type('password');
        cy.get(':nth-child(6) > .ValidationError').should('have.text',' Passwords mismatch');

    });
});