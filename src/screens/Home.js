import React, { Component } from 'react'
// styled components
import { Hypertext } from '../helpers/DefaultStyledComponents'
import { MessageH3, HeroText, HomeDivMain, HomeSection }
  from '../helpers/HomeScreenStyledComponents'
// screens
import HomeHeader from '../screens/Header'
import HomeFooter from '../screens/Footer'


class Home extends Component {

  render() {
    return (
      <Hypertext>
        <HomeDivMain>

          <HomeHeader />

          <HomeSection>
            <HeroText>Be <b>Environment</b> Aware</HeroText>
            <MessageH3>Find animal migrations near you.</MessageH3>
          </HomeSection>

          <HomeFooter />

        </HomeDivMain>
      </Hypertext>
    )
  }
}

export default Home
