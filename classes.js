class Coaching{
    constructor(name,age,course){
        this.name = name
        this.age = age
        this.course = course
        console.log(this.name + "'s object has been craeted")
    }
    details(){
        console.log("\nStudent Details ===>")
        console.log("Name: ", this.name)
        console.log("Age: ", this.age)
        console.log("Course: ",this.course) 
    }
}
s1 = new Coaching("Sannvi",11,"HTML,CSS")
s2 = new Coaching("Thor",2,"Python")
s3 = new Coaching("Lilo",2,"Java")

s1.details()
s2.details()
s3.details()