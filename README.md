# Cypress Tests for Ecommerce Website

This document outlines the Cypress test cases developed for the login functionality, ensuring both positive and negative scenarios are covered for robust validation.

### Test Cases

- Positive Login Test
- Negative Username Test
- Negative Password Test
- Username Field Validation
- Password Strength Test
- Password Field Validation


[Go to tests](https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/tree/main/cypress/cypress_LoginPage_ScreenShot)


## Test Case 1: Positive Login Test

Verifies successful login with correct username and password.

![Positive LogIn Test](./cypress/cypress_LoginPage_ScreenShot/Positive_LoginTest.png)

[Go to code](https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/blob/main/cypress/e2e/Test_Login_Page/Positive_Login_Test.cy.js)

## Test Case 2: Negative Username Test

Checks the behavior when an incorrect username is entered.

![Negative Username Test](./cypress/cypress_LoginPage_ScreenShot/Negative_Username.png)

[Go to code](https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/blob/main/cypress/e2e/Test_Login_Page/Negative_Username_%20Test.cy.js)

## Test Case 3: Negative Password Test

Validates the response to entering an incorrect password.

![Negative Password Test](./cypress/cypress_LoginPage_ScreenShot/Negative_Username.png)

[Go to code](https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/blob/main/cypress/e2e/Test_Login_Page/Negative_Password_Test.cy.js)

## Test Case 4: Username Field Validation

Ensures the application prompts when the username field is left empty.

![Username Field Validation](./cypress/cypress_LoginPage_ScreenShot/Username_Field_Validation.png)

[Go to code](https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/blob/main/cypress/e2e/Test_Login_Page/Username_Field_Validation_Test.cy.js) 

## Test Case 5: Password Field Validation

Confirms that leaving the password field empty triggers an error message.

![Password Field Validation](./cypress/cypress_LoginPage_ScreenShot/Password_Field_Validation.png)

[Go to code](https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/blob/main/cypress/e2e/Test_Login_Page/Password_Field_Validation.cy.js)

## Test Case 6: Password Strength Test


Tests the application's password strength validation by entering a weak password.

![Password Strength Test](./cypress/cypress_LoginPage_ScreenShot/Password_Strength_Test.png)

[Go to code](https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation/blob/main/cypress/e2e/Test_Login_Page/Password_Strength_Test.cy.js)

---------------------------------------------------------


## Setup and Running Tests Locally

To run these Cypress tests on your computer, follow the steps below for setup and execution.

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/ayhanmetin/Login-Page-Cypress-Test-Automation.git
cd Login-Page-Cypress-Test-Automation
```

### 2. Inside the project directory, install the necessary dependencies:

```bash
npm install
```

### 3. To open the Cypress Test Runner for an interactive testing experience, use:

```bash
npx cypress open
```


