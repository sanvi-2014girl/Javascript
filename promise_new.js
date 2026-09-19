console.log("SignUp")
const P1 = new Promise((res)=>{
    setTimeout(()=>{
        res("Validation")
    },5000)
})
P1.then((data)=>{
    console.log(data)

    return new Promise((res) =>{
        setTimeout(()=>{
            res("HomePage")
        },2000)
    }).then((result)=>{
        console.log(result)
    });
});