// next
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Личный кабинет - Забронированный номер",
  description: "Личный кабинет - Забронированный номер",
};

export default function BookingHotelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
