describe('template spec', () => {
    //before each test case
    beforeEach(() => {
      //reset database by calling php artisan
      //cy.exec('cd E:\erika\\Penjaminan-Mutu\demo-app-cypress-automation ; php artisan migrate:fresh --seed', { failOnNonZeroExit: false });
      
      //arrange
      cy.visit('http://127.0.0.1:8000/');
  
  
      /* ==== Generated with Cypress Studio ==== */
      //act
      cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
      cy.get(':nth-child(3) > .form-control').type('password');
      cy.get('.btn').click();
      cy.visit('http://127.0.0.1:8000/user-management/user');
    });
  
  
    //positive test case
    it('user can delete data', () => {
        /*cy.get('.table td').contains('user');
        cy.get('.table td')
            .contains('user')
            .next()
            .next()
            .next()
            .contains('Delete')
            .click();
        cy.get('.table td')
            .contains('user')
            .nextAll()
            .contains('Delete')
            .click();*/
        cy.get('.table td')
            .contains('user')
            .parent()
            .find('button')
            .contains('Delete')
            .click();
        cy.get('.swal-button-container').find('button').contains('OK').click();
        /* ==== Generated with Cypress Studio ==== */
        /*cy.get(':nth-child(3) > .text-right > .d-flex > .ml-2 > .btn').click();
        cy.get(':nth-child(2) > .swal-button').click();
        cy.get('p').should('be.visible');*/
        cy.get('.alert')
            .should('be.visible')
            .and('have.class', 'alert-success')
            .contains('User Deleted Successfully');
        cy.get('.table').should('not.contain', 'user');
        /* ==== End Cypress Studio ==== */
    });


    it.only('user can cancel delete data', () => {
        //arrange
        //act
        cy.get('.table td')
            .contains('user')
            .parent()
            .find('button')
            .contains('Delete')
            .click();
        cy.get('.swal-button-container').find('button').contains('Cancel').click();
        
        //assert
        cy.get('.table td').contains('user').should('be.visible');
    });
  
  
  
    //negative test case
    it('dummy test', () => {
        //arrange
        //act
        //assert
    });

  });