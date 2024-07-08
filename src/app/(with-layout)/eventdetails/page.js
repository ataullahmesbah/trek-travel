import Image from "next/image";
import { FaClock, FaProductHunt, FaTimes } from "react-icons/fa";


const EventDetails = () => {
    return (
        <div className="mx-auto max-w-7xl m-20">

            {/* Section --- 1 start */}

            <div className="space-y-5">
                <h1 className="text-center text-4xl">Events</h1>
                <p className="text-center">Home - Events - Kiwi Link South East Asia 2024</p>
                <p className="text-center bg-gray-300 px-5 p-4">Monday, July 15, 2024</p>
            </div>

            {/* Section --- 2 start */}

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-6 gap-4">
                    {/* First part with 4/6 width */}
                    <div className="col-span-6 md:col-span-4 space-y-5 relative">
                        <div className="relative w-full h-0 pb-[66.67%]">
                            <Image
                                src="https://i.ibb.co/Jpc3b47/image.png"
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
                        <h1 className=" text-3xl">Kiwi Link South East Asia 2024
                        </h1>

                        <div className="space-y-5">

                            <div className="flex items-center gap-3">
                                <p className=" flex items-center gap-2 "> <FaClock className="" /> 6 Nights 7 Days</p>
                                <p className="border-2 border-y-black"></p>
                                <p className=" gap-2 ">  <span className="font-medium"> Durations: </span>7 Days</p>
                            </div>

                            <div className=" flex gap-2 items-center">
                                <p><FaProductHunt className=" items-center" /> </p>

                                <p className="">  80% of the fees will be refunded if the booking is canceled more than Thirty-Five (35) days before the beginning of the experience/tour.</p>
                            </div>



                        </div>


                    </div>
                </div>
            </div>


        </div>
    );
};

export default EventDetails;