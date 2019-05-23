import styled from 'styled-components'


const Hypertext = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  color: #101e35;
  scroll: 'auto';
  overflow: auto;`

const Header = styled.div`
  background-color: #F7F7F7;
  margin: 0 auto;
  padding: 0.25rem 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  font-size: 0.75rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;`

const DefaultPage = styled.div`
  background-image: linear-gradient(to left bottom,
                    rgb(126, 169, 234, 0.4),
                    rgb(1, 54, 135, 0.4));
  height: 100vh;
  width: 100vw;
  top: 2.5rem;
  left: 0;
  position: fixed;
  overflow: auto;`

const Footer = styled.div`
  background-color: #F7F7F7;
  margin: 0 auto;
  padding: 0.25rem 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;`


export {
  Hypertext,
  Footer,
  Header,
  DefaultPage
}
