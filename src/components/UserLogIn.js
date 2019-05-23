import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
// styles
import Input from '@material-ui/core/Input'
import { Modal } from '../helpers/SignUpStyledComponents'
import { HomeButton, HomeButtonLink } from '../helpers/HomeScreenStyledComponents'
// contexts
import AuthContext from '../Contexts/AuthContext'
// components
import ErrorBox from './ErrorBox'

import axios from 'axios'


const UserLogIn = () => {

  const [userEmail, setUserEmail] = useState()
  const [userPassword, setUserPassword] = useState()
  const [user, setUser] = useState()
  const [next, setNext] = useState("/")
  // eslint-disable-next-line
  const [loginError, setLoginError] = useState('')

  const login = async () => {
    const header = {
        'Accept' : 'application/json' ,
        'Access-Control-Allow-Origin' : 'x-requested-with',
        'origin' : 'https://localhost:8080',
      }
    const api_call = `https://localhost:5000/login?`

    if (userEmail && userPassword) {
      setLoginError('')

      await axios.get(api_call, {
        params: {
          email: userEmail,
          password: userPassword,
        }
      }, { header : header })

      .then(response => {

        console.log(response)

        if (response.data.email) {
          setNext(response.data.next)
          const r = {
            'email': response.data.email,
            'upperRightButtonText': 'LOG OUT',
            'loggedIn': true
          }
          setUser(r)
        } else {
          setLoginError(response.data)
        }
      })
    }
  }

  const submitForm = async (e) => {
    e.preventDefault()

    if (!userEmail || !userPassword) {
      setLoginError('Please enter an email and password.')
    } else {
      login()
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

      {(loginError) &&
        <div>
          <ErrorBox input={loginError} />
        </div>
      }

        <div>
          <Input
            className="emailInput"
            type="email"
            name="email"
            onChange={e => setUserEmail(e.target.value.toString())}
            required
            />
        </div>
        <label>Email Address</label>

        <div>
          <Input
            className="passwordInput"
            type="password"
            name="password"
            onChange={e => setUserPassword(e.target.value.toString())}
          />
        </div>
        <label>Password</label>

        <Modal>
          <HomeButton type="button" variant="outlined" onClick={submitForm}>
            <HomeButtonLink to="">
              Log In
            </HomeButtonLink>
          </HomeButton>
        </Modal>

        {(user) &&
          redirect()
        }

      </React.Fragment>
    </AuthContext.Provider>
    )
}

export default UserLogIn
