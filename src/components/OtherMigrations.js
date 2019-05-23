import React from 'react'
// styled components
import { MigrationText, MigrationTextGroup } from
  '../helpers/MigrationScreenStyledComponents'
// components
import ShowCoordinates from './ShowCoordinates'


const OtherMigrations = props => {

  return (
    <MigrationTextGroup>
      <MigrationText>
        {props.migration_list.map(
          m =>  <MigrationTextGroup key={"group"+m.individual_local_identifier}>
                  <MigrationText key={m.individual_local_identifier}>

                    Individual&nbsp;{m.individual_local_identifier}

                    <ShowCoordinates
                      locations={m.locations}
                    />

                  </MigrationText>
                </MigrationTextGroup>
        )}
      </MigrationText>
    </MigrationTextGroup>
  )
}

export default OtherMigrations
