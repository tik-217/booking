"use client";

// mantine
import { Badge, Button } from "@mantine/core";

// clsx
import clsx from "clsx";

// widgets
import Sidebar from "src/widgets/Sidebar/Sidebar";

// entities
import HeaderAccount from "src/entities/HeaderAccount/HeaderAccount";
import HotelCard from "src/entities/HotelCard/HotelCard";

// shared
import CreatingList from "src/shared/ui/CreatingList";

// styles
import styles from "./hotels.module.scss";
import { setOpenMap } from "src/shared/store/reducers";
import { useAppDispatch } from "src/shared/store/hooks";
import dynamic from "next/dynamic";

export default function Hotels() {
  const dispatch = useAppDispatch();

  const hotelsList = (hotelsNum: number) =>
    CreatingList(hotelsNum, <HotelCard />);

  const DynamicMap = dynamic(() => import("src/entities/Map/Map"), {
    ssr: false,
  });

  return (
    <>
      <div className={clsx(styles.hotels, "windowWidth")}>
        <HeaderAccount />
        <main className={clsx(styles.hotels__main)}>
          <Sidebar />
          <div className={styles.searchResult}>
            <div className={styles.searchResult__text}>
              <div className={styles.searchResult__city}>
                <Badge variant="dot" color="blue" size="lg">
                  Анапа
                </Badge>
                <p>найдено 124 варианта</p>
              </div>
              <Button
                variant="transparent"
                p={0}
                className={styles.searchResult__toMap}
                onClick={() => dispatch(setOpenMap(true))}
              >
                На крате
              </Button>
            </div>
            <div className={styles.hotelsList}>{hotelsList(9)}</div>
          </div>
        </main>
      </div>
      <DynamicMap />
    </>
  );
}
