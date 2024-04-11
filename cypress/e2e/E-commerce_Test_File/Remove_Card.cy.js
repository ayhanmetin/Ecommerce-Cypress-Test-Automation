describe('Product Removal from Shopping Cart Test', () => {
  let username;
  let password;

  beforeEach(() => {
    // Initializes username and password before each test.
    username = 'RandomUser123';
    password = 'SecurePassword!456';
  });

  it('successfully logs in, performs actions on cards, and verifies cart is empty after removal', () => {
    // Navigates to the login page.
    cy.visit('https://ayhando.vercel.app/login');

    // Inputs the username and password.
    cy.get('#floatingUsername').type(username);
    cy.get('#floatingPassword').type(password);

    // Submits the login form.
    cy.get('button[type="submit"]').click();

    // Adds items to the cart by clicking the "Add to Cart" button on specified cards.
    cy.get(':nth-child(1) > .card > .card-body > .btn').click();
    cy.get(':nth-child(2) > .card > .card-body > .btn').click();
    cy.get(':nth-child(12) > .card > .card-body > .btn').click();

    // Navigates to the cart page.
    cy.get('div.d-flex > .nav-link').click();

    // Verifies the current URL to ensure the user is on the cart page.
    cy.url().should('include', '/cart');

    // Checks if the price element is visible.
    cy.get('h4').should('be.visible');

    // Removes items from the cart by clicking the "Remove" button on the first item, three times.
    for (let i = 0; i < 3; i++) {
      cy.get(':nth-child(1) > .row > :nth-child(3) > .btn').click();
    }

    // Verifies the text "Your cart is empty" is present, indicating all items have been removed.
    cy.get('p.text-center').should('have.text', 'Your cart is empty');
  });
});
