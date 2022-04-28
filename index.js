const grid = document.querySelector("#grid")
const container = document.querySelector("#container");
const container2 = document.querySelector("#container2");

const button = document.createElement("button");
const button2 = document.createElement("button");

const table = document.createElement("table");
const td = document.createElement("td");

const form = document.querySelector("form");
const input = document.querySelectorAll("input");

const cardContainer = document.createElement("table");

container.style.backgroundColor = "skyblue";
container.style.padding = "1rem";

form.style.marginBottom = "10px"
table.style.backgroundColor = "beige";
table.style.padding = "2vw";

container2.style.backgroundColor = "beige"
container2.style.gridColumnStart = -2;
container2.style.gridColumnEnd = 4;

grid.style.height = "100vh";

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


// const th1 = document.createElement("th");


let j;
const ideas = ["Name", "Author", "Pages", "Year", "Read Book", "Remove books"]
for(j in ideas){
    const th = document.createElement("th");
    th.style.width = "auto";
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
    if(Number(input[2].value) <= 0){
        book.year = "0";
    }
    
    if(input[3].value == ""){
        book.year = "Unknown";
    }
    else if(Number(input[3].value) <= 0){
        book.year = "0";
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
        // remove.addEventListener("click", () => {p.remove});
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
                elements.appendChild(read);
                read.style.width = "120px";
                read.style.padding = "1 rem";

                read.textContent = "Change status";
                read.addEventListener("click", () => { 
                })
                
                read.addEventListener("click", () => {
                    if(read.textContent == "Unread" || read.textContent == "Click to change status" ){
                        read.textContent = "Read";
                        // unread.appendChild(read);
                    }
                    else if(read.textContent = "Read"){
                        read.textContent = "Unread";
                        // unread.appendChild(read);
                    }     

                })
                // elements.textContent = "No \ ";

                break;
            case 5:
                remove.style.width = "120px";
                remove.style.padding = "1 rem";
                elements.appendChild(remove);
                remove.addEventListener("click", ()=>{
                    p.remove();
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
container2.appendChild(table);