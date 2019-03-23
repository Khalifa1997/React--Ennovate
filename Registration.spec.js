
describe ('The Signup Test',()=>{

    it ('Should sign up correctly ',()=> {
        cy.visit('http://localhost:3000/');

        cy.get('[data-testid=SignUp]').click();
        cy.wait(500);
        cy.get('input[placeholder="Your Screen Name"]').type('Mohamed');
        cy.wait(500);
        cy.get('input[placeholder="Your UserName"]').type('MyUserName');
        cy.wait(500);
        cy.get('input[placeholder="Your E-Mail"]').type('mohamed@gmail.com');
        cy.wait(500);
        cy.get('input[placeholder="Your password"]').type('password');
        cy.wait(500);
        cy.get('input[placeholder="Re-enter Password"]').type('password');
        cy.wait(500);
        cy.get('.btn').click();
      //  cy.url().should('equal', hhtp)

    });
});