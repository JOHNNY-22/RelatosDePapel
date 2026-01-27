import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {LandingPage} from './pages/LandingPage.jsx';
import { Footer } from './components/Footer.jsx';
import { BookDetail } from './pages/BookDetail.jsx';
import {Home} from './pages/Home.jsx';
import './App.css';
import {CartSidebar} from "./components/CartSidebar.jsx";
import {CartProvider} from './hooks/CartContext.jsx';

function App() {
    return (
        <CartProvider>
            <Router>
                <div className="app-container">
                    {/* Ya no necesita props, las leerá del contexto */}
                    <CartSidebar />
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/book/:id" element={<BookDetail />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </CartProvider>
    );
}
export default App;