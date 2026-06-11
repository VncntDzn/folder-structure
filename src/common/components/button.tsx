import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

export type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading?: boolean;
  }
>;

export function Button({
  children,
  isLoading = false,
  disabled,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button type={type} disabled={disabled || isLoading} {...props}>
      {isLoading ? "Loading..." : children}
    </button>
  );
}
