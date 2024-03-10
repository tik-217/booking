"use client";

// react
import { memo } from "react";

// apollo
import { useQuery } from "@apollo/client";

// clsx
import clsx from "clsx";

// styles
import styles from "./ShortServices.module.scss";

// img
import Pool from "/public/ico/pool.svg";

// shared
import { IHotel } from "src/shared/types/hotels/IHotel";
import { HOTEL_SECTION } from "src/shared/api/apollo/hotel";
import { useAppSelector } from "src/shared/store/hooks";
import {
  selectHotelIndexPage,
  selectPollInterval,
} from "src/shared/store/selectors";

export default memo(function ShortServices() {
  const hotelIndexPage = useAppSelector(selectHotelIndexPage);
  const pollInterval = useAppSelector(selectPollInterval);

  const hotel = useQuery<IHotel>(HOTEL_SECTION, {
    variables: { id: hotelIndexPage },
    pollInterval,
  });

  const allServices = hotel.data?.hotel.hotelServices;

  return (
    <div className={clsx(styles.shortServices, "windowWidth")}>
      <h3 className={styles.shortServices__title}>Удобства в отеле</h3>
      <ul className={styles.shortServices__list}>
        {allServices?.map((el, i) => {
          if (i === 5) return <></>;

          return (
            <li className={styles.shortServices__item} key={el.hotelId}>
              <Pool className={styles.shortServices__ico} />
              <span className={styles.shortServices__name}></span>
            </li>
          );
        })}
      </ul>
    </div>
  );
});
