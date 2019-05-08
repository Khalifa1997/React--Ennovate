describe('The ForgetPassword Test', () => {
    it('Should do forget password ', () => {
        cy.visit('http://3.19.122.178/');
        cy.wait(2000);
        cy.get(':nth-child(3) > .nav-link').click();
        cy.wait(2000);
        cy.get('.loginBox > .Links').click();
        cy.wait(4000);
        cy.get('.form-control').type('jefibjw@gmail.com');// testing a non-exising user (NOT FOUND
        cy.get('.btn').click();
        cy.wait(4000);
        cy.get('.container > :nth-child(2)').should('have.text',' User not found');
        cy.wait(4000);
        // now it should forget password for an existing user
        cy.visit('http://3.19.122.178/forgotpassword');
        cy.get('.form-control').type('testing@gmail.com');
        cy.get('.btn').click();
        cy.wait(4000);
        cy.get('p').should('have.text','Alink to reset your password has been succcessfully sent to your email');
    });
});