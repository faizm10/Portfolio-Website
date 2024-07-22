"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import "@/app/styles/navbar.css";
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About Me", href: "/about" },
    { label: "Projects", href: "/projects" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-white" isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden custom-toggle"
        />
        <NavbarBrand>
          <p className="font-bold text-black">Faiz Mustansar</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarItem>
          <Link href="/" className="nav-link text-black">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about" className="nav-link text-black">About Me</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/projects" className="nav-link text-black">Projects</Link>
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
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
