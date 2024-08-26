
const container = document.querySelector("#container");

//a <p> with red text that says “Hey I’m red!”
const para = document.createElement("p");
para.classList.add("para"); // creates a class/id
para.textContent = "Hey I'm red!";
para.style.color = "red";

container.appendChild(para);

//an <h3> with blue text that says “I’m a blue h3!”
const heading3 = document.createElement("h3");
heading3.classList.add("heading3");
heading3.textContent = "I'm a blue h3";
heading3.style.color = "blue";

container.appendChild(heading3);

//a <div> with a black border and pink background color with the following elements inside of it:
//another <h1> that says “I’m in a div”
//a <p> that says “ME TOO!”

const div = document.createElement("div");
div.classList.add("div");
div.style.borderStyle ="solid";
div.style.borderColor = "black" 
div.style.backgroundColor = "pink";

const heading1 = document.createElement("h1");
heading1.classList.add("heading1");
heading1.textContent = "I'm in a div";

const p = document.createElement("p");
p.textContent = "Me TOO!";

//appendChild adds a single element at a time, while append can add multiple elements or text nodes
div.append(heading1, p);

container.appendChild(div);



//The e parameter in that callback function contains an object that references the event itself. 
//in this case the button
btn.addEventListener("click", function (e) {
    console.log(e);
  });

  btn.addEventListener("click", function (e) {
    console.log(e.target);
  });
  
  btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });
  