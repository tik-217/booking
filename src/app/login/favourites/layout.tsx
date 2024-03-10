// next
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Личный кабинет - Избранные",
  description: "Личный кабинет - Избранные",
};

export default function FavouritesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
