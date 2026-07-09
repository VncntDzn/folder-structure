import { Outlet } from "react-router-dom";

import { PublicLayout } from "./public.layout";

export function PublicLayoutRoute() {
  return (
    <PublicLayout title="Application">
      <Outlet />
    </PublicLayout>
  );
}
