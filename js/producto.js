/**
 *  Escribe una clase Producto para crear objetos. Estos objetos, 
 * deben presentar las propiedades código, nombre y precio, 
 * además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
 * Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
 * Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
 */
let listado_producto = [];
const bodyListaProductos = document.getElementById("bodyTablaProducto");
class Producto {
    #codigo;
    #nombre;
    #precio;
    constructor(nombre, precio) {
        this.#codigo = parseInt(this.#generaID());
        this.#nombre = nombre
        this.#precio = precio;
    }
    get getPrecio() {
        return this.#precio;
    }
    get getNombre() {
        return this.#nombre;
    }
    get getCodigo() {
        return this.#codigo;
    }
    set setNombre(nombre) {
        this.#nombre = nombre;
    }
    set setPrecio(precio) {
        this.#nombre = precio;
    }
    get imprimirInformacionProducto() {
        return `Codigo: ${this.#codigo} - Nombre: ${this.#nombre} - Precio: $ ${this.#precio}`;
    }
    #generaID() {
        let min = Math.ceil(1);
        let max = Math.floor(4000);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

function agregarProducto() {
    const nombreProducto = document.getElementById("inputNombreProducto").value,
        precio = document.getElementById("inputPrecioProducto").value,
        precioProducto = parseFloat(precio);

    if (nombreProducto == null || isNaN(precioProducto) || precioProducto < 0 || precio.includes(",")) return alert('Ingrese un nombre y/o precio correcto');

    let productoNuevo = new Producto(nombreProducto, precioProducto);
    listado_producto.push(productoNuevo);
    document.getElementById("inputNombreProducto").value = "";
    document.getElementById("inputPrecioProducto").value = "";
    listarProductos(productoNuevo);
    alert('Producto Creado');
}

function listarProductos(producto) {
    let fila = document.createElement("tr");

    let columna = document.createElement("td");
    columna.innerText = producto.getCodigo;
    fila.appendChild(columna);

    columna = document.createElement("td");
    columna.innerText = producto.getNombre;
    fila.appendChild(columna);

    columna = document.createElement("td");
    columna.innerText = producto.getPrecio;
    fila.appendChild(columna);

    columna = document.createElement("td");

    let buttonDelete = document.createElement("button");
    buttonDelete.className = "btn btn-danger mx-2";
    buttonDelete.innerText = "Eliminar";

    let buttonUpdate = document.createElement("button");
    buttonUpdate.className = "btn btn-warning mx-2";
    buttonUpdate.innerText = "Modificar";

    columna.appendChild(buttonDelete);
    columna.appendChild(buttonUpdate);

    fila.appendChild(columna);

    buttonDelete.addEventListener("click", (event) => {
        while (confirm('¿Desa Eliminar el Producto?')) {
            let fila = event.target.parentNode.parentNode,
                codigoProducto = parseInt(fila.getElementsByTagName('td')[0].innerText);
            listado_producto = listado_producto.filter(producto => producto.getCodigo !== codigoProducto);
            fila.remove();
            alert("Producto Eliminado!");
        }
    });
    buttonUpdate.addEventListener("click", () => {
        alert("Error! se encuentra en desarrollo =( ...");
    });

    bodyListaProductos.appendChild(fila);
}

function calcularTotal() {
    document.getElementById("inputNombreProducto").value
    let suma = 0;
    if (listado_producto.length == 0) return alert('No hay productos en el carrito de compras...');
    document.querySelector("#cantidadProducto").innerText = "  " + listado_producto.length;
    listado_producto.forEach(producto => {
        suma += producto.getPrecio;
    });
    document.querySelector("#totalPrecio").innerText = "  " + "$" + suma.toFixed(2);
}

function cancelarOperacion() {
    window.location.reload();
}
function verFactura() {

}
document.querySelector('.verFactura').addEventListener('click', function () {
    const olContenedorPadre = document.getElementById("listadoProductoModal");
    let sumaModal = 0;
    while (olContenedorPadre.hasChildNodes()) {
        olContenedorPadre.childNodes.forEach(li => li.remove());
    }
    listado_producto.forEach(producto => {
        sumaModal += producto.getPrecio;
        let li = document.createElement("li");
        li.innerText = producto.imprimirInformacionProducto;
        olContenedorPadre.appendChild(li);
    });
    document.querySelector("#totalPrecioModal").innerText = "  " + "$" + sumaModal.toFixed(2);
    document.querySelector('#imprimirModal').classList.add('show');
    document.querySelector('.modal-backdrop').classList.add('show');

});
function imprimirFacturaProducto() {
    alert("Error! se encuentra en desarrollo =( ...");
}