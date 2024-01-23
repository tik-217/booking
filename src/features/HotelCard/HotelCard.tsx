"use client";

// react next
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// tabler
import { IconMap } from "@tabler/icons-react";

// entities
import Service from "src/entities/Service/Service";

// shared
import MainButton from "src/shared/ui/MainButton/MainButton";

// styles
import styles from "./HotelCard.module.scss";
import "swiper/css";
import "swiper/css/pagination";

export default memo(function HotelCard() {
  return (
    <div className={styles.hotelCard}>
      <div className={styles.hotelCard__slider}>
        <Swiper
          direction={"vertical"}
          autoHeight
          pagination={{
            clickable: true,
          }}
          grabCursor={true}
          modules={[Pagination]}
          className={styles.hotelCard__sliderRoot}
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
      <div className={styles.hotelCard__info}>
        <div className={styles.hotelCard__infoHeader}>
          <h5 className={styles.hotelCard__title}>Двухместный номер</h5>
          <div>
            <IconMap />
            <span>Геленджик</span>
          </div>
        </div>
        <div className={styles.hotelCard__services}>
          <ul>
            <li>
              <Service />
            </li>
            <li>
              <Service />
            </li>
            <li>
              <Service />
            </li>
            <li>
              <Service />
            </li>
          </ul>
        </div>
        <div className={styles.hotelCard__cost}>
          <h4>4000 ₽</h4>
        </div>
        <div className={styles.hotelCard__btnHotelInfo}>
          <Link href={"/hotel"}>
            <MainButton
              btnText={"Подобрать"}
              bgTheme="yellow"
              colorTheme="black"
            />
          </Link>
        </div>
      </div>
    </div>
  );
});
