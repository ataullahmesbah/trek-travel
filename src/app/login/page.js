

import Image from "next/image";
import Link from "next/link";
import { FaBackward, FaForward } from "react-icons/fa";

export const metadata = {
    title: 'Login | Trek Explore Travel',
    description: 'Log in to access your account on Trek Explore Travel. Enter your credentials to securely sign in and manage your account.',
};

const LogIn = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center  p-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                <div className="flex justify-between items-center mb-6">
                    <Link href='/' className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
                        <FaBackward /> <h3 className="font-medium">Back to Home</h3>
                    </Link>
                    <Link href='/signup' className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
                        <h3 className="font-medium">Create an Account</h3> <FaForward />
                    </Link>
                </div>

                <div className="flex justify-center mb-6">
                    <Image
                        src='https://i.ibb.co/LptmthK/image.png'
                        alt="Trek Explore Travel"
                        width={48}
                        height={48}
                    />
                </div>

                <h2 className="text-2xl font-bold text-center mb-6">Log into Trek Explore Travel</h2>

                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="name@example.com"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 bg-gray-50"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Your Password"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 bg-gray-50"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-sky-800 text-white py-2 rounded hover:bg-blue-900 transition"
                    >
                        Log In
                    </button>
                </form>

                <div className="flex items-center my-4">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-4 text-gray-500">OR</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <div className="space-y-3">
                    <button className="flex items-center w-full px-4 py-2 border rounded-md hover:bg-gray-100 transition">
                        <Image
                            src="https://i.ibb.co/SKdhz0J/image.png"
                            alt="Google"
                            width={24}
                            height={24}
                            className="mr-3"
                        />
                        <span className="flex-grow text-center">Sign In With Google</span>
                    </button>
                    <button className="flex items-center w-full px-4 py-2 border rounded-md hover:bg-gray-100 transition">
                        <Image
                            src="https://i.ibb.co/9qXCrfs/image.png"
                            alt="Facebook"
                            width={24}
                            height={24}
                            className="mr-3"
                        />
                        <span className="flex-grow text-center">Sign In With Facebook</span>
                    </button>
                    <button className="flex items-center w-full px-4 py-2 border rounded-md hover:bg-gray-100 transition">
                        <Image
                            src="https://i.ibb.co/JnD2t8y/image.png"
                            alt="Github"
                            width={24}
                            height={24}
                            className="mr-3"
                        />
                        <span className="flex-grow text-center">Sign In With Github</span>
                    </button>
                </div>

                <Link href='/'>
                    <p className="text-center mt-6 text-blue-600 hover:underline">Forgotten password?</p>
                </Link>

                <div className="text-center mt-8">
                    <p className="text-sm text-gray-500">Secure Login with reCAPTCHA subject to Google</p>
                    <p className="text-sm text-gray-500">Terms & Privacy</p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
