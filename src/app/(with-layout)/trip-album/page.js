
import ContainerPage from "@/app/container/page";
import Image from "next/image";


const TripAlbum = () => {
    return (
        <div className="bg-gray-50 p-10">
            <ContainerPage>
                <div className="mt-10">
                    <h1 className="text-black font-semibold text-xl text-center">All Images From Trip Album</h1>
                    {/* underline */}
                    <div className="flex justify-center mt-7">
                        <div className="border-b-2 w-3/4"></div>
                    </div>

                 
                </div>
            </ContainerPage>
        </div>
    );
};

export default TripAlbum;
