describe('The Retweet/Delete Test', () => {

    it('Should Retweet and delete correctly ', () => {
        cy.visit('http://3.19.122.178/');

        // it logins in to an account
        cy.get(':nth-child(3) > .nav-link').click();
        cy.wait(2000);
        cy.get('#exampleInputEmail1').type('testingtweet2@gmail.com');
        cy.wait(2000);
        cy.get('#exampleInputPassword1').type('123456789');
        cy.wait(2000);
        cy.get('.btn').click();
        cy.wait(2000);
        cy.url().should('equal', "http://3.19.122.178/profile/testingtweet2");

        // it should got to time line and retweet his tweet from the timeline
        cy.visit('http://3.19.122.178/newsfeed');
        cy.wait(5000);
        cy.get('.d-flex > :nth-child(1) > .card > .card-body > :nth-child(4) > .svg-inline--fa').click();
        cy.get('.Toastify__toast').contains('New Nova');

        // go to profile and deletes it
        cy.get(':nth-child(2) > .nav-link > strong').click();
        cy.wait(2000);
        cy.get('[style="float: right;"] > .svg-inline--fa').click();
        cy.get('.Toastify__toast').contains('Nova Deleted');
        cy.get('.profile-stats > :nth-child(1)').should('have.text','0 Novas');

    });

});