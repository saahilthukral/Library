const container = document.querySelector("#container");
// const container2 = document.createElement("div")
// const input = document.createElement("input");
const button = document.createElement("button");
const button2 = document.createElement("button");

const form = document.querySelector("form");
const input = document.querySelectorAll("input");

const cardContainer = document.createElement("table");


const read = document.createElement("button");
const remove = document.createElement("button");

remove.textContent = "Remove Book".toUpperCase()
read.textContent = "Read/Have not read book";
button.textContent = "ADD BOOK";
button2.textContent = "Read/Unread";

const reads = document.createElement("checkbox");

myLibrary = [];

//Book class
function Book(){
    this.name = "unknown";
    this.author = "unknown";
    this.pages = "unknown";
    this.year = null;
}
Book.prototype.read = "no";

//Add book to the array
function addBook(book){
    myLibrary.push(book);
    console.log(myLibrary);
}

let counter = 0;
button.addEventListener("click", () => {
    
    const card = document.createElement("tr");
    card.classList.add("tr");
    
    let book = new Book();
    book.name = input[0].value;
    book.author = input[1].value;
    book.pages = input[2].value;
    book.year = input[3].value;
    
    let i = 0;
    while(i < 4){
        input[i].value = "";
        i++;
    }
    
    card.textContent =  `Name: ${book.name} \n Author: ${book.author} \n Pages: ${book.pages} \n Year: ${book.year} \n Read: ${book.read}`;

    addBook(book);
    
    
    cardContainer.appendChild(card);
})


// function changeRead(){
    //     for(i in myLibrary){
    //         console.log(myLibrary[i].read);
    //         if(myLibrary[i].read == "no"){
    //             myLibrary[i].read = "yes";
    //         }
    //         console.log(myLibrary[i].read);
    
    //     }
    // }
    // changeRead()

// container.appendChild(remove);
container.appendChild(button);
// container.appendChild(read);
// container.appendChild(card);

container.appendChild(cardContainer);