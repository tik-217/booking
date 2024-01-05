"use client";

// next
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

// mantine
import { Button, Rating } from "@mantine/core";

// features;
import BookingCalc from "src/features/BookingCalc/BookingCalc";

// entities
import HeaderAccount from "src/entities/HeaderAccount/HeaderAccount";
import HotelCardWide from "src/entities/HotelCardWide/HotelCardWide";
import Review from "src/entities/Review/Review";
import Footer from "src/entities/Footer/Footer";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// clsx
import clsx from "clsx";

// shared
import { useAppDispatch } from "src/shared/store/hooks";
import { setOpenMap } from "src/shared/store/reducers";

// styles
import styles from "./Hotel.module.scss";
import "leaflet/dist/leaflet.css";

// img
import Pool from "/public/images/ico/pool.svg";

export default function Hotel() {
  const dispatch = useAppDispatch();

  const DynamicMap = dynamic(() => import("src/entities/Map/Map"), {
    ssr: false,
  });

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <div className={styles.hotel}>
        <div className={"windowWidth"}>
          <HeaderAccount />
        </div>
        <div className={clsx(styles.hotelCard, "windowWidth")}>
          <div className={styles.hotelCard__header}>
            <div className={styles.hotelCard__name}>
              <h2 className={styles.hotelCard__title}>Название отеля</h2>
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
          <div className={styles.hotelCard__slider}>
            <Swiper
              slidesPerView={"auto"}
              pagination={pagination}
              modules={[Pagination]}
              className="hotelGallery"
            >
              <SwiperSlide className={styles.hotelCard__sliderItem}>
                <Image
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
                  alt="9b32bc4ab953979521ba7449387222a2_original"
                />
              </SwiperSlide>
              <SwiperSlide className={styles.hotelCard__sliderItem}>
                <Image
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
                  alt="9b32bc4ab953979521ba7449387222a2_original"
                />
              </SwiperSlide>
              <SwiperSlide className={styles.hotelCard__sliderItem}>
                <Image
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
                  alt="9b32bc4ab953979521ba7449387222a2_original"
                />
              </SwiperSlide>
              <SwiperSlide className={styles.hotelCard__sliderItem}>
                <Image
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
                  alt="9b32bc4ab953979521ba7449387222a2_original"
                />
              </SwiperSlide>
              <SwiperSlide className={styles.hotelCard__sliderItem}>
                <Image
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
                  alt="9b32bc4ab953979521ba7449387222a2_original"
                />
              </SwiperSlide>
              <SwiperSlide className={styles.hotelCard__sliderItem}>
                <Image
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
                  alt="9b32bc4ab953979521ba7449387222a2_original"
                />
              </SwiperSlide>
              <SwiperSlide className={styles.hotelCard__sliderItem}>
                <Image
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
                  alt="9b32bc4ab953979521ba7449387222a2_original"
                />
              </SwiperSlide>
              <SwiperSlide className={styles.hotelCard__sliderItem}>
                <Image
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
                  alt="9b32bc4ab953979521ba7449387222a2_original"
                />
              </SwiperSlide>
              <SwiperSlide className={styles.hotelCard__sliderItem}>
                <Image
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
                  alt="9b32bc4ab953979521ba7449387222a2_original"
                />
              </SwiperSlide>
              <SwiperSlide className={styles.hotelCard__sliderItem}>
                <Image
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
                  alt="9b32bc4ab953979521ba7449387222a2_original"
                />
              </SwiperSlide>
              <SwiperSlide className={styles.hotelCard__sliderItem}>
                <Image
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
                  alt="9b32bc4ab953979521ba7449387222a2_original"
                />
              </SwiperSlide>
              <SwiperSlide className={styles.hotelCard__sliderItem}>
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
        <div className={clsx(styles.shortServices, "windowWidth")}>
          <h3 className={styles.shortServices__title}>Удобства в отеле</h3>
          <ul className={styles.shortServices__list}>
            <li className={styles.shortServices__item}>
              <Pool className={styles.shortServices__ico} />
              <span className={styles.shortServices__name}>pool</span>
            </li>
            <li className={styles.shortServices__item}>
              <Pool className={styles.shortServices__ico} />
              <span className={styles.shortServices__name}>pool</span>
            </li>
            <li className={styles.shortServices__item}>
              <Pool className={styles.shortServices__ico} />
              <span className={styles.shortServices__name}>pool</span>
            </li>
            <li className={styles.shortServices__item}>
              <Pool className={styles.shortServices__ico} />
              <span className={styles.shortServices__name}>pool</span>
            </li>
            <li className={styles.shortServices__item}>
              <Pool className={styles.shortServices__ico} />
              <span className={styles.shortServices__name}>pool</span>
            </li>
          </ul>
        </div>
        <div className={clsx(styles.reviews, "windowWidth")}>
          <h3 className={styles.reviews__title}>Отзывы</h3>
          <div className={styles.reviews__block}>
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              breakpoints={{
                920: {
                  slidesPerView: 3,
                },
                550: {
                  slidesPerView: 2,
                },
                364: {
                  slidesPerView: 1,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
            >
              <SwiperSlide className={styles.reviews__sliderItem}>
                <Review />
              </SwiperSlide>
              <SwiperSlide className={styles.reviews__sliderItem}>
                <Review />
              </SwiperSlide>
              <SwiperSlide className={styles.reviews__sliderItem}>
                <Review />
              </SwiperSlide>
              <SwiperSlide className={styles.reviews__sliderItem}>
                <Review />
              </SwiperSlide>
              <SwiperSlide className={styles.reviews__sliderItem}>
                <Review />
              </SwiperSlide>
              <SwiperSlide className={styles.reviews__sliderItem}>
                <Review />
              </SwiperSlide>
              <SwiperSlide className={styles.reviews__sliderItem}>
                <Review />
              </SwiperSlide>
              <SwiperSlide className={styles.reviews__sliderItem}>
                <Review />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className={clsx(styles.availableRooms)}>
          <div className={"windowWidth"}>
            <h3 className={styles.availableRooms__title}>Доступные номера</h3>
            <BookingCalc />
          </div>
          <div className={styles.availableRooms__rooms}>
            <div className={styles.availableRooms__room}>
              <HotelCardWide />
            </div>
            <div className={styles.availableRooms__room}>
              <HotelCardWide />
            </div>
            <div className={styles.availableRooms__room}>
              <HotelCardWide />
            </div>
          </div>
        </div>
        <div className={styles.hotelDescrip}>
          <div className={clsx(styles.hotelDescrip__wrap, "windowWidth")}>
            <h3 className={styles.hotelDescrip__title}>Описание</h3>
            <div className={styles.hotelDescrip__mainBlock}>
              <p className={styles.hotelDescrip__text}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat possimus accusantium alias expedita, consequatur quae
                dolorum praesentium quas modi hic dolorem necessitatibus in,
                quisquam dolor exercitationem optio magni cupiditate numquam?
              </p>
              <div className={styles.hotelDescrip__map}>
                <Link
                  href="https://yandex.ru/maps/?um=constructor%3A587807d28e39fe45a94bc4dc7172b7552034acf3d58c5f11661e45f12ac07fd8&amp;source=constructorStatic"
                  target="_blank"
                >
                  <Image
                    src={
                      "https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A587807d28e39fe45a94bc4dc7172b7552034acf3d58c5f11661e45f12ac07fd8&amp;width=300&amp;height=200&amp;lang=ru_RU"
                    }
                    alt="map"
                    quality={100}
                    width={300}
                    height={300}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={clsx(styles.policy, "windowWidth")}>
          <h3 className={styles.policy__title}>Политика отеля</h3>
          <div className={styles.policy__main}>
            <div className={styles.policy__сheckInOut}>
              <h5 className={styles.policy__сheckInOutTitle}>
                Заселение и выезд
              </h5>
              <div className={styles.policy__сheckInOutTime}>
                <time>14:00</time>
                <time>12:00</time>
              </div>
            </div>
            <div className={styles.policy__additionalInfo}>
              <h5 className={styles.policy__additionalInfoTitle}>
                Дополнительная информация
              </h5>
              <p className={styles.policy__additionalInfoText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                earum dolores sit, quis aliquam expedita sapiente vero quidem
                iste facilis sunt non repellat quo suscipit quos dolor, et eaque
                corporis!
              </p>
            </div>
          </div>
        </div>
        <div className={clsx(styles.allServices, "windowWidth")}>
          <h3 className={styles.allServices__title}>Остальные удобства</h3>
          <div className={styles.allServices__main}>
            <div className={styles.allServices__servicesBlock}>
              <h5 className={styles.allServices__subTitle}>Общие</h5>
              <ul className={styles.allServices__list}>
                <li className={styles.allServices__item}>
                  <div className={styles.allServices__ico}>
                    <Pool />
                  </div>
                  <span className={styles.allServices__servicesName}>
                    Бассейн
                  </span>
                </li>
                <li className={styles.allServices__item}>
                  <div className={styles.allServices__ico}>
                    <Pool />
                  </div>
                  <span className={styles.allServices__servicesName}>
                    Бассейн
                  </span>
                </li>
                <li className={styles.allServices__item}>
                  <div className={styles.allServices__ico}>
                    <Pool />
                  </div>
                  <span className={styles.allServices__servicesName}>
                    Бассейн
                  </span>
                </li>
              </ul>
            </div>
            <div className={styles.allServices__servicesBlock}>
              <h5 className={styles.allServices__subTitle}>Общие</h5>
              <ul className={styles.allServices__list}>
                <li className={styles.allServices__item}>
                  <div className={styles.allServices__ico}>
                    <Pool />
                  </div>
                  <span className={styles.allServices__servicesName}>
                    Бассейн
                  </span>
                </li>
              </ul>
            </div>
            <div className={styles.allServices__servicesBlock}>
              <h5 className={styles.allServices__subTitle}>Общие</h5>
              <ul className={styles.allServices__list}>
                <li className={styles.allServices__item}>
                  <div className={styles.allServices__ico}>
                    <Pool />
                  </div>
                  <span className={styles.allServices__servicesName}>
                    Бассейн
                  </span>
                </li>
              </ul>
            </div>
            <div className={styles.allServices__servicesBlock}>
              <h5 className={styles.allServices__subTitle}>Общие</h5>
              <ul className={styles.allServices__list}>
                <li className={styles.allServices__item}>
                  <div className={styles.allServices__ico}>
                    <Pool />
                  </div>
                  <span className={styles.allServices__servicesName}>
                    Бассейн
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={"windowWidth"}>
          <Footer />
        </div>
      </div>
      <DynamicMap />
    </>
  );
}
