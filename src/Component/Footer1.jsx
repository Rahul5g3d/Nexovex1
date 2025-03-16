import React from "react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">
          Nexovex
        </a>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#services" className="hover:text-gray-400">
            Services
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
          <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 text-center">
          <a href="#home" className="block hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="block hover:text-gray-400">
            About
          </a>
          <a href="#services" className="block hover:text-gray-400">
            Services
          </a>
          <a href="#contact" className="block hover:text-gray-400">
            Contact
          </a>
          <Button className="bg-blue-600 hover:bg-blue-700 w-full">
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
}
