
import { Link } from 'react-router-dom';
import styles from './dashboard.module.css';


const Dashboard = () => {
 // Mock data for demonstration purposes
 const totalProducts = 0;
 const totalOrders = 5;

 const linkStyle = {
    margin: '0px',
    padding: '10px',
    backgroundColor: '#6F42C1',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    marginTop:'10px'
 };

 return (
<>
  <div>  
    <h1 style={{textAlign:'center',backgroundColor:'#6F42C1', color:'white',marginTop:0,height:'50px',padding:'10px'}}>ERP Dashboard</h1>
  </div>
  <div className={styles.dashboardStyle}>
    <div className={styles.cardStyle}>
      <div className={styles.metricsStyle}>
        <p>Total Products: {totalProducts}</p>
        <Link to="/products" style={linkStyle}>Manage Products</Link>
      </div>
    </div>
    <div className={styles.cardStyle}>
      <div className={styles.metricsStyle}>
        <p className={styles.showItem}>Total Orders: {totalOrders}</p>
        <Link to="/orders" style={linkStyle}>Manage Orders</Link>
      </div>
    </div>
  </div>
  <hr />

</>
 );
};

export default Dashboard;


