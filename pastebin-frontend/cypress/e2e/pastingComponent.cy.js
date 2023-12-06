describe('PastingComponent', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should loads the PastingComponent', () => {
    cy.contains('button', 'Paste'); // Check if the Paste button exists
  });

  it('should verifies text on view page', () => {
    // Type text into the textarea
    const enteredText = 'Sample text for pasting';
    cy.get('textarea').type(enteredText);

    // Click the Paste button and navigate to the view page
    cy.contains('button', 'Paste').click();
    cy.url().should('include', '/view/'); // Navigate to the view page

    // Verify if the entered text is displayed on the view page
    cy.get('.paste-text').should('contain', enteredText);
  });

  it('should go back to menu', () => {
    // Type text into the textarea
    const enteredText = 'Sample text for pasting';
    cy.get('textarea').type(enteredText);

    // Click the Paste button and navigate to the view page
    cy.contains('button', 'Paste').click();
    cy.url().should('include', '/view/'); 

    cy.get('.paste-text').should('contain', enteredText);
    cy.get('.link').click();
    cy.url().should('not.include', '/view/');
  });

  it('shoud show warning label if text is empty', () => {
    cy.contains('button', 'Paste').click();
    cy.get('.error-message').should('have.text', 'Please enter text to paste.');
  });
});
