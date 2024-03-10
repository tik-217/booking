// react
import { memo } from "react";

// styles
import styles from "./Review.module.scss";

interface IReviews {
  avatar: string;
  name: string;
  rating: number;
  reviews: string;
  date: string;
  country: string;
}

export default memo(function Review(props: IReviews) {
  return (
    <div className={styles.review}>
      <div className={styles.review__header}>
        <div className={styles.review__persona}>
          <div className={styles.review__icon}>
            {props.name && props.name[0].toUpperCase()}
          </div>
          <div className={styles.review__nameBlock}>
            <span className={styles.review__username}>{props.name}</span>
            <span className={styles.review__country}>{props.country}</span>
          </div>
        </div>
        <div className={styles.review__index}>
          <span className={styles.review__indexNumber}>{props.rating}</span>
        </div>
      </div>
      <p className={styles.review__message}>{props.reviews}</p>
      <time className={styles.review__date}>{props.date}</time>
    </div>
  );
});
