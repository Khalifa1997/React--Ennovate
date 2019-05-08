describe('The Reply/Delete Test', () => {

    it('Should Reply and delete correctly ', () => {

        // it logins in to an account
        cy.visit('http://3.19.122.178/');

        cy.get(':nth-child(3) > .nav-link').click();
        cy.wait(2000);
        cy.get('#exampleInputEmail1').type('testingtweet2@gmail.com');
        cy.wait(2000);
        cy.get('#exampleInputPassword1').type('123456789');
        cy.wait(2000);
        cy.get('.btn').click();
        cy.wait(2000);
        cy.url().should('equal', "http://3.19.122.178/profile/testingtweet2");

        //// it should got to time line and reply his tweet from the timeline

        cy.visit('http://3.19.122.178/newsfeed');
        cy.wait(5000);
        cy.get('.container-fluid > .card > .card-body > :nth-child(5) > .svg-inline--fa').click();
        cy.wait(5000);
        cy.get('.public-DraftStyleDefault-block').type('I can reply now!');
        cy.get('.modalButton').click();
        cy.get('.Toastify__toast').contains('New Nova');
        cy.wait(5000);
        cy.get('.move-enter-done > .card > .card-body > .card-text').contains('I can reply now!');


        // go to profile and deletes it
        cy.get(':nth-child(2) > .nav-link > strong').click();
        cy.wait(2000);
        cy.get('[style="float: right;"] > .svg-inline--fa').click();
        cy.get('.Toastify__toast').contains('Nova Deleted');
        cy.get('.profile-stats > :nth-child(1)').should('have.text','0 Novas');


});

});