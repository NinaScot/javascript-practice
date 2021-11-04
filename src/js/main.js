// Make two variables called first and last,
// then log them out together as your name.
// Make first variable
let first = "Nina";

// Make last variable
let last = "Scott";
// Log them out, but there needs to be a space between them
console.log(first + " " + last);

// Log that same thing out, whenever a person clicks
// a button on the page

// Make a variable for the buton (GET)
var button = document.querySelector("button");

// Define a function
function logName() {
  console.log(first + " " + last);
}

function appendName() {
  //Create  p element
  let p = document.createElement("p");

  //Put text inside the p element
  p.innerText = first + " " + last;
  console.log(p);
  //Append the p element as a child of the page's body
  document.body.appendChild(p);

  Appendchild = true;
}
// Attach function to click on button
button.addEventListener("click", appendName);

//Make an array of your three favorite hobbies
let hobbies = ["drawing", "sleeping", "eating"];

//Loop through the array and log each item using console.log()
//one way to do this loop
let ul = document.createElement("ul");
for (let i = 0; i < hobbies.length; i++) {
  //console.log(hobbies[i]);
  let li = document.createElement("li");
  li.innerText = hobbies[i];
  ul.appendChild(li);
}

document.body.appendChild(ul);

//another way to do this loop
// hobbies.forEach((hobby) => {
// console.log(hobby);
//});
