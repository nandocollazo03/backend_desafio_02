const ProductManager = require('./ProductManager');

const pathToFile = 'Productos.json';
const productManager = new ProductManager(pathToFile);

// Agregar un nuevo producto
const newProduct = {
  title: 'Nuevo Producto',
  description: 'Descripción del nuevo producto',
  price: 19.99,
  thumbnail: 'ruta/imagen.jpg',
  code: 'PN001',
  stock: 10
};

productManager.addProduct(newProduct);

// Obtener todos los productos
const allProducts = productManager.getProducts();
console.log('Todos los productos:', allProducts);

// Obtener un producto por su ID
const productId = 1; // Supongamos que el ID existe
const productById = productManager.getProductById(productId);
console.log('Producto por ID:', productById);

// Actualizar un producto
const productIdToUpdate = 1; // Suponiendo que el ID existe
const updatedFields = { price: 24.99, stock: 15 };
productManager.updateProduct(productIdToUpdate, updatedFields);

// Eliminar un producto
const productIdToDelete = 2; // Suponiendo que el ID existe
productManager.deleteProduct(productIdToDelete);