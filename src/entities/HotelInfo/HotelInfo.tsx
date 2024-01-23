"use client";

// react next
import Image from "next/image";
import { memo } from "react";

// store
import { useAppDispatch } from "src/shared/store/hooks";
import { setOpenMap } from "src/shared/store/reducers";

// clsx
import clsx from "clsx";

// mantine
import { Button, Rating } from "@mantine/core";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// styles
import styles from "./HotelInfo.module.scss";

export default memo(function HotelInfo() {
  const dispatch = useAppDispatch();

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className={clsx(styles.hotelInfo, "windowWidth")}>
      <div className={styles.hotelInfo__header}>
        <div className={styles.hotelInfo__name}>
          <h2 className={styles.hotelInfo__title}>Название отеля</h2>
          <Rating value={3.5} fractions={2} readOnly />
        </div>
        <Button
          variant="transparent"
          p={0}
          onClick={() => dispatch(setOpenMap(true))}
        >
          На крате
        </Button>
      </div>
      <div className={styles.hotelInfo__slider}>
        <Swiper
          slidesPerView={"auto"}
          pagination={pagination}
          modules={[Pagination]}
          className="hotelGallery"
        >
          <SwiperSlide className={styles.hotelInfo__sliderItem}>
            <Image
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
              alt="9b32bc4ab953979521ba7449387222a2_original"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.hotelInfo__sliderItem}>
            <Image
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
              alt="9b32bc4ab953979521ba7449387222a2_original"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.hotelInfo__sliderItem}>
            <Image
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
              alt="9b32bc4ab953979521ba7449387222a2_original"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.hotelInfo__sliderItem}>
            <Image
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
              alt="9b32bc4ab953979521ba7449387222a2_original"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.hotelInfo__sliderItem}>
            <Image
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
              alt="9b32bc4ab953979521ba7449387222a2_original"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.hotelInfo__sliderItem}>
            <Image
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
              alt="9b32bc4ab953979521ba7449387222a2_original"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.hotelInfo__sliderItem}>
            <Image
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
              alt="9b32bc4ab953979521ba7449387222a2_original"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.hotelInfo__sliderItem}>
            <Image
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
              alt="9b32bc4ab953979521ba7449387222a2_original"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.hotelInfo__sliderItem}>
            <Image
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
              alt="9b32bc4ab953979521ba7449387222a2_original"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.hotelInfo__sliderItem}>
            <Image
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
              alt="9b32bc4ab953979521ba7449387222a2_original"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.hotelInfo__sliderItem}>
            <Image
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
              alt="9b32bc4ab953979521ba7449387222a2_original"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.hotelInfo__sliderItem}>
            <Image
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
              alt="9b32bc4ab953979521ba7449387222a2_original"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
});
