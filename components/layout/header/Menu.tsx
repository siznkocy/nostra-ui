import Button from "@/components/button/Button";
import { navList } from "@/data/NavData";
import React from "react";

export const Menu = () => {
  return (
    <article>
      <ul>
        {navList.map((link, i) => (
          <li key={i}>
            <Button
              text={link.name}
              variant={link.variant}
              href={link.name.replace(/\s/, "_")}
            />
          </li>
        ))}
      </ul>
    </article>
  );
};
