// react
import { memo } from "react";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// styles
import styles from "./Location.module.scss";

export default memo(function Location() {
  return (
    <div className={styles.location}>
      <h3>Наши объекты расположены</h3>
      <div>
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          loop={true}
          allowTouchMove={false}
          breakpoints={{
            960: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
            760: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            360: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <span>Анапа</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Геленджик</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Москва</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Анапа</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Геленджик</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Москва</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Анапа</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Геленджик</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Москва</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Анапа</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Геленджик</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Москва</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Анапа</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Геленджик</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Москва</span>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          loop={true}
          allowTouchMove={false}
          breakpoints={{
            960: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
            760: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            360: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
        >
          <SwiperSlide>
            <span>Санкт-Петербург</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Москва</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Сочи</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Санкт-Петербург</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Москва</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Сочи</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Санкт-Петербург</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Москва</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Сочи</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Санкт-Петербург</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Москва</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Сочи</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Санкт-Петербург</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Москва</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Сочи</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Санкт-Петербург</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Москва</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Сочи</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Санкт-Петербург</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Москва</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Сочи</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Санкт-Петербург</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Москва</span>
          </SwiperSlide>
          <SwiperSlide>
            <span>Сочи</span>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
});
