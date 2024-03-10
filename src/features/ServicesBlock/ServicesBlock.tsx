// react
import { memo } from "react";

// entities
import Service from "src/entities/Service/Service";

// styles
import styles from "./ServicesBlock.module.scss";

export default memo(function ServicesBlock() {
  return (
    <ul className={styles.servicesBlock__list}>
      {/* <li className={styles.servicesBlock__item}>
        <Service />
      </li>
      <li className={styles.servicesBlock__item}>
        <Service />
      </li>
      <li className={styles.servicesBlock__item}>
        <Service />
      </li> */}
    </ul>
  );
});
