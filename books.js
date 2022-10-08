let library = [];
let addBook_btn = document.querySelector(".add-book-btn");
let main_element = document.querySelector("main");
let body_element = document.querySelector("body");
let footer_element = document.querySelector("footer");
let save_btn = document.querySelector(".save-book-btn");

function book() {
    
}
book.prototype.info = function (bookTitle){
    for (let i = 0 ; i < library.length ; i++){
        if (bookTitle == library[i].title){
            let isReaded = "";
            library[i].read == true ? isReaded = "has been readed" : isReaded = "havnt been read yet !" ;
            return `${library[i].title} by ${library[i].author} , ${library[i].pages} pages , ${isReaded}`; 
        }
    }
        
    
}
book.prototype.bookShelf = function (){
        let containers = document.querySelectorAll(".book-container");
        for (let container of containers){
            container.remove()
        }
        for(let Book in library) {
            let book_container = document.createElement("div");
            book_container.classList.add("book-container");
            main_element.appendChild(book_container);
            let book_title = document.createElement("div");
            book_title.classList.add("book-title");
            book_title.textContent = library[Book].title;
            book_container.appendChild(book_title);
            let book_author = document.createElement("div");
            book_author.classList.add("book-author");
            book_author.textContent = library[Book].author;
            book_container.appendChild(book_author)
            let book_pages = document.createElement("div");
            book_pages.classList.add("book-pages")
            book_pages.textContent = library[Book].pages;
            book_container.appendChild(book_pages);
            let book_read = document.createElement("div");
            book_read.classList.add("book-read");
            let checked_logo = document.createElement("img");
            checked_logo.classList.add("checked-logo");
            checked_logo.setAttribute("src" , "./checked.svg");
            checked_logo.setAttribute("alt" , "");
            let not_checked_logo = document.createElement("img");
            not_checked_logo.classList.add("not-checked-logo");
            not_checked_logo.setAttribute("src", "./not-checked.svg");
            not_checked_logo.setAttribute("alt" , "");
            library[Book].read == true ? book_read.appendChild(checked_logo) : book_read.appendChild(not_checked_logo);
            book_container.appendChild(book_read);
            let book_title_title = document.createElement("div");
            book_title_title.classList.add("book-title-title");
            book_title_title.textContent = "Book Title";
            book_container.appendChild(book_title_title);
            let book_author_title = document.createElement("div");
            book_author_title.classList.add("book-author-title");
            book_author_title.textContent = "Written By :";
            book_container.appendChild(book_author_title);
            let book_pages_title = document.createElement("div");
            book_pages_title.classList.add("book-pages-title");
            book_pages_title.textContent = "Number Of Pages";
            book_container.appendChild(book_pages_title);
            let book_read_title = document.createElement("div");
            book_read_title.classList.add("book-read-title");
            book_read_title.textContent = "Readed Yet ?";
            book_container.appendChild(book_read_title);
            let remove_btn = document.createElement("button");
            remove_btn.setAttribute("type", "button");
            remove_btn.setAttribute("title" , "Remove Book")
            remove_btn.textContent = "X";
            remove_btn.classList.add("close-btn")
            book_container.appendChild(remove_btn);
            book_read.addEventListener("click" , () => {
                if(library[Book].read == true) {
                    library[Book].read = false;
                    booker.bookShelf()
                } else {
                    library[Book].read = true;
                    booker.bookShelf()
                }
            })
        }
}
book.prototype.addBook = function(title , pages , author , read){
    this.prototype = Object.create(book.prototype)
    this.prototype.title = title;
    this.prototype.pages = pages;
    this.prototype.author = author;
    this.prototype.read = read
    
    library.push(this.prototype)
} 

book.prototype.removeBook = function(){
    let rmv_btns = document.querySelectorAll(".close-btn");
    let z = 0;
    for (let btn of rmv_btns) {
        btn.id = z;
        z++;
        btn.addEventListener("click", () => {
            for(let i = 0 ; i < library.length ; i++){
                if(i == btn.id){
                    library.splice(i , 1)
                    booker.bookShelf();
                    booker.removeBook()
                }
            }
        })
    }
}

const booker = new book()

addBook_btn.addEventListener("click" , () => {
    let book_form_layer = document.querySelector(".book-form-layer");
    let book_form = document.querySelector(".book-form");
    book_form.setAttribute("style", "display: block");
    book_form_layer.setAttribute("style", "display: grid");
})
save_btn.addEventListener("click", () => {
    let book_title = document.querySelector(".name");
    let book_author = document.querySelector(".author")    
    let book_pages = document.querySelector(".pages")
    let book_read = document.querySelector(".read")
    booker.addBook(book_title.value , book_pages.value , book_author.value , book_read.checked)
    let book_form_layer = document.querySelector(".book-form-layer");
    let book_form = document.querySelector(".book-form");
    book_form.setAttribute("style", "display: none");
    book_form_layer.setAttribute("style", "display: none");
    booker.bookShelf()
    booker.removeBook()
})


booker.addBook("Harry Potter" , 2500 , "J.K Rolling", true);
booker.addBook("Every Thing Is Fucked" , 350 , "unknown" , true);
booker.addBook("When Nitchze Cried", 600 , "unknown" , false);
console.log(library);
booker.bookShelf()
booker.removeBook()

console.log(booker.info("Harry Potter"))

// 
// function book(title) {
//     this.title = title;
// 
// }