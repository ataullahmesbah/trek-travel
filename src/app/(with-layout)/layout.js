import Navbar from "../components/Home/Navbar/Navbar";




const WithLayout = ({ children }) => {
    return (
        <div>

            <Navbar />
            {children}


        </div>
    )
}

export default WithLayout;