"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import "@/app/styles/navbar.css";

export default function App() {
  return (
    <Navbar
      style={{
        backgroundColor: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
      isBordered
    >
      <NavbarBrand
        style={{ color: "black", fontFamily: "bold", fontSize: "14px" }}
      >
        <p className="font-bold text-black" style={{ fontSize: "18px" }}>
          Faiz Mustansar
        </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            href="/"
            className="relative nav-link"
            style={{ color: "black", fontFamily: "bold", fontSize: "14px" }}
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/about"
            className="relative nav-link"
            style={{ color: "black", fontFamily: "bold", fontSize: "14px" }}
          >
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/projects"
            className="relative nav-link"
            // underline="hover"
            style={{ color: "black", fontFamily: "bold", fontSize: "14px" }}
          >
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as="a"
            href="/FaizMustansarResume.pdf"
            target="_blank"
            className="bg-blue-300 hover:bg-blue-400"
            style={{ fontFamily: "sans-serif" }}
          >
            Resume
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
