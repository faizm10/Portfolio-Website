'use client'
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Navbar
      style={{
        backgroundColor: "#3573cf",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
      isBordered
    >
      <NavbarBrand>
        <p className="font-bold text-inherit">Faiz Mustansar</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
          <Link style={{ color: "white" }} href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link style={{ color: "white" }} href="/components/About">
            About Me
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link style={{ color: "white" }} href="/components/Experience">
            Experience
          </Link>
        </NavbarItem> */}
        <NavbarItem>
          <Link style={{ color: "white" }} href="/components/Projects">
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button onPress={onOpen} style={{backgroundColor:'#feb47b'}}>Contact Me</Button >
          <Modal
            backdrop="opaque"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            motionProps={{
              variants: {
                enter: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                },
                exit: {
                  y: -20,
                  opacity: 0,
                  transition: {
                    duration: 0.2,
                    ease: "easeIn",
                  },
                },
              },
            }}
          >
           <ModalContent>
           {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-black">
                  Contact Information
                </ModalHeader>
                <ModalBody>
                  <div className="flex flex-col items-start gap-4">
                    <p className="text-black">Email: <a href="mailto:faizmustansar10@gmail.com" className="text-blue-500 hover:underline">faizmustansar10@gmail.com</a></p>
                    <p className="text-black">LinkedIn: <a href="https://www.linkedin.com/in/faiz-mustansar-a9a435213/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">faiz-mustansar-a9a435213</a></p>
                    <p className="text-black">GitHub: <a href="https://github.com/faizm10" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">faizm10</a></p>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
              )}
            </ModalContent>
          </Modal>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
