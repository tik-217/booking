"use client";

// next
import { memo, useEffect } from "react";
import dynamic from "next/dynamic";

// apollo
import { useQuery } from "@apollo/client";

// widgets
import AllServices from "src/widgets/AllServices/AllServices";
import MainOfHotel from "src/widgets/MainOfHotel/MainOfHotel";

// shared
import { useAppDispatch } from "src/shared/store/hooks";
import { setHotelIndexPage } from "src/shared/store/reducers";
import { IHotel } from "src/shared/types/hotels/IHotel";
import { HOTEL_SECTION } from "src/shared/api/apollo/hotel";

// clsx
import clsx from "clsx";

// styles
import styles from "./Hotel.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "leaflet/dist/leaflet.css";

const DynamicMap = dynamic(() => import("src/entities/Map/Map"), {
  ssr: false,
});

export default memo(function Hotel({ params }: { params: { id: string } }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setHotelIndexPage(+params.id));
  }, [params]);

  const error = useQuery<IHotel>(HOTEL_SECTION, {
    variables: { id: +params.id },
    pollInterval: 10000,
  }).error;

  return (
    <>
      <main className={styles.hotel}>
        {error ? (
          <div className={"windowWidth"}>Error! {error.message}</div>
        ) : (
          <>
            <MainOfHotel />
            <div className={clsx(styles.allServicesWrap, "windowWidth")}>
              <h3 className={styles.allServicesWrap__title}>
                Остальные удобства
              </h3>
              <div className={styles.allServicesWrap__main}>
                <AllServices />
                <AllServices />
                <AllServices />
                <AllServices />
              </div>
            </div>
          </>
        )}
      </main>
      <DynamicMap />
    </>
  );
});
