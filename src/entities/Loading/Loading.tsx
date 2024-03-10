import { IconLoader2 } from "@tabler/icons-react";

import styles from "./Loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <IconLoader2 className={styles.loading__ico} />
    </div>
  );
}
