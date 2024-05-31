import Link from "next/link";
import HomePage from "./components/Home/HomePage/HomePage";


const TravelGadgets = () => {
    return (
        <div>
        
            <Link href='/' >
                Home
            </Link>
        

            <HomePage />
        </div>
    );
};

export default TravelGadgets;