"use client";

// react
import { memo } from "react";

// mantine
import { Select } from "@mantine/core";

// styles
import styles from "./SearchObject.module.scss";
import { HOTELS_SECTION } from "src/shared/api/apollo/hotel";
import { getClient } from "src/shared/api/apollo/apollo";
import { useSuspenseQuery } from "@apollo/client/react/hooks/useSuspenseQuery";

export default memo(function SearchObject() {
  // const { hotels } = useSuspenseQuery(
  //   HOTELS_SECTION
  // );

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
