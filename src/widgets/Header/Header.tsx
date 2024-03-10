"use client";

// react/next
import Link from "next/link";
import { memo, useEffect } from "react";

// nextAuth
import { useSession } from "next-auth/react";

// clsx
import clsx from "clsx";

// entities
import HeaderAuth from "../../entities/HeaderAuth/HeaderAuth";

// shared
import { useAppDispatch, useAppSelector } from "src/shared/store/hooks";
import { selectOpenMenu } from "src/shared/store/selectors";
import { setOpenMenu } from "src/shared/store/reducers";

// styles
import styles from "./Header.module.scss";

// svg
import Close from "/public/ico/close.svg";
import Menu from "/public/ico/menu.svg";

export default memo(function Header() {
  const dispatch = useAppDispatch();
  const openMenu = useAppSelector(selectOpenMenu);

  const { status } = useSession();

  useEffect(() => {
    dispatch(setOpenMenu(false));
    // eslint-disable-next-line
  }, []);

  return (
    <header className={clsx(styles.header, "windowWidth")}>
      <div
        className={clsx(
          styles.header__logo,
          openMenu ? styles.header__logo_active : ""
        )}
      >
        <h2>
          <Link href={"/"}>Vroom Room</Link>
        </h2>
      </div>
      <div
        className={clsx(
          !openMenu ? styles.header__menu_active : styles.header__menu
        )}
      >
        <nav className={styles.header__menuWrap}>
          <ul
            className={clsx(
              styles.header__list,
              openMenu ? styles.header__list_active : ""
            )}
          >
            <li className={styles.header__listItem}>
              <Link href={"/"} onClick={() => dispatch(setOpenMenu(false))}>
                Главная
              </Link>
            </li>
            <li className={styles.header__listItem}>
              <Link
                href={"/hotels"}
                onClick={() => dispatch(setOpenMenu(false))}
              >
                Отели
              </Link>
            </li>
            <li className={styles.header__listItem}>
              <Link
                href={"/contacts"}
                onClick={() => dispatch(setOpenMenu(false))}
              >
                Котнакты
              </Link>
            </li>
          </ul>
        </nav>
        {status === "unauthenticated" ? (
          <ul
            className={clsx(
              styles.header__login,
              openMenu ? styles.header__login_active : ""
            )}
          >
            <li className={styles.header__loginItem}>
              <Link
                href={"/login"}
                onClick={() => dispatch(setOpenMenu(false))}
              >
                Войти
              </Link>
            </li>
          </ul>
        ) : (
          <div className={styles.header__registered}>
            <HeaderAuth />
          </div>
        )}
        <div
          onClick={() => dispatch(setOpenMenu(false))}
          className={clsx(
            openMenu ? styles.header__close_active : styles.header__close
          )}
        >
          <Close />
        </div>
      </div>
      <div
        onClick={() => dispatch(setOpenMenu(true))}
        className={clsx(
          styles.header__open,
          openMenu ? styles.header__open_active : ""
        )}
      >
        <Menu />
      </div>
    </header>
  );
});
