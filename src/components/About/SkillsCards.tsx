import React from "react";
import { Card, CardFooter, Image } from "@nextui-org/react";

// Define the skill data array
const skillsData = [
  {
    title: "Python",
    imageSrc: "/images/python.png",
  },
  {
    title: "HTML",
    imageSrc: "/images/html.png",
  },
  {
    title: "CSS",
    imageSrc: "/images/css.png",
  },
  {
    title: "Java",
    imageSrc: "/images/java.png",
  },
  {
    title: "Javascript",
    imageSrc: "/images/javascript.png",
  },
  {
    title: "React",
    imageSrc: "/images/react.png",
  },
  {
    title: "Next-JS",
    imageSrc: "/images/next-js.png",
  },
  {
    title: "Tailwind CSS",
    imageSrc: "/images/tailwindcss.png",
  },
  {
    title: "Git",
    imageSrc: "/images/git.png",
  },
  
];

// Define the type of props for the SkillsCard component for better type safety and autocompletion
type SkillsCardProps = {
  title: string;
  imageSrc: string;
};

const SkillsCard: React.FC<SkillsCardProps> = ({ title, imageSrc }) => {
  return (
    <Card isFooterBlurred radius="lg" className="border-none">
      <Image
        alt={title}
        className="object-cover" // This class suggests you might want to cover the area of the card without stretching the image.
        src={imageSrc}
        width="100%" // Set width to 100% to cover the card width
        height="100%" // Set height to 100% to cover the card height
      />

      <CardFooter className="justify-between items-center bg-opacity-40 backdrop-filter backdrop-blur-lg bg-black rounded-b-lg">
        <p className="text-white">{title}</p>
      </CardFooter>
    </Card>
  );
};

const SkillsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-5">
      {skillsData.map((skill, index) => (
        <SkillsCard key={index} title={skill.title} imageSrc={skill.imageSrc} />
      ))}
    </div>
  );
};

export default SkillsCards;
