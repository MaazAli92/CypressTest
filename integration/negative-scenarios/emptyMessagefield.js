
import { page } from '../../page-objects/contactpage'

describe('Negative scenario Tests - without Name Field',() => {

  const contact = new page()

  it('Navigate to the URL', () => {
     contact.visit()
  })

  it('Write contact name in form', () => {
    contact.name()
  })

  it('write email in form', () => {
    contact.email()
  })

  it('Submit Form', () => {
    contact.clickSubmit()
  })

  it('Validate Form is not submitted and Display Error', () => {
    cy.wait(500)
    contact.validateemptymessage()
  })
})
