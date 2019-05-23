import React, { useState } from 'react'
import styled from 'styled-components'


const ErrorBox = (input) => {
  // eslint-disable-next-line
  const [message, setMessage] = useState([input.input])

  const ErrorBoxDiv = styled.div`
    color: red;
    width: 10rem;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
  `

  return (
    <React.Fragment>
      <ErrorBoxDiv>
        <p>{ `${message}` }</p>
      </ErrorBoxDiv>
    </React.Fragment>
  )
}

export default ErrorBox
