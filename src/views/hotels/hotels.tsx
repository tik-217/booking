"use client";

// react next
import { memo } from "react";
import dynamic from "next/dynamic";

// mantine
import { Badge, Button } from "@mantine/core";

// clsx
import clsx from "clsx";

// widgets
import Header from "src/widgets/Header/Header";
import Sidebar from "src/widgets/Sidebar/Sidebar";

// entities
import HotelCard from "src/features/HotelCard/HotelCard";

// shared
import CreatingList from "src/shared/helpers/CreatingList";
import { setOpenMap } from "src/shared/store/reducers";
import { useAppDispatch } from "src/shared/store/hooks";

// styles
import styles from "./hotels.module.scss";

export default memo(function Hotels() {
  const dispatch = useAppDispatch();

  const hotelsList = (hotelsNum: number) =>
    CreatingList(hotelsNum, <HotelCard />);

  const DynamicMap = dynamic(() => import("src/entities/Map/Map"), {
    ssr: false,
  });

  return (
    <>
      <div className={clsx(styles.hotels, "windowWidth")}>
        <div className={styles.hotels__headerWrap}>
          <Header />
        </div>
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
});
