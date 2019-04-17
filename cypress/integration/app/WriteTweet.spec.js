describe('The Login Test', () => {
    it('Should Login correctly ', () => {
        cy.visit('http://localhost:3001/');

        cy.get(':nth-child(3) > .nav-link').click();
        cy.wait(500);
        cy.get('#exampleInputEmail1').type('eng.ahmedwael205@gmail.com');
        cy.wait(500);
        cy.get('#exampleInputPassword1').type('kokiwawa');
        cy.wait(500);
        cy.get('.btn').click();
        cy.url().should('equal', "http://localhost:3001/profile");

    });
    it('Write a tweet', () => {

        cy.get('.btn-outline-success').click();
        cy.get('#exampleFormControlTextarea3').type('This is my first tweet wohooo!');
        cy.get('.modalButton').click();
        cy.visit("http://localhost:3001/profile");

    });

});