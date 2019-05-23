import styled from 'styled-components'

const ModalMain = styled.div`
  color: #101e35;
  position: fixed;
  right: 1rem;
  top: 2.7rem;
  padding: 2rem;
  background-color: #F7F7F7;
  border-radius: 1rem;
  border: 0.25rem solid #1E3B67;
  display: flex;
  flex-direction: row;
  justify-content: center;`

const Modal = styled.div`
  padding-top: 1.7rem;
  display: flex;
  flex-direction: row;
  justify-content: center;`

const LogInLink = styled.div`
  display: flex;
  flex-direction: row-reverse;`

export {
  Modal,
  LogInLink,
  ModalMain
}
