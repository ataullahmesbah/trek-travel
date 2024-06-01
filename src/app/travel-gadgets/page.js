import Link from "next/link";
import GadgetsHome from "./components/GadgetsHomePage/GadgetsHome/GadgetsHome";


const TravelGadgets = () => {
    return (
        <div>

            <Link href='/' >
                Home
            </Link>

            <GadgetsHome />

        </div>
    );
};

export default TravelGadgets;