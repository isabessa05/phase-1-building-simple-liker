// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let modal = document.querySelector('.hidden')

const clickForLike = document.getElementsByClassName("like-glyph")

clickForLike.addEventListener('click', (mimicServerCall))
.then()

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}



// .catch((function (error){

//   // get the modal class
//   // display error by removing hidden class
//   // use time out to hide the error after 3 seconds

//   let modal = document.getElementById("modal");

//   modal.className = ("") ;
//   modal.innerText = Error;
//   setTimeout (() => (modal.className = (".hidden"), 3000))

// }))

