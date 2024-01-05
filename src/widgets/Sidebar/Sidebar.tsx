// react/next
import { useState } from "react";
import Image from "next/image";

// mantine
import { Button } from "@mantine/core";

// clsx
import clsx from "clsx";

// features
import SearchObject from "src/features/SearchObject/SearchObject";
import FilteringItems from "../../features/FilteringItems/FilteringItems";

// styles
import styles from "./Sidebar.module.scss";

// img
import Close from "/public/images/ico/close.svg";

export default function Sidebar() {
  const [closeFilter, setCloseFilter] = useState(true);

  return (
    <>
      <aside className={styles.sidebar}>
        <div
          className={clsx(
            styles.sidebar__wrap,
            !closeFilter ? styles.sidebar__wrap_active : ""
          )}
        >
          <div className={styles.sidebar__scroll}>
            <div className={styles.sidebar__title}>
              <h2 className={styles.sidebar__subtitle}>Фильтры</h2>
              <Close
                className={styles.sidebar__btnCloseFilt}
                onClick={() => setCloseFilter(true)}
              />
            </div>
            <SearchObject />
            <div className={styles.sidebar__filtering}>
              <FilteringItems />
            </div>
          </div>
        </div>
        <Button
          variant="outline"
          className={styles.sidebar__menuBtn}
          onClick={() => setCloseFilter(false)}
        >
          <Image
            height={20}
            width={20}
            src={"/images/ico/filtering.svg"}
            alt={"filtering"}
            className={styles.sidebar__filteringImage}
          />
        </Button>
      </aside>
    </>
  );
}
