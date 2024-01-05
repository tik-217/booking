"use client";

// next
import Link from "next/link";
import { memo, useEffect } from "react";

// clsx
import clsx from "clsx";

// shared
import { useAppDispatch, useAppSelector } from "src/shared/store/hooks";
import { setOpenMenu } from "src/shared/store/reducers";
import { selectOpenMenu } from "src/shared/store/selectors";

// styles
import styles from "./HeaderAccount.module.scss";

// svg
import Close from "/public/images/ico/close.svg";
import Menu from "/public/images/ico/menu.svg";

export default memo(function HeaderAccount() {
  const dispatch = useAppDispatch();
  const openMenu = useAppSelector(selectOpenMenu);

  useEffect(() => {
    dispatch(setOpenMenu(false));
    // eslint-disable-next-line
  }, []);

  return (
    <header className={clsx(styles.header)}>
      <div className={styles.header__logo}>
        <h2>
          <Link href={"/"}>Vroom Room</Link>
        </h2>
      </div>
      <nav
        className={clsx(
          !openMenu ? styles.header__menu_active : styles.header__menu
        )}
      >
        <ul className={styles.header__list}>
          <li className={styles.header__listItem}>
            <Link href={"/"} onClick={() => dispatch(setOpenMenu(false))}>
              Главная
            </Link>
          </li>
          <li className={styles.header__listItem}>
            <Link href={"/hotels"} onClick={() => dispatch(setOpenMenu(false))}>
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
          <li className={styles.header__listItem}>
            <Link href={"/login"} onClick={() => dispatch(setOpenMenu(false))}>
              Войти
            </Link>
          </li>
          <li className={styles.header__listItem}>
            <Link
              href={"/registration"}
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
      </nav>
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
