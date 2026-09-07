import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-7.5xl">
            <a className="flex">
              <span className="self-center text-xl pl-15 font-semibold whitespace-nowrap dark:text-black">
                MJ
              </span>
            </a>
            <div className="flex items-center lg:order-2 pr-10">
              <a
                href="#"
                className="text-gray-800 dark:text-black hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log in
              </a>
              <a
                href="#"
                className="text-black bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                Get started
              </a>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>
      <div className="bg-background min-h-screen">
        <div className="flex min-h-120 items-center justify-center mt-20.5">
          <div className="w-345 rounded-lg p-20 text-center shadow-lg bg-(--divbg)">
            <div>
              <h2 className=" text-[40px] flex justify-left  text-xl font-bold text-black">
                Hi, Im Jirsten,
              </h2>
              <h2 className="text-[40px] flex justify-left text-xl font-bold text-(--color-accent)">
                Ms. Software Engineer
              </h2>
              <div className="flex items-center justify-left mt-5">
                <a
                  href="#"
                  className="text-[20px] py-2 text-black w-150 text-justify text-black bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm  mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                >
                  I find the problem, then use AI to research, design, and
                  build. I write evals and test every edge case, across user
                  groups, and iterate on what works. Previously, generative AI
                  at Neudesic, an IBM company. HCI graduate.
                </a>
              </div>

              <a
                href="https://seinfeldquotes.com"
                className="text-[20px] flex mt-15 justify-left text-blue-600 visited:text-blue-600 hover:text-blue-800 visited:hover:text-blue-800"
              >
                View my Works {"->"}
              </a>
            </div>
          </div>
          <Image
            src="/pictures/meme.png"
            alt="ejkbrvkejb"
            width={600}
            height={600}
            className="absolute right-20 top-12 mt-20 mr-20"
          />
        </div>
      </div>
    </>
  );
}
