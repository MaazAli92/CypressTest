
import { page } from '../../page-objects/contactpage'

describe('Negative scenario Tests - without Name Field',() => {

  const contact = new page()

  it('Navigate to the URL', () => {
     contact.visit()
  })

  it('Write contact name in form', () => {
    contact.name()
  })

  it('write Message in form', () => {
    contact.message()
  })

  it('Submit Form', () => {
    contact.clickSubmit()
  })

  it('Validate Form is successfully submitted', () => {
    contact.validateemptyemail()
  })
})
