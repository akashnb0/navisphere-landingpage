import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import NotFound from "./pages/NotFound/NotFound";
import 'bootstrap/dist/css/bootstrap.css';
import Product from './pages/Product/Product';
import Connect from './components/Connect/Connect';
import Contact from './components/Contact/Contact';
import SignUp from './components/Signup/SignUp';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import DashBoard from './components/DashBoard/DashBoard';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
        
          <Route path="/" element={<Home />} />
          
        </Routes>
      </main>
      <Connect />
      <Contact />
      <Footer />
    </>
  );
}

export default App;