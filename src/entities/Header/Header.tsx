"use client";

// react/next
import Link from "next/link";
import { memo, useEffect } from "react";

// clsx
import clsx from "clsx";

// shared
import { useAppDispatch, useAppSelector } from "src/shared/store/hooks";
import { selectOpenMenu } from "src/shared/store/selectors";
import { setOpenMenu } from "src/shared/store/reducers";

// styles
import styles from "./Header.module.scss";

// svg
import Close from "/public/images/ico/close.svg";
import Menu from "/public/images/ico/menu.svg";

export default memo(function Header() {
  const dispatch = useAppDispatch();
  const openMenu = useAppSelector(selectOpenMenu);

  useEffect(() => {
    dispatch(setOpenMenu(false));
    // eslint-disable-next-line
  }, []);

  return (
    <header className={styles.header}>
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
        <ul
          className={clsx(
            styles.header__login,
            openMenu ? styles.header__login_active : ""
          )}
        >
          <li className={styles.header__loginItem}>
            <Link href={"/login"} onClick={() => dispatch(setOpenMenu(false))}>
              Войти
            </Link>
          </li>
          <li className={styles.header__loginItem}>
            <Link
              href={"/register"}
              onClick={() => dispatch(setOpenMenu(false))}
            >
              Зарегистрироваться
            </Link>
          </li>
        </ul>
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
