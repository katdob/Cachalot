import React, { Component } from 'react'
// styled components
import { Hypertext } from '../helpers/DefaultStyledComponents'
// screens
import HomeFooter from '../screens/Footer'
import HomeHeader from '../screens/Header'
// context
import AuthContext from '../Contexts/AuthContext'
// components
import MigrationForm from './MigrationForm'


class Migrations extends Component {
  static contextType = AuthContext

  componentDidMount() {
    const user = this.context
    const contextUser = AuthContext.user
    this.context.upperRightButtonText = user.upperRightButtonText

    console.log(contextUser)
    console.log(user)
  }

  // user = useContext(AuthContext)
  //
  // if (user) {
  //   console.log(user)
  // }

  render() {
    return (
      <AuthContext.Consumer>
        {user =>
          <React.Fragment>
            <Hypertext>

              <HomeHeader />

                <MigrationForm />

              <HomeFooter />

            </Hypertext>
          </React.Fragment>
        }
      </AuthContext.Consumer>
    )
  }
}

export default Migrations
