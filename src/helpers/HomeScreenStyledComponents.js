import styled from 'styled-components'
import { Button, Footer } from '../helpers/StyledComponents'
// eslint-disable-next-line
import whaletale from '../assets/abigail-lynn-51622-unsplash.jpg'

// background-image: url(${props => whaletale});

const HomeDivMain = styled.div`
  background-image: linear-gradient(to right bottom,
                    rgb(66, 134, 244, 0.8),
                    rgb(65, 217, 244, 0.8)),
                    url(whaletale);
  backgroundPosition: center;
  backgroundSize: cover;
  backgroundRepeat: no-repeat;
  height: 100%;
  width: 100%;`

const HomeSectionTop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 1rem;`

const HomeSectionMiddle = styled.div`
  text-align: center;
  position: relative;
  top: 2rem;
  left: 0;
  margin: 0 0 0 0;`

const HomeFooter = styled(Footer)`
  margin: 2rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;`

const FooterButton = styled(Button)`
  text-align: center;
  border-radius: 0;
  margin: 0 3rem 0 0;`

const HomeJoinButton = styled(Button)`
  text-align: center;
  float: right;
  border-radius: 0;
  margin: 0 3rem 0 0;`

const HeroText = styled.h3`
  text-align: center;`

export {
  HomeDivMain,
  HomeSectionTop,
  HomeSectionMiddle,
  HomeJoinButton,
  FooterButton,
  HeroText,
  HomeFooter
}
