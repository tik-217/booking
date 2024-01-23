// next
import { Metadata } from "next";

// nextAuth
import { getServerSession } from "next-auth";
import SessionProvider from "src/shared/helpers/SessionProvide";
import { authOptions } from "src/api/auth/[...nextauth]/route";

// mantine
import { MantineProvider, ColorSchemeScript } from "@mantine/core";

// fonts
import { Roboto_Slab } from "next/font/google";

// store
import StoreProvider from "src/shared/helpers/StoreProvider";

// styles
import "src/app/globals.scss";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

export const metadata: Metadata = {
  title: "Vroom Room - бронирование отелей по всей России",
  description: "Онлайн бронирование для путшественников",
};

const robotoSlab = Roboto_Slab({
  weight: ["300", "400", "500", "600"],
  subsets: ["cyrillic"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="ru">
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </head>
      <body className={robotoSlab.className}>
        <SessionProvider session={session}>
          <StoreProvider>
            <MantineProvider>{children}</MantineProvider>
          </StoreProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
