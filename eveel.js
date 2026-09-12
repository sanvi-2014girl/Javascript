let x=10;
let y =5;
let expression = "x + y";
let result = eval(expression);
console.log(result);

let students = [
    {name: "Sannvi", age:11},
    {name: "Thor", age:2},
    {name:"Lilo",age:2}
];
students.sort((a,b) => a.age - b.age);
console.log(students);