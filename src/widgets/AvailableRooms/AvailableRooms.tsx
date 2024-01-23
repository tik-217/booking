// react
import { memo } from "react";

// entities
import HotelCardWide from "src/entities/HotelCardWide/HotelCardWide";
import BookingCalc from "src/features/BookingCalc/BookingCalc";

// clsx
import clsx from "clsx";

// styles
import styles from "./AvailableRooms.module.scss";

export default memo(function AvailableRooms() {
  return (
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
  );
});
