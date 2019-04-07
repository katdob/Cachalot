import React, { Component } from 'react'
import { HomeHeader, HomeDivMain, HomeJoinButton, HomeSection, HeroText,
  HomeFooterButton, HomeFooter } from '../helpers/HomeScreenStyledComponents'


export default class Home extends Component {

  render() {
    return (
      <HomeDivMain>

        <HomeHeader>
          <p>
            The <b>Cachalot</b> Project
            <HomeJoinButton>Join Us</HomeJoinButton>
          </p>
        </HomeHeader>

        <HomeSection>
          <HeroText>Be <b>Environment</b> Aware</HeroText>
          <h3>Find animal migrations near you.</h3>
        </HomeSection>

        <HomeFooter>
          <HomeFooterButton> Blog </HomeFooterButton>
          <HomeFooterButton> Policies </HomeFooterButton>
          <HomeFooterButton> Contact </HomeFooterButton>
        </HomeFooter>

      </HomeDivMain>
    )
  }
}
