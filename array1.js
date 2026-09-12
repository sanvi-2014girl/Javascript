let numbers1 = [5,3,8,1,2];
numbers1.sort((a,b) => a - b);
console.log(numbers1);

let numbers2 = [5,3,8,1,2];
numbers1.sort((a,b) => b - a);
console.log(numbers2);

let strings = ["banana","apple","cherry"];
strings.sort();
console.log(strings);

let strings1 = ["banana","apple","cherry"];
strings.sort((a,b) => b.localeCompare(a));
console.log(strings1);

