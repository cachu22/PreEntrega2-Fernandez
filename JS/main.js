    /* Array de productos y servicios */
    const servicios=[
        { id: 1, nombre: "Diagnostico", precio: 2000, stock: 10},
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

//Cards de productos
const Diagnostico = document.querySelectorAll("button");
Diagnostico[2].addEventListener("click", function() {
    const producto = negocio.find((prod) => prod.id === 1);

    Swal.fire({
        title: 'Seguro que desea agregar el servicio de diagnostico por el valor de $2000 + IVA al carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No!',
        confirmButtonText: 'Si!'
      }).then((result) => {
        if (result.isConfirmed) {
        if (producto.stock < 1) {
            Swal.fire({
                title: 'No tenemos stock, buscá una alternativa',
                text: 'Modal with a custom image.',
                imageUrl: 'https://unsplash.it/400/200',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            return;
            }
        chango.push(producto);
        localStorage.setItem("chango", JSON.stringify(chango))
          Swal.fire(
            'Agregado!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
});

const Reparacion = document.querySelectorAll("button");
Reparacion[3].addEventListener("click", function() {
    const producto = negocio.find((prod) => prod.id === 2);

    Swal.fire({
        title: 'Seguro que desea agregar el servicio de Reparación por el valor de $10000 + IVA al carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No!',
        confirmButtonText: 'Si!'
      }).then((result) => {
        if (result.isConfirmed) {
        if (producto.stock < 1) {
            Swal.fire({
                title: 'No tenemos stock, buscá una alternativa',
                text: 'Modal with a custom image.',
                imageUrl: 'https://unsplash.it/400/200',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            return;
            }
        chango.push(producto);
        localStorage.setItem("chango", JSON.stringify(chango))
          Swal.fire(
            'Agregado!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
});

const Actualizacion = document.querySelectorAll("button");
Actualizacion[4].addEventListener("click", function() {
    const producto = negocio.find((prod) => prod.id === 3);

    Swal.fire({
        title: 'Seguro que desea agregar el servicio de Actualización por el valor de $5000 + IVA al carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No!',
        confirmButtonText: 'Si!'
      }).then((result) => {
        if (result.isConfirmed) {
        if (producto.stock < 1) {
            Swal.fire({
                title: 'No tenemos stock, buscá una alternativa',
                text: 'Modal with a custom image.',
                imageUrl: 'https://unsplash.it/400/200',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            return;
            }
        chango.push(producto);
        localStorage.setItem("chango", JSON.stringify(chango))
          Swal.fire(
            'Agregado!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
});

const Limpieza = document.querySelectorAll("button");
Limpieza[5].addEventListener("click", function() {
    const producto = negocio.find((prod) => prod.id === 4);

    Swal.fire({
        title: 'Seguro que desea agregar el servicio de Limpieza por el valor de $5000 + IVA al carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No!',
        confirmButtonText: 'Si!'
      }).then((result) => {
        if (result.isConfirmed) {
        if (producto.stock < 1) {
            Swal.fire({
                title: 'No tenemos stock, buscá una alternativa',
                text: 'Modal with a custom image.',
                imageUrl: 'https://unsplash.it/400/200',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            return;
            }
        chango.push(producto);
        localStorage.setItem("chango", JSON.stringify(chango))
          Swal.fire(
            'Agregado!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
});

const Programacion = document.querySelectorAll("button");
Programacion[6].addEventListener("click", function() {
    const producto = negocio.find((prod) => prod.id === 5);

    Swal.fire({
        title: 'Seguro que desea agregar el servicio de Programación por el valor de $10000 + IVA al carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No!',
        confirmButtonText: 'Si!'
      }).then((result) => {
        if (result.isConfirmed) {
        if (producto.stock < 1) {
            Swal.fire({
                title: 'No tenemos stock, buscá una alternativa',
                text: 'Modal with a custom image.',
                imageUrl: 'https://unsplash.it/400/200',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            return;
            }
        chango.push(producto);
        localStorage.setItem("chango", JSON.stringify(chango))
          Swal.fire(
            'Agregado!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
});

const Recuperacion_de_datos = document.querySelectorAll("button");
Recuperacion_de_datos[7].addEventListener("click", function() {
    const producto = negocio.find((prod) => prod.id === 6);

    Swal.fire({
        title: 'Seguro que desea agregar el servicio de Recumeración de datos por el valor de $15000 + IVA al carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No!',
        confirmButtonText: 'Si!'
      }).then((result) => {
        if (result.isConfirmed) {
        if (producto.stock < 1) {
            Swal.fire({
                title: 'No tenemos stock, buscá una alternativa',
                text: 'Modal with a custom image.',
                imageUrl: 'https://unsplash.it/400/200',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            return;
            }
        chango.push(producto);
        localStorage.setItem("chango", JSON.stringify(chango))
          Swal.fire(
            'Agregado!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
});

const Disco_rigido = document.querySelectorAll("button");
Disco_rigido[8].addEventListener("click", function() {
    const producto = negocio.find((prod) => prod.id === 7);

    Swal.fire({
        title: 'Seguro que desea agregar un disco rígido por el valor de $5000 + IVA al carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No!',
        confirmButtonText: 'Si!'
      }).then((result) => {
        if (result.isConfirmed) {
        if (producto.stock < 1) {
            Swal.fire({
                title: 'No tenemos stock, buscá una alternativa',
                text: 'Modal with a custom image.',
                imageUrl: 'https://unsplash.it/400/200',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            return;
            }
        chango.push(producto);
        localStorage.setItem("chango", JSON.stringify(chango))
          Swal.fire(
            'Agregado!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
});

const Disco_SSD = document.querySelectorAll("button");
Disco_SSD[9].addEventListener("click", function() {
    const producto = negocio.find((prod) => prod.id === 8);

    Swal.fire({
        title: 'Seguro que desea agregar un disco SSD por el valor de $10000 + IVA al carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No!',
        confirmButtonText: 'Si!'
      }).then((result) => {
        if (result.isConfirmed) {
        if (producto.stock < 1) {
            Swal.fire({
                title: 'No tenemos stock, buscá una alternativa',
                text: 'Modal with a custom image.',
                imageUrl: 'https://unsplash.it/400/200',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            return;
            }
        chango.push(producto);
        localStorage.setItem("chango", JSON.stringify(chango))
          Swal.fire(
            'Agregado!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
});

const Auriculares = document.querySelectorAll("button");
Auriculares[10].addEventListener("click", function() {
    const producto = negocio.find((prod) => prod.id === 9);

    Swal.fire({
        title: 'Seguro que desea agregar unos auriculares por el valor de $1000 + IVA al carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No!',
        confirmButtonText: 'Si!'
      }).then((result) => {
        if (result.isConfirmed) {
        if (producto.stock < 1) {
            Swal.fire({
                title: 'No tenemos stock, buscá una alternativa',
                text: 'Modal with a custom image.',
                imageUrl: 'https://unsplash.it/400/200',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            return;
            }
        chango.push(producto);
        localStorage.setItem("chango", JSON.stringify(chango))
          Swal.fire(
            'Agregado!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
});

const Teclado_USB = document.querySelectorAll("button");
Teclado_USB[11].addEventListener("click", function() {
    const producto = negocio.find((prod) => prod.id === 10);

    Swal.fire({
        title: 'Seguro que desea agregar un teclado USB por el valor de $4000 + IVA al carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No!',
        confirmButtonText: 'Si!'
      }).then((result) => {
        if (result.isConfirmed) {
        if (producto.stock < 1) {
            Swal.fire({
                title: 'No tenemos stock, buscá una alternativa',
                text: 'Modal with a custom image.',
                imageUrl: 'https://unsplash.it/400/200',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            return;
            }
        chango.push(producto);
        localStorage.setItem("chango", JSON.stringify(chango))
          Swal.fire(
            'Agregado!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
});

const Control_de_temperatura = document.querySelectorAll("button");
Control_de_temperatura[12].addEventListener("click", function() {
    const producto = negocio.find((prod) => prod.id === 11);

    Swal.fire({
        title: 'Seguro que desea agregar el servicio de Control de temperatura por el valor de $20000 + IVA al carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No!',
        confirmButtonText: 'Si!'
      }).then((result) => {
        if (result.isConfirmed) {
        if (producto.stock < 1) {
            Swal.fire({
                title: 'No tenemos stock, buscá una alternativa',
                text: 'Modal with a custom image.',
                imageUrl: 'https://unsplash.it/400/200',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            return;
            }
        chango.push(producto);
        localStorage.setItem("chango", JSON.stringify(chango))
          Swal.fire(
            'Agregado!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
});

const RTX_4090_TUF = document.querySelectorAll("button");
RTX_4090_TUF[13].addEventListener("click", function() {
    const producto = video.find((prod) => prod.id === 1);

    Swal.fire({
        title: 'Seguro que desea agregar una placa de video RTX_4090_TUF por el valor de $253261 + IVA al carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No!',
        confirmButtonText: 'Si!'
      }).then((result) => {
        if (result.isConfirmed) {
        if (producto.stock < 1) {
            Swal.fire({
                title: 'No tenemos stock, buscá una alternativa',
                text: 'Modal with a custom image.',
                imageUrl: 'https://unsplash.it/400/200',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            return;
            }
        chango.push(producto);
        localStorage.setItem("chango", JSON.stringify(chango))
          Swal.fire(
            'Agregado!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
});

const RTX_3070_Ti = document.querySelectorAll("button");
RTX_3070_Ti[14].addEventListener("click", function() {
    const producto = video.find((prod) => prod.id === 2);

    Swal.fire({
        title: 'Seguro que desea agregar una placa de video RTX_3070_Ti por el valor de $379999 + IVA al carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No!',
        confirmButtonText: 'Si!'
      }).then((result) => {
        if (result.isConfirmed) {
        if (producto.stock < 1) {
            Swal.fire({
                title: 'No tenemos stock, buscá una alternativa',
                text: 'Modal with a custom image.',
                imageUrl: 'https://unsplash.it/400/200',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            return;
            }
        chango.push(producto);
        localStorage.setItem("chango", JSON.stringify(chango))
          Swal.fire(
            'Agregado!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
});

const RTX_2060 = document.querySelectorAll("button");
RTX_2060[15].addEventListener("click", function() {
    const producto = video.find((prod) => prod.id === 3);

    Swal.fire({
        title: 'Seguro que desea agregar una placa de video RTX_2060 por el valor de $135999 + IVA al carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No!',
        confirmButtonText: 'Si!'
      }).then((result) => {
        if (result.isConfirmed) {
        if (producto.stock < 1) {
            Swal.fire({
                title: 'No tenemos stock, buscá una alternativa',
                text: 'Modal with a custom image.',
                imageUrl: 'https://unsplash.it/400/200',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            return;
            }
        chango.push(producto);
        localStorage.setItem("chango", JSON.stringify(chango))
          Swal.fire(
            'Agregado!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
});

const RTX_3060_GAMING_X = document.querySelectorAll("button");
RTX_3060_GAMING_X[16].addEventListener("click", function() {
    const producto = video.find((prod) => prod.id === 4);

    Swal.fire({
        title: 'Seguro que desea agregar una placa de video RTX_3060_GAMING_X por el valor de $78151 + IVA al carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No!',
        confirmButtonText: 'Si!'
      }).then((result) => {
        if (result.isConfirmed) {
        if (producto.stock < 1) {
            Swal.fire({
                title: 'No tenemos stock, buscá una alternativa',
                text: 'Modal with a custom image.',
                imageUrl: 'https://unsplash.it/400/200',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            return;
            }
        chango.push(producto);
        localStorage.setItem("chango", JSON.stringify(chango))
          Swal.fire(
            'Agregado!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
});

const RTX_3090_Ventus = document.querySelectorAll("button");
RTX_3090_Ventus[17].addEventListener("click", function() {
    const producto = video.find((prod) => prod.id === 5);

    Swal.fire({
        title: 'Seguro que desea agregar una placa de video RTX_3090_Ventus por el valor de $989999 + IVA al carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No!',
        confirmButtonText: 'Si!'
      }).then((result) => {
        if (result.isConfirmed) {
        if (producto.stock < 1) {
            Swal.fire({
                title: 'No tenemos stock, buscá una alternativa',
                text: 'Modal with a custom image.',
                imageUrl: 'https://unsplash.it/400/200',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            return;
            }
        chango.push(producto);
        localStorage.setItem("chango", JSON.stringify(chango))
          Swal.fire(
            'Agregado!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
});

const RTX_3060_Ph_rtx3060 = document.querySelectorAll("button");
RTX_3060_Ph_rtx3060[18].addEventListener("click", function() {
    const producto = video.find((prod) => prod.id === 6);

    Swal.fire({
        title: 'Seguro que desea agregar una placa de video RTX_3060_Ph_rtx3060 por el valor de $259799 + IVA al carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No!',
        confirmButtonText: 'Si!'
      }).then((result) => {
        if (result.isConfirmed) {
        if (producto.stock < 1) {
            Swal.fire({
                title: 'No tenemos stock, buscá una alternativa',
                text: 'Modal with a custom image.',
                imageUrl: 'https://unsplash.it/400/200',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            return;
            }
        chango.push(producto);
        localStorage.setItem("chango", JSON.stringify(chango))
          Swal.fire(
            'Agregado!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
});

//Calculo de ventas
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

//LocalStorage
const chango= JSON.parse(localStorage.getItem('chango')) || [];
localStorage.setItem("chango", JSON.stringify(chango))

chango.length === 0 && console.log("tu carrito esta vacio");
console.log(chango); 

const totales = chango.reduce((acumulado, producto) => (acumulado + producto.precio), 0);

console.log("El precio total es " + totales);

//Limpiar localstorage
/* localStorage.clear() */


//Tarjetero

/* var cleave = new Cleave('.input-element', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
        // update UI ...
    }
}); */


/* new clearInterval("#card.number"), {
    creditCard: true,
    onCreditCardTypeChanged: function (type){
        console.log(type);
        switch (type) {
            case "visa":
              document.querySelector(".fa-cc-visa").classList.add
              ("active");
            break;
            case "amex":
              document.querySelector(".fa-cc-amex").classList.add
              ("active");
              break;
            case "diners":
              document.querySelector(".fa-cc-diners-club").classList.add
              ("active");
            break;
            case "mastercard":
              document.querySelector(".fa-cc-mastercard").classList.add
              ("active");
            break;
        default:
            if (type === "unknown") {
                icons.forEach((icon) =>classList.remove("active"));
            }
            break;
        }
    }
}; */