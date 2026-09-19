new Promise((res,rej)=>{
    validation = false
    if(validation){
       res("Validation is done")
    }
    else{
        rej("Validation is not done")
    }
}).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})