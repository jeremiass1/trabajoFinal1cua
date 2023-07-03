
const productos = [
   {

      id: "matesybombilla",
      Nombre: "Mate Torpedo",
      precio: 3000,
      img: "imagenesproductos/mate1.PNG",
      categoria: {
         id: "matesybombilla",
         Nombre: "matesybombilla"
      }
   },
   {
      id: "matesybombilla",
      Nombre: "Mate de Argentina",
      precio: 4500,
      img: "imagenesproductos/mate2.PNG",
      categoria: {
         id: "matesybombilla",
         Nombre: "matesybombilla"
      }
   },
   {
      id: "matesybombilla",
      Nombre: "Mate Imperial",
      precio: 4000,
      img: "imagenesproductos/mate3.PNG",
      categoria: {
         id: "matesybombilla",
         Nombre: "matesybombilla"
      }
   },
   {
      id: "matesybombilla",
      Nombre: "Mate de Boca",
      precio: 5500,
      img: "imagenesproductos/mate4.PNG",
      categoria: {
         id: "matesybombilla",
         Nombre: "matesybombilla"
      }
   },
   {
      id: "matesybombilla",
      Nombre: "Bombillas con Diseño",
      precio: 2000,
      img: "imagenesproductos/bombillas.PNG",
      categoria: {
         id: "matesybombilla",
         Nombre: "matesybombilla"
      }
   },
   {
      id: "matesybombilla",
      Nombre: "Bombillas clasicas",
      precio: 1000,
      img: "imagenesproductos/bombillas2.PNG",
      categoria: {
         id: "matesybombilla",
         Nombre: "matesybombilla"
      }
   },
   /* termos */
   {
      id: "termosymateras",
      Nombre: "Termo stanley 1L",
      precio: 15000,
      img: "imagenesproductos/termo1.PNG",
      categoria: {
         id: "termosymateras",
         Nombre: "termosymateras"
      }
   },
   {
      id: "termosymateras",
      Nombre: "Termos stanley 1,5L",
      precio: 20000,
      img: "imagenesproductos/termos.PNG",
      categoria: {
         id: "termosymateras",
         Nombre: "termosymateras"
      }
   },
   {
      id: "termosymateras",
      Nombre: "Termo de Aluminio",
      precio: 10000,
      img: "imagenesproductos/termo3.jpg",
      categoria: {
         id: "termosymateras",
         Nombre: "termosymateras"
      }
   },
   {
      id: "termosymateras",
      Nombre: "Termo de Campiones",
      precio: 12000,
      img: "imagenesproductos/termo4.webp",
      categoria: {
         id: "termosymateras",
         Nombre: "termosymateras"
      }
   },
   {
      id: "termosymateras",
      Nombre: "Matera de Cuero Negro",
      precio: 8000,
      img: "imagenesproductos/matera.jpeg",
      categoria: {
         id: "termosymateras",
         Nombre: "termosymateras"
      }
   },
   {
      id: "termosymateras",
      Nombre: "Matera de Cuero Marron",
      precio: 8000,
      img: "imagenesproductos/matera2.jpg",
      categoria: {
         id: "termosymateras",
         Nombre: "termosymateras"
      }
   },
   /*yerbas*/
   {
      id: "yerbasystickers",
      Nombre: "yerba Baldo 1k",
      precio: 1700,
      img: "imagenesproductos/baldo.png",
      categoria: {
         id: "yerbasystickers",
         Nombre: "yerbasystickers"
      }
   },
   {
      id: "yerbasystickers",
      Nombre: "Yerba Canarias 500g",
      precio: 1000,
      img: "imagenesproductos/canarias.jpeg",
      categoria: {
         id: "yerbasystickers",
         Nombre: "yerbasystickers"
      }
   },
   {
      id: "yerbasystickers",
      Nombre: "Yerba Canarias 1k",
      precio: 2000,
      img: "imagenesproductos/canariasGrande.jpeg",
      categoria: {
         id: "yerbasystickers",
         Nombre: "yerbasystickers"
      }
   },
   {
      id: "yerbasystickers",
      Nombre: "Yerba Rei Verde 1k",
      precio: 1800,
      img: "imagenesproductos/yerba4.jpg",
      categoria: {
         id: "yerbasystickers",
         Nombre: "yerbasystickers"
      }
   },
   {
      id: "yerbasystickers",
      Nombre: "Sticker de Messi x5",
      precio: 3200,
      img: "imagenesproductos/sticker 4.PNG",
      categoria: {
         id: "yerbasystickers",
         Nombre: "yerbasystickers"
      }
   },
   {
      id: "yerbasystickers",
      img: "imagenesproductos/sticker5.PNG",
      Nombre: "Stickers de Boca x3",
      precio: 2200,
      categoria: {
         id: "yerbasystickers",
         Nombre: "yerbasystickers"
      }
   },
];


const contenedorProductos = document.getElementById("contenedorProdcutos")/* me trae el documento  que tiene este id */
const botonesProductos = document.querySelectorAll(".botonMenu")   /* me trae todos los documentosque tenga ese id */

function cargarProductos(productosElegidos) { /* esta funcion basicamente hace cargar los productos */

   contenedorProductos.innerHTML = " ";

   productosElegidos.forEach((producto) => {      /* forEach lo que hace es recorrer el arreglo  */
      let div = document.createElement("div");     /* createElement lo que hace es crear un elemento de etiqueta ,en este caso un div */
      div.classList.add("productos")         /* classlist lo que hace es ponerle un class a ese div ,innerHTML permite modificar uin elemento html y incertales cosas */
      div.innerHTML = `                         
        <div>
            <img class="imagenProducto" src="${producto.img}" alt="
            ${producto.Nombre}">
          </div>
          <div class="detallesProductos">                              
            <h3 class="tituloProducto">${producto.Nombre}</h3>
            <p class="precioProducto">$${producto.precio}</p>
            <button class="botonAgregar" id="${producto.id}">agregar</button>
          </div>
        `;

      contenedorProductos.append(div);   /* en esta linea lo que hago es que al contenedorProductos es insertale el div a traves de append */

   })
}

cargarProductos(productos)


botonesProductos.forEach(boton => {
   boton.addEventListener("click", (e) => {     /* aca le digo que hacer cuando hago  click en los botones de las categorias  a traves de una funcion flecha  */

      if (e.currentTarget.id != "todos") {    /* aca lo que hago con el currentTarget es que traiga un id y que si es diferente que hacer */
         const botonCategoria = productos.filter(productos => productos.categoria.id === e.currentTarget.id)    /* aca filtro el array tomando el id y 
         comparando con el id de los botones a si puedo mostrar los articulos con esa id */
         cargarProductos(botonCategoria)  /* muestra los productos con misma id que el boton*/
      }
      else {
         cargarProductos(productos) /* cargo todos los productos  */
      }
   }
   )
})
