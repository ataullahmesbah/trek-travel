import Banner from "../components/Home/Banner";
import Trip from "@/app/components/trip";

export const metadata = {
    title: 'Trek Explore Travel',
    description: 'Discover the story behind Hyascka, your trusted partner for digital success. Learn about our journey, mission, and commitment to driving growth for businesses through innovative digital marketing strategies and expert web development services.',
};


export default function Home() {
    return (
        <main className="">
            <Banner />
            <Trip />
        </main>
    );
}