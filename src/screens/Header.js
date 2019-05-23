import React, { useState } from 'react'
import axios from 'axios'
// styled components
import { Header } from '../helpers/DefaultStyledComponents'
import { SignUpButton, HomeButtonLink, HomeButtonContainer,
  CachalotProjectText } from '../helpers/HomeScreenStyledComponents'
// components
import UserSignUp from '../components/UserSignUp'
// material ui
import Modal from '@material-ui/core/Modal'


const HomeHeader = (props) => {

  const [showSignUpModal, setShowSignUpModal] = useState(false)
  const showModal = () => setShowSignUpModal(true)
  const hideModal = () => setShowSignUpModal(false)
  // eslint-disable-next-line
  const [upperRightButtonText, setUpperRightButtonText] = useState('JOIN US')

  const displaySignUpModal = () => {
    if (showSignUpModal === true) {
      hideModal()
    } else if (showSignUpModal === false) {
      showModal()
    }
  }

  const logout = async () => {
    const header = {
        'Accept' : 'application/json' ,
        'Method' : 'POST',
        'Access-Control-Allow-Origin' : 'x-requested-with',
        'origin' : 'http://localhost:8080',
      }
    const api_call = `http://127.0.0.1:5000/logout?`

    await axios.get(api_call, {
      params: {
        //
      }
    }, { header : header })
  }

  return (
    <Header>

        <CachalotProjectText>
          <HomeButtonLink to="/" onClick={logout}>
            The &nbsp;<b>Cachalot</b>&nbsp; Project
          </HomeButtonLink>
        </CachalotProjectText>

        <SignUpButton variant="outlined">
          <HomeButtonContainer>
            <HomeButtonLink onClick={displaySignUpModal} to="/">
              <b>{upperRightButtonText}</b>
            </HomeButtonLink>
          </HomeButtonContainer>
        </SignUpButton>

        {(showSignUpModal === true) &&
          <div>
            <Modal
              open={showSignUpModal}
              onClose={displaySignUpModal}
            >
              <div>
                <UserSignUp />
              </div>
            </Modal>
          </div>
        }

    </Header>
  )
}

export default HomeHeader
