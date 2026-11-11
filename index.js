import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Listing from './src/components/Listing';
import About from './src/Pages/About';
import Contact from './src/Pages/Contact';
import { ErrorBoundary } from './src/Pages/Notfound';
import RestraruntDetails from './src/Pages/RestraruntDetails';
//import Grocessery from './src/Pages/Grocessery';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import ShimmerLoader from './src/components/Shimmer';
const Grocessery = lazy(()=> import('./src/Pages/Grocessery'))



const App = () => {
    return (
        
        <div className="app">
            <Header />
            <main className='min-h-[calc(100vh - 100px)]'>
                <Outlet />
            </main>
            <Footer />
        </div> 
    )
}


const appRouter = createBrowserRouter ([
    {
        path:"/",
        element: <App />,
        children:[
            {
                path:"/",
                element: <Listing />,
            },
            {
                path:"/about",
                element: <About />,
            },
            {
                path:"/contact",
                element: <Contact />,
            },
            {
                path:"/grocery",
                element: <Suspense fallback={<ShimmerLoader/>}><Grocessery /></Suspense>
            },
            {
                path:"/restrauntdetails/:resId",
                element: <RestraruntDetails />
            }
        ],
        errorElement: <ErrorBoundary />
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);