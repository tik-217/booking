"use client";

// react next
import Image from "next/image";
import Link from "next/link";
import { memo, useEffect, useState } from "react";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// tabler
import { IconMap } from "@tabler/icons-react";

// entities
import Service from "src/entities/Service/Service";

// shared
import MainButton from "src/shared/ui/MainButton/MainButton";

// types
import { IHotelCardProps } from "./Hotel.types";

// styles
import styles from "./HotelCard.module.scss";
import "swiper/css";
import "swiper/css/pagination";

// img
import img1 from "/public/images/63bd5f9e82759d63f131e380.jpg";
import img2 from "/public/images/1651004117_38-vsegda-pomnim-com-p-dom-u-morya-sochi-foto-43.jpg";
import img3 from "/public/images/elina-sitnikova-FQJsoUhnteQ-unsplash.jpg";

export default memo(function HotelCard(props: IHotelCardProps) {
  const [cost, setCost] = useState(0);

  const hotelServicesApi = props.services[0];
  const rooms = props.rooms;

  useEffect(() => {
    const minCosts = rooms.reduce((acc, el) => {
      if (acc.cost >= el.cost) {
        return el;
      }
      return acc;
    });

    setCost(minCosts.cost);
  }, [rooms]);

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
            <div className={styles.hotelCard__slide}>
              <Image
                src={img1}
                sizes="100vw"
                className={styles.hotelCard__img}
                alt="room"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.hotelCard__slide}>
              <Image
                src={img2}
                sizes="100vw"
                className={styles.hotelCard__img}
                alt="room"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.hotelCard__slide}>
              <Image
                src={img3}
                sizes="100vw"
                className={styles.hotelCard__img}
                alt="room"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.hotelCard__info}>
        <div className={styles.hotelCard__top}>
          <div className={styles.hotelCard__infoHeader}>
            <h5 className={styles.hotelCard__title}>{props.name}</h5>
            <div>
              <IconMap />
              <span>{props.city}</span>
            </div>
          </div>
          <div className={styles.hotelCard__services}>
            {hotelServicesApi && (
              <ul>
                <li>
                  <Service
                    servName={
                      hotelServicesApi.hotelServicesInternet.length !== 0
                        ? hotelServicesApi.hotelServicesInternet[0].freeWiFi
                        : ""
                    }
                  />
                </li>
                <li>
                  <Service
                    servName={
                      hotelServicesApi.hotelServicesParking.length !== 0
                        ? hotelServicesApi.hotelServicesParking[0]
                            .parkingIsPaidSeparately
                        : ""
                    }
                  />
                </li>
                <li>
                  <Service
                    servName={
                      hotelServicesApi.hotelServicesTransfer.length !== 0
                        ? hotelServicesApi.hotelServicesTransfer[0].transfer
                        : ""
                    }
                  />
                </li>
                <li>
                  <Service
                    servName={
                      hotelServicesApi.hotelServicesMeals.length !== 0
                        ? hotelServicesApi.hotelServicesMeals[0]
                            .fullBoardIsPossible
                        : ""
                    }
                  />
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className={styles.hotelCard__bottom}>
          <div className={styles.hotelCard__cost}>
            <h4>{cost}₽</h4>
          </div>
          <div className={styles.hotelCard__btnHotelInfo}>
            <Link href={`/hotel/${props.id}`}>
              <MainButton
                btnText={"Подобрать"}
                bgTheme="yellow"
                colorTheme="black"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});
