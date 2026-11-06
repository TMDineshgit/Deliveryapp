import Header from "./components/Header";
import Footer from "./components/Footer";
import Listing from "./components/Listing";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import { Outlet } from "react-router";

const App = () => {
    console.log("test")
    return (
        
        <>
            <Header />
            <main className="main-wrapper">
               <Outlet />
            </main>
            <Footer />
        </> 
    )
}
export default App;