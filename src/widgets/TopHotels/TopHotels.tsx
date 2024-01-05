"use client";

// react next
import { memo } from "react";

// entities
import HotelCard from "src/entities/HotelCard/HotelCard";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// styles
import styles from "./TopHotels.module.scss";
import "swiper/css";

export default memo(function TopHotels() {
  return (
    <div className={styles.topHotels}>
      <h3 className={styles.topHotels__title}>Топ 10 отелей 2023</h3>
      <Swiper
        direction={"horizontal"}
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        speed={300}
        breakpoints={{
          1200: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 2,
          },
          340: {
            slidesPerView: 1,
          },
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <div className={styles.topHotels__cards}>
            <div className={styles.topHotels__card}>
              <HotelCard />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.topHotels__cards}>
            <div className={styles.topHotels__card}>
              <HotelCard />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.topHotels__cards}>
            <div className={styles.topHotels__card}>
              <HotelCard />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.topHotels__cards}>
            <div className={styles.topHotels__card}>
              <HotelCard />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.topHotels__cards}>
            <div className={styles.topHotels__card}>
              <HotelCard />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.topHotels__cards}>
            <div className={styles.topHotels__card}>
              <HotelCard />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
});
