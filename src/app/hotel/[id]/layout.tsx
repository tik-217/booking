// next
import { Metadata } from "next";

// apollo
import { ApolloWrapper } from "src/shared/api/apollo/apollo-client";

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
  return <ApolloWrapper>{children}</ApolloWrapper>;
}
