import React from 'react'
// styled components
import { Hypertext, DefaultPage } from '../helpers/DefaultStyledComponents'
// screens
import HomeFooter from '../screens/Footer'
import HomeHeader from '../screens/Header'

const Policies = props => {
  return(
    <Hypertext>
        <HomeHeader />

          <DefaultPage>
            <p>This is the policies page</p>
          </DefaultPage>

        <HomeFooter />
    </Hypertext>
  )
}

export default Policies
