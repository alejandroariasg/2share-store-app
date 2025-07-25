import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ShoppingListPage from './pages/ShoppingListPage';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeRedirect from './pages/HomeRedirect';
import ProductCatalogPage from './pages/ProductCatalogPage';
import RegisterPage from './pages/RegisterPage'
import RequireAuth from './routes/RequireAuth';


function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeRedirect />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products" element={<RequireAuth><ProductCatalogPage /></RequireAuth>} />
        <Route path="/shopping-list" element={<RequireAuth><ShoppingListPage /></RequireAuth>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
