describe('Login Test with Dynamic Data', () => {
  let username;
  let password;

  beforeEach(() => {
    // Initialize the username and password before each test
    username = 'RandomUser123';
    password = 'SecurePassword!456';
  });

  it('successfully logs in with a dynamically generated username and password, then verifies the specific logout button', () => {
    // Visit the login page of the application
    cy.visit('https://ayhando.vercel.app/login');

    // Type the username into the username field
    cy.get('#floatingUsername').type(username);
    // Type the password into the password field
    cy.get('#floatingPassword').type(password);
    // Click the sign in button to attempt to log in
    cy.get('button[type="submit"]').click();

    // After login, verify that the application has redirected to the main page
    cy.url().should('include', '/');

    // Verify the specific Logout button with text "Logout (Germany2024)" is present and visible on the page
    cy.contains('button', 'Logout (Germany2024)').should('be.visible');

    // Verify the Add button's presence after login
    cy.get(':nth-child(1) > .card > .card-body > .btn').should('be.visible');
  });
});
