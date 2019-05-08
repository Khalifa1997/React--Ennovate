describe('The Write/Delete Test', () => {
    it('Should Write/Delete correctly ', () => {
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


        // It should write a tweet and check on it 
        cy.get('.btn-outline-success').click();
        cy.get('.public-DraftStyleDefault-block').type('This is my first tweet wohoo!');
        cy.get('.modalButton').click();
        cy.wait(4000);
        cy.visit('http://3.19.122.178/profile/testingteam');
        cy.wait(4000);
        cy.get('menu').contains('This is my first tweet wohoo!');

        // It should delete the tweet 
        cy.get(':nth-child(1) > .card > .card-body > [style="float: right;"] > .svg-inline--fa').click();
        cy.visit('http://3.19.122.178/profile/testingteam');
        cy.wait(200);
        cy.get('.profile-stats > :nth-child(1)').should('have.text','1 Novas');
        

    });


});