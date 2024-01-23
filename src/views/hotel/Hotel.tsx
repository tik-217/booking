"use client";

// next
import { memo } from "react";
import dynamic from "next/dynamic";

// widgets
import Reviews from "src/features/Reviews/Reviews";
import AvailableRooms from "src/widgets/AvailableRooms/AvailableRooms";
import AboutOfHotel from "src/widgets/AboutOfHotel/AboutOfHotel";
import HotelPolicy from "src/widgets/HotelPolicy/HotelPolicy";
import AllServices from "src/widgets/AllServices/AllServices";

// entities
import Header from "src/widgets/Header/Header";
import HotelInfo from "src/entities/HotelInfo/HotelInfo";
import ShortServices from "src/entities/ShortServices/ShortServices";
import Footer from "src/widgets/Footer/Footer";

// clsx
import clsx from "clsx";

// styles
import styles from "./Hotel.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "leaflet/dist/leaflet.css";

export default memo(function Hotel() {
  const DynamicMap = dynamic(() => import("src/entities/Map/Map"), {
    ssr: false,
  });

  return (
    <>
      <div className={styles.hotel}>
        <div className={"windowWidth"}>
          <div className={styles.hotel__headerWrap}>
            <Header />
          </div>
        </div>
        <HotelInfo />
        <ShortServices />
        <Reviews />
        <AvailableRooms />
        <AboutOfHotel />
        <HotelPolicy />
        <div className={clsx(styles.allServicesWrap, "windowWidth")}>
          <h3 className={styles.allServicesWrap__title}>Остальные удобства</h3>
          <div className={styles.allServicesWrap__main}>
            <AllServices />
            <AllServices />
            <AllServices />
            <AllServices />
          </div>
        </div>
        <div className={"windowWidth"}>
          <Footer />
        </div>
      </div>
      <DynamicMap />
    </>
  );
});
