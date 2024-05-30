// Loader.js
import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <ThreeDots
                visible={true}
                height="50"
                width="50"
                color="#0c4a6e"
                radius="9"
                ariaLabel="three-dots-loading"
            />
        </div>
    );
};

export default Loader;
