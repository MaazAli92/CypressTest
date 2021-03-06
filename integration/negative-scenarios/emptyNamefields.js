
import { page } from '../../page-objects/contactpage'

describe('Negative scenario Tests - without Name Field',() => {

  const contact = new page()

  it('Navigate to the URL', () => {
     contact.visit()
  })

  it('write email in form', () => {
    contact.email()
  })

  it('write Message in form', () => {
    contact.message()
  })

  it('Submit Form', () => {
    contact.clickSubmit()
  })

  it('Validate Error message', () => {
    contact.validateemptyname()
  })
})
