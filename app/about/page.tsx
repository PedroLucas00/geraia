import Image from "next/image"
import Link from "next/link"
import image1 from "@/images/WhatsApp Image 2024-03-15 at 7.09.21 PM.jpeg"
import image2 from "@/images/WhatsApp Image 2024-03-15 at 7.09.54 PM.jpeg"

export default function About() {
    const collaborators = [
        { name: "A", profileImage: "", miniBio: "Ipsum lorem" },
        { name: "B", profileImage: "", miniBio: "Ipsum lorem" },
        { name: "C", profileImage: "", miniBio: "Ipsum lorem" },
        { name: "D", profileImage: "", miniBio: "Ipsum lorem" },
        { name: "E", profileImage: "", miniBio: "Ipsum lorem" }
    ]

    return (<div className="flex flex-col min-h-[100dvh]">
        <main className="flex-1">
            <section className="w-full px-12 pt-32">
                <div className="container px-4 md:px-24">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-zinc-900">About Us</h1>
                            <p className="max-w-[600px] text-gray-600 md:text-xl dark:text-gray-500">
                                We are a team of passionate individuals dedicated to providing the best web experiences for our
                                customers.
                            </p>
                        </div>
                        <Image
                            alt="Hero"
                            className="mx-auto h-80 aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                            height="500"
                            src={image1}
                            width="500"
                        />
                    </div>
                </div>
            </section>
            <section className="w-full py-24 md:py-24 lg:py-24 mt-8">
                <div className="container px-4 md:px-4">
                    <div className="grid max-w-5xl mx-auto items-start gap-6 lg:grid-cols-2 lg:gap-10">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-zinc-900">
                                Our mission is change the world if the power of LLMs.
                            </h2>
                            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                We believe the web is the most powerful platform in the world. It&apos;s where we connect, create, and
                                learn. And we want to make it as accessible, inclusive, and innovative as possible.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <dl className="grid gap-4 md:grid-cols-2">
                                <div>
                                    <dt className="font-semibold">Openness</dt>
                                    <dd className="text-sm text-gray-500 dark:text-gray-400">
                                        We believe in the power of collaboration and the wisdom of the crowd.
                                    </dd>
                                </div>
                                <div>
                                    <dt className="font-semibold">Innovation</dt>
                                    <dd className="text-sm text-gray-500 dark:text-gray-400">
                                        We are constantly pushing the boundaries of what&apos;s possible on the web.
                                    </dd>
                                </div>
                                <div>
                                    <dt className="font-semibold">Inclusion</dt>
                                    <dd className="text-sm text-gray-500 dark:text-gray-400">
                                        The web should be a place where everyone feels welcome and represented.
                                    </dd>
                                </div>
                                <div>
                                    <dt className="font-semibold">Simplicity</dt>
                                    <dd className="text-sm text-gray-500 dark:text-gray-400">
                                        We believe that the best solutions are often the most elegant and easy to use.
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full px-24 py-12 md:py-12 lg:py-24 mb-12">
                <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-1 lg:gap-10">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-5xl/tight">Meet the Team</h2>
                        <p className="text-gray-500 dark:text-gray-400">The people behind the platform.</p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            collaborators.map(({ name, profileImage, miniBio }, index) => {
                                return <div key={index} className="flex text-start items-start gap-1 hover:scale-110 hover:text-zinc-900 duration-200">
                                    <Image
                                        alt="Avatar"
                                        className="rounded-2xl bg-black aspect-square overflow-hidden object-cover object-center"
                                        height="100"
                                        src="/placeholder.svg"
                                        width="100"
                                    />
                                    <div className="flex flex-col gap-1 ml-5">
                                        <h3 className="font-bold">{name}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{miniBio}</p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </section>
        </main>
    </div>
    )
}