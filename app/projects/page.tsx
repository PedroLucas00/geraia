/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PSy1Azl8CLo
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import logoGeraia from "@/images/geraia.svg"
import Image from "next/image"

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Title",
      image: logoGeraia,
      description: "This is a simple description of the currents projects",
    },
    {
      id: 2,
      title: "Title",
      image: logoGeraia,
      description: "This is a simple description of the currents projects",
    },
    {
      id: 3,
      title: "Title",
      image: logoGeraia,
      description: "This is a simple description of the currents projects",
    },
    {
      id: 4,
      title: "Title",
      image: logoGeraia,
      description: "This is a simple description of the currents projects",
    }
  ]

  return (
    <div>
      <div className="py-28 px-24">
        <div className="py-8 ">
          <h1 className="text-5xl font-bold">Projects</h1>
        </div>
        <div className="py-8">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {
                projects.map(({ id, title, image, description }, index) => {
                  return <div key={index} className="flex flex-col h-full py-16">
                    <div className="aspect-w-16 aspect-h-9">
                      <Image
                        alt="Thumbnail"
                        className="aspect-object cover bg-violet-800 w-full rounded-xl"
                        height={180}
                        src={image}
                        width={320}
                      />
                    </div>
                    <div className="flex-1 grid gap-2 p-4">
                      <h2 className="text-lg font-bold">{title}</h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {description}
                      </p>
                    </div>
                    <div className="p-4 border-t flex items-center">
                      <Link href="#">More</Link>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

