"use client";

// react
import { memo } from "react";

// mantine
import { Badge, Button } from "@mantine/core";

// shared
import { useAppDispatch } from "src/shared/store/hooks";

// styles
import styles from "./SearchResult.module.scss";
import { setOpenMap } from "src/shared/store/reducers";

export default memo(function SearchResult() {
  const dispatch = useAppDispatch();

  return (
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
  );
});
