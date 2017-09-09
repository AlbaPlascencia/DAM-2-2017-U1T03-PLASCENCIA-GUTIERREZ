var isDone: boolean = false;
var height: number=6; 
var name2: string="Alba";
var list: number[]=[1,2,3]
var notSure: any =4;


var objeto:any= {
    id:1,
    name:{
        lastName:"Plascencia",
        firstName:"Alba",
        fullName:"Alba Plascencia"
    }
}

function imprimir ():void{
    console.log("Boleano:"+isDone);
    console.log("Numerico:"+height);
    console.log("Cadena:"+name2);
    console.log ("Arreglo:");

    list.forEach(element => {
        console.log(element+" ")
    });

    console.log("Culaquiera:"+notSure);
    console.log("Objeto:"+objeto);
}


imprimir();