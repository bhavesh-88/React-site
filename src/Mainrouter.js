import React, { children } from 'react'

import Home from './Pages/Home';
import About from './Pages/About';
import Contect from './Pages/Contect';
// import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Product from './Pages/Product';
import Examples from './Pages/Examples';

import { createBrowserRouter } from 'react-router-dom'
import { Suspense } from 'react';
const Classcomporoute = React.lazy(() =>import('./Classcomponent/Classcomporoute'));
const Functioncomporoute = React.lazy(() => import("./Functionalcomponent/Functioncomporoute"))

const Mainrouter = createBrowserRouter([
    {
        path:"/",
        element:<><Navbar/></>

    },
    {
        path:"/home",
        element:<><Navbar/><Home/></>

    },
    {
        path:"/about",
        element:<><Navbar/><About/></>

    },
    {
        path:"/contect",
        element:<><Navbar/><Contect/></>

    },
    {
        path:"/product",
        element:<><Navbar/><Product/></>

    },
    {
        path:"/examples",
        element:<><Navbar/><Examples/></>,
        children:[
            {
                path:"classcompo/*",
                element:<><Suspense fallback={<h2>Loading......</h2>}><Classcomporoute/></Suspense></>                
            },
            {
                path:"functioncompo/*",
                element:<><Suspense fallback={<h2>Loading......</h2>}><Functioncomporoute/></Suspense></>                
            }
        ]

    }
])

export default Mainrouter
