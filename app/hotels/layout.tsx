// next
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Гостиницы в Санкт-Петербурге - забронировать гостиницу в Санкт-Петербурге, цены 2023-2024 на бронирование отелей в Санкт-Петербурге",
  description: "Онлайн бронирование для путшественников",
};

export default function HotelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
