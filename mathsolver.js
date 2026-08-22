let book = {
    title: "Javascript for Beginners",
    author: "John.Smith",
    price: 30.00
};

console.log("Book Title: "+book.title);
console.log("Book Author" + book.author);
console.log("Book Price: " + book.price);

book.price = 14.99
console.log("Updated Book Price: "+book.price);

book.publisher = "TechBooks Publishing";
console.log("Publisher: " +book.publisher);
//Using the object in a function
function printBookDetails(bookObj){
    console.log("\nBook Details: ");
    console.log("Title: " + bookObj.title);
    console.log("Author: " + bookObj.author);
    console.log("Price: " + bookObj.price);
    console.log("Publisher: " + bookObj.publisher)
}

printBookDetails(book);

let currentDate = new Date();
console.log("\nCurrent Date and Time:", currentDate);
console.log("\nRandom Math Operation:", Math.random());