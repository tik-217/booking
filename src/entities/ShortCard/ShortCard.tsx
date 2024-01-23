"use client";

// react next
import Image from "next/image";
import { memo } from "react";

// swiper
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";

// styles
import styles from "./ShortCard.module.scss";
import "swiper/css";
import "swiper/css/pagination";

// img
import Location from "/public/ico/location.svg";
import MainButton from "src/shared/ui/MainButton/MainButton";

export default memo(function ShortCard() {
  return (
    <div className={styles.shortCard}>
      <div className={styles.shortCard__slider}>
        <Swiper
          direction={"vertical"}
          autoHeight
          slidePrevClass={"1"}
          pagination={{
            clickable: true,
          }}
          grabCursor={true}
          modules={[Pagination]}
          className={styles.shortCard__sliderRoot}
        >
          <SwiperSlide>
            <Image
              src={"/images/63bd5f9e82759d63f131e380.jpg"}
              fill
              priority
              alt="room"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              fill
              src={
                "/images/1651004117_38-vsegda-pomnim-com-p-dom-u-morya-sochi-foto-43.jpg"
              }
              priority
              alt="room"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              fill
              src={"/images/elina-sitnikova-FQJsoUhnteQ-unsplash.jpg"}
              priority
              alt="room"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.shortCard__description}>
        <div className={styles.shortCard__titleWrap}>
          <h5 className={styles.shortCard__title}>Название отеля</h5>
          <div className={styles.shortCard__location}>
            <Location className={styles.shortCard__ico} />
            <div className={styles.shortCard__payload}>
              <span className={styles.shortCard__city}>Геленджик</span>
              <time className={styles.shortCard__date}>20.12.23</time>
            </div>
          </div>
        </div>
        <div className={styles.shortCard__btn}>
          <MainButton btnText="Посмотреть" colorTheme="black" />
        </div>
      </div>
    </div>
  );
});
