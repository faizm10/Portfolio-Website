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
// Colors to choose from:

{
  /* <Card className="shadow-sm p-3 text-center bg-yellow-100 text-yellow-800">JavaScript</Card>
    <Card className="shadow-sm p-3 text-center bg-blue-100 text-blue-800">React</Card>
    <Card className="shadow-sm p-3 text-center bg-green-100 text-green-800">Node.js</Card>
    <Card className="shadow-sm p-3 text-center bg-purple-100 text-purple-800">Team Collaboration</Card>
    <Card className="shadow-sm p-3 text-center bg-red-100 text-red-800">Project Management</Card>
    <Card className="shadow-sm p-3 text-center bg-indigo-100 text-indigo-800">Next.JS</Card>
    <Card className="shadow-sm p-3 text-center bg-pink-100 text-pink-800">Python</Card>
    <Card className="shadow-sm p-3 text-center bg-teal-100 text-teal-800">MySQL</Card>
    <Card className="shadow-sm p-3 text-center bg-orange-100 text-orange-800">OpenAI API</Card>
    <Card className="shadow-sm p-3 text-center bg-gray-100 text-gray-800">TailwindCSS</Card>
  </div> */
}
const ExperienceSection = () => {
  return (
    <section className=" py-12 px-4 md:px-12 lg:px-24" style={
      {backgroundColor: '#fdddb7'}
    }>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Experience
        </h2>
        <div className="space-y-4">
          <Card className="max-w-[1000px] shadow-xl p-5">
            {/* Company Image */}
            <CardHeader className="flex gap-3">
              <Image
                alt="company logo"
                height={80}
                radius="md"
                src="./images/logos/lang.jpeg"
                width={80}
              />
              {/* Role + Location */}
              <div className="flex flex-col">
                <p className="text-md font-semibold">
                  Undergraudate Research Assistant
                </p>
                <p className="text-small text-default-500">
                  University of Guelph - Lang School of Business and Economics
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              {/* Duration */}
              <p className="text-small text-default-500">May 2024 - Present</p>
            </CardBody>
            <Divider />
            <CardBody>
              <p className="font-semibold">Responsibilities:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Contributed to the development of a chatbot by integrating AI
                  models, facilitating more natural and responsive interactions.
                </li>
                <li>
                  Participated in the preparation and submission of Research
                  Ethics Board (REB) proposals, ensuring compliance with ethical
                  guidelines for research involving human subjects.
                </li>
                <li>
                  Utilized a tech stack including Python, NextJS, and Tailwind
                  CSS to develop interactive web applications and APIs,
                  integrating AI components for enhanced functionality.
                </li>
                <li>
                  Applied statistical graphing techniques to visualize research
                  findings, effectively communicating insights and trends to
                  stakeholders.
                </li>
              </ul>
            </CardBody>

            <Divider />
            <CardBody>
              <p className="font-semibold">Skills Achieved:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                <Card className="shadow-sm p-3 text-center bg-blue-100 text-blue-800">
                  Next.js
                </Card>
                <Card className="shadow-sm p-3 text-center bg-blue-100 text-blue-800">
                  Tailwind CSS
                </Card>
                <Card className="shadow-sm p-3 text-center bg-blue-100 text-blue-800">
                  Python
                </Card>
                <Card className="shadow-sm p-3 text-center bg-blue-100 text-blue-800">
                  API
                </Card>
                <Card className="shadow-sm p-3 text-center bg-blue-100 text-blue-800">
                  R Programming
                </Card>
                <Card className="shadow-sm p-3 text-center bg-blue-100 text-blue-800">
                  JavaScript
                </Card>
                <Card className="shadow-sm p-3 text-center bg-blue-100 text-blue-800">
                  TypeScript
                </Card>
              </div>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link
                isExternal
                showAnchorIcon
                href="https://www.linkedin.com/feed/update/urn:li:activity:7172713482394550273/" // Replace with the actual URL to your LinkedIn profile or company's website
              >
                Learn more on LinkedIn
              </Link>
            </CardFooter>
          </Card>

          <Divider className="my-4" />
          <Card className="max-w-[1000px] shadow-xl p-5">
            {/* Company Image */}
            <CardHeader className="flex gap-3">
              <Image
                alt="company logo"
                height={80}
                radius="md"
                src="./images/logos/engambition.jpeg"
                width={80}
              />
              {/* Role + Location */}
              <div className="flex flex-col">
                <p className="text-md font-semibold">Software Developer</p>
                <p className="text-small text-default-500">
                  Engineering Ambition
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              {/* Duration */}
              <p className="text-small text-default-500">Feb 2024 - Present</p>
            </CardBody>
            <Divider />
            <CardBody>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Collaborating with team members to ideate, design, and
                  implement software solutions using Next.js
                </li>
                <li>
                  Participating in project management using Clickup for task
                  tracking and GitHub for version control
                </li>
                <li>
                  Following best practices in coding standards and version
                  control using Git
                </li>
                <li>
                  Implementing responsive and visually appealing designs using
                  Tailwind CSS
                </li>
              </ul>
            </CardBody>
            <Divider />
            <CardBody className="p-5">
              <p className="font-semibold">Skills Achieved:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                <Card className="shadow-sm p-3 text-center bg-yellow-100 text-yellow-800">
                  TypeScript
                </Card>
                <Card className="shadow-sm p-3 text-center bg-yellow-100 text-yellow-800">
                  Next.js
                </Card>
                <Card className="shadow-sm p-3 text-center bg-yellow-100 text-yellow-800">
                  Tailwind CSS
                </Card>
                <Card className="shadow-sm p-3 text-center bg-yellow-100 text-yellow-800">
                  Python
                </Card>
              </div>
            </CardBody>

            <Divider />
            <CardFooter>
              <Link
                isExternal
                showAnchorIcon
                href="https://www.linkedin.com/feed/update/urn:li:activity:7164061828392681472/"
              >
                Learn more on LinkedIn
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
