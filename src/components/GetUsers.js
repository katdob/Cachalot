// http://127.0.0.1:5000/users
// get users from flask backend endpoint!
import axios from 'axios'


const getUsers = async (email, password) => {
  const header = {
      'Accept' : 'application/json' ,
      'method' : 'POST',
      'Access-Control-Allow-Origin' : 'x-requested-with',
      'origin' : 'x-requested-with',
      //'Access-Control-Allow-Headers' : '*',
    }
  //const proxyurl = `https://cors-anywhere.herokuapp.com/`
  const api_call = `http://127.0.0.1:5000/users?`

  const result = await axios.get(api_call, {
    params: {
      email: email,
    }
  }, { header : header })

  console.log('GetUsers.js')
  console.log(result)
  return result
}

export default getUsers
