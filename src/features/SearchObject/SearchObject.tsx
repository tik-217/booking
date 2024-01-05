"use client";

// mantine
import { Select } from "@mantine/core";

// styles
import styles from "./SearchObject.module.scss";
import { memo } from "react";

export default memo(function SearchObject() {
  return (
    <div className={styles.searchCity}>
      <Select
        label="Направление"
        c="#cdcdcd"
        placeholder="Город или отель"
        searchable
        size="md"
        radius="md"
        className={styles.directionSelect}
        data={[
          {
            group: "Города",
            items: ["Москва"],
          },
          {
            group: "Отели",
            items: ["FioLeto", "Repin"],
          },
        ]}
      />
    </div>
  );
});
