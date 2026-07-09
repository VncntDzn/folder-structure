import { createBrowserRouter } from "react-router-dom";

import { SignInPage } from "../../features/auth/pages/signin";
import { SignUpPage } from "../../features/auth/pages/signup";
import { BookingDetailsPage } from "../../features/bookings/pages/booking-details";
import { BookingsPage } from "../../features/bookings/pages/bookings";
import { CreateBookingPage } from "../../features/bookings/pages/create-booking";
import { EditBookingPage } from "../../features/bookings/pages/edit-booking";
import { RoomDetailsPage } from "../../features/rooms/pages/room-details";
import { RoomsPage } from "../../features/rooms/pages/rooms";
import { PublicLayout } from "../../common/layouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <p>Home page</p>,
      },
      {
        path: "signin",
        element: <SignInPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
    ],
  },
  {
    path: "/rooms",
    children: [
      {
        index: true,
        element: <RoomsPage />,
      },
      {
        path: ":roomId",
        element: <RoomDetailsPage />,
      },
    ],
  },
  {
    path: "/bookings",
    children: [
      {
        index: true,
        element: <BookingsPage />,
      },
      {
        path: "create",
        element: <CreateBookingPage />,
      },
      {
        path: ":bookingId",
        element: <BookingDetailsPage />,
      },
      {
        path: ":bookingId/edit",
        element: <EditBookingPage />,
      },
    ],
  },
  {
    path: "*",
    element: <p>404 - Page not found</p>,
  },
]);
