let carrito = []

let objNaruto = new Producto(1,"Naruto","ShonenJump",4,2,500);
let objOnePiece = new Producto(2,"OnePiece","ShonenJump",3,1,400);
let objReZerp = new Producto(3,"ReZero","PaniniManga",2,4,224);

const productos = [objNaruto,objOnePiece,objReZerp]

document.addEventListener('DOMContentLoaded', () => {
  const carritoLocal = JSON.parse(localStorage.getItem('carrito'));
  if (carritoLocal != null)
  {
    carrito = carritoLocal;
  }
  mostrarCarrito();
});

const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");


boton1.addEventListener('click', () => {
    const producto = productos.find ((item) =>{
        return item.id === +boton1.dataset.id
    });
    carrito.push(producto);
    localStorage.setItem('carrito',JSON.stringify(carrito));
    mostrarCarrito();
})

boton2.addEventListener('click', () => {
    const producto = productos.find ((item) =>{
        return item.id === +boton2.dataset.id
    });
    carrito.push(producto);
    localStorage.setItem('carrito',JSON.stringify(carrito));
    mostrarCarrito();
})

boton3.addEventListener('click', () => {
    const producto = productos.find ((item) =>{
        return item.id === +boton3.dataset.id
    });
    carrito.push(producto);
    localStorage.setItem('carrito',JSON.stringify(carrito));
    mostrarCarrito();
})

function mostrarCarrito() {
    const tabla = document.getElementById('items');
    tabla.innerHTML += ``;
    let counter = 1;

    carrito.forEach((producto) => {
        tabla.innerHTML +=`
            <tr>
                <td>${counter}</td>
                <td>${producto.nombre}</td>
                <td>${producto.editorial}</td>
                <td>${producto.volumen}</td>
                <td>${producto.cantidad}</td>
                <td>${producto.precio}</td>
            </tr>
        `;
        counter++;
    });
    tr = document.createElement('tr');
    tr.innerHTML = `<th><th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>${carrito.reduce((total,item) => total + item.precio,0)} </td>
                        `;
        tabla.appendChild(tr);

}
