import React from "react";
import {Input} from "@nextui-org/react";

export default function App() {
  return (
    <Input
      isClearable
      type="text"
      label="Name"
      variant="bordered"
      placeholder="Enter your full name"
      
      className="max-w-xs"
    />
  );
}
