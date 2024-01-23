// nextAuth
import NextAuth from "next-auth/next";
import { AuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import VkProvider from "next-auth/providers/vk";
import YandexProvider from "next-auth/providers/yandex";

// prisma
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/login",
    verifyRequest: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: process.env.JWT_TOKEN,
  },
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? "",
    }),
    VkProvider({
      clientId: process.env.VK_ID ?? "",
      clientSecret: process.env.VK_SECRET ?? "",
    }),
    YandexProvider({
      clientId: process.env.YANDEX_ID ?? "",
      clientSecret: process.env.YANDEX_SECRET ?? "",
    }),
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
