describe('Login Test with Dynamic Data', () => {
  let username;
  let password;

  beforeEach(() => {
    // Initializes username and password before each test.
    username = 'RandomUser123';
    password = 'SecurePassword!456';
  });

  it('successfully logs in and performs actions on cards', () => {
    // Navigates to the login page.
    cy.visit('https://ayhando.vercel.app/login');

    // Inputs the username and password.
    cy.get('#floatingUsername').type(username);
    cy.get('#floatingPassword').type(password);

    // Submits the login form.
    cy.get('button[type="submit"]').click();

    // Adds items to the cart by clicking the "Add to Cart" button on specified cards.
    cy.get(':nth-child(1) > .card > .card-body > .btn').click();
    // Corrected selector for the second card to ensure unique selection.
    cy.get(':nth-child(2) > .card > .card-body > .btn').click();
    cy.get(':nth-child(6) > .card > .card-body > .btn').click();
    cy.get(':nth-child(12) > .card > .card-body > .btn').click();

    // Navigates to the cart page.
    cy.get('div.d-flex > .nav-link').click()

    // Verifies the current URL to ensure the user is on the cart page.
    cy.url().should('include', '/cart');

    // Checks if the price element is visible.
    cy.get('h4').should('be.visible');

    // Proceeds to checkout.
    cy.get('.text-right > .btn').click();

    // Verifies the success message after checkout.
    cy.contains('Your order has been submitted successfully!').should(
      'be.visible'
    );
  });
});
