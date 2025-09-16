
import { HomePage } from './pages/HomePage'
import { useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'
import { Route, Routes } from 'react-router'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage' 

function App() {
   const [cart, setCart] = useState([]);

   useEffect(() => {
     axios('http://localhost:3000/api/cart-items?expand=product')
      .then(response => {
        setCart(response.data);
       })
   },[]);

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart}/>} />
        <Route path='checkout' element={<CheckoutPage cart={cart}/>} />
        <Route path='orders' element={<OrdersPage />} />

      </Routes>

    </>
  )
}

export default App
