// react
import { memo } from "react";

// styles
import styles from "./Review.module.scss";

export default memo(function Review() {
  return (
    <div className={styles.review}>
      <div className={styles.review__header}>
        <div className={styles.review__persona}>
          <div className={styles.review__icon}>S</div>
          <div className={styles.review__nameBlock}>
            <span className={styles.review__username}>Sergey</span>
            <span className={styles.review__country}>RUSSIA 🇷🇺</span>
          </div>
        </div>
        <div className={styles.review__index}>
          <span className={styles.review__indexNumber}>7</span>
        </div>
      </div>
      <p className={styles.review__message}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis rem
        non reprehenderit sint sed, iure cupiditate tempore aliquam enim
        voluptatum, exercitationem, velit aspernatur veniam nobis dicta unde
        nulla dolorem. Deleniti?
      </p>
      <time className={styles.review__date}>19.08.2021</time>
    </div>
  );
});
