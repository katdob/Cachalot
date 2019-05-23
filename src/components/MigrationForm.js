import React, { useState, useContext, useEffect, useCallback } from 'react'
// eslint-disable-next-line
import ReactTimeout from 'react-timeout'
// material ui
import TextField from '@material-ui/core/TextField'
import FormHelperText from '@material-ui/core/FormHelperText'
import MenuItem from '@material-ui/core/MenuItem'
// styled components
import { Hypertext, DefaultPage } from '../helpers/DefaultStyledComponents'
import { MigrationDiv, MigrationText, MigrationButton, MigrationFormDiv,
  MigrationSelect, MigrationColumn } from
  '../helpers/MigrationScreenStyledComponents'
// screens
import HomeFooter from '../screens/Footer'
import HomeHeader from '../screens/Header'
// context
import { MigrationProvider, MigrationContext }
  from '../Contexts/MigrationContext'
// components
import getMovebankData from './Movebank'
import getGBIFData from './GBIF'
import RenderMigration from './RenderMigration'


const MigrationForm = () => {
  // eslint-disable-next-line
  const [state, setState] = useContext(MigrationContext)

  const [studyID, setStudyID] = useState(``)
  const [individualID, setIndividualID] = useState(``)

  const [locationsRequested, setLocationsRequested] = useState(``)
  // eslint-disable-next-line
  const [locationsRequestedList, setlocationsRequestedList] = useState(['5', '10'])

  const [sensorType, setSensorType] = useState(``)
  // eslint-disable-next-line
  const [sensorTypeList, setSensorTypeList] = useState(['gps'])

  const [migration, setMigration] = useState()
  const [migrationList, setMigrationList] = useState()

  const [scientificName, setScientificName] = useState(``)
  const [scientificNameList, setScientificNameList] = useState(``)
  const [commonName, setCommonName] = useState(``)
  const [commonNameList, setCommonNameList] = useState(``)

  const submitForm = async(e) => {
    e.preventDefault()

    if (studyID) {
      let initialValue = []

      await getMovebankData(studyID, individualID, locationsRequested, sensorType)
        .then(r => {
          r.data.individuals.forEach(m => {
            initialValue.push(m)
          })
        })

      setMigrationList(initialValue)
    }
  }

  const setM = useCallback(() => {

    if (migrationList) {
      let l = ''
      migrationList.forEach((m) => {
        if (m.individual_local_identifier === individualID) {
          l = m
        }
      })
      setMigration(l)
    }
  }, [individualID, migrationList])

  const setLists = useCallback( async () => {

    if (migration) {
      let vns = []
      let sns = []
      await getGBIFData(migration.individual_taxon_canonical_name.toLowerCase()).then(r => {

        r.data.results.forEach(i => {

          if (typeof i.species != 'undefined') {
            sns.push(i.species.toLowerCase().toString())
          }
          //sns.push(i.species.toLowerCase().toString())

          i['vernacularNames'].forEach(n => {
            vns.push(n.vernacularName.toLowerCase().toString())
          })
        })

        const unique_vns = [...new Set(vns)]
        setCommonNameList(unique_vns)
        const unique_sns = [...new Set(sns)]
        setScientificNameList(unique_sns)
      })

    } else if (commonName) {
      let vns = []
      let sns = []
      await getGBIFData(commonName.toLowerCase()).then(r => {
        r.data.results.forEach(i => {

          if (i.species) {
            sns.push(i.species.toLowerCase().toString())

            i['vernacularNames'].forEach(n => {
              vns.push(n.vernacularName.toLowerCase().toString())
            })
          }
        })
        const unique_vns = [...new Set(vns)]
        setCommonNameList(unique_vns)
        const unique_sns = [...new Set(sns)]
        setScientificNameList(unique_sns)
      })
    }
  }, [migration, commonName])

  useEffect(() => {

    setTimeout(() => {
      setLists()
    }, 1000)

    setTimeout(() => {
      setM()
    }, 5000)
  }, [setM, setLists])

  return (
    <MigrationProvider>
      <Hypertext>
        <HomeHeader />
          <DefaultPage>
            <MigrationColumn>

              <form onSubmit={submitForm}>
                <MigrationDiv>

                  <MigrationFormDiv>
                    <MigrationText>
                      <TextField
                        id="commonName"
                        label={''}
                        placeholder="e.g. albatross"
                        type="text"
                        autoComplete="albatross"
                        margin="normal"
                        name="commonName"
                        onChange={e => setCommonName(e.target.value)}
                      />
                      <FormHelperText>Enter an Animal Name</FormHelperText>
                    </MigrationText>
                  </MigrationFormDiv>

                  <MigrationFormDiv>
                    <MigrationText>
                      {(commonNameList.length === 0) &&
                        <MigrationSelect
                          disabled
                          value=''
                        >
                        </MigrationSelect>
                      }
                      {(commonNameList.length >= 1) &&
                        <MigrationSelect
                          value={`${commonName}`}
                          autoComplete={`${commonNameList[0]}`}
                          onChange={e => setCommonName(e.target.value)}
                          label=""
                        >
                        {commonNameList.map(name => (
                          <MenuItem key={name} value={name}>
                            {name}
                          </MenuItem>
                        ))}
                        </MigrationSelect>
                      }
                      <FormHelperText>Select a Common Animal Name</FormHelperText>
                    </MigrationText>

                    <MigrationText>
                      {(!scientificNameList) &&
                        <MigrationSelect
                          disabled
                          value=''
                        >
                        </MigrationSelect>
                      }
                      {(scientificNameList.length >= 1) &&
                        <MigrationSelect
                          value={`${scientificName}`}
                          autoComplete={`${scientificNameList[0]}`}
                          onChange={e => setScientificName(e.target.value)}
                          label=""
                        >
                        {scientificNameList.map(name => (
                          <MenuItem key={name} value={name}>
                            {name}
                          </MenuItem>
                        ))}
                        </MigrationSelect>
                      }
                      <FormHelperText>Select a Scientific Animal Name</FormHelperText>
                    </MigrationText>

                  </MigrationFormDiv>

                  <MigrationFormDiv>
                    <MigrationText>
                      <TextField
                        id="studyID"
                        label={''}
                        placeholder="e.g. 2911040"
                        type="text"
                        autoComplete="2911040"
                        margin="normal"
                        name="studyID"
                        onChange={e => setStudyID(e.target.value)}
                      />
                      <FormHelperText>Movebank Study ID</FormHelperText>
                    </MigrationText>

                    <MigrationText>
                      <TextField
                        id="individualID"
                        label={''}
                        placeholder="e.g. 4261-2228"
                        type="text"
                        autoComplete="2461-2228"
                        margin="normal"
                        name="individualID"
                        onChange={e => setIndividualID(e.target.value)}
                      />
                      <FormHelperText>Movebank Individual ID</FormHelperText>
                    </MigrationText>
                  </MigrationFormDiv>

                  <MigrationFormDiv>
                    {(studyID.length > 0) && (individualID.length > 0) &&
                      <MigrationText>
                        <MigrationSelect
                          value={`${locationsRequested}`}
                          autoComplete={`${locationsRequestedList[0][0]}`}
                          onChange={e => setLocationsRequested(parseInt(e.target.value))}
                          label=""
                        >
                        {locationsRequestedList.map(name => (
                          <MenuItem key={name} value={name}>
                            {name}
                          </MenuItem>
                        ))}
                        </MigrationSelect>
                        <FormHelperText>Select Number of Locations</FormHelperText>
                      </MigrationText>
                    }

                    {(studyID.length > 0) && (individualID.length > 0) &&
                      <MigrationText>
                        <MigrationSelect
                          value={`${sensorType}`}
                          autoComplete={`${sensorTypeList[0]}`}
                          onChange={e => setSensorType(e.target.value)}
                          label=""
                        >
                        {sensorTypeList.map(name => (
                          <MenuItem key={name} value={name}>
                            {name}
                          </MenuItem>
                        ))}
                        </MigrationSelect>
                        <FormHelperText>Select a Sensor Type</FormHelperText>
                      </MigrationText>
                    }
                  </MigrationFormDiv>

                  <MigrationFormDiv>
                      <MigrationButton variant="contained" type="button" onClick={submitForm}>
                        SHOW Animal Migration DATA
                      </MigrationButton>
                  </MigrationFormDiv>

                </MigrationDiv>
              </form>

              {(commonName) && (scientificName) &&
                <RenderMigration
                  migration_list={migrationList}
                  migration={migration}
                  study_id={studyID}
                  common_name={commonName}
                  scientific_name={scientificName}
                  sensor_type_id={sensorType}
                />
              }

            </MigrationColumn>
          </DefaultPage>
        <HomeFooter />
      </Hypertext>
    </MigrationProvider>
  )
}

export default MigrationForm
