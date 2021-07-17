//create an array of books
//create an array called library
let library = [{title:"Warriors of the Storm", author:"Bernard Cornwell"},{title:"Sharpe's Waterloo", author:"Bernard Cornwell"},];
let bookList=document.querySelector('.bookList');
console.log(bookList);
//create an object creator for books
function bookMaker(firstBook) {
    this.title=firstBook.title;
    this.author=firstBook.author;
    console.log(this.title, this.author);
    let eachBook = document.createElement('li');
    eachBook.innerText=`${title}, written by ${author}`;
    eachBook.className=`${this.title}`;
    let eachButton=document.createElement('button');
    eachButton.innerText="I've read this";
    eachButton.style.marginLeft="10px";
    eachButton.addEventListener('click', ()=>readBook());
    eachBook.append(eachButton);
    bookList.append(eachBook);
 
};
//create an element for each book that displays an image of a book, the author and the title and a remove button
function makeList(){
    library.forEach(bookMaker);
};
makeList();//put the list out the first time;
//create the ability to add a book
let addBook=document.querySelector('.redButton');
addBook.addEventListener('click', function() {
    let newTitle=prompt("What's the new title?");
    let newAuthor = prompt("Who wrote it?");
    let newArray = {title:`${newTitle}`, author:`${newAuthor}`};
    console.log(newArray);
    bookMaker(newArray);


});

//make a function that removes books from the array
function readBook() {
    console.log("I've read this");
}
