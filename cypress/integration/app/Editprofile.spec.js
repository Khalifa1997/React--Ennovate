describe('The Login Test', () => {

    it('Should Login correctly ', () => {

        //it should login
        cy.visit('http://3.19.122.178/');
        cy.wait(1000);
        cy.get(':nth-child(3) > .nav-link').click();
        cy.wait(2000);
        cy.get('#exampleInputEmail1').type('Editme@gmail.com');
        cy.wait(2000);
        cy.get('#exampleInputPassword1').type('123456789');
        cy.wait(2000);
        cy.get('.btn').click();
        cy.wait(2000);
        cy.url().should('equal', "http://3.19.122.178/profile/editme");

        // it should edit profile 
        cy.get('.referencecolor').click();
        cy.wait(2000);
        cy.url().should('equal', "http://3.19.122.178/editprofile");
        cy.get(':nth-child(3) > .form-control').type('Mohamed');
        cy.get(':nth-child(4) > .form-control').type('Ahmed');
        cy.get(':nth-child(5) > .form-control').type('Welcome to my profile');
        cy.get('.col-sm-20 > .form-control').select('China');
        cy.wait(2000);
        cy.get(':nth-child(7) > .btn').click();
        cy.wait(2000);
        cy.url().should('equal', "http://3.19.122.178/profile/Mohamed");

    });
});