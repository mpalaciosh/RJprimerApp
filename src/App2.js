import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/App.css';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ProductPage from './pages/ProductPage';
import NavBar from './components/NavBar';
import VisionPage from './pages/VisionPage';
import MisionPage from './pages/MisionPage';
import ProducDetailPage from './pages/ProducDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import CategoriasPage from './pages/CategoriasPage';

import { CartProvider } from './context/CartContext';
import CarritoPage from './pages/CarritoPage';
import AddProductPage from './pages/AddProducPage';
import LoginPage from './pages/LoginPage';
import DetalleCompra from './pages/DetalleCompra';


function App2(){
return (
 //<UserProvider>
   <CartProvider>
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="category/:categoriaId" element={<CategoriasPage />} />    
          
        <Route path="login" element={<LoginPage/>}/>
        <Route path="agregar" element={<AddProductPage />}/>
        <Route path="detaCompra/:orderId" element={<DetalleCompra/>}/> 

        <Route path="nosotros" element={<NosotrosPage />}>
          <Route path="vision" element={<VisionPage />} />
          <Route path="mision" element={<MisionPage />} />
          <Route path="login" element={<LoginPage/>} />
        </Route>

        <Route path="productos">
          <Route index element={<ProductPage />} />
          <Route path=":productId" element={<ProducDetailPage />} />
        </Route>
        <Route path="carrito" element={<CarritoPage />} /> 
        
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </CartProvider>
//  </UserProvider>
);
}

export default App2;

//import {UserProvider } from './context/UserContext';