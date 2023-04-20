import React from "react";
import { Menu } from "./header/Menu";

export const Navbar = () => {
  return (
    <header className="w-full">
      <h1>Hello world</h1>
      <nav className="max-w-6xl">
        <Menu />
      </nav>
    </header>
  );
};
