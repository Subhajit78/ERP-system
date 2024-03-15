
import  { useState, useEffect } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

const ProductsManagement = () => {
 

const [products, setProducts] = useState([]);
const [showForm, setShowForm] = useState(false);
const [currentProduct, setCurrentProduct] = useState(null);

useEffect(() => {
   const storedProducts = localStorage.getItem('products');
   console.log(storedProducts);
   if (storedProducts) {
    const parsedProducts = JSON.parse(storedProducts);
    console.log('Parsed products:', parsedProducts);
    setProducts(parsedProducts);
   }
}, []);

useEffect(() => {
  console.log('Saving products to localStorage:', products);
   localStorage.setItem('products', JSON.stringify(products));
}, [products]);

const handleAddProduct = () => {
   setShowForm(true);
   setCurrentProduct(null);
};

const handleEditProduct = (product) => {
   setShowForm(true);
   setCurrentProduct(product);
};

const handleSubmit = (e) => {
  //  e.preventDefault();
   const formData = new FormData(e.target);
   const newProduct = {
     id: currentProduct ? currentProduct.id : products.length + 1,
     name: formData.get('name'),
     category: formData.get('category'),
     price: formData.get('price'),
     stock: formData.get('stock'),
   };

   if (currentProduct) {
     setProducts(products.map(product => product.id === currentProduct.id ? newProduct : product));
   } else {
     setProducts([...products, newProduct]);
   }
   setShowForm(false);
};

const handleCancel = () => {
   setShowForm(false);
};
const handleDeleteProduct = (id) => {
  // Filter out the product with the given id
  const updatedProducts = products.filter(product => product.id !== id);
  // Update the state
  setProducts(updatedProducts);
  // Update localStorage
  localStorage.setItem('products', JSON.stringify(updatedProducts));
};


 return (

<>
<div>
  <h1 style={{textAlign:'center',backgroundColor:'#6F42C1', color:'white',marginTop:0,height:'50px',padding:'10px'}}>Product Management</h1>
</div>
<div>
<ProductList
        products={products}
        onAddProduct={handleAddProduct}
        onEditProduct={handleEditProduct}
        onDelete ={handleDeleteProduct}/>
      {showForm && (
        <div style={{display:'flex', justifyContent:'center'}}>
        <ProductForm
          currentProduct={currentProduct}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          />
        </div>
      )}
</div>
</>
 );
};

export default ProductsManagement;
