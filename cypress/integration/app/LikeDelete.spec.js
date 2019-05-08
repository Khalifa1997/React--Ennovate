describe('The Like/Delete Test', () => {

    it('Should Like and delete correctly ', () => {
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

        // it should got to time line and retweet his tweet from the timeline
        cy.visit('http://3.19.122.178/newsfeed');
        cy.wait(5000);
        cy.get(':nth-child(3) > .svg-inline--fa').click();
        cy.get('.Toastify__toast').contains('Nova Liked');

        // go to profile and deletes it
        cy.get(':nth-child(2) > .nav-link > strong').click();
        cy.wait(2000);
        cy.get(':nth-child(2) > .tab > .nav > li').click();
        cy.get('.card-body').contains('Retweet or Like');
        cy.wait(2000);
        // it then unlike the tweet
        cy.get(':nth-child(3) > .svg-inline--fa').click();
        cy.get('.Toastify__toast').contains('Nova Unliked');

    });

});