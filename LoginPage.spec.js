describe('login ',()=>{
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
      })
      it ('login button in home page',()=>{
        cy.get('.navbar-nav > :nth-child(3)').should('have.text','Login'); 
        cy.wait(2000);

      });
      it ('login page',()=>{
        cy.get('.nav-item').contains('Login').click();
        cy.url().should('equal','http://localhost:3000/login');
        cy.wait(2000);

        const FakeUser1={
             email:'Farahhammam58@gmail.com',
             password:12345678
        };
        
        const FakeUser2={
            email:'sd;sfl;ds',
            password:12345678
            };
            
        const FakeUser3={
            email:'Farahhammam58@gmail.com',
            password:' '
            };

    //test1 on validations
        cy.get('#exampleInputEmail1').type(FakeUser1.email);
        cy.wait(2000);
        cy.get('#exampleInputPassword1').type(FakeUser1.password);
        cy.wait(2000);
        cy.get('.btn').click();
        cy.url().should('equal','http://localhost:3000/login');
        cy.get('.invalid-feedback').should('have.text',' EMAIL_NOT_FOUND ');
        cy.wait(2000);
        //test2 on validations
        cy.get('#exampleInputEmail1').clear();
        cy.get('#exampleInputEmail1').type(FakeUser2.email);
        cy.wait(2000);
        cy.get('#exampleInputPassword1').clear();
        cy.get('#exampleInputPassword1').type(FakeUser2.password);
        cy.wait(2000);
       // cy.get('#LoginButton').click();
        cy.url().should('equal','http://localhost:3000/login');
        cy.get('.invalid-feedback').should('have.text',' Please enter a valid email ');
        cy.wait(2000);
    //test3 on validations
        cy.get('#exampleInputEmail1').clear();
        cy.get('#exampleInputEmail1').type(FakeUser3.email);
        cy.wait(2000);
        cy.get('#exampleInputPassword1').clear();
        cy.wait(2000);
        //cy.get('#LoginButton').click();
        cy.url().should('equal','http://localhost:3000/login');
        cy.get('.invalid-feedback').should('have.text',' Password should be between 8 and 25 characters long ');
        cy.wait(2000);

        
        cy.get('[id="ForgotPassword"]').click();
        cy.url().should('equal','http://localhost:3000/forgotpassword');
        cy.wait(2000);
        cy.get('.form-control').type(FakeUser2.password);
        cy.get('.btn').click();
        cy.url().should('equal','http://localhost:3000/forgotpassword?');
       // cy.get(':nth-child(2) > .Links').click();


        cy.visit('http://localhost:3000/login');

        cy.get('[id="SignUpNow"]').click();
        cy.url().should('equal','http://localhost:3000/signup');
        cy.wait(2000);
        cy.get('.Links').click();
        cy.url().should('equal','http://localhost:3000/login');
        cy.wait(2000);
        cy.get('[id="AboutLogin"]').click();
        cy.url().should('equal','http://localhost:3000/');
        cy.wait(2000);
        cy.get('[id="HomePageLogin"]').click();
        cy.url().should('equal','http://localhost:3000/login');
        cy.wait(2000);
        cy.get('[id="AboutUs"]').click();
        cy.url().should('equal','http://localhost:3000/');
        cy.wait(2000);
        cy.get('[id="HomePageLogin"]').click();
        cy.get('img').click();
        cy.url().should('equal','http://localhost:3000/');


      });
      
      
});