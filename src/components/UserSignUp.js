import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
// components
import UserLogIn from '../components/UserLogIn'
import ErrorBox from '../components/ErrorBox'
// styled components
import { Modal, LogInLink, ModalMain } from '../helpers/SignUpStyledComponents'
import { HomeButtonLink } from '../helpers/HomeScreenStyledComponents'
// contexts
import AuthContext from '../Contexts/AuthContext'

import axios from 'axios'


const UserSignUp = () => {
  const [signUpEmail, setSignUpEmail] = useState()
  const [signUpPass1, setSignUpPass1] = useState()
  const [signUpPass2, setSignUpPass2] = useState()
  // eslint-disable-next-line
  const [next, setNext] = useState('')
  const [signUpError, setSignUpError] = useState()
  const [user, setUser] = useState()

  const [showLogInModal, setshowLogInModal] = useState(false)
  const showLIModal = () => setshowLogInModal(true)
  const hideLIModal = () => setshowLogInModal(false)

  const displaySignUpModal = (bool) => {
    if (showLogInModal === true) {
      hideLIModal()
    } else if (showLogInModal === false) {
      showLIModal()
    }
  }

  const submitNewUserForm = () => {

    if (!signUpEmail || !signUpPass1 || !signUpPass2) {
      setSignUpError('Please enter a valid email address and two identical passwords.')
    } else {
      submitNewUser()
    }
  }

  const submitNewUser = async () => {

    if (signUpEmail && signUpPass1 && signUpPass2) {
      setSignUpError('')

      const header = {
          'Accept' : 'application/json' ,
          'Method' : 'POST',
          'Access-Control-Allow-Origin' : 'x-requested-with',
          'origin' : 'http://localhost:8080',
        }
      const api_call = `http://127.0.0.1:5000/register?`

      await axios.get(api_call, {
        params: {
          email : signUpEmail,
          password1 : signUpPass1,
          password2 : signUpPass2
        }
      }, { header : header })

      .then(response => {

        if (response.data.email) {
          setNext(response.data.next)
          const r = {
            'email': response.data.email,
            'upperRightButtonText': 'LOG OUT',
            'loggedIn': true
          }
          setUser(r)
        } else {
          setSignUpError(response.data)
        }
      })
    }
  }

  const redirect = () => {
    if (user) {
      return <Redirect to={ `${next}` } />
    }
  }

  return (
    <AuthContext.Provider value={user}>
      <React.Fragment>
        <ModalMain>
          <form autoComplete="off">
            {(showLogInModal === true) &&
              <div>
                <LogInLink onClick={displaySignUpModal}>
                  <u>Sign Up &rarr;</u>
                </LogInLink>

                <UserLogIn />
              </div>
            }

            {(showLogInModal === false) &&
              <div>

                <LogInLink onClick={displaySignUpModal}>
                  <u>Log In &rarr;</u>
                </LogInLink>

                {(signUpError) &&
                  <div>
                    <ErrorBox input={signUpError} />
                  </div>
                }

                <div>
                  <Input
                    className="input"
                    type="email"
                    id="email"
                    name="email"
                    onChange={e => setSignUpEmail(e.target.value)}
                    required
                  />
                </div>
                <label>Email Address</label>

                <div>
                  <Input
                    className="input"
                    type="password"
                    id="password1"
                    name="password1"
                    onChange={e => setSignUpPass1(e.target.value)}
                  />
                </div>
                <label>Password</label>

                <div>
                  <Input
                    className="input"
                    type="password"
                    id="password2"
                    name="password2"
                    onChange={e => setSignUpPass2(e.target.value)}
                  />
                </div>
                <label>Re-enter Password</label>

                <Modal>
                  <Button type="submit" variant="outlined" onClick={submitNewUserForm}>
                    <HomeButtonLink to={ `${next}` }>
                      Join Us
                    </HomeButtonLink>
                  </Button>
                </Modal>
              </div>
            }
          </form>

          {(user) &&
            redirect()
          }
        </ModalMain>
      </React.Fragment>
    </AuthContext.Provider>
  )
}

export default UserSignUp
