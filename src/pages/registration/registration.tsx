"use client";

// next
import Image from "next/image";

// mantine
import { Button, Flex, MantineProvider, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

// entities
import HeaderAccount from "src/entities/HeaderAccount/HeaderAccount";

// shared
import MainButton from "src/shared/ui/MainButton/MainButton";

// styles
import styles from "./registration.module.scss";

// clsx
import clsx from "clsx";
import Link from "next/link";

export default function Registration() {
  const loginForm = useForm({
    initialValues: {
      userName: "",
      email: "",
      phone: "",
    },
  });

  return (
    <div className="windowWidth">
      <HeaderAccount />
      <main className={clsx(styles.registr, "windowWidth")}>
        <div>
          <h3 className={styles.registr__title}>Регистрация</h3>
          <form className={styles.registr__form}>
            <MantineProvider>
              <TextInput
                placeholder="Имя"
                size="md"
                radius={"md"}
                {...loginForm.getInputProps("userName")}
              />
              <Flex direction={"column"}>
                <TextInput
                  placeholder="Email"
                  size="md"
                  radius={"md"}
                  rightSection={
                    <Button
                      variant="transparent"
                      type="button"
                      className={styles.registr__btnSubmit}
                    >
                      Подтвердить
                    </Button>
                  }
                  {...loginForm.getInputProps("email")}
                />
              </Flex>
              <Flex direction={"column"}>
                <TextInput
                  placeholder="Телефон"
                  size="md"
                  radius={"md"}
                  rightSection={
                    <Button
                      variant="transparent"
                      type="button"
                      className={styles.registr__btnSubmit}
                    >
                      Подтвердить
                    </Button>
                  }
                  {...loginForm.getInputProps("phone")}
                />
              </Flex>
              <div className={styles.registr__btnMain}>
                <MainButton btnText="Зарегистрироваться" colorTheme="black" />
              </div>
            </MantineProvider>
            <div className={styles.registr__alternativeLogin}>
              <p className={styles.registr__separator}></p>
              <div className={styles.registr__loginIcons}>
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
            <div className={styles.registr__toLogin}>
              <p>
                <Link href={"/login"}>Войти</Link>
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
