// entities
import HeaderProfile from "src/entities/HeaderProfile/HeaderProfile";
import ShortCard from "src/entities/ShortCard/ShortCard";

// clsx
import clsx from "clsx";

// styles
import styles from "./BookingHistory.module.scss";

export default function BookingHistory() {
  return (
    <>
      <HeaderProfile />
      <div className={clsx(styles.bookingHistory, "windowWidth")}>
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
      </div>
    </>
  );
}
