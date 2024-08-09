import React from "react";
import { Link } from "@nextui-org/react";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-white text-black p-4"
      style={{ fontFamily: "sans-serif" }}
    >
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <div>
          <Link isExternal href="https://faizm10.github.io/" showAnchorIcon>
            Old Portfolio Site
          </Link>
        </div>
        <div className="flex space-x-4">
          <p className="text-md">Copyright © 2024 Faiz Mustansar</p>
        </div>
        {/* <div>
        
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
