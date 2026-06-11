import type { InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function Input({ id, label, ...props }: InputProps) {
  if (!label) {
    return <input id={id} {...props} />;
  }

  return (
    <label htmlFor={id}>
      <span>{label}</span>
      <input id={id} {...props} />
    </label>
  );
}
