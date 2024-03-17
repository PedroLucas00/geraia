/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PSy1Azl8CLo
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Project() {
  return (
    <div>
      <div>
        <div className="px-4 py-6 md:px-6">
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
            Welcome to my collection of projects. Click on any project to learn more.
          </p>
        </div>
        <div className="px-4 md:px-6">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              <div>
                <div className="flex flex-col h-full">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      alt="Thumbnail"
                      className="aspect-object cover"
                      height={180}
                      src="/placeholder.svg"
                      width={320}
                    />
                  </div>
                  <div className="flex-1 grid gap-2 p-4">
                    <h2 className="text-lg font-bold">Project One</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      This is a brief description of the first project.
                    </p>
                  </div>
                  <div className="p-4 border-t flex items-center">
                    <Link href="#">More</Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col h-full">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      alt="Thumbnail"
                      className="aspect-object cover"
                      height={180}
                      src="/placeholder.svg"
                      width={320}
                    />
                  </div>
                  <div className="flex-1 grid gap-2 p-4">
                    <h2 className="text-lg font-bold">Project Two</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      This is a brief description of the second project.
                    </p>
                  </div>
                  <div className="p-4 border-t flex items-center">
                    <Link href="#">More</Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col h-full">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      alt="Thumbnail"
                      className="aspect-object cover"
                      height={180}
                      src="/placeholder.svg"
                      width={320}
                    />
                  </div>
                  <div className="flex-1 grid gap-2 p-4">
                    <h2 className="text-lg font-bold">Project Three</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      This is a brief description of the third project.
                    </p>
                  </div>
                  <div className="p-4 border-t flex items-center">
                    <Link href="#">More</Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col h-full">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      alt="Thumbnail"
                      className="aspect-object cover"
                      height={180}
                      src="/placeholder.svg"
                      width={320}
                    />
                  </div>
                  <div className="flex-1 grid gap-2 p-4">
                    <h2 className="text-lg font-bold">Project Four</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      This is a brief description of the fourth project.
                    </p>
                  </div>
                  <div className="p-4 border-t flex items-center">
                    <Link href="#">More</Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col h-full">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      alt="Thumbnail"
                      className="aspect-object cover"
                      height={180}
                      src="/placeholder.svg"
                      width={320}
                    />
                  </div>
                  <div className="flex-1 grid gap-2 p-4">
                    <h2 className="text-lg font-bold">Project Five</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      This is a brief description of the fifth project.
                    </p>
                  </div>
                  <div className="p-4 border-t flex items-center">
                    <Link href="#">More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

