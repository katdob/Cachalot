import React, { useState } from 'react'


const LogInModal = ({toggle, content}) => {
  const [shownJoinUs, setShownLogIn] = useState(false)
  const hideLogIn = () => setShownLogIn(false)
  const showLogIn = () => setShownLogIn(true)

  return (
    <React.Fragment>
      {toggle(showLogIn)}
      {shownJoinUs && content(hideLogIn)}
    </React.Fragment>
  )
}

export default LogInModal
