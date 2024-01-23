"use client";

// react next
import { memo } from "react";
import dynamic from "next/dynamic";

// mantine
import { Button, Rating } from "@mantine/core";

// entities
import HeaderProfile from "src/widgets/HeaderProfile/HeaderProfile";
import HotelCardWide from "src/entities/HotelCardWide/HotelCardWide";

// shared
import { useAppDispatch } from "src/shared/store/hooks";
import { setOpenMap } from "src/shared/store/reducers";
import useCheckAuth from "src/shared/helpers/useCheckAuth";

// styles
import styles from "./BookingHotel.module.scss";

// clsx
import clsx from "clsx";

export default memo(function BookingHotel() {
  useCheckAuth();

  const dispatch = useAppDispatch();

  const DynamicMap = dynamic(() => import("src/entities/Map/Map"), {
    ssr: false,
  });

  return (
    <>
      <HeaderProfile />
      <div className={clsx(styles.bookingHotel, "windowWidth")}>
        <div className={styles.bookingHotel__header}>
          <div className={styles.bookingHotel__name}>
            <h2 className={styles.bookingHotel__title}>Название отеля</h2>
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
        <div className={styles.bookingHotel__room}>
          <h5 className={styles.bookingHotel__subtitle}>
            Забронированный номер
          </h5>
          <div className={styles.bookingHotel__slider}>
            <HotelCardWide />
          </div>
        </div>
      </div>
      <DynamicMap />
    </>
  );
});
