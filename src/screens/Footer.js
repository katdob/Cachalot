import React from 'react'
// styled components
import { Footer } from '../helpers/DefaultStyledComponents'
import { HomeButton, HomeButtonLink, HomeButtonContainer }
  from '../helpers/HomeScreenStyledComponents'
// react-router


const HomeFooter = ( props ) => {

  return (
    <Footer>

        <HomeButton variant="outlined">
          <HomeButtonContainer>
            <HomeButtonLink to={`/policies/`}><b>Policies</b></HomeButtonLink>
          </HomeButtonContainer>
        </HomeButton>

        <HomeButton variant="outlined">
          <HomeButtonContainer>
            <HomeButtonLink to={`/blog/`}><b>Blog</b></HomeButtonLink>
          </HomeButtonContainer>
        </HomeButton>

        <HomeButton variant="outlined">
          <HomeButtonContainer>
            <HomeButtonLink to={`/contact/`}><b>Contact</b></HomeButtonLink>
          </HomeButtonContainer>
        </HomeButton>

    </Footer>
  )
}

export default HomeFooter
