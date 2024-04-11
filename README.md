# Cypress Tests for Ecommerce Website

This document outlines the Cypress test cases developed for the fundamental functions of an e-commerce website. These tests are designed to check key features such as user authentication, product interaction, and payment processing.

### Test Cases

- Using Faker.js for Login Test
- Using beforeEach for Login Setup
- Payment Checkout
- Product Removal from Shopping Cart

[Go to tests](https://github.com/ayhanmetin/Ecommerce-Cypress-Test-Automation/tree/main/cypress/e2e/E-commerce_Test_File)

## Faker.js for Login Test

Verifies successful login with generated username and password.

[Go to code](https://github.com/ayhanmetin/Ecommerce-Cypress-Test-Automation/blob/main/cypress/e2e/E-commerce_Test_File/Fakerjs_Login_Test.cy.js)

## beforeEach for Login Test

This approach initializes the login test environment, ensuring a fresh state for each test case.

[Go to code](https://github.com/ayhanmetin/Ecommerce-Cypress-Test-Automation/blob/main/cypress/e2e/E-commerce_Test_File/Login_BeforeEach.cy.js)

## Payment Checkout

Ensures the payment checkout process works as expected from start to finish.

[Go to code](https://github.com/ayhanmetin/Ecommerce-Cypress-Test-Automation/blob/main/cypress/e2e/E-commerce_Test_File/Payment_Checkout.cy.js)

## Product Removal from Shopping Cart

Tests the functionality that allows users to remove a product from the card.

[Go to code](https://github.com/ayhanmetin/Ecommerce-Cypress-Test-Automation/blob/main/cypress/e2e/E-commerce_Test_File/Remove_Card.cy.js)

---

## Setup and Running Tests Locally

To run these Cypress tests on your computer, follow the steps below for setup and execution.

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/ayhanmetin/Ecommerce-Cypress-Test-Automation
cd Ecommerce-Cypress-Test-Automation
```

### 2. Inside the project directory, install the necessary dependencies:

```bash
npm install
```

### 3. To open the Cypress Test Runner for an interactive testing experience, use:

```bash
npx cypress open
```
