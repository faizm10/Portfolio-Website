import React from "react";
import Image from "next/image";
import Link from "next/link";
import LatestCode from "@/components/LatestCode";
import LandingPage from "@/components/LandingPage";
const home: React.FC = () => {
  return (
    <>
      <LandingPage />
      <LatestCode />
    </>
  );
};

export default home;
