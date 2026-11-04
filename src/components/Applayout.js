import Header from "./Header";
import Listing from "./Listing";
import Footer from "./Footer";

const AppLayout = () => {
    return (
        <>
            <Header />
            <main>
               <Listing />
            </main>
            <Footer />
        </> 
    )
}

export default AppLayout;