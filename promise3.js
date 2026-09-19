
new Promise((resolve, reject) => {
    const isValidationSuccessful = false; 
    if (isValidationSuccessful) {
        resolve("Validation is done!");       
    } else {
        reject("Validation is not done!");   
    }
})

.then((data) => {
    console.log("Success:", data);
})

.catch((err) => {
    console.log("Error:", err);
});
