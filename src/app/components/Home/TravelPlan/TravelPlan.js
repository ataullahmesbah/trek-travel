
import ContainerPage from "@/app/container/page";
import Image from "next/image";
import Link from "next/link";

const TravelPlan = () => {
    return (

        <div className="">
            <ContainerPage>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 ">
                    {/* Left side */}
                    <div>
                        <h1 className="text-3xl font-bold mb-4">
                            Explore the World’s Best Destinations with Expert Guides on our Adventure Tours
                        </h1>
                        <p className="mb-6 text-lg">
                            Adventure awaits when you set off on the trail less traveled. Explore the best of the world’s most beautiful destinations – from the well-known to the well-hidden – and get an up-close view at local life. Discover the natural wonders and dynamic cultures of our world with expert guides leading the way and every detail handled from start to finish.
                        </p>
                        <Link href='/' legacyBehavior>
                            <a className="text-white hover: font-medium bg-sky-900 p-2 rounded-md transform transition duration-300 hover:scale-150">
                                Plan Your Adventure Tour Now
                            </a>
                        </Link>
                    </div>

                    {/* Right side */}
                    <div className="flex justify-center">
                        <Image
                            src='https://i.ibb.co/sKdpBNk/lakes.jpg'
                            width={800}
                            height={600}
                            alt="Travel Plan Image"
                            className="rounded-lg"
                            placeholder="blur"
                            blurDataURL="https://i.ibb.co/Jpc3b47/image.png"
                        />
                    </div>
                </div>
            </ContainerPage>
        </div>

    );
};

export default TravelPlan;
