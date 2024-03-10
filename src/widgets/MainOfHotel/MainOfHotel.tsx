import { Suspense } from "react";
import Reviews from "src/features/Reviews/Reviews";
import AvailableRooms from "src/features/AvailableRooms/AvailableRooms";
import ShortServices from "src/entities/ShortServices/ShortServices";
import { useAppSelector } from "src/shared/store/hooks";
import { selectHotelIndexPage } from "src/shared/store/selectors";
import HotelInfo from "src/entities/HotelInfo/HotelInfo";
import Loading from "src/entities/Loading/Loading";
import AboutOfHotel from "src/features/AboutOfHotel/AboutOfHotel";
import HotelPolicy from "src/features/HotelPolicy/HotelPolicy";

export default function MainOfHotel() {
  const hotelIndexPage = useAppSelector(selectHotelIndexPage);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <HotelInfo hotelIndexPage={hotelIndexPage} />
        <ShortServices />
        <Reviews />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <AvailableRooms hotelIndexPage={hotelIndexPage} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <AboutOfHotel hotelIndexPage={hotelIndexPage} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <HotelPolicy hotelIndexPage={hotelIndexPage} />
      </Suspense>
    </>
  );
}
