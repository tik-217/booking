// react
import { memo } from "react";

// clsx
import clsx from "clsx";

// styles
import styles from "./HotelPolicy.module.scss";

export default memo(function HotelPolicy() {
  return (
    <div className={clsx(styles.policy, "windowWidth")}>
      <h3 className={styles.policy__title}>Политика отеля</h3>
      <div className={styles.policy__main}>
        <div className={styles.policy__сheckInOut}>
          <h5 className={styles.policy__сheckInOutTitle}>Заселение и выезд</h5>
          <div className={styles.policy__сheckInOutTime}>
            <time>14:00</time>
            <time>12:00</time>
          </div>
        </div>
        <div className={styles.policy__additionalInfo}>
          <h5 className={styles.policy__additionalInfoTitle}>
            Дополнительная информация
          </h5>
          <p className={styles.policy__additionalInfoText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio earum
            dolores sit, quis aliquam expedita sapiente vero quidem iste facilis
            sunt non repellat quo suscipit quos dolor, et eaque corporis!
          </p>
        </div>
      </div>
    </div>
  );
});
