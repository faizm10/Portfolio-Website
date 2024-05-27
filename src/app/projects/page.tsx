// src/components/Projects.tsx
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
const Projects: NextPage = () => {
  return (
    <>
      <div>
        <section
          className="text-white py-20"
          style={{
            backgroundColor: "#fdddb7",
          }}
          id="projects"
        >
          <div className="container mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-black">Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectItem
                title="To-Do List"
                link="https://github.com/faizm10/todo-list"
                imgSrc="/images/projects/todolist.png"
              />
              <ProjectItem
                title="Quiz App"
                link="https://github.com/faizm10/QuizApp"
                imgSrc="/images/projects/quizapp.png"
              />
              <ProjectItem
                title="CL Fantasy Dashboard"
                link="https://github.com/faizm10/CLFantasyManager"
                imgSrc="/images/projects/CL.png"
              />
              <ProjectItem
                title="Upcoming Project!!"
                link=""
                imgSrc="/images/projects/background1.webp"
              />

              <ProjectItem
                title="Upcoming Project!!"
                link=""
                imgSrc="/images/projects/background1.webp"
              />
              <ProjectItem
                title="Find More On Github!"
                link="https://github.com/faizm10/"
                imgSrc="/images/projects/githubpreview.png"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

interface ProjectItemProps {
  title: string;
  link: string;
  imgSrc: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, link, imgSrc }) => {
  return (
    <Link href={link}>
      <span className="block overflow-hidden rounded-lg shadow-lg group">
        <div className="relative">
          <Image
            src={imgSrc}
            alt={title}
            width={400}
            height={225}
            layout="responsive"
            className="transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-opacity duration-500 ease-in-out">
            <span className="text-white text-2xl font-medium ">{title}</span>
          </div>
        </div>
      </span>
    </Link>
  );
};

export default Projects;
