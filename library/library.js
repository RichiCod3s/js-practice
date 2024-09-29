const myLibrary = [];
const bookContainer = document.querySelector("#book-container");

function Book(author, title, pages, read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = false;
}

Book.prototype.toString = function() {
    return `Title: ${this.title}<br> Author: ${this.author}<br> Pages: ${this.pages}`;
};

Book.prototype.toggleReadStatus = function() {
    this.read = !this.read; // Toggle the read status
};

function addBookToLibrary(book){
    let index = myLibrary.length;
    myLibrary[index] = book;
}

function displayBooks(){
    bookContainer.innerHTML ="";
    // display book to page
    for(let i = 0; i<myLibrary.length; i++){
        const para = document.createElement("p");
        para.classList.add("para");
        para.setAttribute("data-index",i);
        para.innerHTML = myLibrary[i].toString();

          //add remove button to book
        const removeButton = document.createElement("button");
         removeButton.textContent = "Remove;"
   
         
    // remove button functionality
    removeButton.addEventListener("click", function(){
        myLibrary.splice(i, 1); // remove book from array
        para.remove(); // remove p from div
    });

    // Create a button to toggle read status
    const toggleReadButton = document.createElement("button");
    //set text for togglebutton
    toggleReadButton.textContent = myLibrary[i].read ? "Mark as Unread" : "Mark as Read";

    //toggle button functionality
    toggleReadButton.addEventListener("click", function() {
        myLibrary[i].toggleReadStatus(); // Toggle read status
        displayBooks();
    });

    const div = document.createElement("div");
    div.classList.add("card-btn-div");

    // add buttons to p
    div.appendChild(toggleReadButton);
    div.append(removeButton);
    para.append(div);
    //add p to div
    bookContainer.append(para);
    
    }// forloop  
    console.table(myLibrary);
}


//opens up form on page
const modal = document.querySelector("#modal");
const openForm = document.querySelector("#open-form-btn");
const closeForm = document.querySelector("#close-form-btn");

openForm.addEventListener("click", function(){
 modal.showModal();
});

// submits the new book
const submit = document.querySelector("#submit");

// add book to array
 submit.addEventListener("click", function(event){
    event.preventDefault(); // Prevents the form from submitting and reloading the page
    const author = document.querySelector("#author").value;
    const title = document.querySelector("#title").value;
    const pages = document.querySelector("#pages").value;
   let book = new Book(author, title, pages);
   
    addBookToLibrary(book);
    
    //clear the text in the forms
    document.querySelector("#author").value = "";
   document.querySelector("#title").value = "";
    document.querySelector("#pages").value ="";
    
    //run display books function
    displayBooks();
 });

 closeForm.addEventListener("click", function(){
    modal.close();
   });

  let  book1 = new Book("Noal Hararri","Sapians", 123);
  let  book2 = new Book("Mario Puzo","The Godfather", 236);  
  let  book3 = new Book("Mr Kipling","The Junglebook", 115);  

   addBookToLibrary(book1);
   addBookToLibrary(book2);
   addBookToLibrary(book3);
   displayBooks();