const container = document.querySelector("#container");
const button = document.createElement("button");
const button2 = document.createElement("button");

const table = document.createElement("table");
const td = document.createElement("td");

const form = document.querySelector("form");
const input = document.querySelectorAll("input");

const cardContainer = document.createElement("table");



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


const th1 = document.createElement("th");


let j;
const ideas = ["Name", "Author", "Pages", "Year", "Read Book", "Remove books"]
for(j in ideas){
    const th = document.createElement("th");
    th.textContent = ideas[j];
    console.log(j);
    table.appendChild(th);
}
// th.textContent = "Name";
// th1.textContent = "Author";


// table.appendChild(th);
// table.appendChild(th1);



//Add book to the array
function addBook(book){
    myLibrary.push(book);
    console.log(myLibrary);
}

let counter = 0;
button.addEventListener("click", () => {
    // const card = document.createElement("table");
    const p = document.createElement("tr");
    // card.classList.add("tr");
    
    let book = new Book();
    book.name = input[0].value;
    book.author = input[1].value;
    book.pages = input[2].value;
    book.year = input[3].value;

    if(input[0].value == ""){
        book.name = "Unknown";
    }
    
    if(input[1].value == ""){
        book.author = "Unknown";
    }
    if(input[2].value == ""){
        book.pages = "Unknown";
    }
    
    if(input[3].value == ""){
        book.year = "Unknown";
    }
    // if(input[4].value == ""){
    //     book.name = "unknown";
    // }
    
    

    for(let i = 0; i < 6; i++){
        const elements = document.createElement("td");
        const read = document.createElement("button");
        const remove = document.createElement("button");

        remove.textContent = "Remove Book".toUpperCase()
        read.textContent = "Read/Unread".toUpperCase();
    
    

        // elements.textContent = "yo";

        p.appendChild(elements);
        remove.addEventListener("click", () => {p.remove });
        // elements.classList.add = `c${i}`;
        switch(i){
            case 0:
                elements.textContent = book.name;
                break;
            case 1:
                elements.textContent = book.author;
                break;
            case 2:
                elements.textContent = book.pages;
                break;
            case 3:
                elements.textContent = book.year;
                break;
            case 4:
                elements.classList.add("td");
                elements.textContent = "Unread";
                // elements.textContent = "No \ ";
                
                
                break;
            case 5:
                elements.appendChild(remove);
                remove.addEventListener("click", ()=>{
                    p.remove();
                })

                elements.appendChild(read);
                read.addEventListener("click", () => {
                    let unread = document.querySelector(".td");
                    if(unread.textContent == "Unread"){
                        unread.textContent = "Read";
                        // unread.appendChild(read);
                    }
                    else if(unread.textContent = "Read"){
                        unread.textContent = "Unread";
                        // unread.appendChild(read);
                    }     

                })

                break;
            default:
                elements.textContent = "a";
        }
        
    // const names = document.querySelector(".c0");
    // names.textContent = input[0].value;
    
    }
    for(let j = 0; j < 4; j++ ){
        input[j].value = "";
    // elements.textContent = book.name;
}
    addBook(book);
    
    table.appendChild(p);
})

container.appendChild(button);
container.appendChild(table);