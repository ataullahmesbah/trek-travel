import TravelBlogs from "@/app/components/TravelBlogs/TravelBlogs";
import Image from "next/image";

const Blogs = () => {
    return (
        <main>
            <div className="relative w-full h-[calc(100vh/3*1)] mt-12 mb-8">
                <Image
                    src="https://i.ibb.co/cF338j8/image.png"
                    alt="Travel Club"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center">
                    <div className="text-center p-4 sm:p-8 md:p-16 max-w-7xl mx-auto">
                        <div className="text-white text-center">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 text-center md:text-left ">Our Latest Blogs</h1>
                            <p className="text-base sm:text-lg md:text-xl mb-6 text-center md:text-left">Anyone can connect with their audience through blogging and enjoy the myriad benefits that blogging provides</p>
                        </div>

                    </div>
                </div>
            </div>

            <h1 className="text-black text-3xl text-center py-12 font-semibold">Blogs</h1>

            <div className="">
                <TravelBlogs />
            </div>
        </main>
    );
};

export default Blogs;