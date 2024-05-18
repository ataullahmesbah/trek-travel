import Navbar from "../components/Navbar";



const WithLayout = ({ children }) => {
    return (
        <div>

            <Navbar />
            {children}


        </div>
    )
}

export default WithLayout;