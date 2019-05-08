describe('The Search Test', () => {

    it('Should Login/search correctly ', () => {
        cy.visit('http://3.19.122.178/');


        //Login
        cy.get(':nth-child(3) > .nav-link').click();
        cy.wait(500);
        cy.get('#exampleInputEmail1').type('testing@gmail.com');
        cy.wait(500);
        cy.get('#exampleInputPassword1').type('123456789');
        cy.wait(500);
        cy.get('.btn').click();
        cy.wait(4000);
        cy.url().should('equal', "http://3.19.122.178/profile/testingteam");

        //it should type on search and check on it
        cy.get('.form-control').type('maram').dblclick();
        cy.url().should('equal', "http://3.19.122.178/search/maram");
        cy.get('.list-group > :nth-child(2) > :nth-child(1)').contains('maram');
    });
});