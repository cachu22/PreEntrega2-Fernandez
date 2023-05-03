class Ventas {
        constructor(nombre, precio, stock){
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
    const servicios=[
        { id: 1, nombre: "Diagnostico", precio: 2000, stock: 50},
        { id: 2, nombre: "Reparación", precio: 10000, stock: 50 },
        { id: 3, nombre: "Actualización", precio: 5000, stock: 50 },
        { id: 4, nombre: "Limpieza", precio: 5000, stock: 50 },
        { id: 5, nombre: "Programación", precio: 10000, stock: 50 },
        { id: 6, nombre: "Recuperación de datos", precio: 15000, stock: 50 },
        { id: 7, nombre: "Disco Rígido", precio: 5000, stock: 100, stock: 50 },
        { id: 8, nombre: "Disco SSD", precio: 10000, stock: 25, stock: 50 },
        { id: 9, nombre: "Auriculares", precio: 1000, stock: 20, stock: 50 },
        { id: 10, nombre: "Teclado USB", precio: 4000, stock: 20, stock: 50 },
        ]
    
    //modificar array
    const nuevosingresos = {
        id: 11, nombre: "Control de temperatura", precio: 20000
        };
    servicios.push(nuevosingresos)
    
    const video = [
        { id: 1, nombre: "RTX 4090 TUF", precio: 253261, stock: 3 },
        { id: 2, nombre: "RTX 3070 Ti", precio: 379999, stock:2  },
        { id: 3, nombre: "RTX 2060", precio: 135999, stock: 5 },
        { id: 4, nombre: "RTX 3060 GAMING X", precio: 78151, stock: 0 },
        { id: 5, nombre: "RTX 3090 Ventus", precio: 989999, stock: 1 },
        { id: 6, nombre: "RTX 3060 Ph-rtx3060", precio: 259799, stock: 2 },
    ]
    
    //Spread
    const negocio= [...servicios, ...video]
    console.log(negocio)
    
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

const busquedas = []

//Local Storage
function guardarLS (){
    localStorage.setItem('chango', JSON.stringify())}

    botonBuscar.addEventListener('click',()=>{ 
        const placas= filtrarServicio(negocio, buscador.value)
        busquedas.push(placas)
        guardarLS(busquedas)

    })
    
    let Guardado= JSON.parse (localStorage.getItem("chango"))
    console.log(Guardado);
    
    //JSON
/*     localStorage.setItem("Placas de video", JSON.stringify(video))
    console.log(video[1].precio); */

    //ELIMINAR ES TEST
    const test=document.getElementsByClassName("cardservicios")
    console.log(test);

//AGREGAR AL CARRITO VARIOS ELEMENTOS



const Diagnostico = document.querySelectorAll("button");
Diagnostico[2].addEventListener("click", function() {
    const producto = negocio.find((prod) => prod.id === 1);
    if (producto.stock < 1) {
    alert('No tenemos stock de materiales para esta tarea.');
    return;
    }
    alert("agregado al carrito");
    chango.push(producto);
    localStorage.setItem("chango", JSON.stringify(chango));
});

const Reparacion =document.querySelectorAll("button")
Reparacion[3].addEventListener("click", function(){
    const producto = negocio.find((prod) => prod.id === 2);
    if (producto.stock < 1) {
        alert('No tenemos stock.');
        return;
    }
    alert("agregado al carrito")
    chango.push(producto);
    localStorage.setItem("chango", JSON.stringify(chango))
})

const Actualizacion =document.querySelectorAll("button")
Actualizacion[4].addEventListener("click", function(){
    const producto = negocio.find((prod) => prod.id === 3);
    if (producto.stock < 1) {
        alert('No tenemos stock.');
        return;
    }
    alert("agregado al carrito")
    chango.push(producto);
    localStorage.setItem("chango", JSON.stringify(chango))
})

const Limpieza =document.querySelectorAll("button")
Limpieza[5].addEventListener("click", function(){
    const producto = negocio.find((prod) => prod.id === 4);
    if (producto.stock < 1) {
        alert('No tenemos stock.');
        return;
    }
    alert("agregado al carrito")
    chango.push(producto);
    localStorage.setItem("chango", JSON.stringify(chango))
})

const Programacion =document.querySelectorAll("button")
Programacion[6].addEventListener("click", function(){
    const producto = negocio.find((prod) => prod.id === 5);
    if (producto.stock < 1) {
        alert('No tenemos stock.');
        return;
    }
    alert("agregado al carrito")
    chango.push(producto);
    localStorage.setItem("chango", JSON.stringify(chango))
})

const Recuperacion_de_datos =document.querySelectorAll("button")
Recuperacion_de_datos[7].addEventListener("click", function(){
    const producto = negocio.find((prod) => prod.id === 6);
    if (producto.stock < 1) {
        alert('No tenemos stock.');
        return;
    }
    alert("agregado al carrito")
    chango.push(producto);
    localStorage.setItem("chango", JSON.stringify(chango))
})

const Disco_rigido =document.querySelectorAll("button")
Disco_rigido[8].addEventListener("click", function(){
    const producto = negocio.find((prod) => prod.id === 7);
    if (producto.stock < 1) {
        alert('No tenemos stock.');
        return;
    }
    alert("agregado al carrito")
    chango.push(producto);
    localStorage.setItem("chango", JSON.stringify(chango))
})

const Disco_SSD =document.querySelectorAll("button")
Disco_SSD[9].addEventListener("click", function(){
    const producto = negocio.find((prod) => prod.id === 8);
    if (producto.stock < 1) {
        alert('No tenemos stock.');
        return;
    }
    alert("agregado al carrito")
    chango.push(producto);
    localStorage.setItem("chango", JSON.stringify(chango))
})

const Auriculares =document.querySelectorAll("button")
Auriculares[10].addEventListener("click", function(){
    const producto = negocio.find((prod) => prod.id === 9);
    if (producto.stock < 1) {
        alert('No tenemos stock.');
        return;
    }
    alert("agregado al carrito")
    chango.push(producto);
    localStorage.setItem("chango", JSON.stringify(chango))
})

const Teclado_USB =document.querySelectorAll("button")
Teclado_USB[11].addEventListener("click", function(){
    const producto = negocio.find((prod) => prod.id === 10);
    if (producto.stock < 1) {
        alert('No tenemos stock.');
        return;
    }
    alert("agregado al carrito")
    chango.push(producto);
    localStorage.setItem("chango", JSON.stringify(chango))
})

const Control_de_temperatura =document.querySelectorAll("button")
Control_de_temperatura[12].addEventListener("click", function(){
    const producto = negocio.find((prod) => prod.id === 11);
    if (producto.stock < 1) {
        alert('No tenemos stock.');
        return;
    }
    alert("agregado al carrito")
    chango.push(producto);
    localStorage.setItem("chango", JSON.stringify(chango))
})

const RTX_4090_TUF =document.querySelectorAll("button")
RTX_4090_TUF[13].addEventListener("click", function(){
    const producto = video.find((prod) => prod.id === 1);
    if (producto.stock < 1) {
        alert('No tenemos stock.');
        return;
    }
    alert("agregado al carrito")
    chango.push(producto);
    localStorage.setItem("chango", JSON.stringify(chango))
})

const RTX_3070_Ti =document.querySelectorAll("button")
RTX_3070_Ti[14].addEventListener("click", function(){
    const producto = video.find((prod) => prod.id === 2);
    if (producto.stock < 1) {
        alert('No tenemos stock.');
        return;
    }
    alert("agregado al carrito")
    chango.push(producto);
    localStorage.setItem("chango", JSON.stringify(chango))
})

const RTX_2060 =document.querySelectorAll("button")
RTX_2060[15].addEventListener("click", function(){
    const producto = video.find((prod) => prod.id === 3);
    if (producto.stock < 1) {
        alert('No tenemos stock.');
        return;
    }
    alert("agregado al carrito")
    chango.push(producto);
    localStorage.setItem("chango", JSON.stringify(chango))
})

const RTX_3060_GAMING_X =document.querySelectorAll("button")
RTX_3060_GAMING_X[16].addEventListener("click", function(){
    const producto = video.find((prod) => prod.id === 4);
    if (producto.stock < 1) {
        alert('No tenemos stock.');
        return;
    }
    alert("agregado al carrito")
    chango.push(producto);
    localStorage.setItem("chango", JSON.stringify(chango))
})

const RTX_3090_Ventus =document.querySelectorAll("button")
RTX_3090_Ventus[17].addEventListener("click", function(){
    const producto = video.find((prod) => prod.id === 5);
    if (producto.stock < 1) {
        alert('No tenemos stock.');
        return;
    }
    alert("agregado al carrito")
    chango.push(producto);
    localStorage.setItem("chango", JSON.stringify(chango))
})


const RTX_3060_Ph_rtx3060 =document.querySelectorAll("button")
RTX_3060_Ph_rtx3060[18].addEventListener("click", function(){
    const producto = video.find((prod) => prod.id === 6);
    if (producto.stock < 1) {
        alert('No tenemos stock.');
        return;
    }
    alert("agregado al carrito")
    chango.push(producto);
    localStorage.setItem("chango", JSON.stringify(chango))
})

//LocalStorage
const chango= JSON.parse(localStorage.getItem('chango')) || [];
localStorage.setItem("chango", JSON.stringify(chango))

chango.length === 0 && console.log("tu carrito esta vacio");
console.log(chango); 

const totales = chango.reduce((acumulado, producto) => acumulado + producto.precio, 0);

console.log("El precio total es " + totales); // 3284796

//Limpiar localstorage
/* localStorage.clear() */