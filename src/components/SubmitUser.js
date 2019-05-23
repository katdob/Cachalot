// http://127.0.0.1:5000/users
// get users from flask backend endpoint!
import axios from 'axios'

const submitUser = async (username, email, password, password2) => {
  const header = { 'Accept' : 'application/json' , 'method' : 'GET',
      'Authorization' : 'Basic' }
  const api_call = ''

  const result = await axios.get(api_call, {
    params: {
      username: username,
      email: email,
      password: password,
      password2: password2
    }
  }, { header : header })

  return result
}

export default submitUser
