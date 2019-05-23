import styled from 'styled-components'
import Button from '@material-ui/core/Button'


const ContactTitle = styled.h2`
  padding: 0 auto;`

const ContactField = styled.label`
  padding: 0 auto;

  &:not(:last-child){
    margin-bottom: 2rem;
  }`

const ContactFormDiv = styled.div`
  background-color: #F7F7F7;
  padding: 0 auto;
  margin-top: 3rem;
  margin-left: 10rem;
  margin-right: 10rem;
  border-radius: 1rem;
  border: 0.25rem solid #1E3B67;`

const ContactFormRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;`

const ContactFormSubmitButton = styled(Button)`
  background-color: #B9C9E4 !important;
  color: #1E3B67 !important;
  box-shadow: 0.2rem 0.2rem #888888 !important;
  margin-bottom: 1rem !important;
  margin-top: 1rem !important;

  &&:active {
    transform: translateY(0.1rem) !important;
    box-shadow: 0.1rem 0.1rem #888888 !important;
  }`

export {
  ContactFormDiv,
  ContactFormRow,
  ContactFormSubmitButton,
  ContactTitle,
  ContactField
}
