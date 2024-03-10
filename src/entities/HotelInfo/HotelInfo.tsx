"use client";

// react next
import Image from "next/image";
import { memo } from "react";

// apollo
import { useQuery, useSuspenseQuery } from "@apollo/client";

// store
import { useAppDispatch, useAppSelector } from "src/shared/store/hooks";
import { setOpenMap } from "src/shared/store/reducers";

// clsx
import clsx from "clsx";

// mantine
import { Button, Rating } from "@mantine/core";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// entities
import Loading from "src/entities/Loading/Loading";

// shared
import { HOTEL_SECTION } from "src/shared/api/apollo/hotel";
import { IHotel, IHotelProperty } from "src/shared/types/hotels/IHotel";
import {
  selectHotelIndexPage,
  selectPollInterval,
} from "src/shared/store/selectors";

// styles
import styles from "./HotelInfo.module.scss";

export default memo(function HotelInfo({
  hotelIndexPage,
}: {
  hotelIndexPage: number;
}) {
  const dispatch = useAppDispatch();

  const hotel = useSuspenseQuery<IHotel>(HOTEL_SECTION, {
    variables: { id: hotelIndexPage },
  }).data.hotel;

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
          <h2 className={styles.hotelInfo__title}>{hotel && hotel.name}</h2>
          <Rating value={hotel && hotel.stars} fractions={2} readOnly />
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
              priority={false}
              src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
              alt="9b32bc4ab953979521ba7449387222a2_original"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.hotelInfo__sliderItem}>
            <Image
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
              alt="9b32bc4ab953979521ba7449387222a2_original"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.hotelInfo__sliderItem}>
            <Image
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
              alt="9b32bc4ab953979521ba7449387222a2_original"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.hotelInfo__sliderItem}>
            <Image
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
              alt="9b32bc4ab953979521ba7449387222a2_original"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.hotelInfo__sliderItem}>
            <Image
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
              alt="9b32bc4ab953979521ba7449387222a2_original"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.hotelInfo__sliderItem}>
            <Image
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
              alt="9b32bc4ab953979521ba7449387222a2_original"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.hotelInfo__sliderItem}>
            <Image
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
              alt="9b32bc4ab953979521ba7449387222a2_original"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.hotelInfo__sliderItem}>
            <Image
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
              alt="9b32bc4ab953979521ba7449387222a2_original"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.hotelInfo__sliderItem}>
            <Image
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
              alt="9b32bc4ab953979521ba7449387222a2_original"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.hotelInfo__sliderItem}>
            <Image
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
              alt="9b32bc4ab953979521ba7449387222a2_original"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.hotelInfo__sliderItem}>
            <Image
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
              alt="9b32bc4ab953979521ba7449387222a2_original"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.hotelInfo__sliderItem}>
            <Image
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
              alt="9b32bc4ab953979521ba7449387222a2_original"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
});
