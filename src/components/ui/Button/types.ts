import type { ButtonHTMLAttributes, ReactElement } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export type CommonButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

export type AsChildButtonProps = CommonButtonProps & {
  asChild: true;
  children: ReactElement<{ className?: string }>;
};

export type NativeButtonProps = CommonButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: false;
  };

export type ButtonProps = AsChildButtonProps | NativeButtonProps;
