// Simulación de la tabla producto
 let productos = [
    { id: 1, nombre: "Producto 1", descripcion: "Descripción del Producto 1", precio: 19.99, stock: 100 },
    { id: 2, nombre: "Producto 2", descripcion: "Descripción del Producto 2", precio: 29.99, stock: 50 },
    { id: 3, nombre: "Producto 3", descripcion: "Descripción del Producto 3", precio: 39.99, stock: 75 }
  ];
  
  // Simulación de la tabla factura
let facturas = [
    { id: 1, fecha: "2023-11-15", total: 150.99, cliente: "Cliente 1", estado: "Pagado" },
    { id: 2, fecha: "2023-11-16", total: 99.50, cliente: "Cliente 2", estado: "Pendiente" },
    { id: 3, fecha: "2023-11-17", total: 200.25, cliente: "Cliente 3", estado: "En proceso" }
  ];

  export function getProductById(id){
    return productos[id-1]
  }

  export function getBillById(id){
    return facturas[id-1]
  }

  export function getProducts() {
    return productos
  }

  export function getBills(){
    return facturas
  }

  export function getFechas(){
    let fechas = []
    facturas.map(factura => fechas.push(factura.fecha))
    return fechas
  }

  export function getEstados(){
    let estados = []
    facturas.map(factura => estados.push(factura.estado))
    return estados
  }

  export function getNombres(){
    let nombres = []
    productos.map(producto => nombres.push(producto.nombre))
    return nombres
  }

  export function getDescripcions(){
    let descripcions = []
    productos.map(producto => descripcions.push(producto.descripcion))
    return descripcions
  }

  export function filterProducts(name, desc){
    let productsFiltered = productos
    if (name !== "")
      productsFiltered = productsFiltered.filter(producto => producto.nombre === name);
    if (desc !== "") 
      productsFiltered = productsFiltered.filter(producto => producto.descripcion === desc)
      
    return productsFiltered
  }

  export function filterBills(date, state){
    let billsFiltered = facturas
    if (date !== "")
      billsFiltered = billsFiltered.filter(factura => factura.fecha === date);
    if (state !== "") 
      billsFiltered = billsFiltered.filter(factura => factura.estado === state)
      
    return billsFiltered
  }
  
  // Función para simular un UPDATE en la tabla producto
  export function updateProducto(id, nuevoProducto) {
    const index = productos.findIndex(producto => producto.id === id);
    if (index !== -1) {
      productos[index] = { ...productos[index], ...nuevoProducto };
      console.log(`Producto con ID ${id} actualizado.`);
    } else {
      console.log(`Producto con ID ${id} no encontrado.`);
    }
  }
  
  // Función para simular un INSERT en la tabla producto
  export function insertProducto(producto) {
    productos.push({id:productos.length+1, ...producto});
    console.log('Nuevo producto insertado.');
  }
  
  // Función para simular un DELETE en la tabla producto
  export function deleteProducto(id) {
    productos = productos.filter(producto => producto.id !== id);
    console.log(`Producto con ID ${id} eliminado.`);
  }
  
  // Función para simular un UPDATE en la tabla factura
  export function updateFactura(id, nuevaFactura) {
    const index = facturas.findIndex(factura => factura.id === id);
    if (index !== -1) {
      facturas[index] = { ...facturas[index], ...nuevaFactura };
      console.log(`Factura con ID ${id} actualizada.`);
    } else {
      console.log(`Factura con ID ${id} no encontrada.`);
    }
  }
  
  // Función para simular un INSERT en la tabla factura
  export function insertFactura(factura) {
    facturas.push({id:facturas.length+1, ...factura});
    console.log('Nueva factura insertada.');
  }
  
  // Función para simular un DELETE en la tabla factura
  export function deleteFactura(id) {
    facturas = facturas.filter(factura => factura.id !== id);
    console.log(`Factura con ID ${id} eliminada.`);
  }
  
  // Ejemplos de uso
//   updateProducto(2, { precio: 39.99, stock: 60 });
//   insertProducto({ id: 4, nombre: "Producto 4", descripcion: "Descripción del Producto 4", precio: 49.99, stock: 80 });
//   deleteProducto(1);
  
//   updateFactura(2, { total: 120.75, estado: "Pagado" });
//   insertFactura({ id: 4, fecha: "2023-11-18", total: 89.99, cliente: "Cliente 4", estado: "Pendiente" });
//   deleteFactura(3);
  