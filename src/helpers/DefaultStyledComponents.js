import styled from 'styled-components'


const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  margin: 1rem;`

const Footer = styled.div`
  margin: 2rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  text-align: center;`

const Button = styled.button`
  text-align: center;
  border-radius: 0;
  margin: 0 3rem 0 0;
  color: white;`


export {
  Footer,
  Button,
  Header
}
