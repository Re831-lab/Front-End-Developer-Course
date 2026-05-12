# Optimizing and Testing 

In this Project Students will optimize and test a front-end web application called Study Night, a flashcard tool. Using the skills gained throughout this course, they will create tests to ensure product quality, install and configure necessary project dependencies, and optimize and automate the application tasks.


This project includes the prebuilt Study Night application. Students will install and configure VSCode extensions and npm dependencies. They will apply their testing skills by building unit tests with Mocha to verify logic functionality and end-to-end tests with Cypress to validate form and navigation behavior. To complete the project, students will prepare the application for production by optimizing it manually and using tools like Parcel to minify files and compress images, as well as Gulp to automate testing and build processes.

## Getting Started

If you are using your local machine you'll need to install Node.js
You can follow the instructions below or the ones provided by the Node.js documentation here [Node.js](https://nodejs.org/en/download/package-manager/)

### Dependencies

```
// Mac or Linux
// Open your terminal and enter the following
curl -fsSL https://fnm.vercel.app/install | bash
source ~/.bashrc
fnm use --install-if-missing 20
node -v # This should print the latest supported version 
npm -v # This should print the latest supported version

// Windows
// Open PowerShell
winget install Schniz.fnm
fnm env --use-on-cd | Out-String | Invoke-Expression
fnm use --install-if-missing 20
node -v # This should print the latest supported version 
npm -v # This should print the latest supported version
```



## Project Instructions

### Start by initializing and configuring npm 

* Initialize a `package.json` file with `npm init`
* `package.json` should include a name, version, description, MIT License 
* Add type : “module” to the `package.json`, this will fix any import errors.

### Install ESlint and Prettier through VS Code Extensions

- Navigate to VS Code Extensions and search for, then install, ESLint and Prettier.
- In the terminal, run`npm init --save-dev @eslint/config@latest` to install ESLint and generate a configuration file for your project.
- Restart VS Code to apply the extensions.
- The files `src/Shuffle.js and src/utilityRenderFunctions.js`contain ESLint and formatting errors. Use ESLint and Prettier to fix these issues by only addressing the underlined errors and formatting problems. Avoid making major changes to the logic, as other files depend on these functions and changes could cause errors.
- **NOTE**: No other folders in the src directory need to be changed.

### Install Gulp and Parcel 

* In the terminal enter `npm i –save-dev gulp, gulp-cli, gulp-shell`
* Install Parcel 
   * In the terminal enter `npm i –save-dev parcel`
* Configure Gulp
   * Create a `gulpfile.js`
   * Import `gulp`and `gulp-shell`.
   * Create a Gulp task to build and run Parcel as the default task.
   * Running `npm run gulp` should build and serve the project.
   * Visit `http://localhost:1234` in your browser to verify the application is working.
   * Navigate to the `dist`directory to verify that parcel has optimized images, minimize and concatenated files. 
   * **Note**: Parcel does this automatically no further changes or configuration is necessary here. Do not make changes to the dist file.

### Unit Test with Mocha 

* Install mocha dependencies by entering `npm i –save-dev mocha chai` in the terminal 
* Create a directory called test and create a test file called shuffle.jsCreate a describe block for the shuffle function.
* Create at least one test that verifies that the shuffle function shuffles the indexes of an array
* Extra tests for this function are encouraged but not required. 
* Return to gulpfile.js and create a new different called test task that will run your new unit test. 
* run the test with `npm run gulp test`

<br data-md>

### Create End-to-End Tests with cypress

* In the terminal, run `npm i --save-dev` cypress to install Cypress.
* Run `npx cypress open` to open Cypress's task runner.
* Select E2E Testing. Cypress will configure and create the necessary files for testing.
* Create two new specs:
   * `navigation.cy.js`
   * `form.cy.js`
   * **Note:** The scaffold examples provided by Cypress can offer helpful hints if needed. Be sure to remove them when the project is complete

* Navigate to `cypress/e2e navigation.cy.js `
   * Create a `describe `block for the navigation tests.
   * Write tests to verify the following:
      * Clicking on "Card Set" in the side menu navigates to the page containing the card sets.
      * Clicking on "About" in the side menu navigates to the About page.
      * Clicking on "Home" in the side menu navigates to the Home page.
* Navigate to `cypress/e2e forms.cy.js`
* Create tests to verify the functionality of both the `Create Set Form` and the `Add Card Form`:
   * Test the "happy path" for both forms (i.e., valid input and successful submission).
   * Test the "unhappy path" where the user submits an empty string for any of the inputs. An error should be rendered in these cases.
* Navigate to gulpfile.js and create a task that runs cypress tests with `npx cypress run`
* **Note**: Cypress tests require the server to be running. Ensure that you run your Parcel task in a separate terminal before executing the tests.



<br data-md>


## License
[License](../LICENSE.md)