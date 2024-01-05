"use client";

// next/react
import Image from "next/image";
import { MutableRefObject, memo } from "react";

// features
import BookingCalc from "src/features/BookingCalc/BookingCalc";

// entities
import Header from "src/entities/Header/Header";

// styles
import styles from "./MainScreen.module.scss";

export default memo(function MainScreen({
  topHotels,
}: {
  topHotels: MutableRefObject<HTMLDivElement | null>;
}) {
  function scrollToTopHotels() {
    const topHotelsHtml = topHotels.current as HTMLDivElement;

    topHotelsHtml.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }

  return (
    <div className={styles.mainScreen}>
      <div className={styles.mainScreen__wrapper}>
        <Header />
        <div className={styles.bookingSystem}>
          <h1 className={styles.bookingSystem__title}>
            Бронируйте через систему Vroom Room
          </h1>
          <div className={styles.bookingSystem__system}>
            <BookingCalc />
          </div>
          <Image
            height="30"
            width="30"
            src="images/ico/arrow-down.svg"
            alt="arrow-down"
            onClick={() => scrollToTopHotels()}
            className={styles.bookingSystem__image}
          />
        </div>
      </div>
    </div>
  );
});
