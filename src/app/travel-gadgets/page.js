import Link from "next/link";
import GadgetsHome from "./components/GadgetsHomePage/GadgetsHome/GadgetsHome";
import BannerEco from "./components/Home/BannerEco/BannerEco";


const TravelGadgets = () => {
    return (
        <div>

            <BannerEco />
            <GadgetsHome />

        </div>
    );
};

export default TravelGadgets;