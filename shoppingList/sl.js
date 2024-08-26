const shoppingList = document.querySelector("ul");
const inputBox = document.querySelector("input");
const button = document.querySelector("button");

// disable button by default
button.disabled = true;
// when key is pressed in the inputBox - button can be clicked
inputBox.onkeyup = () =>{
    button.disabled = false;
}



// method for button click - note the difference to how I made the event handler method above
button.addEventListener("click", () => {
    value = inputBox.value;

//list item that goes in to ul after button click
 const listItem = document.createElement("li");
 const span = document.createElement("span");
 const deleteButton = document.createElement("button");
 deleteButton.textContent= "Delete";
 listItem.append(span, deleteButton); // list item with value of input and a delete button

    //add value of input to the listItem
    span.textContent = value;
    //clear the input field
    inputBox.value = "";

    // add the list item to the shoppiing list
    shoppingList.appendChild(listItem);

    //deletes the list item from the shopping list
    deleteButton.addEventListener("click", () => {
        listItem.remove();
    } )
    
    // disable button again 
    button.disabled = true;

    //focus the input element ready for entering the next shopping list item.
    inputBox.focus();
 })


 



