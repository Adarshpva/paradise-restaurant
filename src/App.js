import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './Pages/Homepage/Home';
import Footer from './Pages/Footer/Footer';
import Products from './Pages/Products/Products';
import Details from './Pages/Details/Details';
import Login from './Pages/Login/Login';
import About from './Pages/About/About';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/details' element={<Details/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/' element={<Home/>}/>

    </Routes>

    <Footer/>
   </>
  );
}

export default App;
