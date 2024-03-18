import React from "react";
import { Card, CardFooter, Image } from "@nextui-org/react";

// Define the skill data array
const skillsData = [
  {
    title: "LinkedIn",
    imageSrc: "/images/linkedin.png",
    statusText: "Available soon."
  },
  {
    title: "HTML5",
    imageSrc: "/images/faizlogo.webp",
    statusText: "Experienced."
  },
  {
    title: "CSS3",
    imageSrc: "/images/css.png",
    statusText: "Advanced."
  },
  // ...other skills
];

// Define the type of props for the SkillsCard component for better type safety and autocompletion
type SkillsCardProps = {
  title: string;
  imageSrc: string;
  statusText: string;
};

const SkillsCard: React.FC<SkillsCardProps> = ({ title, imageSrc, statusText }) => {
  return (
    <Card isFooterBlurred radius="lg" className="border-none">
      <Image
        alt={title}
        className="object-cover"
        height={200}
        src={imageSrc}
        width={200}
      />
      <CardFooter className="justify-between items-center bg-opacity-40 backdrop-filter backdrop-blur-lg bg-black rounded-b-lg">
        <p className="text-white">{statusText}</p>
      </CardFooter>
    </Card>
  );
};

const SkillsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {skillsData.map((skill, index) => (
        <SkillsCard
          key={index}
          title={skill.title}
          imageSrc={skill.imageSrc}
          statusText={skill.statusText}
        />
      ))}
    </div>
  );
};

export default SkillsCards;
