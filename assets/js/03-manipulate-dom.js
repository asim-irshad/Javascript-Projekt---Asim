// log text content from #headline
console.log(document.getElementById('headline').innerHTML);


//// change the text from the headline to: „Cool, sie ist offen! :)“
document.getElementById("headline").innerHTML = "cool, sie is offen";


// set value of the input element #input to:
// „Hier steht Text“
document.getElementById("input").value = "Hier steht Text";


// set the value of the input element #input
// as the innerHtml of the div #output

document.getElementById("output").innerHTML = document.getElementById("input").value;

// add the class bg-black to the body
// if there it doesn't got it already
document.body.classList.add("bg-black");

// toggle the class border-red on the input
document.getElementById("input").classList.toggle("border-red");

// multiply the data-number attribute by 3
// and update the value in the dom
console.log(document.getElementById("output").dataset.number);
document.getElementById("output").dataset.number = (document.getElementById("output").dataset.number) *3;

document.write("<br><br><br><br> New Data number is: "); 
document.write(document.getElementById("output").dataset.number);