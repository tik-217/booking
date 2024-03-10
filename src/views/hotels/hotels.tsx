"use client";

// react next
import { memo } from "react";

// clsx
import clsx from "clsx";

// widgets
import Header from "src/widgets/Header/Header";
import Sidebar from "src/widgets/Sidebar/Sidebar";

// features
import HotelCard from "src/features/HotelCard/HotelCard";

// entities
import Loading from "src/entities/Loading/Loading";
import SearchResult from "src/entities/SearchResult/SearchResult";

// shared
// import { HOTELS_SECTION } from "src/shared/api/apollo/hotel";
// import { IHotel, IHotelProperty } from "src/shared/types/hotels/IHotel";

// styles
import styles from "./hotels.module.scss";
import { useQuery } from "@apollo/client";
import { HOTELS_SECTION } from "src/shared/api/apollo/hotel";
import { IHotels } from "src/shared/types/hotels/IHotel";

// const HotelCardLazy = lazy(() => import("src/features/HotelCard/HotelCard"));

export default memo(function Hotels() {
  const hotels = useQuery<IHotels>(HOTELS_SECTION).data?.hotels;

  return (
    <>
      <div className={clsx(styles.hotels, "windowWidth")}>
        <main className={clsx(styles.hotels__main)}>
          <Sidebar />
          <div className={styles.resultHotels}>
            <SearchResult />
            <div className={styles.hotelsList}>
              <>
                {hotels &&
                  hotels.map((el) => {
                    return (
                      <HotelCard
                        id={el.id}
                        city={el.city}
                        stars={el.stars}
                        name={el.name}
                        photo={el.photo}
                        services={el.hotelServices}
                        rooms={el.rooms}
                        key={el.id}
                      />
                    );
                  })}
              </>
            </div>
          </div>
        </main>
      </div>
      {/* <Map /> */}
    </>
  );
});
