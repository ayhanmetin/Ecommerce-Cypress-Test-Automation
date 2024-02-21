// Import the faker library for generating dynamic test data
import { faker } from '@faker-js/faker';

describe('Login Test with Dynamic Data', () => {
  it('successfully logs in with a dynamically generated username and password, then verifies the specific logout button', () => {
    // Generate a random username and password using faker.js
    let username = faker.internet.userName();
    let password = faker.internet.password();

    // Visit the login page of the application
    cy.visit('https://ayhando.vercel.app/login');

    // Type the generated username into the username field
    cy.get('#floatingUsername').type(username);
    // Type the generated password into the password field
    cy.get('#floatingPassword').type(password);
    // Click the sign in button to attempt to log in
    cy.get('button[type="submit"]').click();

    // After login, verify that the application has redirected to the main page
    cy.url().should('include', '/');

    // Verify the specific Logout button with text "Logout (Germany2024)" is present and visible on the page
    cy.contains('button', 'Logout (Germany2024)').should('be.visible');

    // Use cy.wait() to pause the test
    cy.wait(1000);

    // Verify the Add button's presence
    cy.get(':nth-child(1) > .card > .card-body > .btn').should('be.visible');
  });
});
