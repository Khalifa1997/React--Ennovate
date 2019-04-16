
describe('Buttons through Sign up Page',()=>{
    beforeEach( () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-testid=SignUp]').click();
    })
    it ('Should Go to Login page after pressing the button',()=>{

        cy.get('.Links').click();
        cy.url().should('equal','http://localhost:3000/login');
        cy.get('.headerText').should('have.text','Log in to eNOVAte');


    })
    it('Should Go to home page after pressing the home button ',()=>{
        cy.get('img').click();
        cy.url().should('equal','http://localhost:3000/');

    })
})