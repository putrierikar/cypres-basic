describe('template spec', () => {
  it.only('user can login to system', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');

    //act
    //select element html yang dibutuhkan
    //cy.get('[data-id="email"]').type("superadmin@gmail.com");
    //cy.get('[data-id="password"]').type("password");
    //cy.get('[data-id="submit"]').click();
    //cy.get('[data-id="username"]').click();
    //cy.get('[data-id="logout-btn"]').click();


    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.get('.navbar-right > :nth-child(2) > .nav-link').click();
    cy.get('.text-danger').click();
    /* ==== End Cypress Studio ==== */
  });
})