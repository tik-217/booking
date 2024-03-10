// next
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Обраная свзяь",
  description: "Онлайн бронирование для путшественников",
};

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
