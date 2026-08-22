Singh = {
    name : "Divya Singh",
    age: 8,
    class: 3
}
Dey = {
    name: "Darshini Dey",
    age: 7,
    class : 2
}
//making some changes in the object
console.log("Fetching the name of Singh using 'name' key:", Singh.name)
Singh.class = "3"
console.log("The updated class of my friend Divya",Singh.class)
// array storing objects inside of it
friends = [Singh,Dey]
console.log("My friends Data: ", friends)