"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
  Chip,
} from "@nextui-org/react";

// Sample project data defined directly in the same file
const projectData = [
  {
    id: "1",
    name: "Leaguify",
    imageUrl: "./images/projects/leagueify.png",
    type: "Full Stack Application",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Figma"],
    repoUrl: "https://github.com/faizm10/Leagueify",
    demoUrl: "https://leagueify.vercel.app/",
  },
  {
    id: "2",
    name: "Champions League Dashboard",
    imageUrl: "./images/projects/CL.png",
    type: "Full Stack Application",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "API"],
    repoUrl: "https://github.com/faizm10/CLFantasyManager",
    demoUrl: "https://cl-fantasy-manager.vercel.app/",
  },
  {
    id: "3",
    name: "Professor's Portfolio Website",
    imageUrl: "./images/projects/tashfeen.png",
    type: "Portfolio Website",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    repoUrl: "/https://github.com/faizm10/TashfeenKaramatWebsite",
    demoUrl: "https://tashfeen-karamat-website.vercel.app/",
  },
  {
    id: "4",
    name: "MCS2020 ChatBot",
    imageUrl: "./images/projects/image.png",
    type: "Research Project",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "ChatGPT API",
      "Python",
      "Flask/Django",
    ],
    repoUrl: "",
    demoUrl: "https://mcs-2020.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      className="py-12 px-4 md:px-12 lg:px-24"
      style={{ backgroundColor: "#fdddb7" }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="shadow-xl p-5 w-full md:max-w-md lg:max-w-lg xl:max-w-xl">
            <CardHeader className="gap-3">
              <Image
                height={1000}
                width={1000}
                radius="md"
                src="./images/projects/leagueify.png"
              />
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-row gap-2">
              <h1 className="font-semibold text-xl basis-2/4">Leaguify</h1>
              <Chip className="bg-green-300 text-black basis-1/4">
                Full Stack Application
              </Chip>
            </CardBody>
            <Divider />
            <CardBody>
              <p className="font-semibold">Languages & Frameworks</p>
              <div className="grid grid-cols-2 gap-2">
                <Card className="shadow-sm p-3 text-center bg-blue-100 text-blue-800">
                  JavaScript
                </Card>
                <Card className="shadow-sm p-3 text-center bg-blue-100 text-blue-800">
                  TypeScript
                </Card>
              </div>
            </CardBody>
            <Divider />
            <CardFooter className="flex">
              <Link
                isExternal
                showAnchorIcon
                href="https://github.com/faizm10/Leagueify"
                className="flex-1"
              >
                GitHub Repository
              </Link>
              <Link
                isExternal
                showAnchorIcon
                href="https://leagueify.vercel.app/"
                className="flex-2"
              >
                Live Demo
              </Link>
            </CardFooter>
          </Card>
          {/* Project Two */}

          <Card className="shadow-xl p-5 w-full md:max-w-md lg:max-w-lg xl:max-w-xl">
            <CardHeader className="gap-3">
              <Image
                height={1000}
                width={1000}
                radius="md"
                src="./images/projects/CL.png"
              />
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-row gap-2">
              <h1 className="font-semibold text-xl basis-2/4">
                Champions League Dashboard
              </h1>
              <Chip className="bg-green-300 text-black basis-1/4">
                Full Stack Application
              </Chip>
            </CardBody>
            <Divider />
            <CardBody>
              <p className="font-semibold">Languages & Frameworks</p>
              <div className="grid grid-cols-2 gap-2">
                <Card className="shadow-sm p-3 text-center bg-blue-100 text-blue-800">
                  Next.js
                </Card>
                <Card className="shadow-sm p-3 text-center bg-blue-100 text-blue-800">
                  TypeScript
                </Card>
                <Card className="shadow-sm p-3 text-center bg-blue-100 text-blue-800">
                  Tailwind CSS
                </Card>
                <Card className="shadow-sm p-3 text-center bg-blue-100 text-blue-800">
                  API
                </Card>
              </div>
            </CardBody>
            <Divider />
            <CardFooter className="flex">
              <Link
                isExternal
                showAnchorIcon
                href="https://github.com/faizm10/CLFantasyManager"
                className="flex-1"
              >
                GitHub Repository
              </Link>
              <Link
                isExternal
                showAnchorIcon
                href="https://cl-fantasy-manager.vercel.app/"
                className="flex-2"
              >
                Live Demo
              </Link>
            </CardFooter>
          </Card>
          {/* Project 3 */}

          <Card className="shadow-xl p-5 w-full md:max-w-md lg:max-w-lg xl:max-w-xl">
            <CardHeader className="gap-3">
              <Image
                height={1000}
                width={1000}
                radius="md"
                src="./images/projects/tashfeen.png"
              />
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-row gap-2">
              <h1 className="font-semibold text-xl basis-2/4">
                Professor's Portfolio Website
              </h1>
              <Chip className="bg-green-300 text-black basis-1/4">
                Portfolio Website
              </Chip>
            </CardBody>
            <Divider />
            <CardBody>
              <p className="font-semibold">Languages & Frameworks</p>
              <div className="grid grid-cols-2 gap-2">
                <Card className="shadow-sm p-3 text-center bg-blue-100 text-blue-800">
                  Next.js
                </Card>
                <Card className="shadow-sm p-3 text-center bg-blue-100 text-blue-800">
                  TypeScript
                </Card>
                <Card className="shadow-sm p-3 text-center bg-blue-100 text-blue-800">
                  Tailwind CSS
                </Card>
              </div>
            </CardBody>
            <Divider />
            <CardFooter className="flex">
              <Link
                isExternal
                showAnchorIcon
                href="https://github.com/faizm10/TashfeenKaramatWebsite"
                className="flex-1"
              >
                GitHub Repository
              </Link>
              <Link
                isExternal
                showAnchorIcon
                href="https://tashfeen-karamat-website.vercel.app/"
                className="flex-2"
              >
                Live Demo
              </Link>
            </CardFooter>
          </Card>
          {/* 
          {

    imageUrl: "./images/projects/image.png",
    type: "Research Project",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "ChatGPT API",
      "Python",
      "Flask/Django",
    ],
    repoUrl: "",
    demoUrl: "https://mcs-2020.vercel.app/",
  },
          */}
          <Card className="shadow-xl p-5 w-full md:max-w-md lg:max-w-lg xl:max-w-xl">
            <CardHeader className="gap-3">
              <Image
                height={1000}
                width={1000}
                radius="md"
                src="./images/projects/image.png"
              />
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-row gap-2">
              <h1 className="font-semibold text-xl basis-2/4">
                MCS2020 Chatbot
              </h1>
              <Chip className="bg-green-300 text-black basis-1/4">
                Research Project
              </Chip>
            </CardBody>
            <Divider />
            <CardBody>
              <p className="font-semibold">Languages & Frameworks</p>
              <div className="grid grid-cols-2 gap-2">
                <Card className="shadow-sm p-3 text-center bg-blue-100 text-blue-800">
                  Next.js
                </Card>
                <Card className="shadow-sm p-3 text-center bg-blue-100 text-blue-800">
                  TypeScript
                </Card>
                <Card className="shadow-sm p-3 text-center bg-blue-100 text-blue-800">
                  Tailwind CSS
                </Card>
                <Card className="shadow-sm p-3 text-center bg-blue-100 text-blue-800">
                  ChatGPT API
                </Card>
                <Card className="shadow-sm p-3 text-center bg-blue-100 text-blue-800">
                  Python
                </Card>
                <Card className="shadow-sm p-3 text-center bg-blue-100 text-blue-800">
                  Flask/Django
                </Card>
              </div>
            </CardBody>
            <Divider />
            <CardFooter className="flex">
              <Link
                isExternal
                isDisabled
                showAnchorIcon
                href="https://github.com/faizm10/URA/tree/main/mcs2020chatbot"
                className="flex-1"
              >
                GitHub Repository
              </Link>
              <Link
                isExternal
                showAnchorIcon
                href="https://mcs-2020.vercel.app/"
                className="flex-2"
              >
                Live Demo
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
