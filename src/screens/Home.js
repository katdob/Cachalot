import React, { Component } from 'react'
import { HomeSectionTop, HomeDivMain, HomeJoinButton, HomeSectionMiddle,
  FooterButton, HeroText, HomeFooter } from '../helpers/HomeScreenStyledComponents'


export default class Home extends Component {

  render() {
    return (
      <HomeDivMain>
      <HomeSectionTop>
        <p>
          The <b>Cachalot</b> Project
          <HomeJoinButton>Join Us</HomeJoinButton>
        </p>
      </HomeSectionTop>
        <HomeSectionMiddle>
          <HeroText> Be  <b>Environment</b>  Aware </HeroText>
          <h3> Find animal migrations near you. </h3>
        </HomeSectionMiddle>
        <HomeFooter>
          <FooterButton> Blog </FooterButton>
          <FooterButton> Policies </FooterButton>
          <FooterButton> Contact </FooterButton>
        </HomeFooter>
      </HomeDivMain>
    )
  }
}
