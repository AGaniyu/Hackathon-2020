

function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

//   function closeSearch() {
//     document.getElementById("myOverlay").close();
//   }

function myFunction() {
  var taskInput = document.getElementsByName("add")[0].value;
  var text = document.createTextNode(taskInput);
  var newUser = document.createElement("li");
  newUser.appendChild(text);
  document.getElementById("add").appendChild(newUser);
}

function addUser() {
  const url = 'https://randomuser.me/api';
  // The data we are going to send in our request
  let data = {
    name: 'Sara'
  }
  // The parameters we are gonna pass to the fetch function
  let fetchData = {
    method: 'POST',
    body: data,
    headers: new Headers()
  }
  fetch(url, fetchData)
    .then(function () {
      // Handle response you get from the server
    });
}