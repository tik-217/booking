// next
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Личный кабинет - История броней",
  description: "Личный кабинет - История броней",
};

export default function BookingHistoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
