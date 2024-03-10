"use client";

// react next
import { memo } from "react";

// apollo
import { useQuery } from "@apollo/client";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";

// entities
import HotelCard from "src/features/HotelCard/HotelCard";
import Loading from "src/entities/Loading/Loading";

// shared
import { IHotels } from "src/shared/types/hotels/IHotel";
import { HOTELS_SECTION } from "src/shared/api/apollo/hotel";

// styles
import styles from "./TopHotels.module.scss";
import "swiper/css";

export default memo(function TopHotels() {
  const query = useQuery<IHotels>(HOTELS_SECTION);

  const hotels = query.data?.hotels;
  const loading = query.loading;

  return (
    <div className={styles.topHotels}>
      <h3 className={styles.topHotels__title}>Топ 10 отелей 2023</h3>
      <Swiper
        direction={"horizontal"}
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        speed={300}
        breakpoints={{
          1200: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 2,
          },
          340: {
            slidesPerView: 1,
          },
        }}
        modules={[Grid, Pagination]}
      >
        {loading ? (
          <Loading />
        ) : (
          hotels &&
          hotels.map((el) => {
            return (
              <SwiperSlide key={el.id}>
                <div className={styles.topHotels__cards}>
                  <div className={styles.topHotels__card}>
                    <HotelCard
                      id={el.id}
                      name={el.name}
                      stars={el.stars}
                      photo={[]}
                      city={el.city}
                      services={el.hotelServices}
                      rooms={el.rooms}
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })
        )}
      </Swiper>
    </div>
  );
});
