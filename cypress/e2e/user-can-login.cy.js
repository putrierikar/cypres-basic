describe('User can login to system', () => {
  //positive test case
  it.only('user can login with valid username and password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');

    //act
    //select element html yang dibutuhkan
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com");
    cy.get(':nth-child(3) > .form-control').type("password");
    cy.get('.btn').click();

    //assert
    //select elemen html yang dibutuhkan
    //lakukan assertion sesuai test case
    cy.get('.nav-link > .d-sm-none').should("have.text","Hi, SuperAdmin");
  });



  //negative test case
  it('user cannot login with invalid username and valid password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');

    //act
    //select element html yang dibutuhkan
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com");
    cy.get(':nth-child(3) > .form-control').type("password-salah");
    cy.get('.btn').click();

    //assert
    //select elemen html yang dibutuhkan
    //lakukan assertion sesuai test case
    cy.get('.invalid-feedback').should("have.text","These credentials do not match our records.");
  });


  it('user cannot login with empty username and correct password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');

    //act
    //select element html yang dibutuhkan
    cy.get(':nth-child(3) > .form-control').type("password");
    cy.get('.btn').click();

    //assert
    //select elemen html yang dibutuhkan
    //lakukan assertion sesuai test case
    cy.get('.invalid-feedback').should("have.text","The email field is required.");
  });


  it('user cannot login with correct username and empty password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');

    //act
    //select element html yang dibutuhkan
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com");
    cy.get('.btn').click();

    //assert
    //select elemen html yang dibutuhkan
    //lakukan assertion sesuai test case
    cy.get('.invalid-feedback').should("have.text","The password field is required.");
  });



  //positive test case
  it('user can initiate a password reset', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/');

    //act
    //select element html yang dibutuhkan
    cy.get('.text-small').click();

    //assert
    //select elemen html yang dibutuhkan
    //lakukan assertion sesuai test case
    cy.get('p').should("have.text","We will send a link to reset your password");
  });


  it('user user can reset password with registered email', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/forgot-password');

    //act
    //select element html yang dibutuhkan
    cy.get('#email').type("superadmin@gmail.com");
    //cy.get('.btn').click();

    //assert
    //select elemen html yang dibutuhkan
    //lakukan assertion sesuai test case
    //cy.contains("Too Many Attempts").should("be.visible");
  });


  //negative test case
  it('user cannot reset password with unregistered email', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/forgot-password');

    //act
    //select element html yang dibutuhkan
    cy.get('#email').type("adminbaru@gmail.com");
    cy.get('.btn').click();

    //assert
    //select elemen html yang dibutuhkan
    //lakukan assertion sesuai test case
    cy.get('strong').should("have.text","We can't find a user with that email address.");
  });
})