import React from "react";
import Image from "next/image";
import Link from "next/link";
// 
const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="flex-1 flex items-center justify-center flex-col text-center"
        style={{
            backgroundColor: 'black', // Example gradient from light blue to a darker blue
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        // style={{
        //     backgroundImage: 'url(/images/background1.webp)',
        //     backgroundPosition: 'center '
        // }
        // }
      >
        {/* <h1 className="text-5xl font-bold mb-6">
          Hey there! I am Faiz M and I am a software developer
        </h1> */}
        {/* enter text below */}
        <p className="mb-6"> 
        </p>
        {/* Uncomment and use this link as needed */}
        {/* <Link href="#about" passHref>
          <span className="border-2 border-white py-2 px-4 inline-block cursor-pointer hover:bg-white hover:text-blue-900 transition-colors">
            About Me
          </span>
        </Link> */}
        <div className="mt-6">
          <Image
            src="/images/profilepic.webp"
            alt="Software Developer"
            width={200}
            height={200}
            className="rounded-full object-cover"
          />
        </div>
         <h1 className="text-2xl font-bold mb-2">
          Faiz Mustansar
        </h1> 
        <h1 className="text-medium font-bold mb-6">
          Software Developer
        </h1> 
        
      </div>
      {/* Additional page sections would go here... */}
      {/* <footer className="bg-blue-800 p-4 text-center">
        © {new Date().getFullYear()} Faiz Mustansar
      </footer> */}
    </div>
  );
};

export default LandingPage;
