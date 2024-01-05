// next
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Личный кабинет - Безопасность",
  description: "Личный кабинет - Безопасность",
};

export default function SafetyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
