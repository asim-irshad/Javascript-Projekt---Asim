// log the value of the input on every input


document.getElementById("input").addEventListener("input", function () {
   console.log(document.getElementById("input").value);



// prevent default on button #submit click
// and change text of #output to „Der Button wurde geklickt!“

document.getElementById("submit").addEventListener("click", function (event) {
   event.preventDefault();
    document.getElementById("output").innerHTML = "Der Button wurde geklickt";
});



// log the message „500px erreicht“, when the user scrolls more than 500px

window.addEventListener(scroll)

window.onscroll = function() {myFunction()};

function myFunction() {
  if (window.scrollY > 500) {
    console.log( "500px erreicht", window.scrollY);
  }
}