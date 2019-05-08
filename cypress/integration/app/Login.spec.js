describe('The Login Test', () => {

    it('Should Login correctly ', () => {

        cy.visit('http://3.19.122.178/');
        cy.wait(2000);
        cy.get(':nth-child(3) > .nav-link').click();
        cy.wait(2000);
        cy.get('#exampleInputEmail1').type('testing@gmail.com');
        cy.wait(2000);
        cy.get('#exampleInputPassword1').type('123456789');
        cy.wait(2000);
        cy.get('.btn').click();
        cy.wait(2000);
        cy.url().should('equal', "http://3.19.122.178/profile/testingteam");
   
    /*it('Should edit correctly', () => {

        cy.get('.referencecolor').click();
        cy.url().should('equal', "http://localhost:3001/editprofile");
        cy.get(':nth-child(1) > .form-control').type('Mohamed');
        cy.get(':nth-child(2) > .form-control').type('Ahmed');
        cy.get(':nth-child(3) > .form-control').type('Welcome to my profile');
        cy.get('.col-sm-20 > .form-control').select('China');
        cy.get('.btn').click();
        cy.visit("http://localhost:3001/profile");

    });
    it('Should Logout Correctly', () => {
        cy.get('.btn-outline-dark').click();
        cy.url().should('equal', "http://localhost:3001/");
    });*/
    });
});