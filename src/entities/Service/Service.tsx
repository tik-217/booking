// react
import { memo } from "react";

// styles
import styles from "./Service.module.scss";

// img
import Pool from "/public/ico/pool.svg";

export default memo(function Service(props: { servName: string }) {
  return (
    <div className={styles.service}>
      <div className={styles.service__ico}>
        <Pool />
      </div>
      <span className={styles.service__servicesName}>{props.servName}</span>
    </div>
  );
});
