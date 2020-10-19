export class page{
  visit()
  {
    cy.visit('http://sample-website.beforeyoubid.com.au/contact')
  }

  name()
  {
    cy.xpath('//div[@data-cy="input-name"]')
    .type('fakename')
  }
email()
{
  cy.xpath('//div[@data-cy="input-email"]')
  .type('email@email.com')
}
message()
{
  cy.xpath('//div[@data-cy="input-message"]')
  .type('This is a query')
}
clickSubmit()
{
  cy.xpath('//button[@label="Submit"]').click()
}
validatesubmission()
{
  cy.xpath('//p[@data-cy="message-sent"]')
  .should('contain', 'Your message has been sent :)')
}
validateemptyname()
{
  cy.xpath('//p[@class="Input__Error-sc-1kmdb1h-5 innrSI"]')
  .should('contain', 'Your name is required')
}
validateemptyemail()
{
  cy.xpath('//p[@class="Input__Error-sc-1kmdb1h-5 innrSI"]')
  .should('contain', 'Your email is required')
}
validateemptymessage()
{
  cy.xpath('//*[contains(@class,"TextArea__Wrapper")]')
  .should('contain', 'Did you forget to leave us a message?')
}
}
