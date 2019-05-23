import React, { useState } from 'react'


const SignUpModal = ({toggle, content}) => {
  const [isShown, setIsShown] = useState(false)
  const hideJoinUs = () => setIsShown(false)
  const showJoinUs = () => setIsShown(true)

  return (
    <React.Fragment>
      {toggle(showJoinUs)}
      {isShown && content(hideJoinUs)}
    </React.Fragment>
  )
}

export default SignUpModal
