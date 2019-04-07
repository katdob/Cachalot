import styled from 'styled-components'
import { Button, Footer, Header } from '../helpers/DefaultStyledComponents'
import whaletale from '../assets/abigail-lynn-51622-unsplash.jpg'

/*
TO DO:
- background-image only renders in part of the home screen and does not match the design
- there is a white border at the top of the viewport that must be removed
- the buttons do not match the design
- the HeroText and H3 elements need to match design
- ask Mike about what he means by "weird spacing" in the HomeHeader
*/

const HomeDivMain = styled.div`
  background-image: url(${whaletale});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;`

const HomeHeader = styled(Header)`
  color: white;`

const HomeSection = styled.div`
  text-align: center;
  position: relative;
  top: 2rem;
  left: 0;
  margin: 0;
  min-height: 98%;
  color: white;`

const HomeFooter = styled(Footer)``

const HomeFooterButton = styled(Button)`
  opacity: 20;
  background-color: grey;
  border-radius: 0.35rem;
  padding: 0.5rem 1rem;`
// the background-color is only grey for styling
// once the background-image issue is fixed then it can be changed to suit the design

const HomeJoinButton = styled(HomeFooterButton)`
  float: right;`

const HeroText = styled.h3`
  text-align: center;
  color: white;`

export {
  HomeDivMain,
  HomeHeader,
  HomeSection,
  HomeJoinButton,
  HomeFooterButton,
  HeroText,
  HomeFooter
}
