import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {LandingPage} from './pages/LandingPage.jsx';
import { Footer } from './components/Footer.jsx';
import {Home} from './pages/Home.jsx';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    {/* Ruta raíz: carga la Landing Page */}
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/Home" element={<Home />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;