"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import LinkSlider from "./components/Link";
import { useIntroStore } from "./store/zustand";
import useModifierKey from "./components/ModifierKey";
import { isMobile } from "react-device-detect";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";
import james from "./assets/jame3.jpg";
import faiz from "./assets/faiz1.jpg";
// import uog from "./assets/uog.png";
import td from "./assets/td.png";
import uw from "./assets/uw.png";
export default function Home() {
  const { hasPlayed, setHasPlayed } = useIntroStore();
  const initialHasPlayed =
    typeof window !== "undefined" &&
    Boolean(useIntroStore.getState?.().hasPlayed);
  const [isLoaded, setIsLoaded] = useState<boolean>(initialHasPlayed);
  const [isMac, setIsMac] = useState(false);
  const isModifierPressed = useModifierKey(); // for opacity of button

  useEffect(() => {
    if (hasPlayed) {
      setIsLoaded(true);
      return;
    }

    setHasPlayed();

    let currentProgress = 10;
    const interval = setInterval(() => {
      if (currentProgress < 100) {
        currentProgress += 20;
      } else {
        clearInterval(interval);
        setIsLoaded(true);
      }
    }, 250);
  }, []);

  useEffect(() => {
    const isMac =
      navigator.platform.toLowerCase().includes("mac") ||
      navigator.userAgent.toLowerCase().includes("mac");
    setIsMac(isMac);

    const handlePaletteOpened = () => {
      console.log("Palette opened!");
    };

    window.addEventListener("command-palette-opened", handlePaletteOpened);
    return () =>
      window.removeEventListener("command-palette-opened", handlePaletteOpened);
  }, []);

  const openCommandPalette = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  return (
    <>
      <div
        className={`intro-container max-w-screen max-h-screen z-40 transition-opacity duration-800 ${
          isLoaded ? "opacity-0 pointer-events-none fade-out" : "opacity-100"
        }`}
      >
        <div className="wave-effect" />
        <div className="relative flex justify-center items-center">
          <h1 className="text-white lg:text-lg md:text-md text-sm crg my-3">
            product of the environment.
          </h1>
        </div>
      </div>

      <div className="relative content inset-0 overflow-x-hidden home">
        <div className="min-w-screen lg:max-h-screen lg:h-screen w-auto text-darkBeige2 font-playfair overflow-x-hidden lg:overflow-y-hidden pb-1 lg:pb-0">
          <div className="flex lg:flex-row flex-col w-full">
            {/* side section */}
            <div className="lg:w-2/3 w-full ml-0 flex flex-col">
              {/* top section */}
              <div className="relative flex flex-row bg-midBeige1 rounded-lg text-darkBeige3 mt-2 mx-2 lg:mx-1 m-1 md:p-5 p-3">
                <div className="relative w-full h-full flex lg:justify-between justify-center">
                  <h1>
                    <span className="font-thin md:text-base text-sm">
                      faiz mustansar
                    </span>
                    {/* <span className="pl-1 font-light">李思远</span> */}
                  </h1>
                  <div className="h-full absolute lg:top-0 right-0 flex items-center gap-1">
                    {!isMobile && (
                      <button
                        onClick={openCommandPalette}
                        className="px-4 p-2 hidden sm:flex cursor-pointer items-center gap-1 text-xs bg-darkBeige2 text-midBeige1 rounded-lg hover:bg-darkBeige1 hover:text-lightBeige transition delay-200 duration-200 ease-in-out"
                      >
                        <kbd
                          className={`px-1.5 py-1 rounded bg-darkBeige2/10 text-midBeige flex ${
                            isModifierPressed ? "opacity-40" : "opacity-100"
                          }`}
                        >
                          {isMac ? "⌘" : "ctrl"}
                        </kbd>

                        <span>+</span>
                        <kbd className="px-1.5 py-1 rounded bg-darkBeige2/10 text-midBeige">
                          k
                        </kbd>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-flow-row lg:grid-flow-col grid-rows-2 h-auto lg:h-[91vh] content-section space-y-1 lg:space-y-0 lg:px-0 px-1">
                {/* side section */}
                <div className="relative row-span-6 lg:col-span-2 col-span-6 w-auto lg:h-auto md:h-200 h-120 py-3 px-4 bg-midBeige1 m-1 mb-1 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-size-[10px_10px] opacity-25 pointer-events-none rounded-lg"></div>
                  <div className="sidediv relative lg:text-xl md:text-2xl text-md h-[95%] flex items-end w-full z-10 whitespace-nowrap">
                    <span className="font-bold absolute top-0 left-0">
                      <span className="flex items-center justify-center gap-2 text-darkBeige3">
                        {/* cs @ uoguelph */}
                        swe intern
                        <Image
                          src={td}
                          width={25}
                          height={25}
                          alt="uw-logo"
                          loading="eager"
                        />
                        {/* uoguelph */}
                        td bank
                      </span>
                    </span>
                    <div className="flex flex-col gap-3 text-darkBeige1 bg-midBeige1/40 z-10 lg:p-2 p-3 w-full items-start text-center relative rounded-xl backdrop-blur-sm">
                      <h1 className="lg:bg-transparent rounded-lg sideh1 pl-6 [-text-indent:1.5rem]">
                        <span className="flex items-center justify-start gap-2 text-darkBeige3">
                          previously:
                        </span>
                      </h1>

                      <h1 className="sideh1 lg:bg-transparent rounded-lg pl-6 [-text-indent:1.5rem]">
                        <span className="flex items-center justify-start gap-2 text-darkBeige3">
                          <span>•</span>
                          full stack developer @
                          <span className="cursor-pointer text-darkBeige2">
                            <LinkSlider
                              href="https://www.uoguelph.ca/"
                              mode="dark"
                              className="ml-1 relative"
                            >
                              university of guelph
                            </LinkSlider>
                          </span>
                        </span>
                      </h1>

                      <h1 className="sideh1 lg:mb-0 mb-5 lg:bg-transparent rounded-lg pl-6 [-text-indent:1.5rem]">
                        <span className="flex items-center justify-start gap-2 text-darkBeige3">
                          <span>•</span>
                          teaching assistant @
                          <span className="cursor-pointer text-darkBeige2">
                            <LinkSlider
                              href="https://www.uoguelph.ca/"
                              mode="dark"
                              className="ml-1 relative"
                            >
                              university of guelph
                            </LinkSlider>
                          </span>
                          <span>·</span>
                          <span className="font-bold">3x</span>
                          <span>terms</span>
                        </span>
                      </h1>
                      {/* <h1 className="sideh1 lg:mb-0 mb-5 lg:bg-transparent rounded-lg pl-6 [-text-indent:1.5rem]">
                        <span className="flex items-center justify-start gap-2 text-darkBeige3">
                          <span>•</span>
                          undergraduate research assistant @
                          <span className="cursor-pointer text-darkBeige2">
                            <LinkSlider
                              href="https://www.uoguelph.ca/"
                              mode="dark"
                              className="ml-1 relative"
                            >
                              university of guelph
                            </LinkSlider>
                          </span>
                        </span>
                      </h1> */}
                    </div>
                  </div>
                  <Image
                    src={faiz}
                    className="absolute w-full lg:h-auto opacity-99 rounded-xl top-10 lg:top-15 right-0 lg:z-5 z-0"
                    style={{
                      WebkitMaskImage:
                        "radial-gradient(circle, rgba(0,0,0.99) 30%, rgba(0,0,0,0.01) 75%)",
                    }}
                    alt="jame"
                    placeholder="blur"
                    loading="eager"
                  />
                </div>

                {/* linkedin and socials section */}
                <div className="row-span-1 lg:col-span-3 col-span-6 w-auto lg:h-auto h-80 grid grid-cols-3 gap-2 m-1 mb-1">
                  {/* linkedin section */}
                  <div className="relative col-span-2 py-3 px-7 rounded-lg bg-darkBeige2 text-lightBeige hover:border-darkBeige1 border-2 border-transparent transition delay-200 duration-150 ease-in">
                    <a
                      href="https://www.linkedin.com/in/faizmustansar/"
                      target="_blank"
                      className="absolute inset-0 w-full h-full"
                    >
                      <h1 className="absolute italic left-5 top-2 lg:text-base md:text-lg text-sm">
                        linkedin
                      </h1>
                      <div className="absolute lg:bottom-4 lg:left-2 lg:right-0 lg:top-auto right-1 top-0 bottom-auto left-auto z-20">
                        <GrLinkedin className="lg:w-[4vw] lg:h-[4vh] md:w-[5vw] md:h-[5vh] w-[6vw] h-[6vh]" />
                      </div>
                      <h1 className="absolute bottom-5 italic right-5 lg:text-base md:text-lg text-sm">
                        faizmustansar10@gmail.com
                      </h1>
                    </a>
                  </div>

                  {/* socials section */}
                  <div className="relative py-3 px-7 rounded-lg bg-midBeige2 border-2 border-transparent transition delay-200 duration-150 ease-in flex flex-col items-center justify-center lg:gap-4 md:gap-2">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-size-[10px_10px] opacity-25 pointer-events-none rounded-lg"></div>
                    <a
                      href="https://www.linkedin.com/in/faizmustansar/"
                      target="_blank"
                      className="z-10 hover:opacity-50 opacity-70 transition"
                    >
                      <GrLinkedin className="lg:w-[1.75vw] lg:h-[1.75vw] md:w-[4vw] md:h-[4vh] w-[6vw] h-[6vh]" />
                    </a>
                    <a
                      href="https://github.com/faizm10"
                      target="_blank"
                      className="z-10 hover:opacity-50 opacity-70 transition"
                    >
                      <FaGithub className="lg:w-[1.75vw] lg:h-[1.75vw] md:w-[4vw] md:h-[4vh] w-[6vw] h-[6vh]" />
                    </a>
                    {/* <a
                      href="https://x.com/_jamesli"
                      target="_blank"
                      className="z-10 hover:opacity-50 opacity-70 transition"
                    >
                      <FaXTwitter className="lg:w-[1.75vw] lg:h-[1.75vw] md:w-[4vw] md:h-[4vh] w-[6vw] h-[6vh]" />
                    </a> */}
                    <a
                      href="https://www.instagram.com/faizm.30/"
                      target="_blank"
                      className="z-10 hover:opacity-50 opacity-70 transition"
                    >
                      <FaInstagram className="lg:w-[1.75vw] lg:h-[1.75vw] md:w-[4vw] md:h-[4vh] w-[6vw] h-[6vh]" />
                    </a>
                  </div>
                </div>

                {/* description section */}
                <div className="relative lg:col-span-3 col-span-6 row-span-1 w-auto lg:h-auto h-auto lg:py-3 py-5 px-6 bg-midBeige1 m-1 mb-1 rounded-lg lg:text-darkBeige2 text-darkBeige3">
                  <div className="description relative h-auto w-full flex flex-col z-10 lg:text-sm md:text-lg text-sm">
                    <span className="italic font-bold p-1">
                      deterministic by default.
                    </span>
                    <h1 className="h1descr break-normal lg:mt-5 mt-8 lg:pb-0 pb-2 p-1">
                      i'm currently integrating intelligence where it counts.
                    </h1>

                    <h1 className="h1descr break-normal lg:mt-5 mt-8 pb-2 p-1">
                      seeking fall '26 internships/full time
                    </h1>

                    <h1 className="h1descr break-normal lg:mt-5 mt-8 pb-2 p-1">
                      <div className="flex items-center">recently:</div>
                      <ul className="descr flex flex-col gap-8 md:gap-4 mt-4">
                        <li className="flex items-center gap-x-1 flex-wrap">
                          <span>prev</span>
                          <Image
                            src={uw}
                            width={20}
                            height={20}
                            alt="uw-logo"
                          />
                          <span>student ·</span>
                          <span className="font-bold">2x</span>
                          <span>terms</span>
                        </li>
                        <li className="flex items-center gap-x-1 flex-wrap">
                          built
                          <LinkSlider
                            href={`/uoguelph.courses`}
                            mode="dark"
                            className="relative flex"
                            isNextLink
                          >
                            uoguelph.courses
                          </LinkSlider>
                          {/* <span>@</span>
                          <Image
                            src={western}
                            width={20}
                            height={20}
                            alt="western-logo"
                          /> */}
                          | reached 500 users with over 25k+ views
                        </li>

                        <li>
                          attended <span className="font-bold">10+</span>{" "}
                          hackathons, just building and networking cool people
                        </li>
                      </ul>
                    </h1>
                  </div>
                </div>

                {/* <div className="relative lg:col-span-1 col-span-6 row-span-4 w-auto lg:h-auto lg:py-3 md:py-7 py-6 px-7 m-1 mb-1 rounded-lg bg-darkBeige1 text-midBeige1 hover:border-midBeige3 border-2 border-transparent transition delay-200 duration-150 ease-in">
                  <a
                    href="https://github.com/JLi2007"
                    className="w-full h-full absolute inset-0"
                    target="_blank"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FaGithub className="w-auto h-[50%]" />
                    </div>
                  </a>
                </div>

                
                <div className="lg:col-span-2 col-span-6 row-span-3 w-auto lg:h-auto lg:py-2 md:py-7 py-4 px-5 m-1 rounded-lg bg-midBeige2 bottom-section">
                  <div className="lastlisten flex items-center justify-center flex-wrap gap-2 text-sm w-full">
                    <span>i last listened to</span>
                    <a
                      href={recent?.external_urls?.spotify || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 z-10 px-2 py-1 rounded-lg shadow-sm ring-1 ring-midBeige3 hover:shadow-lg transition opacity-90 backdrop-blur-lg"
                    >
                      <div className="w-7 h-7 relative shrink-0">
                        {recent?.album?.images?.[0] ? (
                          <Image
                            src={recent.album.images[0].url}
                            alt={recent.name}
                            fill
                            sizes="28px"
                            className="rounded object-cover"
                          />
                        ) : (
                          <div className="w-7 h-7 bg-lightBeige rounded flex items-center justify-center">
                            <FaSpotify className="text-midBeige2" />
                          </div>
                        )}
                      </div>
                      <span className="text-xs font-medium truncate max-w-40">
                        {recent?.name?.toLowerCase()}
                      </span>
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
