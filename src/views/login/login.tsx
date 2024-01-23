"use client";

// react
import { memo } from "react";

// entities
import LoginForm from "src/entities/LoginForm/LoginForm";
import Header from "src/widgets/Header/Header";

// clsx
import clsx from "clsx";

// styles
import styles from "./login.module.scss";

export default memo(function Login() {
  return (
    <div className={clsx(styles.login, "windowWidth")}>
      <div className={styles.login__headerWrap}>
        <Header />
      </div>
      <LoginForm />
    </div>
  );
});
