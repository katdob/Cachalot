// Global Biodiversity Information Facility

// http://api.gbif.org/v1/species?
// datasetKey=ca515b82-e301-43ff-9f69-2c0116e1c95b
// &sourceId=6B773CF4C72F0995A4228111BFAA28B8.taxon

// http://api.gbif.org/v1/parser/
// name?name=Abies%20alba%20Mill.%20sec.%20Markus%20D.
// &name=Abies%20pinsapo%20var.%20marocana%20(Trab.)%20Ceballos%20%26%20Bola%C3%B1o%201928

// GENUS: http://api.gbif.org/v1/species/match/?genus=phoebastria&species=pirrorata
// http://api.gbif.org/v1/species/search?q=Phoebastria&rank=genus
// BEST:
// http://api.gbif.org/v1/species/search?q=Phoebastria%20irrorata&rank=species
// phoebastria irrorata
// http://api.gbif.org/v1/species/search?q=waved%20albatross&rank=species
// waved albatross
import axios from 'axios'


const getGBIFData = async (species) => {
  species = species.toString()
  let s = species.split(' ')
  if (s.length > 1) {
    species = species.replace(' ', '%20')
  }
  const header = { 'Accept' : 'application/json' , 'method' : 'GET' }//,
      // 'Authorization' : 'Basic', 'username' : '',
      // 'password' : '!' }
  const proxyurl = `https://cors-anywhere.herokuapp.com/`
  const gbif_api_call = `http://api.gbif.org/v1/species/search?q=${species}&rank=species`

  const result = await axios.get(proxyurl+gbif_api_call, { header : header })

  return result
}

export default getGBIFData
