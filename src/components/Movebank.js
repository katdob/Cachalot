import axios from 'axios'


const getMovebankData = async (sid, iid, loc, sensor) => {
  const header = { 'Accept' : 'application/json' , 'method' : 'GET',
      'Authorization' : 'Basic', 'username' : 'meerkatydid',
      'password' : 'Orion1986!' }
  const proxyurl = `https://cors-anywhere.herokuapp.com/`
  const movebank_api_call = `https://www.movebank.org/movebank/service/public/json?`
  const ildstr = `individual_local_identifiers=`+iid

  const result = await axios.get(proxyurl+movebank_api_call, {
    params: {
      study_id: sid,
      ildstr,
      max_events_per_individual: loc,
      sensor_type: sensor
    }
  }, { header : header })

  return result
}

export default getMovebankData
