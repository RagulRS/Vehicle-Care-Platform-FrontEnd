import Home from './Home';
import Login from './Login';
import Register from './Register';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import PeriodicMaintenance from './PeriodicMaintenance.jsx';
import Products from './Products.jsx';
import Cart from './Cart.jsx';
import { Provider } from 'react-redux';
import { store } from '../store/Store.jsx';
import MaintenanceHistory from './MaintenanceHistory.jsx';



function App() {

 


  return (
    <div >
      <Provider store={store}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element ={<Register/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/home" element ={<Home/>} />
          <Route path="/periodicmaintenance" element ={<PeriodicMaintenance/>} />
          <Route path="/products" element ={<Products/>} />
          <Route path="/cart" element ={<Cart/>} />
          <Route path="/maintenancehistory" element ={<MaintenanceHistory/>} />
       

        </Routes>
      </BrowserRouter></Provider>
    </div>
  )
}

export default App
