// next
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Номер в гостинице Санкт-Петербурга, цены 2023-2024 на бронирование отелей в Санкт-Петербурге",
  description: "Онлайн бронирование для путшественников",
};

export default function HotelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
