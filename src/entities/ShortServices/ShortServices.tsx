// react
import { memo } from "react";

// clsx
import clsx from "clsx";

// styles
import styles from "./ShortServices.module.scss";

// img
import Pool from "/public/ico/pool.svg";

export default memo(function ShortServices() {
  return (
    <div className={clsx(styles.shortServices, "windowWidth")}>
      <h3 className={styles.shortServices__title}>Удобства в отеле</h3>
      <ul className={styles.shortServices__list}>
        <li className={styles.shortServices__item}>
          <Pool className={styles.shortServices__ico} />
          <span className={styles.shortServices__name}>pool</span>
        </li>
        <li className={styles.shortServices__item}>
          <Pool className={styles.shortServices__ico} />
          <span className={styles.shortServices__name}>pool</span>
        </li>
        <li className={styles.shortServices__item}>
          <Pool className={styles.shortServices__ico} />
          <span className={styles.shortServices__name}>pool</span>
        </li>
        <li className={styles.shortServices__item}>
          <Pool className={styles.shortServices__ico} />
          <span className={styles.shortServices__name}>pool</span>
        </li>
        <li className={styles.shortServices__item}>
          <Pool className={styles.shortServices__ico} />
          <span className={styles.shortServices__name}>pool</span>
        </li>
      </ul>
    </div>
  );
});
