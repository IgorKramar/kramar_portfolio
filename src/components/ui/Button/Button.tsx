import { cloneElement, isValidElement } from "react";
import { cx } from "@/utils";
import type { ButtonProps } from "./types";
import { buttonClasses } from "./utils";

export function Button(props: ButtonProps) {
  const { variant = "secondary", size = "md", className, asChild } = props;

  const classes = cx(buttonClasses(variant, size), className);

  if (asChild) {
    const child = props.children;

    if (!isValidElement(child)) {
      throw new Error("<Button asChild> expects a single React element child.");
    }

    return cloneElement(child, {
      className: cx(child.props.className, classes),
    });
  }

  const { children, ...rest } = props;
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}
