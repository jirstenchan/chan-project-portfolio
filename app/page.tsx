import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center bg-(--fullpage_bg) text-(--text-color)">
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -translate-y-10">
        <div>
          <h1 className="text-6xl font-bold">
            I am <span className="text-(--orange)">Marie Jirsten Chan</span>
          </h1>
        </div>
        <h2 className="text-4xl font-bold margin mb-[3vh]">
          Want a team player? I push last.
        </h2>
        <p className="flex gap-18 text-lg">
          <a
            className="bg-(--text-color) text-white py-[10px] px-[100px] rounded-xl tracking-[0.2em] hover:text-(--dirty-white) relative group overflow-hidden inline-block"
            download="Marie Jirsten Chan Resume.pdf"
            href="files/SampleResume.pdf"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform bg-(--orange) group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">Resume</span>
          </a>
          <a
            href="https://github.com/jirstenchan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-(--text-color) text-white py-[10px] px-[100px] rounded-xl tracking-[0.2em] hover:text-(--dirty-white) relative group overflow-hidden inline-block"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform bg-(--orange) group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">GitHub</span>
          </a>
        </p>
      </div>
    </div>
  );
}

//text-(--color-accent)
