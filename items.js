class Producto{
    ////Atributos
    nombre;
    editorial;
    volumen;
    cantidad;
    precio;

constructor(id,nombre,editorial,volumen,cantidad,precio){
    this.id = id
    this.nombre = nombre
    this.editorial = editorial
    this.volumen = volumen
    this.cantidad = cantidad
    this.precio = precio
}

    subTotal = () => {
        return this.precio*this.cantidad;
    }
}