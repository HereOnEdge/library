let library = [];

function book(title , pages , author , read) {
    
}
book.prototype.info = function (){
    let isReaded = "";
    this.read == true ? isReaded = "has been readed" : isReaded = "havnt been read yet !" ;
    return `${title} by ${author} , ${pages} pages , ${isReaded}`; 
}
function addBook(title , pages , author , read){
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.read = read
    this.prototype = Object.create(book);
    library.push(this.title)
}

addBook("Harry Potter" , 2500 , "J.K Rolling", true);
addBook("Every Thing Is Fucked" , 350 , "unknown" , true);
addBook("When Nitchze Cried", 600 , "unknown" , false);
console.log(library);

// 
// function book(title) {
//     this.title = title;
// 
// }