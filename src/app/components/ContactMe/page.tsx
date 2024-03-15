// src/app/components/ContactMe/ContactMe.tsx
"use client";
import React from "react";
import { Input, Button } from "@nextui-org/react";
import Email from "@/app/mini-components/Contact/Email"; // Assuming Email is your input component
import Info from "@/app/mini-components/Contact/Info"; // Assuming Info is additional contact info

const ContactMe = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle the form submission here
  };

  return (
    <section className="contact-me-section" style={{}}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <Email /> {/* Assuming Email contains an Input component */}
          </div>
          <div className="flex-1">
            <Info /> {/* Display additional contact info if necessary */}
          </div>
          <Button type="submit" color="primary" className="w-full md:w-auto">
            Send
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
