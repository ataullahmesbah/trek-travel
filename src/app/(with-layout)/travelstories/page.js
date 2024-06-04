import AdventureStories from "../../components/AdventureStories/AdventureStories";


export const metadata = {
    title: 'Travel Stories - Trek Explore Travel',
    description: 'Discover captivating travel stories from around the world. Join us on our adventures and get inspired for your next journey with stunning visuals and engaging narratives.',
};

const page = () => {
    return (
        <div>
            <AdventureStories />
        </div>
    );
};

export default page;