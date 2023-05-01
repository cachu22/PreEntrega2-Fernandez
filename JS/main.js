    class Ventas {
        constructor(servicio, marca, modelo, precio, stock){
            this.servicio = servicio;
            this.nombre = nombre;
            this.precio = precio;
            this.stock = stock;
        }
        agregarImpuesto(impuesto){
            this.precio = this.precio +(this.precio * impuesto) / 100
        }
        vender(cant){
            if (cant <= this.stock) {
                this.stock = this.stock - cant;
                return this.precio * cant;
            } else {
                return "Sin stock no queda naa";
            }
    }
    }
    
    /* Array de productos y servicios */
    const Servicios=[
        { id: 1, nombre: "Diagnostico", precio: 2000, },
        { id: 2, nombre: "Reparación", precio: 100000 },
        { id: 3, nombre: "Actualización", precio: 5000 },
        { id: 4, nombre: "Limpieza", precio: 5000 },
        { id: 5, nombre: "Programación", precio: 10000 },
        { id: 6, nombre: "Recuperación de datos", precio: 15000 },
        { id: 7, nombre: "Disco Rígido", precio: 5000, stock: 100 },
        { id: 8, nombre: "Disco SSD", precio: 10000, stock: 25 },
        { id: 9, nombre: "Auriculares", precio: 1000, stock: 20 },
        { id: 10, nombre: "Teclado USB", precio: 4000, stock: 20 },
        ]
    
    //modificar array
    const nuevosingresos = {
        id: 11, nombre: "Control de temperatura", precio: 20000
        };
    Servicios.push(nuevosingresos)
    console.log(Servicios);

    /* Productos */
/*     const oferta1 = new Notebook ("HP", "Pavilion 15", "8 GB", 306100, 10)
    const oferta2 = new Notebook ("Lenovo", "Legion", "8 GB", 350000, 7)
    const oferta3 = new Notebook ("Asus", "X515EA-EJ1626W", "16 GB", 500000, 4) */
    
    /* Info de valores */
/*     console.log(oferta1);
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
    console.log("El precio de la oferta 3 con IVA es " + oferta3.precio) */
    
    /* Venta de dos notebook de la oferta 1 */
/*     let ventaOferta1= oferta1.vender(2)
    console.log("El valor de la venta por la oferta 1 es de $" + ventaOferta1);
    /* Stock actualizado de la oferta 1 */
/*     console.log ("De la oferta 1 quedan en stock " + oferta1.stock) */
    
    /* Venta que supera el stock de la oferta 2 */
/*     let ventaOferta2= oferta2.vender (5)
    console.log("El valor de la venta por la oferta 2 es de $" + ventaOferta2);
    console.log ("De la oferta 2 quedan en stock " + oferta2.stock) */
    
    /* Venta de 4 notebok de la oferta 3 */
/*     let ventaOferta3= oferta3.vender (4)
    console.log("El valor de la venta por la oferta 3 es de $" + ventaOferta3);
    console.log ("De la oferta 3 quedan en stock " + oferta3.stock) */
    
    /* Gananciass */
/*     let dinerodeventas
    
    let num1 = ventaOferta1;
    let num2 = ventaOferta2;
    let num3 = ventaOferta3; */
    
    /* array */
/*     const totales=[num1, num2];
    let result = totales[0]+totales[1];
    console.log("El dinero recaudado por las ofertas 1 y 2 es $" + result) */
    
    /* array modificado */
/*     totales.push(num3);
    let result2= totales[0]+totales[1]+totales[2];
    console.log("El dinero recaudado por todas las ventas es $" + result2); */
    

    
    /* cargarProductos(oferta4, hasta); */
    
    /* Dejaremos de ofrecer licencias */
    /* Servicios.pop()
    console.log(Servicios); */
    
    const video = [
        { id: 1, nombre: "RTX 4090 TUF", precio: 253261, stock: 3 },
        { id: 2, nombre: "RTX 3070 Ti", precio: 379999, stock:2  },
        { id: 3, nombre: "RTX 2060", precio: 135999, stock: 5 },
        { id: 4, nombre: "RTX 3060 GAMING X", precio: 78151, stock: 3 },
        { id: 5, nombre: "RTX 3090 Ventus", precio: 989999, stock: 1 },
        { id: 6, nombre: "RTX 3060 Ph-rtx3060", precio: 259799, stock: 2 },
    ]
    
    //Spread
    const negocio= [...Servicios, ...video]
    console.log(negocio)
    
    //Un cliente nos pregunta qué placas de video tenemos en stock
/*     video.forEach((placas)=>{
        console.log ("Disponile en stock " + placas.nombre);
    })
    const carrito=[]; */
    
    //Un cliente nos pregunta si tenemos placas de video RTX 3060 GAMING X para comprarla
    /* const consulta= video.find((placa)=>{
        return placa.nombre ==="RTX 3060 GAMING X";
    }) */
    
    //Se confirma la compra de la placa
    /* carrito.push(consulta) */
/*     console.log(carrito); */
    
    //Cliente nos consulta sobre nuestras placas más baratas ya que no cuenta con tanto presupuesto
    /* let consultasdeclientes = parseInt(prompt("Cual es el presupuesto con el que cuenta?"))
    const economicas = video.filter((placa)=> placa.precio <=consultasdeclientes);
    console.log(economicas); */
    
    function filtrarServicio(arr, filtro) {
    const filtrado = arr.filter((el) => {
    return el.nombre.includes(filtro);
    });
    return filtrado;
    } 
    
    //Ofertas solo por esta semana
    const ofertasImperdibles = document.getElementById('pservicios')
    pservicios.innerHTML='<h3 id="ofertas"> Ofertas imperdibles solo por esta semana!!!!</h3>'
    
    //Boton buscar
    const botonBuscar = document.getElementById('Botonbuscar')
    Botonbuscar.innerText='Buscar';
    
    const inputs=document.querySelectorAll('input')
    console.log(inputs)
    const buscador = inputs[3]
    buscador.addEventListener('keyup', ()=>{
        console.log(inputs[3].value)
    })
    
    botonBuscar.addEventListener('click',()=>{
        const placas= filtrarServicio(negocio, buscador.value)
        console.log(placas)
    })
    
    //Login
    const formulario = document.querySelector("#Header-login");
        console.log(formulario);
        formulario.addEventListener("submit",(e)=>{
            e.preventDefault();
        let user = e.target[0].value
        let pass = e.target[1].value
            console.log(`usuario: ${user} pass: ${pass}`);
        })
        
    //LocalStorage
const chango=[]

const busquedas = []

//Local Storage
function guardarLS (){
    localStorage.setItem('chango', JSON.stringify(chango))}

    botonBuscar.addEventListener('click',()=>{ 
        const placas= filtrarServicio(negocio, buscador.value)
        busquedas.push(placas)
        guardarLS(busquedas)
    })
    
    let Guardado= JSON.parse (localStorage.getItem("chango"))
    console.log(Guardado);
    
    //JSON
    localStorage.setItem("Placas de video", JSON.stringify(video))
    console.log(video[1].precio);

    console.log(negocio);
    
    //ELIMINAR ES TEST
    const test=document.getElementsByClassName("cardservicios")
    console.log(test);


const Diagnostico =document.querySelectorAll("button")
Diagnostico[2].addEventListener("click", function(guardarLS){
    alert("agregado")
    chango.push(negocio[0]);
    localStorage.setItem("Diagnóstico", JSON.stringify(Servicios[0]))
})

const Reparacion =document.querySelectorAll("button")
Reparacion[3].addEventListener("click", function(guardarLS){
    alert("agregado")
    chango.push(negocio[1]);
    localStorage.setItem("Reparación", JSON.stringify(Servicios[1]))
})

const Actualizacion =document.querySelectorAll("button")
Actualizacion[4].addEventListener("click", function(guardarLS){
    alert("agregado")
    chango.push(negocio[2]);
    localStorage.setItem("Actualizacion", JSON.stringify(Servicios[2]))
})

const Limpieza =document.querySelectorAll("button")
Limpieza[5].addEventListener("click", function(guardarLS){
    alert("agregado")
    chango.push(negocio[3]);
    localStorage.setItem("Limpieza", JSON.stringify(Servicios[3]))
})

const Programacion =document.querySelectorAll("button")
Programacion[6].addEventListener("click", function(guardarLS){
    alert("agregado")
    chango.push(negocio[4]);
    localStorage.setItem("Programacion", JSON.stringify(Servicios[4]))
})

const Recuperacion_de_datos =document.querySelectorAll("button")
Recuperacion_de_datos[7].addEventListener("click", function(guardarLS){
    alert("agregado")
    chango.push(negocio[5]);
    localStorage.setItem("Recuperacion_de_datos", JSON.stringify(Servicios[5]))
})

const Disco_rigido =document.querySelectorAll("button")
Disco_rigido[8].addEventListener("click", function(guardarLS){
    alert("agregado")
    chango.push(negocio[6]);
    localStorage.setItem("Disco_rigido", JSON.stringify(Servicios[6]))
})

const Disco_SSD =document.querySelectorAll("button")
Disco_SSD[9].addEventListener("click", function(guardarLS){
    alert("agregado")
    chango.push(negocio[7]);
    localStorage.setItem("Disco_SSD", JSON.stringify(Servicios[7]))
})

const Auriculares =document.querySelectorAll("button")
Auriculares[10].addEventListener("click", function(guardarLS){
    alert("agregado")
    chango.push(negocio[8]);
    localStorage.setItem("Auriculares", JSON.stringify(Servicios[8]))
})

const Teclado_USB =document.querySelectorAll("button")
Teclado_USB[11].addEventListener("click", function(guardarLS){
    alert("agregado")
    chango.push(negocio[9]);
    localStorage.setItem("Teclado_USB", JSON.stringify(Servicios[9]))
})

const Control_de_temperatura =document.querySelectorAll("button")
Control_de_temperatura[12].addEventListener("click", function(guardarLS){
    alert("agregado")
    chango.push(negocio[10]);
    localStorage.setItem("Control_de_temperatura", JSON.stringify(negocio[10]))
})

const GEFORCE_RTX_4090_TUF =document.querySelectorAll("button")
GEFORCE_RTX_4090_TUF[13].addEventListener("click", function(guardarLS){
    alert("agregado")
    chango.push(negocio[11]);
    localStorage.setItem("GEFORCE_RTX_4090_TUF", JSON.stringify(negocio[11]))
})

const RTX_3070_Ti =document.querySelectorAll("button")
RTX_3070_Ti[14].addEventListener("click", function(guardarLS){
    alert("agregado")
    chango.push(negocio[12]);
    localStorage.setItem("RTX_3070_Ti", JSON.stringify(negocio[12]))
})

const RTX_2060 =document.querySelectorAll("button")
RTX_2060[15].addEventListener("click", function(guardarLS){
    alert("agregado")
    chango.push(negocio[13]);
    localStorage.setItem("RTX_2060", JSON.stringify(negocio[13]))
})

const RTX_3060_GAMING_X =document.querySelectorAll("button")
RTX_3060_GAMING_X[16].addEventListener("click", function(guardarLS){
    alert("agregado")
    chango.push(negocio[14]);
    localStorage.setItem("RTX_3060_GAMING_X", JSON.stringify(negocio[14]))
})

const RTX_3090_Ventus =document.querySelectorAll("button")
RTX_3090_Ventus[17].addEventListener("click", function(guardarLS){
    alert("agregado")
    chango.push(negocio[15]);
    localStorage.setItem("RTX_3090_Ventus", JSON.stringify(negocio[15]))
})

const RTX_3060_Ph_rtx3060 =document.querySelectorAll("button")
RTX_3060_Ph_rtx3060[18].addEventListener("click", function(guardarLS){
    alert("agregado")
    chango.push(negocio[16]);
    localStorage.setItem("RTX_3060_Ph_rtx3060", JSON.stringify(negocio[16]))
})

console.log(chango);