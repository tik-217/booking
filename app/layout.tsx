// next
import { Metadata } from "next";

// mantine
import { MantineProvider, ColorSchemeScript } from "@mantine/core";

// fonts
import { Roboto_Slab } from "next/font/google";

// store
import StoreProvider from "helpers/StoreProvider";

// styles
import "src/app/globals.scss";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

export const metadata: Metadata = {
  title: "Vroom Room - бронирование отелей по всей России",
  description: "Онлайн бронирование для путшественников",
};

const robotoSlab = Roboto_Slab({
  weight: ["400", "500", "600"],
  subsets: ["cyrillic"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={robotoSlab.className}>
        <StoreProvider>
          <MantineProvider>{children}</MantineProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
