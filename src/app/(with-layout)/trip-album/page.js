import ContainerPage from "@/app/container/page";
import Image from "next/image";
import TripAlbums from "@/app/components/TripAlbums/tripalbums";
import VideoGallery from "@/app/components/videoGallery/videogallery";

// Static metadata export
export const metadata = {
    title: 'Trek Explore Travel | Video and Photo Gallery',
    description: 'Explore our video and photo gallery showcasing our amazing trips and adventures. Discover breathtaking views, unforgettable moments, and travel inspiration.'
};

const TripAlbum = () => {
    return (
        <div className="bg-gray-50 p-10">
            <ContainerPage>
                <div className="mt-10">
                    <h1 className="text-black font-semibold text-xl text-center">Video Album</h1>
                    {/* underline */}
                    <div className="flex justify-center mt-7">
                        <div className="border-b-2 w-3/4"></div>
                    </div>
                    <VideoGallery />
                </div>

                {/* Images Album */}
                <div className="mt-10">
                    <h1 className="text-black font-semibold text-xl text-center">All Images From Trip Album</h1>
                    {/* underline */}
                    <div className="flex justify-center mt-7">
                        <div className="border-b-2 w-3/4"></div>
                    </div>
                    <TripAlbums />
                </div>
            </ContainerPage>
        </div>
    );
};

export default TripAlbum;
