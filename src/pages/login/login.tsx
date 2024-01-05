"use client";

// next
import Link from "next/link";
import Image from "next/image";

// clsx
import clsx from "clsx";

// mantine
import { Input, MantineProvider, TextInput, createTheme } from "@mantine/core";
import { useForm } from "@mantine/form";

// entities
import HeaderAccount from "src/entities/HeaderAccount/HeaderAccount";

// styles
import styles from "./login.module.scss";
import MainButton from "src/shared/ui/MainButton/MainButton";

export default function Login() {
  const loginForm = useForm({
    initialValues: {
      login: "",
    },
  });

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
    <div className="windowWidth">
      <HeaderAccount />
      <main className={clsx(styles.login, "windowWidth")}>
        <div>
          <h3 className={styles.login__title}>Вход</h3>
          <form className={styles.login__form}>
            <MantineProvider theme={theme}>
              <TextInput
                placeholder="Login / email"
                size="md"
                radius={"md"}
                {...loginForm.getInputProps("login")}
              />
              <Link href={"/login/profile"}>
                <MainButton btnText={"Войти"} colorTheme="black" />
              </Link>
            </MantineProvider>
            <div className={styles.login__alternativeLogin}>
              <p className={styles.login__separator}></p>
              <div className={styles.login__loginIcons}>
                <Image
                  height={25}
                  width={25}
                  src={"/images/ico/google.svg"}
                  alt="google"
                />
                <Image
                  height={25}
                  width={25}
                  src={"/images/ico/apple.svg"}
                  alt="apple"
                />
                <Image
                  height={25}
                  width={25}
                  src={"/images/ico/yandex.svg"}
                  alt="yandex"
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
    </div>
  );
}
