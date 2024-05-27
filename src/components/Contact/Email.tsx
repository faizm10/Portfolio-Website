import React from "react";
import {Input} from "@nextui-org/react";

export default function App() {
  return (
    <Input
      isClearable
      type="email"
      label="Email"
      variant="bordered"
      placeholder="Enter your email"
      onClear={() => console.log("input cleared")}
      className="max-w-xs"
    />
  );
}
