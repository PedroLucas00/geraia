/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jHT2m4BO6u4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image"
import React from "react"
import map from "@/images/map.png"

export default function Contact() {

    return (
        <div className="py-32  px-24 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div>
                <div className="space-y-3">
                    <h1 className="text-3xl font-bold">Have ideas?</h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Complete the form below to send us a message. Fields with an asterisk (*) are required.
                    </p>
                </div>
                <div className="space-y-6 mt-6">
                    <div className="space-y-2 grid">
                        <label htmlFor="name">Name</label>
                        <input className="p-4 border rounded-lg" id="name" placeholder="E.g. John Doe" required />
                    </div>
                    <div className="space-y-2 grid">
                        <label htmlFor="email">Email</label>
                        <input className="p-4 border rounded-lg" id="email" placeholder="E.g. john@example.com" required type="email" />
                    </div>
                    <div className="space-y-2 grid">
                        <label htmlFor="message">Message</label>
                        <input className="p-4 border rounded-lg" id="message" placeholder="Your message here." required />
                    </div>
                    <div className="w-full">
                        <button className="w-full border border-purple-700 p-6 rounded-lg text-purple-700 
                        font-semibold hover:bg-purple-700 hover:text-white duration-100" type="submit">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <div className="space-y-6">
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Contact information</h3>
                    <dl className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div>
                            <dt className="text-sm font-semibold leading-none">Email</dt>
                            <dd className="text-sm text-gray-500 dark:text-gray-400">info@example.com</dd>
                        </div>
                        <div>
                            <dt className="text-sm font-semibold leading-none">Phone</dt>
                            <dd className="text-sm text-gray-500 dark:text-gray-400">+1 (234) 567-8900</dd>
                        </div>
                    </dl>
                </div>
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Office address</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">123 Street Name, City, Country, 56789</p>
                </div>
                <div className="w-full aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                    <Image
                        alt="map-cin-ufpe" 
                        className="rounded-lg w-full"
                        src={map}
                        height={500}
                        width={500}
                    />
                </div>
            </div>
        </div>
    )
}

