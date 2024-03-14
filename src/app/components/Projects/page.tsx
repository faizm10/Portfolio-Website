// // src/components/Projects.tsx

// import { NextPage } from 'next';
// import Image from 'next/image';
// import Link from 'next/link';

// const Projects: NextPage = () => {
//   return (
//     <div>
//       <section className="bg-gray-800 text-white py-20" id="projects">
//         <div className="container mx-auto">
//           <div className="text-center mb-20">
//             <h2 className="text-4xl font-bold">Projects</h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Project items mapped from an array */}
//             <ProjectItem
//               title="Beachify"
//               link="https://devpost.com/software/beachify-e1k98y"
//               imgSrc="/imgs/portfolio/1.jpg"
//             />
//             {/* Repeat <ProjectItem> for other projects */}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// interface ProjectItemProps {
//   title: string;
//   link: string;
//   imgSrc: string;
// }

// const ProjectItem: React.FC<ProjectItemProps> = ({ title, link, imgSrc }) => {
//   return (
//     <Link href={link}>
//       <a className="block overflow-hidden rounded-lg shadow-lg group">
//         <div className="relative">
//           <Image
//             src={imgSrc}
//             alt={title}
//             width={400}
//             height={225}
//             layout="responsive"
//             className="transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
//           />
//           <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-opacity duration-500 ease-in-out">
//             <span className="text-white text-lg font-medium">{title}</span>
//           </div>
//         </div>
//       </a>
//     </Link>
//   );
// };

// export default Projects;
