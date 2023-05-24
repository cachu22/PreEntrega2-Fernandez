    //Array de servicios
    const servicios=[
        { id: 1, nombre: "Diagnostico", precio: 2000, stock: 1},
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
        id: 11, nombre: "Control de temperatura", precio: 20000, stock: 10
        };
    servicios.push(nuevosingresos)
    
    //Array de productos
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

    /* acceder a las funciones de las cards */
    const cards = document.getElementById('cards')
    const items = document.getElementById ('items')
    const footer = document.getElementById('footer')
    const templateCard = document.getElementById('tempLate-card').content
    const templateFooter = document.getElementById('template-footer').content
    const templateCarrito = document.getElementById('template-carrito').content
    const fragment = document.createDocumentFragment()
    let carrito = {}

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


//Limpiar localstorage
/* localStorage.clear() */

document.addEventListener('DOMContentLoaded', () => {
  fetchData()
  if(localStorage.getItem('carrto')) {
    carrito = JSON.parse(localStorage.getItem('carrto'))
    pintarCarrito()
  }
})

cards.addEventListener('click', e => {
  addCarrito(e)
})

items.addEventListener('click', e => {
  btnAccion(e)
})

const fetchData = async () => {
  try {
      const res = await fetch('../data/api.json')
      const data = await res.json()
      /* console.log(data) */
      pintarCards(data)
  } catch (error) {
      console.log(error)
  }
}
  
    //Reentrega

const pintarCards = data => {
  data.forEach(producto => {
    templateCard.querySelector('h5').textContent = producto.nombre
    templateCard.querySelector('p').textContent = producto.precio 
    templateCard.querySelector('img').setAttribute('src', '../img/' + producto.img);
    templateCard.querySelector('.btn-dark').dataset.id = producto.id;
    const clone = templateCard.cloneNode(true)
    fragment.appendChild(clone)
  })
  cards.appendChild(fragment) 
}

const addCarrito = e => {
  console.log(e.target)
  console.log(e.target.classList.contains('btn-dark'))
  if(e.target.classList.contains('btn-dark')) {
    Swal.fire({
      title: 'Seguro que desea agregar al carrito?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No!',
      confirmButtonText: 'Si!'
    }).then((result) => {
      if (result.isConfirmed) { setCarrito(e.target.parentElement)
    };
    e.stopPropagation()
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
          Swal.fire({
            title: 'Agregado!',
            icon: 'success'
          })
        }
      }
    )
  ;
}
}

const setCarrito = objeto => {
  const producto = {
    id: objeto.querySelector('.btn-dark').dataset.id,
    nombre: objeto.querySelector('h5').textContent,
    precio: objeto.querySelector('p').textContent,
    cantidad:1
  }
  
  if(carrito.hasOwnProperty(producto.id)) {
    producto.cantidad = carrito[producto.id].cantidad + 1
  }

  carrito[producto.id] = {...producto}
  
  console.log(producto);
  pintarCarrito()
}

const pintarCarrito = () => {
  console.log(carrito);
  items.innerHTML = ''
  Object.values(carrito).forEach(producto => {
    templateCarrito.querySelector('th').textContent = producto.id
    templateCarrito.querySelectorAll('td')[0].textContent = producto.nombre
    templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
    templateCarrito.querySelector('.btn-info').dataset.id = producto.id
    templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
    templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio
    const clone = templateCarrito.cloneNode(true)
    fragment.appendChild(clone)
  })
  items.appendChild(fragment)

  pintarFooter()

  localStorage.setItem('carrito', JSON.stringify(carrito))
}

const pintarFooter = () => {
  footer.innerHTML = ''
  if(Object.keys(carrito).length === 0) {
    footer.innerHTML = `
    <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
    `
    return
  }
  const nCantidad = Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad,0)
  const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0)

  templateFooter.querySelectorAll('td')[0].textContent = nCantidad
  templateFooter.querySelector('span').textContent = nPrecio

  const clone = templateFooter.cloneNode(true)
  fragment.appendChild(clone)
  footer.appendChild(fragment)

  const btnVaciar = document.getElementById('vaciar-carrito')
  btnVaciar.addEventListener('click', () => {
    carrito = {}
    pintarCarrito()
  })
  const btnCompra = document.getElementById('finalizar-compra')
  btnCompra.addEventListener('click', () => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Gracias por su compra!',
      showConfirmButton: false,
      timer: 1500
    })
    carrito = {}
    pintarCarrito()
})
}

const btnAccion = e => {
  /* console.log(e.target) */
  if (e.target.classList.contains('btn-info')){
    console.log(carrito[e.target.dataset.id])
    const producto = carrito[e.target.dataset.id]
    producto.cantidad ++
    carrito[e.target.dataset.id] = {...producto}
    pintarCarrito()
  }

  if (e.target.classList.contains('btn-danger')) {
    const producto = carrito[e.target.dataset.id]
    producto.cantidad--
    if(producto.cantidad === 0) {
      delete carrito[e.target.dataset.id]
    }
    pintarCarrito()
  }e.stopPropagation()
}
