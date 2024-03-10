// next
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Войти в личный кабинет Vroo Room",
  description: "Онлайн бронирование для путшественников",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
