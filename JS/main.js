    //Array de servicios
    const servicios=[
        { id: 1, nombre: "Diagnostico", precio: 2000, stock: 1},
        { id: 2, nombre: "Reparación", precio: 10000, stock: 50 },
        { id: 3, nombre: "Actualización", precio: 5000, stock: 50 },
        { id: 4, nombre: "Limpieza", precio: 5000, stock: 50 },
        { id: 5, nombre: "Programación", precio: 10000, stock: 50 },
        { id: 6, nombre: "Recuperación de datos", precio: 15000, stock: 50 },
        { id: 7, nombre: "Disco Rígido", precio: 5000, stock: 50 },
        { id: 8, nombre: "Disco SSD", precio: 10000, stock: 50 },
        { id: 9, nombre: "Auriculares", precio: 1000, stock: 50 },
        { id: 10, nombre: "Teclado USB", precio: 4000, stock: 50 },
        ]
    
    //modificar array
    const nuevosingresos = {
        id: 11, nombre: "Control de temperatura", precio: 20000, stock: 10
        };
    servicios.push(nuevosingresos)
    
    //Array de productos
    const video = [
        { id: 12, nombre: "RTX 4090 TUF", precio: 253261, stock: 3 },
        { id: 13, nombre: "RTX 3070 Ti", precio: 379999, stock:2  },
        { id: 14, nombre: "RTX 2060", precio: 135999, stock: 5 },
        { id: 15, nombre: "RTX 3060 GAMING X", precio: 78151, stock: 0 },
        { id: 16, nombre: "RTX 3090 Ventus", precio: 989999, stock: 1 },
        { id: 17, nombre: "RTX 3060 Ph-rtx3060", precio: 259799, stock: 2 },
    ]
    
    //Spread
    const negocio= [...servicios, ...video]
    
    function filtrarServicio(arr, filtro) {
    const filtrado = arr.filter((el) => {
    return el.nombre.includes(filtro);
    });
    return filtrado;
    } 

    //Cargar la array del negocio
    localStorage.setItem("negocio", JSON.stringify(negocio))
    
    //Asincronía
    const ofertasImperdibles = document.getElementById('pservicios')
    pservicios.innerHTML='<h3 id="ofertas"> Bienvenido a nuestra tienda!</h3>'
    setTimeout(() => pservicios.innerHTML='<h3 id="ofertas"> Podrás encontrar productos y servicios</h3>',3000)
    setTimeout(() => pservicios.innerHTML='<h3 id="ofertas"> Por presupuesto comunicate con nosotros mediante la página contacto</h3>',6000)
    setTimeout(() => pservicios.innerHTML='<h3 id="ofertas"> Tienda online</h3>',9000)

    //Boton buscar
    const botonBuscar = document.getElementById('Botonbuscar')
    Botonbuscar.innerText='Buscar';
    
    const inputs=document.querySelectorAll('input')
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
        formulario.addEventListener("submit",(e)=>{
            e.preventDefault();
        let user = e.target[0].value
        let pass = e.target[1].value
            console.log(`usuario: ${user} pass: ${pass}`);
        })

const busquedas = []

//Local Storage
function guardarLS (){
    localStorage.setItem('busquedas', JSON.stringify(busquedas))}

    botonBuscar.addEventListener('click',()=>{ 
        const placas= filtrarServicio(negocio, buscador.value)
        busquedas.push(negocio)
        guardarLS(busquedas)

    })

//Cards de productos
/* const DiagnosticoBtn = document.querySelector("#DiagnosticoBtn");
DiagnosticoBtn.addEventListener("click", function() {
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
      const venta = new Ventas(producto.nombre, producto.precio, producto.stock);
      venta.agregarImpuesto(21);
      const cant = 1;
      const ventaTotal = venta.vender(cant);
      if (typeof ventaTotal === "string") {
        Swal.fire({
          title: ventaTotal
        })
      } else {
        producto.stock -= cant;
        chango.push({
          id: producto.id,
          nombre: producto.nombre,
          precio: ventaTotal,
          cantidad: cant
        });
        localStorage.setItem("chango", JSON.stringify(chango));
        Swal.fire({
          title: 'Agregado!',
          icon: 'success'
        })
      }
    }
  })
});

const ReparacionBtn = document.querySelector("#ReparacionBtn");
ReparacionBtn.addEventListener("click", function() {
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
      const venta = new Ventas(producto.nombre, producto.precio, producto.stock);
      venta.agregarImpuesto(21);
      const cant = 1;
      const ventaTotal = venta.vender(cant);
      if (typeof ventaTotal === "string") {
        Swal.fire({
          title: ventaTotal
        })
      } else {
        producto.stock -= cant;
        chango.push({
          id: producto.id,
          nombre: producto.nombre,
          precio: ventaTotal,
          cantidad: cant
        });
        localStorage.setItem("chango", JSON.stringify(chango));
        Swal.fire({
          title: 'Agregado!',
          icon: 'success'
        })
      }
    }
  })
});

const ActualizacionBtn = document.querySelector("#ActualizacionBtn");
ActualizacionBtn.addEventListener("click", function() {
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
      const venta = new Ventas(producto.nombre, producto.precio, producto.stock);
      venta.agregarImpuesto(21);
      const cant = 1;
      const ventaTotal = venta.vender(cant);
      if (typeof ventaTotal === "string") {
        Swal.fire({
          title: ventaTotal
        })
      } else {
        producto.stock -= cant;
        chango.push({
          id: producto.id,
          nombre: producto.nombre,
          precio: ventaTotal,
          cantidad: cant
        });
        localStorage.setItem("chango", JSON.stringify(chango));
        Swal.fire({
          title: 'Agregado!',
          icon: 'success'
        })
      }
    }
  })
});



const LimpiezaBtn = document.querySelector("#LimpiezaBtn");
LimpiezaBtn.addEventListener("click", function() {
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
      const venta = new Ventas(producto.nombre, producto.precio, producto.stock);
      venta.agregarImpuesto(21);
      const cant = 1;
      const ventaTotal = venta.vender(cant);
      if (typeof ventaTotal === "string") {
        Swal.fire({
          title: ventaTotal
        })
      } else {
        producto.stock -= cant;
        chango.push({
          id: producto.id,
          nombre: producto.nombre,
          precio: ventaTotal,
          cantidad: cant
        });
        localStorage.setItem("chango", JSON.stringify(chango));
        Swal.fire({
          title: 'Agregado!',
          icon: 'success'
        })
      }
    }
  })
});

const ProgramacionBtn = document.querySelector("#ProgramacionBtn");
ProgramacionBtn.addEventListener("click", function() {
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
      const venta = new Ventas(producto.nombre, producto.precio, producto.stock);
      venta.agregarImpuesto(21);
      const cant = 1;
      const ventaTotal = venta.vender(cant);
      if (typeof ventaTotal === "string") {
        Swal.fire({
          title: ventaTotal
        })
      } else {
        producto.stock -= cant;
        chango.push({
          id: producto.id,
          nombre: producto.nombre,
          precio: ventaTotal,
          cantidad: cant
        });
        localStorage.setItem("chango", JSON.stringify(chango));
        Swal.fire({
          title: 'Agregado!',
          icon: 'success'
        })
      }
    }
  })
});

const RecuperacionBtn = document.querySelector("#RecuperacionBtn");
RecuperacionBtn.addEventListener("click", function() {
  const producto = negocio.find((prod) => prod.id === 6);

  Swal.fire({
    title: 'Seguro que desea agregar el servicio de Recuperación de datos por el valor de $15000 + IVA al carrito?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No!',
    confirmButtonText: 'Si!'
  }).then((result) => {
    if (result.isConfirmed) {
      const venta = new Ventas(producto.nombre, producto.precio, producto.stock);
      venta.agregarImpuesto(21);
      const cant = 1;
      const ventaTotal = venta.vender(cant);
      if (typeof ventaTotal === "string") {
        Swal.fire({
          title: ventaTotal
        })
      } else {
        producto.stock -= cant;
        chango.push({
          id: producto.id,
          nombre: producto.nombre,
          precio: ventaTotal,
          cantidad: cant
        });
        localStorage.setItem("chango", JSON.stringify(chango));
        Swal.fire({
          title: 'Agregado!',
          icon: 'success'
        })
      }
    }
  })
});

const RigidoBtn = document.querySelector("#RigidoBtn");
RigidoBtn.addEventListener("click", function() {
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
      const venta = new Ventas(producto.nombre, producto.precio, producto.stock);
      venta.agregarImpuesto(21);
      const cant = 1;
      const ventaTotal = venta.vender(cant);
      if (typeof ventaTotal === "string") {
        Swal.fire({
          title: ventaTotal
        })
      } else {
        producto.stock -= cant;
        chango.push({
          id: producto.id,
          nombre: producto.nombre,
          precio: ventaTotal,
          cantidad: cant
        });
        localStorage.setItem("chango", JSON.stringify(chango));
        Swal.fire({
          title: 'Agregado!',
          icon: 'success'
        })
      }
    }
  })
});

const SSDBtn = document.querySelector("#SSDBtn");
SSDBtn.addEventListener("click", function() {
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
      const venta = new Ventas(producto.nombre, producto.precio, producto.stock);
      venta.agregarImpuesto(21);
      const cant = 1;
      const ventaTotal = venta.vender(cant);
      if (typeof ventaTotal === "string") {
        Swal.fire({
          title: ventaTotal
        })
      } else {
        producto.stock -= cant;
        chango.push({
          id: producto.id,
          nombre: producto.nombre,
          precio: ventaTotal,
          cantidad: cant
        });
        localStorage.setItem("chango", JSON.stringify(chango));
        Swal.fire({
          title: 'Agregado!',
          icon: 'success'
        })
      }
    }
  })
});

const AuricularesBtn = document.querySelector("#AuricularesBtn");
AuricularesBtn.addEventListener("click", function() {
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
      const venta = new Ventas(producto.nombre, producto.precio, producto.stock);
      venta.agregarImpuesto(21);
      const cant = 1;
      const ventaTotal = venta.vender(cant);
      if (typeof ventaTotal === "string") {
        Swal.fire({
          title: ventaTotal
        })
      } else {
        producto.stock -= cant;
        chango.push({
          id: producto.id,
          nombre: producto.nombre,
          precio: ventaTotal,
          cantidad: cant
        });
        localStorage.setItem("chango", JSON.stringify(chango));
        Swal.fire({
          title: 'Agregado!',
          icon: 'success'
        })
      }
    }
  })
});

const TecladoUSBBtn = document.querySelector("#TecladoUSBBtn");
TecladoUSBBtn.addEventListener("click", function() {
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
      const venta = new Ventas(producto.nombre, producto.precio, producto.stock);
      venta.agregarImpuesto(21);
      const cant = 1;
      const ventaTotal = venta.vender(cant);
      if (typeof ventaTotal === "string") {
        Swal.fire({
          title: ventaTotal
        })
      } else {
        producto.stock -= cant;
        chango.push({
          id: producto.id,
          nombre: producto.nombre,
          precio: ventaTotal,
          cantidad: cant
        });
        localStorage.setItem("chango", JSON.stringify(chango));
        Swal.fire({
          title: 'Agregado!',
          icon: 'success'
        })
      }
    }
  })
});

const TemperaturaBtn = document.querySelector("#TemperaturaBtn");
TemperaturaBtn.addEventListener("click", function() {
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
      const venta = new Ventas(producto.nombre, producto.precio, producto.stock);
      venta.agregarImpuesto(21);
      const cant = 1;
      const ventaTotal = venta.vender(cant);
      if (typeof ventaTotal === "string") {
        Swal.fire({
          title: ventaTotal
        })
      } else {
        producto.stock -= cant;
        chango.push({
          id: producto.id,
          nombre: producto.nombre,
          precio: ventaTotal,
          cantidad: cant
        });
        localStorage.setItem("chango", JSON.stringify(chango));
        Swal.fire({
          title: 'Agregado!',
          icon: 'success'
        })
      }
    }
  })
});

const Placa1Btn = document.querySelector("#Placa1Btn");
Placa1Btn.addEventListener("click", function() {
  const producto = video.find((prod) => prod.id === 12);

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
      const venta = new Ventas(producto.nombre, producto.precio, producto.stock);
      venta.agregarImpuesto(21);
      const cant = 1;
      const ventaTotal = venta.vender(cant);
      if (typeof ventaTotal === "string") {
        Swal.fire({
          title: ventaTotal
        })
      } else {
        producto.stock -= cant;
        chango.push({
          id: producto.id,
          nombre: producto.nombre,
          precio: ventaTotal,
          cantidad: cant
        });
        localStorage.setItem("chango", JSON.stringify(chango));
        Swal.fire({
          title: 'Agregado!',
          icon: 'success'
        })
      }
    }
  })
});

const Placa2Btn = document.querySelector("#Placa2Btn");
Placa2Btn.addEventListener("click", function() {
  const producto = video.find((prod) => prod.id === 13);

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
      const venta = new Ventas(producto.nombre, producto.precio, producto.stock);
      venta.agregarImpuesto(21);
      const cant = 1;
      const ventaTotal = venta.vender(cant);
      if (typeof ventaTotal === "string") {
        Swal.fire({
          title: ventaTotal
        })
      } else {
        producto.stock -= cant;
        chango.push({
          id: producto.id,
          nombre: producto.nombre,
          precio: ventaTotal,
          cantidad: cant
        });
        localStorage.setItem("chango", JSON.stringify(chango));
        Swal.fire({
          title: 'Agregado!',
          icon: 'success'
        })
      }
    }
  })
});

const Placa3Btn = document.querySelector("#Placa3Btn");
Placa3Btn.addEventListener("click", function() {
  const producto = video.find((prod) => prod.id === 14);

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
      const venta = new Ventas(producto.nombre, producto.precio, producto.stock);
      venta.agregarImpuesto(21);
      const cant = 1;
      const ventaTotal = venta.vender(cant);
      if (typeof ventaTotal === "string") {
        Swal.fire({
          title: ventaTotal
        })
      } else {
        producto.stock -= cant;
        chango.push({
          id: producto.id,
          nombre: producto.nombre,
          precio: ventaTotal,
          cantidad: cant
        });
        localStorage.setItem("chango", JSON.stringify(chango));
        Swal.fire({
          title: 'Agregado!',
          icon: 'success'
        })
      }
    }
  })
});

const Placa4Btn = document.querySelector("#Placa4Btn");
Placa4Btn.addEventListener("click", function() {
  const producto = video.find((prod) => prod.id === 15);

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
      const venta = new Ventas(producto.nombre, producto.precio, producto.stock);
      venta.agregarImpuesto(21);
      const cant = 1;
      const ventaTotal = venta.vender(cant);
      if (typeof ventaTotal === "string") {
        Swal.fire({
          title: ventaTotal
        })
      } else {
        producto.stock -= cant;
        chango.push({
          id: producto.id,
          nombre: producto.nombre,
          precio: ventaTotal,
          cantidad: cant
        });
        localStorage.setItem("chango", JSON.stringify(chango));
        Swal.fire({
          title: 'Agregado!',
          icon: 'success'
        })
      }
    }
  })
});

const Placa5Btn = document.querySelector("#Placa5Btn");
Placa5Btn.addEventListener("click", function() {
  const producto = video.find((prod) => prod.id === 16);

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
      const venta = new Ventas(producto.nombre, producto.precio, producto.stock);
      venta.agregarImpuesto(21);
      const cant = 1;
      const ventaTotal = venta.vender(cant);
      if (typeof ventaTotal === "string") {
        Swal.fire({
          title: ventaTotal
        })
      } else {
        producto.stock -= cant;
        chango.push({
          id: producto.id,
          nombre: producto.nombre,
          precio: ventaTotal,
          cantidad: cant
        });
        localStorage.setItem("chango", JSON.stringify(chango));
        Swal.fire({
          title: 'Agregado!',
          icon: 'success'
        })
      }
    }
  })
});

const Placa6Btn = document.querySelector("#Placa6Btn");
Placa6Btn.addEventListener("click", function() {
  const producto = video.find((prod) => prod.id === 17);

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
      const venta = new Ventas(producto.nombre, producto.precio, producto.stock);
      venta.agregarImpuesto(21);
      const cant = 1;
      const ventaTotal = venta.vender(cant);
      if (typeof ventaTotal === "string") {
        Swal.fire({
          title: ventaTotal
        })
      } else {
        producto.stock -= cant;
        chango.push({
          id: producto.id,
          nombre: producto.nombre,
          precio: ventaTotal,
          cantidad: cant
        });
        localStorage.setItem("chango", JSON.stringify(chango));
        Swal.fire({
          title: 'Agregado!',
          icon: 'success'
        })
      }
    }
  })
}); */

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
            return "Sin stock, lo siento";
        }
}
}

//LocalStorage
const chango= JSON.parse(localStorage.getItem('chango')) || [];
localStorage.setItem("chango", JSON.stringify(chango))

chango.length === 0 && console.log("tu carrito esta vacio");

const totales = chango.reduce((acumulado, producto) => (acumulado + producto.precio), 0);

console.log(chango); 
console.log("El precio total es " + totales);


//Reentrega//Reentrega//Reentrega//Reentrega//Reentrega//Reentrega//Reentrega//Reentrega//Reentrega//Reentrega


//Limpiar localstorage
/* localStorage.clear() */

//CODIGO DE YOUTUBER
document.addEventListener('DOMContentLoaded', () => {
  fetchData()
})

const fetchData = async () => {
  try {
      const res = await fetch("../data/api.json")
      const data = await res.json()
      console.log(data)
  } catch (error) {
      console.log(error)
  }
}
//FIN CODIGO YOUTUBER

const renderServicios = (arr) => {
  let html;
  for(const item of arr) {
    const {id, nombre, img, precio } =item;

    html = `
    <div class="card">
      <div class="card-image">
      <img src="../img/${img}">
      </div>
      <div>
      <span class= "card-title">${nombre.toUpperCase()}</span>
    </div>
      <div class="card-content">
        <p>Precio $${precio} + IVA</p>
      </div>
    <div class"card-action">
     <button class="btn" id="${id}">Comprar</button>
    </div>
  </div>
  `;
  
  contenedor.innerHTML += html;
  }}

  //async away
  async function fetchApi() {
    const response = await fetch('../data/api.json');
    const data=await response.json()
    console.log(data);
    renderServicios(data);
  }

  fetchApi()

  console.log();
/*   .then((response) => console.log(response)) */
  
    //Reentrega



    const pintarCards = data => {
      console.log(data)
      data.forEach(producto => {
        document.getElementById('DiagnosticoBtn').dataset.id = producto.id
        const clone = templateCard.cloneNode(true)
        DocumentFragment.appenChild(clone)
      })
      items.appenChild(fragment)
  }
  


  