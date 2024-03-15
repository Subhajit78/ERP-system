import PropTypes from 'prop-types'
const ProductForm = ({ currentProduct, onSubmit, onCancel }) => {

   const fstyle={
      margin:'0.2em',
      borderRadius:'5px',
      fontSize:'25px'
   }
   const btnspc ={
      marginLeft:'1em'
   }

 return (
 <div>
    <form onSubmit={onSubmit} >
      <input type="text" name="name" placeholder="Name" defaultValue={currentProduct?.name} required style={fstyle} /><br/>
      <input type="text" name="category" placeholder="Category" defaultValue={currentProduct?.category} required style={fstyle} /><br/>
      <input type="number" name="price" placeholder="Price" defaultValue={currentProduct?.price} required style={fstyle} min={0}/><br/>
      <input type="number" name="stock" placeholder="Stock" defaultValue={currentProduct?.stock} required style={fstyle} min={0}/><br/>
      <button type="submit" style={btnspc}>{currentProduct ? 'Update' : 'Add'} Product</button>
      <button type="button" onClick={onCancel} style={btnspc} >Cancel</button>
    </form>
    </div>
 );
};

ProductForm.propTypes = {
    currentProduct: PropTypes.shape({
       id: PropTypes.number,
       name: PropTypes.string,
       category: PropTypes.string,
       price: PropTypes.number,
       stock: PropTypes.number,
    }),
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
   };

export default ProductForm;
