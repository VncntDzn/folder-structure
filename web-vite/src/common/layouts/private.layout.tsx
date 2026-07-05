import type { PropsWithChildren } from "react";

export type PrivateLayoutProps = PropsWithChildren<{
  title?: string;
}>;

export function PrivateLayout({
  children,
  title = "Private Area",
}: PrivateLayoutProps) {
  return (
    <section>
      <header>
        <h1>{title}</h1>
      </header>
      <main>{children}</main>
    </section>
  );
}
