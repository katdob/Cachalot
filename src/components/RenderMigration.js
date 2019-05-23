import React from 'react'
// styled components
import { MigrationDiv, MigrationText, MigrationH3, MigrationTextGroup,
  MigrationDetailsText } from '../helpers/MigrationScreenStyledComponents'
// show migration modal
import ShowMigration from './ShowMigration'


// There's ▲: &#9650; and ▼: &#9660;
const RenderMigration = props => {

  if (props.migration_list) {
    return (
      <div>
        <div>
          <MigrationDiv>

            <MigrationH3><b>Study {props.study_id}</b></MigrationH3>

            {(props.migration) &&
              <MigrationTextGroup>
                <MigrationText>
                  Here are the
                  &nbsp;{props.migration.locations.length}&nbsp;
                  {props.sensor_type_id}&nbsp;
                  locations for the migration of
                  &nbsp;{props.common_name}&nbsp;
                  ({props.migration.individual_taxon_canonical_name})
                  individual
                  &nbsp;{props.migration.individual_local_identifier}.
                </MigrationText>
              </MigrationTextGroup>
            }

            {(props.migration) &&
              <MigrationTextGroup>
                <MigrationText>
                  {props.migration.locations.map(
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
                </MigrationText>
              </MigrationTextGroup>
            }

            <MigrationTextGroup>
              <MigrationText>

                There are {props.migration_list.length - 1} other individuals in
                Study {props.study_id}.

                <ShowMigration
                  migration_list={props.migration_list}
                  migration={props.migration}
                  study_id={props.study_id}
                  common_name={props.common_name}
                  scientific_name={props.scientific_name}
                  sensor_type_id={props.sensor_type_id}
                />

              </MigrationText>
            </MigrationTextGroup>

          </MigrationDiv>
        </div>
      </div>
    )
  }
  return false
}

export default RenderMigration
