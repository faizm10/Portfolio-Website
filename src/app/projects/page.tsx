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
  Chip,
} from "@nextui-org/react";
import { projectData } from "@/constants/constants";

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectData.map((project) => (
            <Card key={project.id} className="shadow-xl p-5 w-full">
              <CardHeader className="gap-3">
                <Image
                  height={1000}
                  width={1000}
                  radius="md"
                  src={project.imageUrl}
                />
              </CardHeader>
              <Divider />
              <CardBody className="flex flex-row gap-2">
                <h1 className="font-semibold text-xl basis-2/4">{project.name}</h1>
                <Chip className="bg-green-300 text-black basis-1/4">
                  {project.type}
                </Chip>
              </CardBody>
              <Divider />
              <CardBody>
                <p className="font-semibold">Languages & Frameworks</p>
                <div className="grid grid-cols-2 gap-2">
                  {project.technologies.map((tech, index) => (
                    <Card key={index} className="shadow-sm p-3 text-center bg-blue-100 text-blue-800">
                      {tech}
                    </Card>
                  ))}
                </div>
              </CardBody>
              <Divider />
              <CardFooter className="flex">
                
                {project.demoUrl && (
                  <Link
                    isExternal
                    showAnchorIcon
                    href={project.demoUrl}
                    className="flex-1"
                  >
                    Live Demo
                  </Link>
                )}
                {project.repoUrl && (
                  <Link
                    isExternal
                    showAnchorIcon
                    href={project.repoUrl}
                    className="flex-2"
                  >
                    GitHub Repository
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
