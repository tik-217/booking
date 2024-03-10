// react
import { memo } from "react";

// apollo
import { useSuspenseQuery } from "@apollo/client";

// entities
import HotelCardWide from "src/entities/HotelCardWide/HotelCardWide";

// clsx
import clsx from "clsx";

// shared
import { IHotel } from "src/shared/types/hotels/IHotel";
import { HOTEL_SECTION } from "src/shared/api/apollo/hotel";

// styles
import styles from "./AvailableRooms.module.scss";

export default memo(function AvailableRooms({
  hotelIndexPage,
}: {
  hotelIndexPage: number;
}) {
  const query = useSuspenseQuery<IHotel>(HOTEL_SECTION, {
    variables: { id: hotelIndexPage },
  });

  const hotel = query.data.hotel;

  console.log(query.error);

  return (
    <div className={clsx(styles.availableRooms)}>
      <div className={"windowWidth"}>
        <h3 className={styles.availableRooms__title}>Доступные номера</h3>
        {/* <BookingCalc /> */}
      </div>
      <div className={styles.availableRooms__rooms}>
        {hotel.rooms.map((el) => {
          return (
            <div
              className={styles.availableRooms__room}
              key={el.id + el.name}
              data-id={el.id + el.name}
            >
              <HotelCardWide
                name={el.name}
                cost={el.cost}
                numberOfGuests={el.numberOfGuests}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
});
