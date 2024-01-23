// react next
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { memo } from "react";

// styles
import styles from "./HeaderAuth.module.scss";

// img
import Bear from "/public/ico/bear.svg";
import { Menu } from "@mantine/core";
import {
  IconBook,
  IconBookmark,
  IconLock,
  IconLogout,
  IconUser,
} from "@tabler/icons-react";
import clsx from "clsx";

export default memo(function HeaderAuth() {
  const { data: session } = useSession();

  return (
    <div className={styles.headerAuth}>
      <Menu
        shadow="md"
        offset={3}
        withArrow
        arrowPosition="center"
        trigger="hover"
        position="bottom-end"
      >
        <Menu.Target>
          <div className={styles.headerAuth__image}>
            <Bear className={styles.headerAuth__ico} />
          </div>
        </Menu.Target>
        <ul className={styles.headerAuth__menu}>
          <Menu.Dropdown>
            {/* <Menu.Item> */}
            <div className={styles.headerAuth__name}>
              <span className={styles.headerAuth__text}>
                {session?.user?.name}
              </span>
              <span className={styles.headerAuth__text}>
                {session?.user?.email}
              </span>
            </div>
            {/* </Menu.Item> */}
            <Menu.Label>Разделы</Menu.Label>
            <Menu.Item leftSection={<IconUser />}>
              <li className={styles.headerAuth__item}>
                <Link
                  href={"/login/profile"}
                  className={clsx(
                    styles.headerAuth__link,
                    styles.headerAuth__link_active
                  )}
                >
                  Личные данные
                </Link>
              </li>
            </Menu.Item>
            <Menu.Item leftSection={<IconLock />}>
              <li className={styles.headerAuth__item}>
                <Link
                  href={"/login/safety"}
                  className={styles.headerAuth__link}
                >
                  Безопасность
                </Link>
              </li>
            </Menu.Item>
            <Menu.Item leftSection={<IconBook />}>
              <li className={styles.headerAuth__item}>
                <Link
                  href={"/login/bookingHistory"}
                  className={styles.headerAuth__link}
                >
                  История броней
                </Link>
              </li>
            </Menu.Item>
            <Menu.Item leftSection={<IconBookmark />}>
              <li className={styles.headerAuth__item}>
                <Link
                  href={"/login/favourites"}
                  className={styles.headerAuth__link}
                >
                  Избранное
                </Link>
              </li>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Label>Аккаунт</Menu.Label>
            <Menu.Item leftSection={<IconLogout />} onClick={() => signOut()}>
              <li className={styles.headerAuth__item}>Выйти</li>
            </Menu.Item>
          </Menu.Dropdown>
        </ul>
      </Menu>
    </div>
  );
});
