import React, { useState } from 'react'
// styled components
import { Hypertext, DefaultPage } from '../helpers/DefaultStyledComponents'
import { ContactFormDiv, ContactFormRow, ContactFormSubmitButton, ContactTitle,
  ContactField } from '../helpers/ContactScreenStyledComponents'
// screens
import HomeFooter from '../screens/Footer'
import HomeHeader from '../screens/Header'

import TextField from '@material-ui/core/TextField'


const Contact = props => {
  const [formName, setFormName] = useState(null)
  const [formEmail, setFormEmail] = useState(null)
  const [formMessage, setFormMessage] = useState(null)

  const sendMessage = () => {
    console.log(`Message sent!
           Name: ${formName}
           Email: ${formEmail}
           Message: ${formMessage}`)
  }

  return(
    <Hypertext>
        <HomeHeader />
        <DefaultPage>
          <ContactFormDiv>
            <form>

              <ContactFormRow>
                <ContactTitle>
                  Please send us a message.
                </ContactTitle>
              </ContactFormRow>

              <ContactFormRow>
                <ContactField>
                  <TextField
                    label="name"
                    onChange={e => setFormName(e.target.value)}
                  />
                </ContactField>

                <ContactField>
                  <TextField
                    label="email"
                    onChange={e => setFormEmail(e.target.value)}
                  />
                </ContactField>
              </ContactFormRow>

              <ContactFormRow>
                <ContactField>
                  <TextField
                    label="message"
                    multiline
                    rows="4"
                    onChange={e => setFormMessage(e.target.value)}
                  />
                </ContactField>
              </ContactFormRow>

              <ContactFormRow>
                <ContactField>
                  <ContactFormSubmitButton
                    type="button"
                    onClick={sendMessage}>
                    Send Message
                  </ContactFormSubmitButton>
                </ContactField>
              </ContactFormRow>

            </form>
          </ContactFormDiv>
        </DefaultPage>
        <HomeFooter />
    </Hypertext>
  )
}

export default Contact
