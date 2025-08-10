"use client"
import Link from "next/link";
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export default function Home() {
  return (
    <>
      <div className="flex">
        <main className="bg-[#FAF9EE] md:min-h-screen flex md:flex-row flex-col md:justify-between md:gap-14 w-full text-[#B3A696]">
          <div className="container mx-auto md:px-18 flex flex-col gap-6 md:w-1/2 w-70 md:pt-22 py-12">
            <p className="font-bold md:text-5xl text-4xl text-start">Short Links.</p>
            <p className="font-bold md:text-5xl text-4xl text-start">Big Impact.</p>
            <p className="font-semibold md:text-xl text-lg text-start">A fast, no-signup URL shortener with custom aliases, link expiry, and scheduled activation. <br /> Built for convenience and clarity.</p>
            <div className="font-semibold md:text-xl text-lg text-start">
              <Typewriter
                options={{
                  strings: [
                    "Custom Short Links",
                    "Timed Launch",
                    "Auto Expiry",
                    "No Signup"
                  ],
                  autoStart: true,
                  loop: true,
                }}
              /></div>
            <div className="buttons flex gap-2 ">
              <Link href={"/shorten"}><button type="button" className="text-white bg-[#DCCFC0] hover:bg-[#e1c8aa] focus:outline-none font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2 cursor-pointer">Try It</button></Link>

              <Link href={"https://github.com/ProgrammerNesi/shortenIT"}><button type="button" className="text-white bg-[#DCCFC0] hover:bg-[#e1c8aa] focus:outline-none font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2 cursor-pointer"> <FontAwesomeIcon icon={faGithub} /> Github</button></Link>
              
            </div>
            

          </div>
          <div className="md:pt-22  px-12">
            <img src="./social.png" alt="df" width={800} />
          </div>
          
        </main>
        
      </div>
      <footer className="h-12 my-15 md:my-0 bg-[#FAF9EE] text-[#B3A696] flex justify-center items-center text-sm md:text-base">
        Made with ❤️ by <span className="text-[#DCCFC0] font-bold ml-1">Nasir</span>
      </footer>
      
    </>
  );
}
