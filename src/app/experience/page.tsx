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
} from "@nextui-org/react";
import { EXP_INFO } from "@/constants/constants";
type Experience = {
  logo: string;
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  skills: string[];
  // link: string;
};
const ExperienceSection = () => {
  return (
    <section
      className="py-12 px-4 md:px-12 lg:px-24"
      style={{ backgroundColor: "#fdddb7" }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Experience
        </h2>
        <div className="space-y-4">
          {EXP_INFO.map((experience: Experience, index: number) => (
            <Card key={index} className="max-w-[1000px] shadow-xl p-5 ">
              <CardHeader className="flex gap-3">
                <Image
                  alt={`${experience.company} logo`}
                  height={80}
                  radius="md"
                  src={experience.logo}
                  width={80}
                />
                <div className="flex flex-col">
                  <p className="text-md font-semibold">{experience.role}</p>
                  <p className="text-small text-default-500">
                    {experience.company}
                  </p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p className="text-small text-default-500">
                  {experience.duration}
                </p>
              </CardBody>
              <Divider />
              <CardBody>
                <p className="font-semibold">Responsibilities:</p>
                <ul className="list-disc list-inside space-y-2">
                  {experience.responsibilities.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </CardBody>
              {/* <Divider />
              <CardBody>
                <p className="font-semibold">Skills Achieved:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                  {experience.skills.map((skill, idx) => (
                    <Card
                      key={idx}
                      className="shadow-sm p-3 text-center bg-blue-100 text-blue-800"
                    >
                      {skill}
                    </Card>
                  ))}
                </div>
              </CardBody> */}
              {/* <Divider />
              <CardFooter>
                <Link isExternal showAnchorIcon href={experience.link}>
                  Learn more on LinkedIn
                </Link>
              </CardFooter> */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
