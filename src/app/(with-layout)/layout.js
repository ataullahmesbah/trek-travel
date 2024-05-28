import Footer from "../components/Footer/Footer";
import Navbar from "../components/Home/Navbar/Navbar";




const WithLayout = ({ children }) => {
    return (
        <div>

            <Navbar />
            {children}
            <Footer />


        </div>
    )
}

export default WithLayout;