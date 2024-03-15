import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

export default function App() {
  return (
    <Navbar style={{ backgroundColor: '#0070f3', position: 'sticky', top: 0, zIndex: 1000 }}>
      <NavbarBrand>
        <p className="font-bold" style={{ color: 'white' }}>Faiz Mustansar</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link style={{ color: 'white' }} href="#">
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link style={{ color: 'white' }} href="#">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link style={{ color: 'white' }} href="#">
            Contact Me
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

// // src/components/Navbar.tsx
// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// const Navbar: React.FC = () => {
//   return (
//     <nav className="bg-blue-800 text-white p-4 flex justify-between items-center sticky top-0 z-50">
//       <Link href="/">
//         <span className="flex items-center">
//           <Image
//             src="/images/logo.webp" // Adjust the path to your logo
//             alt="Logo"
//             width={40} // Adjust the size to match your design
//             height={40} // Adjust the size to match your design
//           />
//           <span className="text-xl font-bold ml-3">FM</span>
//         </span>
//       </Link>

//       <div className="space-x-4 text-lg">
//         <Link href="/">
//           <span className="hover:text-gray-300 cursor-pointer">Home</span>
//         </Link>
//         <Link href="/about">
//           <span className="hover:text-gray-300 cursor-pointer">About</span>
//         </Link>
//         <Link href="/projects">
//           <span className="hover:text-gray-300 cursor-pointer">Projects</span>
//         </Link>
//         <Link href="/contact">
//           <span className="hover:text-gray-300 cursor-pointer">Contact</span>
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
