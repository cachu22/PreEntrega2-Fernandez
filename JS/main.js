/* consultas */
let nombreingresado = prompt ("Ingrese su nombre");
        if (nombreingresado == "") {
            alert("Bienvenido a TecniPC")
        }
        else {
    alert("Bienvenido a TecniPC " + nombreingresado);
}
const edadnopermitida = 17;
const edadminima = 18;
const edadlimite = 70;
const edad = prompt("Ingresa tu edad");
    if (edad >= edadminima && edad <= edadlimite) {
        alert("Tenemos ofertas en notebooks inigualables para vos!");
    }else if (edad < edadminima){
        alert("Debes ser mayor de edad para poder operar en nuestra web o pedile la tarjeta a tu papá");
    }

class Notebook {
    constructor(marca, modelo, RAM, precio, stock) {
        this.marca = marca;
        this.modelo = modelo;
        this.RAM = RAM;
        this.precio = precio;
        this.stock = stock;
    }
    agregarImpuesto(impuesto) {
        this.precio = this.precio + (this.precio * impuesto) / 100;
    }
    vender(cant) {
        if (cant <= this.stock) {
            this.stock = this.stock - cant;
            return this.precio * cant;
        } else {
            return "Sin stock no queda naa";
        }
    };
}

/* Servicios que prestamos */
const Servicios=["Ventas", "Compra de usados", "Reparaciones", "licencia de software"]

/* Productos */
const oferta1 = new Notebook ("HP", "Pavilion 15", "8 GB", 306100, 10)
const oferta2 = new Notebook ("Lenovo", "Legion", "8 GB", 350000, 7)
const oferta3 = new Notebook ("Asus", "X515EA-EJ1626W", "16 GB", 500000, 4)

/* Info de valores */
console.log(oferta1);
console.log("El precio de la oferta 1 sin IVA es " + oferta1.precio)
oferta1.agregarImpuesto(21);
console.log("El precio de la oferta 1 con IVA es " + oferta1.precio)
console.log(oferta2);
console.log("El precio de la oferta 2 sin IVA es " + oferta2.precio)
oferta2.agregarImpuesto(21);
console.log("El precio de la oferta 2 con IVA es " + oferta2.precio)
console.log(oferta3);
console.log("El precio de la oferta 3 sin IVA es " + oferta3.precio)
oferta3.agregarImpuesto(21);
console.log("El precio de la oferta 3 con IVA es " + oferta3.precio)

/* Venta de dos notebook de la oferta 1 */
let ventaOferta1= oferta1.vender(2)
console.log("El valor de la venta por la oferta 1 es de $" + ventaOferta1);
/* Stock actualizado de la oferta 1 */
console.log ("De la oferta 1 quedan en stock " + oferta1.stock)

/* Venta que supera el stock de la oferta 2 */
let ventaOferta2= oferta2.vender (5)
console.log("El valor de la venta por la oferta 2 es de $" + ventaOferta2);
console.log ("De la oferta 2 quedan en stock " + oferta2.stock)

/* Venta de 4 notebok de la oferta 3 */
let ventaOferta3= oferta3.vender (4)
console.log("El valor de la venta por la oferta 3 es de $" + ventaOferta3);
console.log ("De la oferta 3 quedan en stock " + oferta3.stock)

/* Gananciass */
let dinerodeventas

let num1 = ventaOferta1;
let num2 = ventaOferta2;
let num3 = ventaOferta3;

/* array */
const totales=[num1, num2];
let result = totales[0]+totales[1];
console.log("El dinero recaudado por las ofertas 1 y 2 es $" + result)

/* array modificado */
totales.push(num3);
let result2= totales[0]+totales[1]+totales[2];
console.log("El dinero recaudado por todas las ventas es $" + result2);

const oferta4=[]
let hasta= 1;
function cargarProductos(array, limite){
    do {
        let marca = prompt("Ingreso de mercaderia / Ingresar la marca producto");
        let modelo = prompt("Ingreso de mercaderia / Ingresar el modelo");
        let RAM = prompt("Ingreso de mercaderia / Ingresa la RAM");
        let precio = prompt("Ingreso de mercaderia / Ingresa el precio");
            console.log("El precio de la oferta 4 sin IVA es " + precio);
            precio=precio * 1.21;
            console.log("El precio de la oferta 4 con IVA es " + precio);
        let stock = prompt("Ingreso de mercaderia / Ingresa el stock");
        array.push(new Notebook(marca, modelo, RAM, precio, stock));
    }   while (array.length != limite);
}

cargarProductos(oferta4, hasta);

/* Dejaremos de ofrecer licencias */
Servicios.pop()
console.log(Servicios);

const video = [
    { id: 1, nombre: "RTX 4090 TUF", precio: 253261 },
    { id: 2, nombre: "RTX 3070 Ti", precio: 379999 },
    { id: 3, nombre: "RTX 2060", precio: 135999 },
    { id: 4, nombre: "RTX 3060 GAMING X", precio: 78151 },
    { id: 5, nombre: "RTX 3090 Ventus", precio: 989999 },
    { id: 6, nombre: "Rtx 3060 Ph-rtx3060", precio: 259799 },
]

console.log(video);

//Un cliente nos pregunta qué placas de video tenemos en stock
video.forEach((placas)=>{
    console.log ("Disponile en stock " + placas.nombre);
})

const carrito=[];

//Un cliente nos pregunta si tenemos placas de video RTX 3060 GAMING X para comprarla
const consulta= video.find((placa)=>{
    return placa.nombre ==="RTX 3060 GAMING X";
})

//Se confirma la compra de la placa
carrito.push(consulta)
console.log(carrito);

//Cliente nos consulta sobre nuestras placas más baratas ya que no cuenta con tanto presupuesto
let consultasdeclientes = parseInt(prompt("Cual es el presupuesto con el que cuenta?"))
const economicas = video.filter((placa)=> placa.precio <=consultasdeclientes);
console.log(economicas);
