
describe ('The Signup Test',()=>{

    it ('Should sign up correctly ',()=> {
        cy.visit('http://3.19.122.178/');

        
        cy.get('.aclass > .btn').click();
        cy.wait(500);
        cy.get(':nth-child(2) > .form-control').type('testing1923');
        cy.wait(500);
        cy.get(':nth-child(3) > .form-control').type('testing1923');
        cy.wait(500);
        cy.get(':nth-child(4) > .form-control').type('testing1923@gmail.com');
        cy.wait(500);
        cy.get(':nth-child(5) > .form-control').type('123456789');
        cy.wait(500);
        cy.get(':nth-child(6) > .form-control').type('123456789');
        cy.wait(500);
        cy.get('.btn').click();
        cy.wait(4000);

        // it then logs in to check for the user
        
        cy.visit('http://3.19.122.178/');
        cy.wait(2000);
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get('#exampleInputEmail1').type('testing1923@gmail.com');
        cy.wait(200);
        cy.get('#exampleInputPassword1').type('123456789');
        cy.get('.btn').click();
        cy.wait(2000);
        cy.url().should('equal', "http://3.19.122.178/profile/testing1923");

    });
});