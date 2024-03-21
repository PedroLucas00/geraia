/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VnpiceqihfL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image"
import Link from "next/link"
import logo_geraia from "@/images/geraia.svg"
import { FaXTwitter, FaGithub } from "react-icons/fa6"

export default function FooterComponent() {
    return (
        <footer className="w-full py-6 bg-purple-950 text-white flex justify-between items-center px-16">
            <div className="flex inline-flex items-center">
                <Image
                    alt="logo_geraia"
                    src={logo_geraia}
                    width={40}
                    height={40}
                />
                <div className="pl-2 text-sm font-bold">GERAIA</div>
                <div className="pl-2 text-xs">© 2024 Geraia.</div>
            </div>
            <div className="flex space-x-4">
                <Link href="#">
                    <FaXTwitter className="h-5 w-5 text-white" />
                </Link>
                <Link href="https://github.com/geraia">
                    <FaGithub className="h-5 w-5 text-white" />
                </Link>
                <Link href="https://www.instagram.com/geraiaverso/">
                    <InstagramIcon className="h-5 w-5 text-white" />
                </Link>
            </div>
            <div className="flex space-x-4 text-sm">
                <Link className="underline text-white" href="#">
                    Privacy Policy
                </Link>
                <Link className="underline text-white" href="#">
                    Terms of Service
                </Link>
            </div>
        </footer>
    )
}

function InstagramIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    )
}
