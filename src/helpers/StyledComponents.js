import styled from 'styled-components'
import whaletale from '../assets/abigail-lynn-51622-unsplash.jpg'


const HomeDivMain = styled.div`
  background-image: url(${props => whaletale});
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

const Footer = styled.div`
  margin: 2rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;`

const Button = styled.button``

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
  Footer,
  HomeJoinButton,
  FooterButton,
  HeroText
}
