import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Listing from './src/components/Listing';
import About from './src/Pages/About';
import Contact from './src/Pages/Contact';
import { ErrorBoundary } from './src/Pages/Notfound';
import RestraruntDetails from './src/Pages/RestraruntDetails';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';

const App = () => {
    return (
        
        <div className="app">
            <Header />
            <main className='main-wrapper'>
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
                path:"/restrauntdetails/:resId",
                element: <RestraruntDetails />
            }
        ],
        errorElement: <ErrorBoundary />
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);