"use client";

// react
import { memo } from "react";

// entities
import HeaderProfile from "src/widgets/HeaderProfile/HeaderProfile";
import ShortCard from "src/entities/ShortCard/ShortCard";

// shared
import useCheckAuth from "src/shared/helpers/useCheckAuth";

// clsx
import clsx from "clsx";

// styles
import styles from "./Favourites.module.scss";

export default memo(function Favourites() {
  useCheckAuth();

  return (
    <>
      <HeaderProfile />
      <div className={clsx(styles.favourites, "windowWidth")}>
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
      </div>
    </>
  );
});
