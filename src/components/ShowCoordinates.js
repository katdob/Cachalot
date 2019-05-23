import React, { useState } from 'react'
// components
import Coordinates from './Coordinates'
// styled components
import { MigrationText } from '../helpers/MigrationScreenStyledComponents'

const ShowCoordinates = props => {
  const [showCoords, setShowCoords] = useState(true)
  const hide_coords = () => setShowCoords(false)
  const show_coords = () => setShowCoords(true)

  return (
    <React.Fragment>
      {(showCoords === true) &&
        <React.Fragment>
          <MigrationText onClick={hide_coords} >
            <u>Show Coordinates & Map &#9650;</u>
          </MigrationText>
        </React.Fragment>
      }
      {(showCoords === false) &&
        <React.Fragment>
          <MigrationText onClick={show_coords}>
            <u>Hide Coordinates & Map &#9660;</u>
          </MigrationText>

          <MigrationText>
            <Coordinates
              locations={props.locations}
            />
          </MigrationText>
        </React.Fragment>
      }
    </React.Fragment>
  )
}

export default ShowCoordinates
