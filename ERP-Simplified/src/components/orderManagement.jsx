

const OrdersManagement = () => {
    // Mock data
    const orders = [
       { id: 1, customerName: 'John', orderDate: '2023-04-01', status: 'Pending' },
       {id: 2, customerName: 'Smith', orderDate: '2024-04-23', status: 'Done' },
       {id: 3, customerName: 'Abhishek', orderDate: '2024-04-11', status: 'Pending'},
       {id: 4, customerName: 'Subhajit', orderDate: '2023-03-15', status: 'Pending'},
       {id: 5, customerName: 'Rajat', orderDate: '2024-01-24', status: 'Done'},
       {id: 6, customerName: 'Lili', orderDate: '2024-04-18', status: 'Done'}
    ];
   
    const cardStyle = {
     width: '100%',
     padding: '0px',
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
     padding: '10px',
     backgroundColor:'green',
     color:'white',
     width:'150px',
     textAlign:'center',
     
   };
   
   const tdStyle = {
     borderBottom: '1px solid #ddd',
     textAlign: 'center',
     padding: '10px',
   };
   
    return (
   <>
     <div>     
        <h1 style={{textAlign:'center',backgroundColor:'#6F42C1', color:'white',marginTop:0,height:'50px',padding:'10px'}}>Orders Management</h1>
        </div>
       <div style={cardStyle}>
         <table style={tableStyle}>
           <thead>
             <tr>
               <th style={thStyle}>Order ID</th>
               <th style={thStyle}>Customer Name</th>
               <th style={thStyle}>Order Date</th>
               <th style={thStyle}>Status</th>
             </tr>
           </thead>
           <tbody>
             {orders.map(order => (
               <tr key={order.id}>
                 <td style={tdStyle}>{order.id}</td>
                 <td style={tdStyle}>{order.customerName}</td>
                 <td style={tdStyle}>{order.orderDate}</td>
                 <td style={tdStyle}>{order.status}</td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
       </>
    );
   };
   
   export default OrdersManagement;
   