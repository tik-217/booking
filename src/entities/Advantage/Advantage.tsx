// react next
import { memo } from "react";

// styles
import styles from "./Advantage.module.scss";

// tabler
import {
  IconBrandTripadvisor,
  IconBuildingSkyscraper,
  IconCash,
} from "@tabler/icons-react";

export default memo(function Advantage() {
  return (
    <div className={styles.advantage}>
      <h3 className={styles.advantage__title}>Достоинства</h3>
      <div className={styles.advantage__advantageWrap}>
        <section className={styles.advantage__block}>
          <IconCash className={styles.advantage__blockIco} />
          <h4 className={styles.advantage__blockTitle}>Низкие цены</h4>
          <p className={styles.advantage__blockText}>
            Мы стараемся сохранить для Вас наиболее привлекательную стоимость
            жилья, благодаря гибкому сотрудничеству с владельцами отелей.
          </p>
        </section>
        <section className={styles.advantage__block}>
          <IconBuildingSkyscraper className={styles.advantage__blockIco} />
          <h4 className={styles.advantage__blockTitle}>
            Большой каталог отелей
          </h4>
          <p>
            Ежедневно число объектов размещения увеличивается благодаря
            честности и прозрачности нашего сервиса.
          </p>
        </section>
        <section className={styles.advantage__block}>
          <IconBrandTripadvisor className={styles.advantage__blockIco} />
          <h4 className={styles.advantage__blockTitle}>Достоверные отзывы</h4>
          <p className={styles.advantage__blockText}>
            Отзывы помогут узнать, дополнительные сведения об отеле, найти
            достоинства или изъян.
          </p>
        </section>
      </div>
    </div>
  );
});
