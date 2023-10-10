import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contect from './Pages/Contect';
// import Header from './Components/Header';
import Navbar from './Components/Navbar';

// import Lazy from './Components/Lazy';
import { Suspense } from 'react';
const Lazy = React.lazy(() => import("./Components/Lazy"))


function App() {
  return (
    <>
    <BrowserRouter>
      {/* <Header/> */}
      {/* <Navbar/> */}
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contect' element={<Contect/>}/>
      </Routes> */}


      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route path='home' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contect' element={<Contect/>}/>

          <Route path='lazy' element={<Suspense fallback={<h1>Loading page</h1>}><Lazy/></Suspense>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
