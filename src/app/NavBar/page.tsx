"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
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
      <NavbarBrand>
        <p className="font-bold text-black" style={{ fontSize: "28px" }}>
          Faiz Mustansar
        </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            href="/"
            className="relative nav-link"
            style={{ color: "black", fontFamily: "bold", fontSize: "24px" }}
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/about"
            className="relative nav-link"
            style={{ color: "black", fontFamily: "bold", fontSize: "24px" }}
          >
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/projects"
            className="relative nav-link"
            style={{ color: "black", fontFamily: "bold", fontSize: "24px" }}
          >
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
