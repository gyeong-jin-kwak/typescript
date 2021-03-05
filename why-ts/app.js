// api url
var url = 'https://jsonplaceholder.typicode.com/users';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

function startApp() {
  axios
    .get(url)
    .then(function (response) {
      console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user)
      username.innerHTML = user[0].name;
      email.innerHTML = user[0].email;
      address.innerHTML = user[0].address.street;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
