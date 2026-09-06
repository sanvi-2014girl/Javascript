class Animal{
    constructor(name,breed){
        this.name = name
        this.breed = breed
    }
    details(){
        console.log("\nAnimal Details ===>")
        console.log("Name: ",this.name)
        console.log("Breed: ",this.breed)
    }
    speak(){
        console.log("\nAnimal's ongoing actions ===>")
        console.log("The dog is speaking!")
        console.log("The dog is walking!")
    }
}
dog1 = new Animal("Dog","Golden Retriever")
dog1.details()
dog1.speak()