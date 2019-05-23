import styled from 'styled-components'
import whaletale from '../assets/abigail-lynn-51622-unsplash.jpg'
// eslint-disable-next-line
import { BrowserRouter as Route, Router, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'


const CachalotProjectText = styled.div`
  color: #101e35;
  margin: 0 auto;
  margin-left: 0.25rem;
  display: flex;
  font-size: 1.5rem;`

// main picture
const HomeDivMain = styled.div`
  background-image:
    linear-gradient(to left bottom,
                  rgb(126, 169, 234, 0.4),
                  rgb(1, 54, 135, 0.4)),
    url(${whaletale});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  position: fixed;`

// button
const HomeButtonContainer = styled.div``

const HomeButton = styled(Button)``

const SignUpButton = styled(HomeButton)`
  right: 0;
  top: 0;
  position: fixed !important;
  margin-right: 0.25rem !important;
  margin-top: 0.17rem !important;`

const HomeButtonLink = styled(Link)`
  text-decoration: none;
  color: #101e35;
  &::before {
    color: #101e35;
  }
  &::after {
    color: #101e35;
  }`

// center text, hero text
const HomeSection = styled.div`
  position: relative;
  top: 8rem;
  right: 10rem;
  left: 0;
  margin: 0;
  min-height: 98%;
  color: white;`

const HeroText = styled.h3`
  font-size: 2rem;
  color: white;
  margin-left: 12rem;`

const MessageH3 = styled.h3`
  font-size: 1.5rem;
  color: white;
  margin-left: 22rem;`


export {
  CachalotProjectText,
  SignUpButton,

  HomeSection,
  HomeDivMain,
  MessageH3,
  HeroText,

  HomeButton,
  HomeButtonContainer,
  HomeButtonLink
}
