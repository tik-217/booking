"use client";

// next/react
import { MutableRefObject, useRef } from "react";

// clsx
import clsx from "clsx";

// widgets
import MainScreen from "src/widgets/MainScreen/MainScreen";
import TopHotels from "src/widgets/TopHotels/TopHotels";

// entities
import Footer from "src/entities/Footer/Footer";

// shared
import Advantage from "src/entities/Advantage/Advantage";
import Location from "src/entities/Location/Location";
import Mailing from "src/entities/Mailing/Mailing";

// styles
import styles from "./home.module.scss";

export default function Home() {
  const topHotels: MutableRefObject<HTMLDivElement | null> = useRef(null);

  return (
    <>
      <MainScreen topHotels={topHotels} />
      <main className={styles.home}>
        <div
          className={clsx(styles.home__topHotels, "windowWidth")}
          ref={topHotels}
        >
          <TopHotels />
        </div>
        <div className={clsx(styles.home__advantage, "windowWidth")}>
          <Advantage />
        </div>
        <div className={styles.home__mailing}>
          <Mailing />
        </div>
        <div className={clsx(styles.home__location, "windowWidth")}>
          <Location />
        </div>
      </main>
      <div className={"windowWidth"}>
        <Footer />
      </div>
    </>
  );
}
