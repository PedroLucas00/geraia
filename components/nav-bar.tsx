"use client"
import Image from "next/image";
import Sidebar from "./side-bar";
import logoGeraia from "@/images/geraia.svg"

export default function NavBar() {
    return (
        <nav className="flex inline-flex justify-between px-12 py-6 bg-gray-50 fixed w-full">
            <Image
                alt="logo_geraia"
                src={logoGeraia}
                width={60}
                height={60}
            />
            <Sidebar></Sidebar>
        </nav>
    )
}