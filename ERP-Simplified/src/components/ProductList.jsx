import PropTypes from 'prop-types'


const ProductList = ({ products, onAddProduct, onEditProduct ,onDelete}) => {


    const cardStyle = {
            width: '100%',
            padding: '0',
            borderRadius: '10px',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            backgroundColor: '#f8f9fa',
            marginBottom: '20px',
          };

          const tableStyle = {
                width: '100%',
                borderCollapse: 'collapse',
             };
            
             const thStyle = {
                borderBottom: '2px solid #000',
                textAlign: 'left',
                padding: '10px',
                backgroundColor:'Green',
                color:'white'
             };
            
             const tdStyle = {
                borderBottom: '1px solid #ddd',
                textAlign: 'left',
                padding: '10px',
             };
             const iconstyle={
              marginLeft:'.5em',
              cursor:'pointer'
           };
 return (
    
    <div style={cardStyle}>
    <button onClick={onAddProduct} style={{cursor:'pointer',padding:'2px', marginLeft:'10px'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0"/>
</svg> </button><br/><br/>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>Stock</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td style={tdStyle}>{product.name}</td>
              <td style={tdStyle}>{product.category}</td>
              <td style={tdStyle}>{product.price}</td>
              <td style={tdStyle}>{product.stock}</td>
              <td style={tdStyle}>
                <button onClick={() => onEditProduct(product)} style={iconstyle}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
</svg></button>
  <button onClick={() => onDelete(product.id)} style={iconstyle}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg></button> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
};


ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
       id: PropTypes.number.isRequired,
       name: PropTypes.string.isRequired,
       category: PropTypes.string.isRequired,
       price: PropTypes.number.isRequired,
       stock: PropTypes.number.isRequired,
    })).isRequired,
    onAddProduct: PropTypes.func.isRequired,
    onEditProduct: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
   };

export default ProductList;
