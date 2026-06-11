import type { PropsWithChildren } from "react";

export type PublicLayoutProps = PropsWithChildren<{
  title?: string;
}>;

export function PublicLayout({
  children,
  title = "Welcome",
}: PublicLayoutProps) {
  return (
    <section>
      <header>
        <h1>{title}</h1>
      </header>
      <main>{children}</main>
    </section>
  );
}
