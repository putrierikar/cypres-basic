describe('Test Scenario edited', () => {
  it('Test Case 1', () => {
    cy.visit('http://127.0.0.1:8000/');
    cy.get('h4').should("have.text","Login");
  })
})