describe('template spec', () => {
    beforeEach(() => {
      //reset database using cypress command
      cy.exec(
        "cd ../demo-app-cypress-automation && php artisan migrate:fresh --seed");
        //arrange
      cy.visit('http://localhost:8000/');
      //act
      cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
      cy.get(':nth-child(3) > .form-control').type('password');
      cy.get('.btn').click();
      cy.visit("http://localhost:8000/user-management/user");
    });
  
    it.only('Edit data user', () => {
      cy.get(".table td")
      .contains("user")
      .parent()
      .find("a")
      .contains("Edit")
      .click();
  
      /* ==== Generated with Cypress Studio ==== */
      cy.get('#name').click();
      cy.get('#name').clear('user ');
      cy.get('#name').type('user diedit');
      cy.get('.btn-primary').contains("Submit").click();
      cy.get(".table td").contains("user").should('have.text', 'user diedit');
      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      cy.get('p').should('have.text', 'User Berhasil Diupdate');
      cy.get(".alert")
      .should("be.visible")
      .and("have.class", "alert-success")
      .and("contain", "User Berhasil Diupdate");
      /* ==== End Cypress Studio ==== */
    });
  
    it.only('Edit data user baru', () => {
      cy.get(".table td")
      .contains("user baru")
      .parent()
      .find("a")
      .contains("Edit")
      .click();
  
      /* ==== Generated with Cypress Studio ==== */
      cy.get('#name').click();
      cy.get('#name').clear('user baru');
      cy.get('#name').type('putrierikar');
      cy.get('.btn-primary').contains("Submit").click();
      cy.get(".table td").contains("user").should('have.text', 'putrierikar');
      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      cy.get('p').should('have.text', 'User Berhasil Diupdate');
      cy.get(".alert")
      .should("be.visible")
      .and("have.class", "alert-success")
      .and("contain", "User Berhasil Diupdate");
      /* ==== End Cypress Studio ==== */
    });
  })
