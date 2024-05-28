import Banner from "../components/Home/Banner";
import Trip from "@/app/components/trip";
import LatestStories from "../components/Home/LatestStories/LatestStories";
import TravelPlan from "../components/Home/TravelPlan/TravelPlan";
import UpcomingEvents from "../components/Home/UpcomingEvent/UpcomingEvent";
import CleanSafeAdventures from "../components/CleanSafeAdventures/CleanSafeAdventures";
import EventSystem from "../components/Home/EventSystem/EventSystem";

export const metadata = {
    title: 'Trek Explore Travel',
    description: 'Discover the story behind Hyascka, your trusted partner for digital success. Learn about our journey, mission, and commitment to driving growth for businesses through innovative digital marketing strategies and expert web development services.',
};


export default function Home() {
    return (
        <main className="">
            <Banner />
            <LatestStories />
            <TravelPlan />
            <CleanSafeAdventures />
            <UpcomingEvents />
            <EventSystem />

        </main>
    );
}