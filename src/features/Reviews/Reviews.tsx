// react
import { memo } from "react";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// entite
import Review from "src/entities/Review/Review";

// clsx
import clsx from "clsx";

// styles
import styles from "./Reviews.module.scss";

export default memo(function Reviews() {
  return (
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
  );
});
