/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yPbpNcdxuDl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

import NavBar from "@/components/nav-bar"
import Image from "next/image"
import imageLogo from "@/images/apple-logo-1024x728.png"

export default function Home() {
  const startupsList = [
    { logo: "a", name: "aaaa" },
    { logo: "a", name: "aaaa" },
    { logo: "a", name: "aaaa" },
    { logo: "a", name: "aaaa" },
    { logo: "a", name: "aaaa" },
    { logo: "a", name: "aaaa" },
    { logo: "a", name: "aaaa" },
    { logo: "a", name: "aaaa" },
    { logo: "a", name: "aaaa" },
    { logo: "a", name: "aaaa" },
  ]

  return (
    <div className="px-12">
      <div className="flex py-6 md:py-12 items-center h-[40rem] lg:h-screen">
        <div className="container grid justify-center items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-2 ">
            <div className="flex space-y-1 justify-center justify-items-center items-center">
              <Image alt="Logo" className="p-0 m-2" height="150" src="https://geraia.vercel.app/geraia.svg" width="150" />
              <h1 className="text-6xl font-bold tracking-tighter sm:text-6xl md:text-8xl">GERAIA</h1>
            </div>
            <div className="space-y-1 justify-center justify-items-center items-center">
              <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Advancing knowledge in computer science and beyond.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                We are a diverse group of researchers dedicated to pushing the boundaries of technology and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full py-12 md:py-12 lg:py-24">
        <div className="w-full container grid max-w-full items-center gap-4 px-4 text-left md:gap-4 md:px-6 lg:grid-cols-2 lg:text-left xl:max-w-full xl:gap-0">
          <div className="space-y-6 pl-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Research Areas</h2>
          </div>
          <div className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-6">
              <div className="flex grid grid-rows-2 rounded-lg border bg-card text-card-foreground shadow-sm p-5">
                <div className="flex items-center">
                  <div className="rounded-full bg-purple-700 p-4 mr-2">
                    <FileCodeIcon className="flex-shrink-0 text-white" />
                  </div>
                  <h3 className="text-xl font-medium tracking-tighter">Programming Languages</h3>
                </div>
                <div className="space-y-4 mt-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Designing new languages and analyzing existing ones.
                  </p>
                </div>
              </div>
              <div className="flex grid grid-rows-2 rounded-lg border bg-card text-card-foreground shadow-sm p-5">
                <div className="flex items-center">
                  <div className="rounded-full bg-purple-700 p-4 mr-2">
                    <BotIcon className="flex-shrink-0 text-white" />
                  </div>
                  <h3 className="text-xl font-medium tracking-tighter">Artificial Intelligence</h3>
                </div>
                <div className="space-y-1 mt-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Machine learning, robotics, and natural language processing.
                  </p>
                </div>
              </div>
              <div className="flex grid grid-rows-2 rounded-lg border bg-card text-card-foreground shadow-sm p-5">
                <div className="flex items-center">
                  <div className="rounded-full bg-purple-700 p-4 mr-2">
                    <NetworkIcon className="flex-shrink-0 text-white" />
                  </div>
                  <h3 className="text-lg font-medium tracking-tighter">Computer Networks</h3>
                </div>
                <div className="space-y-1 mt-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Internet protocols, wireless communication, and network security.
                  </p>
                </div>
              </div>
              <div className="flex grid grid-rows-2 rounded-lg border bg-card text-card-foreground shadow-sm p-5">
                <div className="flex items-center">
                  <div className="rounded-full bg-purple-700 p-4 mr-2">
                    <BarChartIcon className="flex-shrink-0 text-white" />
                  </div>
                  <h3 className="text-lg font-medium tracking-tighter">Data Science</h3>
                </div>
                <div className="space-y-1 mt-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Big data analytics, visualization, and statistical modeling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="grid grid-rows-1 grid-flow-col max-w-full items-start gap-4 px-6 text-start md:gap-0 md:px-6 lg:text-left">
          <div className="space-y-4 md:space-y-6">
            <div className="space-y-6 pl-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
              <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Meet the projects created by our research group.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 pl-6">
              <div className="h-40 flex grid grid-rows-0 text-end rounded-lg border bg-card text-card-foreground shadow-sm p-5 bg-purple-700">
                <div className="flex items-start">
                  <h3 className="text-white text-lg font-medium tracking-tighter">Computer Networks</h3>
                </div>
              </div>
              <div className="h-40 flex grid grid-rows-0 text-end rounded-lg border bg-card text-card-foreground shadow-sm p-5 bg-purple-700">
                <div className="flex items-start">
                  <h3 className="text-white text-lg font-medium tracking-tighter">Computer Networks</h3>
                </div>
              </div>
              <div className="h-40 flex grid grid-rows-0 text-end rounded-lg border bg-card text-card-foreground shadow-sm p-5 bg-purple-700">
                <div className="flex items-start">
                  <h3 className="text-white text-lg font-medium tracking-tighter">Computer Networks</h3>
                </div>
              </div>
              <div className="h-40 flex grid grid-rows-0 text-end rounded-lg border bg-card text-card-foreground shadow-sm p-5 bg-purple-700">
                <div className="flex items-start">
                  <h3 className="text-white text-lg font-medium tracking-tighter">Computer Networks</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 h-[35rem]">
        <div className="flex container grid max-w-full items-start gap-4 px-4 text-center md:gap-8 md:px-6 lg:text-left">
          <div className="space-y-4 md:space-y-6">
            <div className="space-y-6 pl-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Startups</h2>
              <p className="text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
                Showcasing our innovative startups.
              </p>
            </div>
            <div className="[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] z-0">
              <div className="container w-full flex-nowrap inline-flex [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                {startupsList.map(({ logo, name }, index) => {
                  return <div key={index} className="h-40 flex text-end border border-zinc-400 bg-card text-card-foreground shadow-sm p-10 bg-white
                    hover:border-purple-700 hover:scale-125 hover:border-4 duration-300
                  ">
                    <div className="flex items-start">
                      <h3 className="text-zinc-400 text-lg font-medium tracking-tighter">
                        <Image
                          alt={name}
                          className="p-auto"
                          src={imageLogo}
                          width={100}
                          height={100}
                        />
                      </h3>
                    </div>
                  </div>
                })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function BarChartIcon(props: any) {
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
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function BotIcon(props: any) {
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
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  )
}


function FileCodeIcon(props: any) {
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
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m10 13-2 2 2 2" />
      <path d="m14 17 2-2-2-2" />
    </svg>
  )
}

function NetworkIcon(props: any) {
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
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  )
}