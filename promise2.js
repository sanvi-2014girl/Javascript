function wait(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Validation is done");
        },5000)
    }).then((data)=>{
        console.log(data)
    });
}

async function run(){
    console.log("SignUp")
    await wait()
    console.log("HomePage")
}
run()