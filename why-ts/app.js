// api url
var url = 'https://jsonplaceholder.typicode.com/users/1'

// dom
var username = document.querySelector('#username')
var email = document.querySelector('#email')
var address = document.querySelector('#address')

// user data
var user = {}

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {string}
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url)
}

// fetchUser().then(function(response){
//   response.email
// })

// console.log(fetchUser())

function startApp() {
  // axios
  //   .get(url)
  fetchUser()
    .then(function (response) {
      console.log(response)
      user = response.data
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user)
      username.innerHTML = user.name
      email.innerHTML = user.email
      address.innerHTML = user.address.street
    })
    .catch(function (error) {
      console.log(error)
    })
}

startApp()
