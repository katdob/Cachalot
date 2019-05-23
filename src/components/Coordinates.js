import React from 'react'
// styled components
import { MigrationDetailsText, MigrationTextGroup } from
  '../helpers/MigrationScreenStyledComponents'

const Coordinates = props => {

  return (
    <React.Fragment>
      {props.locations.map(
        l => <React.Fragment key={"key"+l.timestamp}>
              <MigrationTextGroup key={"group"+l.timestamp}>
                <MigrationDetailsText key={l.timestamp}>
                  <u>Timestamp</u>: &nbsp; {l.timestamp}, &nbsp;&nbsp;
                </MigrationDetailsText>

                <MigrationDetailsText key={l.location_lat}>
                  <u>Latitude</u>: &nbsp; {l.location_lat}, &nbsp;&nbsp;
                </MigrationDetailsText>

                <MigrationDetailsText key={l.location_long}>
                  <u>Longitude</u>: &nbsp; {l.location_long}, &nbsp;&nbsp;
                </MigrationDetailsText>

                <MigrationDetailsText key={"map"+l.timestamp}>
                  MAP_LINK
                 </MigrationDetailsText>
              </MigrationTextGroup>
            </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default Coordinates
