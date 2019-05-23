import React, { useState } from 'react'


const MigrationContext = React.createContext([{}, () => {}])

const MigrationProvider = props => {
  const [state, setState] = useState({})
  return (
    <MigrationContext.Provider value={[state, setState]}>
      {props.children}
    </MigrationContext.Provider>
  )
}

export default MigrationContext
export {
  MigrationContext,
  MigrationProvider
}
