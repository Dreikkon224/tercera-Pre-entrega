const productos = [new productos(1,"naruto","ShonenJump",4,2,500),new productos(2,"OnePiece","ShonenJump",3,1,400),new productos(3,"ReZero","PaniniManga",2.4,224)];

const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");


boton1.addEventListener('click', () => {
    const producto = productos.find ((item) =>{
        return item.id === boton1.dataset.id
    });
    carrito.push(producto);
    mostrarCarrito();
})

boton2.addEventListener('click', () => {
    const producto = productos.find ((item) =>{
        return item.id === boton2.dataset.id
    });
    carrito.push(producto);
    mostrarCarrito();
})

boton3.addEventListener('click', () => {
    const producto = productos.find ((item) =>{
        return item.id === boton3.dataset.id
    });
    carrito.push(producto);
    mostrarCarrito();
})

function mostrarCarrito() {
    const tabla = document.getElementById('producto');
    tabla.innerHTML += ``;
    let counter = 1;

    carrito.array.forEach((producto) => {
        tabla.innerHTML +=`
            <tr>
                <th>${counter}<th>
                <th>${producto.nombre}<th>
                <th>${producto.editorial}<th>
                <th>${producto.volumen}<th>
                <th>${producto.cantidad}<th>
                <th>${producto.precio}<th>
            <tr>
        `;
        counter++;
    });
    tr = document.createElement('tr');
    tr.innerHTML = `<th><th>
                        <td><td>
                        <td><td>
                        <td><td>
                        <td><td>
                        <td><td>
                        <td>${carrito.reduce((total,item) => total + item-precio,0)} <td>
                        `;
        tabla.appendChild(tr);

}

cargarItems();
mostrarCarrito();