import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
// import { BsFillCartFill } from "react-icons/bs";
// import { TbTruckDelivery } from "react-icons/tb";
// import { FaWallet } from "react-icons/fa";
// import { MdFavorite, MdHelp } from "react-icons/md";

const Sidebar = () => {
    const [nav, setNav] = useState(false);

    const menuItems = [
        { url: "/", text: "Home" },
        { url: "/projects", text: "Projects" },
        { url: "/about", text: "About" },
        { url: "/contact", text: "Contact" },
    ];

    return (
        <div className="flex justify-between items-left p-4">
            {/* Left side */}
            <div className="flex items-center">
                <div onClick={() => setNav(!nav)} className="cursor-pointer">
                    <AiOutlineMenu className="text-purple-700" size={30} />
                </div>
            </div>

            {/* Mobile Menu */}
            {nav ? (
                <div className="bg-transparent fixed w-full h-screen z-10 top-0 left-0" onClick={() => setNav(!nav)}></div>
            ) : (
                ""
            )}

            {/* Side drawer menu */}
            <div
                className={
                    nav
                        ? "fixed top-0 right-0 w-[300px] h-screen bg-purple-700 white z-10 duration-300 text-center"
                        : "fixed top-0 right-[-100%] w-[300px] h-screen bg-purple-700 z-10 duration-300 text-center"
                }
            >
                <AiOutlineClose
                    onClick={() => setNav(!nav)}
                    size={30}
                    className="absolute text-white right-6 top-6 cursor-pointer hover:text-black"
                />
                <nav className="mt-28 h-full">
                    <ul className="h-full flex flex-col p-10 my-auto text-white text-center">
                        {menuItems.map(({ url, text }, index) => {
                            return (
                                <div key={index} className="py-8">
                                    <Link href={url} className="text-3xl text-center text-white cursor-pointer w-ful mx-auto p-2 hover:text-black">
                                        {text}
                                    </Link>
                                </div>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;