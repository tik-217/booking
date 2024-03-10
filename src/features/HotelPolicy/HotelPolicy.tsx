// react
import { memo } from "react";

// clsx
import clsx from "clsx";

// styles
import styles from "./HotelPolicy.module.scss";
import { IHotel, IHotelProperty } from "src/shared/types/hotels/IHotel";
import { useSuspenseQuery } from "@apollo/client";
import { HOTEL_SECTION } from "src/shared/api/apollo/hotel";

export default memo(function HotelPolicy({
  hotelIndexPage,
}: {
  hotelIndexPage: number;
}) {
  const query = useSuspenseQuery<IHotel>(HOTEL_SECTION, {
    variables: { id: hotelIndexPage },
  });

  const hotel = query.data.hotel;

  const getTime = (date: string) => {
    const currDate = new Date(date);
    const hours = currDate.getHours();
    const min = currDate.getMinutes();

    return (
      <>
        {hours}:{min}
      </>
    );
  };

  return (
    <div className={clsx(styles.policy, "windowWidth")}>
      <h3 className={styles.policy__title}>Политика отеля</h3>
      <div className={styles.policy__main}>
        <div className={styles.policy__сheckInOut}>
          <h5 className={styles.policy__сheckInOutTitle}>Заселение и выезд</h5>
          <div className={styles.policy__сheckInOutTime}>
            <time>{hotel.policy && getTime(hotel.policy[0])}</time>
            <time>{hotel.policy && getTime(hotel.policy[1])}</time>
          </div>
        </div>
        <div className={styles.policy__additionalInfo}>
          <h5 className={styles.policy__additionalInfoTitle}>
            Дополнительная информация
          </h5>
          <p className={styles.policy__additionalInfoText}>
            {hotel.additionalInfo}
          </p>
        </div>
      </div>
    </div>
  );
});
