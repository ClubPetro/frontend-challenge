describe('FilterPlace component', () => {
  it('Should return true when title component was correct', () => {
    cy.visit('/');
    cy.contains('País').should('to.have.length', 1);
    cy.contains('Local').should('to.have.length', 1);
    cy.contains('Meta').should('to.have.length', 1);
  });

  it('Should add a new place', () => {
    cy.visit('/');
    cy.get('[data-cy=country]').select('Brasil');
    cy.get('[data-cy=place]').type('São Paulo');
    cy.get('[data-cy=goal]').type('042021');
    cy.get('[data-cy=btn-add]').click();

    cy.get('[data-cy=list-places]').find('img');
    cy.contains('Brasil').should('to.have.length', 1);
    cy.contains('São Paulo').should('to.have.length', 1);
    cy.contains('04/2021').should('to.have.length', 1);
    cy.get('.swal-button--confirm').click();
  });

  it('Should add a two new places', () => {
    cy.visit('/');
    cy.get('[data-cy=country]').select('Bahamas');
    cy.get('[data-cy=place]').type('Nassau');
    cy.get('[data-cy=goal]').type('052026');
    cy.get('[data-cy=btn-add]').click();

    cy.get('[data-cy=list-places]').find('img');
    cy.contains('Bahamas').should('to.have.length', 1);
    cy.contains('Nassau').should('to.have.length', 1);
    cy.contains('05/2026').should('to.have.length', 1);
    cy.get('.swal-button--confirm').click();

    cy.get('[data-cy=country]').select('Japão');
    cy.get('[data-cy=place]').type('Saitama');
    cy.get('[data-cy=goal]').type('062023');
    cy.get('[data-cy=btn-add]').click();

    cy.get('[data-cy=list-places]').find('img');
    cy.contains('Japão').should('to.have.length', 1);
    cy.contains('Saitama').should('to.have.length', 1);
    cy.contains('06/2023').should('to.have.length', 1);
    cy.get('.swal-button--confirm').click();
  });

  it('Should edit a item', () => {
    cy.visit('/');
    cy.get('[data-cy=edit-btn]').first().click();
    cy.get('[data-cy=placeEdit]').type('São Paulo');
    cy.get('[data-cy=goalEdit]').type('042021');
    cy.get('[data-cy=submit-edit-btn]').click();
    cy.get('.swal-button--confirm').click();
  });

  it('Should delete a item', () => {
    cy.visit('/');
    cy.get('[data-cy=delete-btn]').first().click();
    cy.get('.swal-button--danger').click();
    cy.get('.swal-button--confirm').click();
  });
});
export {};
