# CypressTest
Cypress.io Tests

These are automated test cases for contact-us page : http://sample-website.beforeyoubid.com.au/contact

Following is the code structure:
Test/Spec files :
  1. cypress/integration/contactUs_spec.js
        This is main test file including a happy path flow of contact us form       
  2. cypress/integration/negative-scenarios/emptyEmailfield.js
  3. cypress/integration/negative-scenarios/emptyMessagefiled.js
  4.cypress/integration/negative-scenarios/emptyNamefields.js
  
 These test are written using Page Object Model.
 
 all functions are available in folder:
 
   1. cypress/page-objects/contactpage.js
 
  locator used in these tests are Xpaths, you need to install xpaths for cypress separately.
  
