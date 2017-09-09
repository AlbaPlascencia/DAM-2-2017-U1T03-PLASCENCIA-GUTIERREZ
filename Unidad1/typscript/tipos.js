var isDone = false;
var height = 6;
var name2 = "Alba";
var list = [1, 2, 3];
var notSure = 4;
var objeto = {
    id: 1,
    name: {
        lastName: "Plascencia",
        firstName: "Alba",
        fullName: "Alba Plascencia"
    }
};
function print(valor1, valor2) {
    console.log("Boleano:" + isDone);
    console.log("Numerico:" + height);
    console.log("Cadena:" + name2);
    console.log("Arreglo:");
    list.forEach(function (element) {
        console.log(element + " ");
    });
    console.log("Culaquiera:" + notSure);
    console.log("Objeto:" + objeto.name.fullName);
}
