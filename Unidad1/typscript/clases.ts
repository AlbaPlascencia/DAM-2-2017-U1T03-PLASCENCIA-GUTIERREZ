interface Animal {
    name:string;
    makeSound(): void;
}

class Dog implements Animal{
    name: string;
    constructor(name:string){
        this.name=name2;
    }
    makeSound():String{
        return"Guaau!!";
    }
}

function sayHi(animal:Animal):void{
    console.log("hi"+animal.name);
    console.log(animal.makeSound());

}

sayHi (new Dog("Hachi"));