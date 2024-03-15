import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="flex-1 flex items-center justify-center flex-col text-center"
        style={{
          backgroundColor: 'black',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
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
        {/* Social Media Links */}
      </div>
      {/* Additional page sections and footer */}
    </div>
  );
};

export default LandingPage;
