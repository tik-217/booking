// react next
import { memo } from "react";
import Image from "next/image";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// shared
import MainButton from "src/shared/ui/MainButton/MainButton";

// clsx
import clsx from "clsx";

// styles
import styles from "./HotelCardWide.module.scss";
import "swiper/css";
import "swiper/css/pagination";

// img
import Pool from "/public/ico/pool.svg";

interface IHotelCardWide {
  name: string;
  cost: number;
  numberOfGuests: number;
}

export default memo(function HotelCardWide(props: IHotelCardWide) {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className={styles.hotelCardWide}>
      <div className={clsx(styles.hotelCardWide__wrap, "windowWidth")}>
        <h3 className={styles.hotelCardWide__title}>
          {props.name}
        </h3>
        <div className={styles.hotelCardWide__slider}>
          <div>
            <Swiper
              slidesPerView={"auto"}
              direction="horizontal"
              pagination={pagination}
              modules={[Pagination]}
              className="roomGallery"
            >
              <SwiperSlide className={styles.hotelCardWide__sliderItem}>
                <Image
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={false}
                  src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
                  alt="9b32bc4ab953979521ba7449387222a2_original"
                />
              </SwiperSlide>
              <SwiperSlide className={styles.hotelCardWide__sliderItem}>
                <Image
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={false}
                  src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
                  alt="9b32bc4ab953979521ba7449387222a2_original"
                />
              </SwiperSlide>
              <SwiperSlide className={styles.hotelCardWide__sliderItem}>
                <Image
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={false}
                  src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
                  alt="9b32bc4ab953979521ba7449387222a2_original"
                />
              </SwiperSlide>
              <SwiperSlide className={styles.hotelCardWide__sliderItem}>
                <Image
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={false}
                  src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
                  alt="9b32bc4ab953979521ba7449387222a2_original"
                />
              </SwiperSlide>
              <SwiperSlide className={styles.hotelCardWide__sliderItem}>
                <Image
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={false}
                  src={"/images/9b32bc4ab953979521ba7449387222a2_original.jpg"}
                  alt="9b32bc4ab953979521ba7449387222a2_original"
                />
              </SwiperSlide>
              <SwiperSlide className={styles.hotelCardWide__sliderItem}>
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
        <div className={styles.hotelCardWide__services}>
          <ul className={styles.hotelCardWide__servicesList}>
            <li className={styles.hotelCardWide__servicesItem}>
              <Pool className={styles.hotelCardWide__servicesItem_ico} />
              <span>pool</span>
            </li>
            <li className={styles.hotelCardWide__servicesItem}>
              <Pool className={styles.hotelCardWide__servicesItem_ico} />
              <span>pool</span>
            </li>
            <li className={styles.hotelCardWide__servicesItem}>
              <Pool className={styles.hotelCardWide__servicesItem_ico} />
              <span>pool</span>
            </li>
            <li className={styles.hotelCardWide__servicesItem}>
              <Pool className={styles.hotelCardWide__servicesItem_ico} />
              <span>pool</span>
            </li>
            <li className={styles.hotelCardWide__servicesItem}>
              <Pool className={styles.hotelCardWide__servicesItem_ico} />
              <span>pool</span>
            </li>
            <li className={styles.hotelCardWide__servicesItem}>
              <Pool className={styles.hotelCardWide__servicesItem_ico} />
              <span>pool</span>
            </li>
            <li className={styles.hotelCardWide__servicesItem}>
              <Pool className={styles.hotelCardWide__servicesItem_ico} />
              <span>pool</span>
            </li>
          </ul>
          <div className={styles.hotelCardWide__costSection}>
            <div className={styles.hotelCardWide__costSectionWrap}>
              <span className={styles.hotelCardWide__cost}>{props.cost} ₽/ночь</span>
              <span className={styles.hotelCardWide__numberOfPeople}>
                {props.numberOfGuests}
              </span>
            </div>
            <div className={styles.hotelCardWide__btn}>
              <MainButton btnText={"Связаться"} colorTheme="black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
