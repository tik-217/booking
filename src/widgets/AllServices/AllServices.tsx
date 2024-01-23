// react
import { memo } from "react";

// features
import ServicesBlock from "src/features/ServicesBlock/ServicesBlock";

// styles
import styles from "./AllServices.module.scss";

export default memo(function AllServices() {
  return (
    <div className={styles.allServices__servicesBlock}>
      <h5 className={styles.allServices__subTitle}>Общие</h5>
      <ServicesBlock />
    </div>
  );
});
