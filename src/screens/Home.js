import React, { Component } from 'react'
import { HomeSectionTop, HomeDivMain, HomeJoinButton, HomeSectionMiddle,
  Footer, FooterButton, HeroText } from '../helpers/StyledComponents'


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
        <Footer>
          <FooterButton> Blog </FooterButton>
          <FooterButton> Policies </FooterButton>
          <FooterButton> Contact </FooterButton>
        </Footer>
      </HomeDivMain>
    )
  }
}
