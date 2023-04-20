import { Clickable, indexJSX } from "@/model/Types";
import Link from "next/link";
import React from "react";
import Typography from "../typography/Typography";

/**
 * todo: add types on button.
 * @param {href, text, variant}
 * @returns button component.
 */

const Button = ({ href, text, variant, ...props }: Clickable) => {
  const btn: indexJSX = {
    button: (
      <button {...props} className="btn">
        <Typography text={text} />
      </button>
    ),
    linkButton: (
      <Link {...props} href={`${href}`}>
        <Typography text={text} />
      </Link>
    ),
  };

  return btn[variant];
};

export default Button;
