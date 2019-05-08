describe('The Friendship Test', () => {
    it('Should Follow and Unfollow correctly ', () => {
        cy.visit('http://3.19.122.178/');

        cy.get(':nth-child(3) > .nav-link').click();
        cy.wait(2000);
        cy.get('#exampleInputEmail1').type('testing@gmail.com');
        cy.wait(2000);
        cy.get('#exampleInputPassword1').type('123456789');
        cy.wait(2000);
        cy.get('.btn').click();
        cy.wait(2000);
        cy.url().should('equal', "http://3.19.122.178/profile/testingteam");

        //it should search on testing and follow heim
        // now i will got directly WILL BE EDITTED LATER

        cy.visit('http://3.19.122.178/profile/testing1');
        cy.wait(5000);
        cy.get('.profile-user-settings > .btn').click();
        cy.wait(4000);
        cy.visit('http://3.19.122.178/profile/testingteam');
        cy.wait(5000);
        cy.get('.profile-stats > :nth-child(3)').click();
        cy.get('.middle').should('have.text','testing1@testing1');

        // it should unfollow testing1 and check on it
        // now i will got directly WILL BE EDITTED LATER
        cy.visit('http://3.19.122.178/profile/testing1');
        cy.wait(5000);
        cy.get('.profile-user-settings > .btn').click();
        cy.wait(4000);
       // cy.visit('http://3.19.122.178/profile/testingteam');
        //cy.wait(5000);
       // cy.get('.profile-stats > :nth-child(3)').click();
        //cy.get('.scrolling').not().contains('testing1@testing1');
        cy.visit('http://3.19.122.178/profile/testing1');
        cy.wait(4000);
        cy.get('.profile-stats > :nth-child(3)').should('have.text','0 following');

    });
});