"use client";

// react
import { memo } from "react";

// apollo
import { useQuery } from "@apollo/client";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// entite
import Review from "src/entities/Review/Review";

// shared
import { IHotel } from "src/shared/types/hotels/IHotel";
import { HOTEL_SECTION } from "src/shared/api/apollo/hotel";

// clsx
import clsx from "clsx";

// styles
import styles from "./Reviews.module.scss";
import Loading from "src/entities/Loading/Loading";
import { useAppSelector } from "src/shared/store/hooks";
import {
  selectHotelIndexPage,
  selectPollInterval,
} from "src/shared/store/selectors";

export default memo(function Reviews() {
  const hotelIndexPage = useAppSelector(selectHotelIndexPage);
  const pollInterval = useAppSelector(selectPollInterval);

  const query = useQuery<IHotel>(HOTEL_SECTION, {
    variables: { id: hotelIndexPage },
    pollInterval: pollInterval,
  });

  const hotel = query.data?.hotel;
  const loading = query.loading;

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
          {loading ? (
            <Loading />
          ) : (
            hotel &&
            hotel.reviewHotels.map((el) => {
              return (
                <SwiperSlide
                  className={styles.reviews__sliderItem}
                  key={el.id + el.name}
                >
                  <Review
                    avatar={el.avatar}
                    name={el.name}
                    country={el.country}
                    date={el.date}
                    rating={el.rating}
                    reviews={el.reviews}
                  />
                </SwiperSlide>
              );
            })
          )}
        </Swiper>
      </div>
    </div>
  );
});
