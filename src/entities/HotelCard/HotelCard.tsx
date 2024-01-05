"use client";

// next
import Image from "next/image";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// styles
import styles from "./HotelCard.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import MainButton from "src/shared/ui/MainButton/MainButton";
import Link from "next/link";

export default function HotelCard() {
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
        <div className={styles.hotelCard__title}>
          <h5>Двухместный номер</h5>
          <div>
            <Image
              height={7}
              width={7}
              src={"/images/ico/location.svg"}
              alt="location"
            />
            <span>Геленджик</span>
          </div>
        </div>
        <div className={styles.hotelCard__services}>
          <ul>
            <li>
              <Image
                height={20}
                width={20}
                src={"/images/ico/pool.svg"}
                alt="pool"
              />
              <span>Бассейн</span>
            </li>
            <li>
              <div className={styles.hotelCard__services_serparator}></div>
            </li>
            <li>
              <Image
                height={20}
                width={20}
                src={"/images/ico/wifi.svg"}
                alt="wifi"
              />
              <span>Wi-Fi</span>
            </li>
            <li>
              <Image
                height={20}
                width={20}
                src={"/images/ico/wifi.svg"}
                alt="wifi"
              />
              <span>Wi-Fi</span>
            </li>
            <li>
              <div className={styles.hotelCard__services_serparator}></div>
            </li>
            <li>
              <Image
                height={20}
                width={20}
                src={"/images/ico/pool.svg"}
                alt="pool"
              />
              <span>Бассейн</span>
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
              colorTheme="black"
              bgTheme="blue"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
