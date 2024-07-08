
import Image from "next/image";
import { FaBrush, FaRegClock, FaTimes } from "react-icons/fa";
import LocationMap from '../../components/LocationMap/LocationMap';
import EventSummary from '../../components/EventSummary/EventSummary'

const EventDetails = () => {
    const locations = [
        {
            position: [32.2432, 77.1892], // Manali coordinates
            label: 'Manali'
        },

    ];

    return (
        <div className="">
            <div className="mx-auto max-w-7xl pt-20 ">

                {/* Section --- 1 start */}

                <div className="space-y-5">
                    <h1 className="text-center text-4xl">Events</h1>
                    <p className="text-center">Home - Events - Kiwi Link South East Asia 2024</p>
                    <div className="w-full bg-gray-300 p-5">
                        <p className="text-center">Monday, July 15, 2024</p>
                    </div>
                </div>

                {/* Section --- 2 start */}

                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-6 gap-4">
                        {/* First part with 4/6 width */}
                        <div className="col-span-6 md:col-span-4 space-y-5 relative">
                            <div className="relative w-full h-0 pb-[66.67%]">
                                <Image
                                    src="https://i.ibb.co/C6dKgkv/image.jpg"
                                    alt="Banner"
                                    layout="fill"
                                    objectFit="cover"
                                    placeholder="blur"
                                    quality={100}
                                    blurDataURL="data"
                                    className="rounded-lg"

                                />
                            </div>
                        </div>

                        {/* Second part with 2/6 width */}
                        <div className="col-span-6 md:col-span-2 space-y-5 px-2">
                            <h1 className=" text-3xl">Kiwi Link South East Asia 2024</h1>

                            <div className="space-y-5">
                                <div className="flex flex-wrap items-center gap-2">
                                    <div className="flex items-center gap-2">
                                        <FaRegClock className="text-blue-900" />
                                        <p>6 Nights 7 Days</p>
                                    </div>
                                    <div className="border-l h-6 border-black hidden md:block"></div>
                                    <p className="gap-2 mt-2 md:mt-0">
                                        <span className="font-medium">Durations:</span> 7 Days
                                    </p>
                                </div>

                                <div className="flex items-start gap-2">
                                    <div className="">
                                        <FaRegClock className="text-blue-900 mt-1" />
                                    </div>
                                    <p>
                                        80% of the fees will be refunded if the booking is canceled more than Thirty-Five (35) days before the beginning of the experience/tour.
                                    </p>
                                </div>



                                {locations.map((location, index) => (
                                    <div key={index} className="mb-8  h-4/5">


                                        <LocationMap position={location.position} label={location.label} />
                                    </div>
                                ))}
                            </div>
                        </div>




                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-6 md:col-span-4 space-y-5 relative">

                        {/* First part with 4/6 width */}

                        <div className="relative w-full h-0 pb-[66.67%]">


                            <EventSummary />




                        </div>
                    </div>


                    {/* Second part with 2/6 width */}
                    <div className="col-span-6 md:col-span-2 space-y-5 px-2">

                    </div>


                </div>
            </div>

        </div>
    );
};

export default EventDetails;