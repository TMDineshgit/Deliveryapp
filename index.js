import React, { lazy, Suspense, useEffect, useState } from 'react';
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
const Cart = lazy(()=> import('./src/Pages/Cart'))
import UserContext from './src/utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './store/appStore';


const App = () => {

    const [userName, setUserName] = useState()

    useEffect(()=>{
        const data = {
            name: "dinesh"
        }
        setUserName(data.name)
    },[])

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedinUser: userName, setUserName}}>
                <div className="app">
                    <Header />
                    <main className='min-h-[calc(100vh - 100px)]'>
                        <Outlet />
                    </main>
                    <Footer />
                </div> 
            </UserContext.Provider>
        </Provider>
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
            },
            {
                path:"/cart",
                element: <Suspense fallback={<ShimmerLoader/>}><Cart /></Suspense>
            }
        ],
        errorElement: <ErrorBoundary />
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);