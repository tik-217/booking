"use client";

// react next
import { memo } from "react";
import Link from "next/link";

// mantine
import { Button, Menu } from "@mantine/core";

// clsx
import clsx from "clsx";

// styles
import styles from "./HeaderProfile.module.scss";

export default memo(function HeaderProfile() {
  return (
    <div className={clsx(styles.headerProfile)}>
      <Link href={"/"}>
        <h1 className={styles.headerProfile__title}>Vroom Room</h1>
      </Link>
      <Menu
        shadow="md"
        offset={3}
        withArrow
        arrowPosition="center"
        trigger="hover"
      >
        <Menu.Target>
          <Button variant="outline" className={styles.headerProfile__menuBtn}>
            Menu
          </Button>
        </Menu.Target>
        <ul className={styles.headerProfile__menu}>
          <Menu.Dropdown>
            <Menu.Item>
              <li className={styles.headerProfile__item}>
                <Link
                  href={"/login/profile"}
                  className={clsx(
                    styles.headerProfile__link,
                    styles.headerProfile__link_active
                  )}
                >
                  Личные данные
                </Link>
              </li>
            </Menu.Item>
            <Menu.Item>
              <li className={styles.headerProfile__item}>
                <Link
                  href={"/login/safety"}
                  className={styles.headerProfile__link}
                >
                  Безопасность
                </Link>
              </li>
            </Menu.Item>
            <Menu.Item>
              <li className={styles.headerProfile__item}>
                <Link
                  href={"/login/bookingHistory"}
                  className={styles.headerProfile__link}
                >
                  История броней
                </Link>
              </li>
            </Menu.Item>
            <Menu.Item>
              <li className={styles.headerProfile__item}>
                <Link
                  href={"/login/favourites"}
                  className={styles.headerProfile__link}
                >
                  Избранное
                </Link>
              </li>
            </Menu.Item>
          </Menu.Dropdown>
        </ul>
      </Menu>
    </div>
  );
});
