// next
// import { MantineProvider } from "@mantine/core";
import { Metadata } from "next";
// import StoreProvider from "app/StoreProvider";

export const metadata: Metadata = {
  title: "Зарегистрироваться в личном кабинете Vroo Room",
  description: "Зарегистрирвоться, Регистрация, Vroom Room",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
