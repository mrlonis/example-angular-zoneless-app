describe('example-angular-16-app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load', () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(500);
  });
});
