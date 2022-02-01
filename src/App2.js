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
import LoginPage from './pages/LoginPage';




function App2(){
return (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path=":CategoriaId" element={<CategoriasPage />} />
       
        <Route path="login" element={<LoginPage />}/>

        <Route path="nosotros" element={<NosotrosPage />}>
          <Route path="vision" element={<VisionPage />} />
          <Route path="mision" element={<MisionPage />} />
          <Route path="login" element={<LoginPage/>} />
        </Route>

        <Route path="productos">
          <Route index element={<ProductPage />} />
          <Route path=":productId" element={<ProducDetailPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
}

export default App2;