import React, { useState } from 'react'
// components
import OtherMigrations from './OtherMigrations'
// styled components
import { MigrationText } from '../helpers/MigrationScreenStyledComponents'

const ShowMigration = props => {
  const [isShown, setIsShown] = useState(true)
  const hide = () => setIsShown(false)
  const show = () => setIsShown(true)

  return (
    <React.Fragment>
      {(isShown === true) &&
        <React.Fragment>
          <MigrationText onClick={hide} >
            <u>Show Migrations &#9650;</u>
          </MigrationText>
        </React.Fragment>
      }
      {(isShown === false) &&
        <React.Fragment>
          <MigrationText onClick={show}>
            <u>Hide Migrations &#9660;</u>
          </MigrationText>

          <MigrationText>
            <OtherMigrations
              migration_list={props.migration_list}
              migration={props.migration}
              study_id={props.study_id}
              common_name={props.commonName}
              scientific_name={props.scientificName}
              sensor_type_id={props.sensorType}
            />
          </MigrationText>
        </React.Fragment>
      }
    </React.Fragment>
  )
}

export default ShowMigration
