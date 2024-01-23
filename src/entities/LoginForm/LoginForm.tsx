"use client";

// react next
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { memo } from "react";

// nextAuth
import { signIn, useSession } from "next-auth/react";

// mantine
import { Input, MantineProvider, TextInput, createTheme } from "@mantine/core";
import { useForm } from "@mantine/form";

// shared
import MainButton from "src/shared/ui/MainButton/MainButton";

// clsx
import clsx from "clsx";

// styles
import styles from "./LoginForm.module.scss";

export default memo(function LoginForm() {
  const { status } = useSession();

  const loginForm = useForm({
    initialValues: {
      login: "",
    },
  });

  if (status === "authenticated") {
    redirect("/login/profile");
  }

  const callbackUrl = `/login/profile`;

  function sendForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const login = loginForm.getInputProps("login").value;

    signIn("email", {
      email: login,
      callbackUrl,
    });
  }

  const theme = createTheme({
    components: {
      InputWrapper: Input.Wrapper.extend({
        defaultProps: {
          inputWrapperOrder: ["input", "error"],
        },
      }),
    },
  });

  return (
    <main className={clsx(styles.login, "windowWidth")}>
      <div>
        <h3 className={styles.login__title}>Вход</h3>
        <form className={styles.login__form} onSubmit={(e) => sendForm(e)}>
          <MantineProvider theme={theme}>
            <TextInput
              placeholder="Login / email"
              size="md"
              radius={"md"}
              {...loginForm.getInputProps("login")}
            />
            <MainButton btnText={"Войти"} colorTheme="black" />
          </MantineProvider>
          <div className={styles.login__alternativeLogin}>
            <p className={styles.login__separator}></p>
            <div className={styles.login__loginIcons}>
              <Image
                height={30}
                width={30}
                src={"/ico/google.svg"}
                alt="google"
                onClick={() => signIn("google")}
              />
              <Image
                height={30}
                width={30}
                src={"/ico/vk.svg"}
                alt="vk"
                onClick={() => signIn("vk")}
              />
              <Image
                height={30}
                width={30}
                src={"/ico/yandex.svg"}
                alt="yandex"
                onClick={() => signIn("yandex")}
              />
            </div>
          </div>
          <div className={styles.login__forgotPassword}>
            <p>
              <Link href={"/login/restoring-access"}>Забыли пароль?</Link>
            </p>
            <p>
              <Link href={"/registration"}>Зарегистрироваться</Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
});
