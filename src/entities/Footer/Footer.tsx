"use client";

// next
import Image from "next/image";
import Link from "next/link";

// clsx
import clsx from "clsx";

// styles
import styles from "./Footer.module.scss";

import { memo } from "react";

export default memo(function Footer() {
  return (
    <footer className={clsx(styles.footer)}>
      <div className={styles.footer__icons}>
        <h2>
          <Link href="/">Vroom Room</Link>
        </h2>
        <div>
          <Link href={"https://t.me"}>
            <Image
              height={30}
              width={30}
              src={"/images/ico/telegram.svg"}
              alt={"telegram"}
            />
          </Link>
          <Link href={"https://vk.com"}>
            <Image
              height={30}
              width={30}
              src={"/images/ico/vk.svg"}
              alt={"vk"}
            />
          </Link>
          <Link href={"https://yandex.ru"}>
            <Image
              height={30}
              width={30}
              src={"/images/ico/yandex-zen.svg"}
              alt={"yandex-zen"}
            />
          </Link>
        </div>
      </div>
      <div className={styles.footer__navigation}>
        <div>
          <ul>
            <li>
              <Link href={"/"}>Блог</Link>
            </li>
            <li>
              <Link href={"/"}>Отели</Link>
            </li>
            <li>
              <Link href={"/"}>Контакты</Link>
            </li>
            <li>
              <Link href={"/"}>Правила сервиса</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href={"/"}>Вход</Link>
            </li>
            <li>
              <Link href={"/"}>Регистрация</Link>
            </li>
            <li>
              <Link href={"/"}>Регистрация объекта</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footer__copyright}>
        <p>Copyright © 2023 vroom-room.ru. Все права защищены.</p>
      </div>
    </footer>
  );
});
