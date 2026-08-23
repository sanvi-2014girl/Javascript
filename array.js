function first(){//6
    console.log("Hello First!")//7
}
function second(){//4
    first()//5//8
    console.log("Hello Second!")//9
}
function third(){//2
    second()//3//10
    console.log("Hello Third!")//11
}
third()//1//12