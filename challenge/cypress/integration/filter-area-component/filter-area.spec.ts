describe('dashboard ui', () => {
  it('Should return true when title componet was correct', () => {
    cy.visit('/');
    cy.contains('Dashboard').should('to.have.length', 1);
  });
});
export {};
