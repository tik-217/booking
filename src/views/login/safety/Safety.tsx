"use client";

// mantine
import { Button, Input, PasswordInput } from "@mantine/core";

// shared
import MainButton from "src/shared/ui/MainButton/MainButton";

// entities
import HeaderProfile from "src/entities/HeaderProfile/HeaderProfile";

// clsx
import clsx from "clsx";

// styles
import styles from "./Safety.module.scss";

export default function Safety() {
  return (
    <>
      <HeaderProfile />
      <main className={clsx(styles.safety, "windowWidth")}>
        <div className={styles.safety__wrap}>
          <div className={styles.safety__password}>
            <h5 className={styles.safety__passwordTitle}>Сменить пароль</h5>
            <Input.Wrapper className={styles.safety__passwordInput}>
              <PasswordInput
                placeholder="Старый пароль"
                radius="md"
                size="md"
              />
            </Input.Wrapper>
            <Input.Wrapper className={styles.safety__passwordInput}>
              <PasswordInput placeholder="Новый пароль" radius="md" size="md" />
            </Input.Wrapper>
            <Input.Wrapper className={styles.safety__passwordInput}>
              <PasswordInput
                placeholder="Повторите новый пароль"
                radius="md"
                size="md"
              />
            </Input.Wrapper>
            <MainButton btnText="Подтвердить" colorTheme="black" />
          </div>
          <div className={styles.safety__account}>
            <h5 className={styles.safety__accountTitle}>Аккаунт</h5>
            <Button variant="transparent" className={styles.safety__accountBtn}>
              Удалить аккаунт
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
