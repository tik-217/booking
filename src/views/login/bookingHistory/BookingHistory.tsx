"use client";

// react
import { memo } from "react";

// shared
import useCheckAuth from "src/shared/helpers/useCheckAuth";

// entities
import HeaderProfile from "src/widgets/HeaderProfile/HeaderProfile";
import ShortCard from "src/entities/ShortCard/ShortCard";

// clsx
import clsx from "clsx";

// styles
import styles from "./BookingHistory.module.scss";

export default memo(function BookingHistory() {
  useCheckAuth();

  return (
    <>
      <HeaderProfile />
      <div className={clsx(styles.bookingHistory, "windowWidth")}>
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
