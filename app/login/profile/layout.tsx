// next
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Личный кабинет - Профиль",
  description: "Личный кабинет - Профиль",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
