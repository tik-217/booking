// react next
import { memo } from "react";
import Image from "next/image";

// styles
import styles from "./Advantage.module.scss";

export default memo(function Advantage() {
  return (
    <div className={styles.advantage}>
      <h3>Достоинства</h3>
      <div className={styles.advantage__advantageWrap}>
        <section>
          <Image
            height={50}
            width={50}
            src={"/images/ico/money.svg"}
            alt="money"
          />
          <h4>Низкие цены</h4>
          <p>
            Мы стараемся сохранить для Вас наиболее привлекательную стоимость
            жилья, благодаря гибкому сотрудничеству с владельцами отелей.
          </p>
        </section>
        <section>
          <Image
            height={50}
            width={50}
            src={"/images/ico/hotel.svg"}
            alt="hotel"
          />
          <h4>Большой каталог отелей</h4>
          <p>
            Ежедневно число объектов размещения увеличивается благодаря
            честности и прозрачности нашего сервиса.
          </p>
        </section>
        <section>
          <Image
            height={50}
            width={50}
            src={"/images/ico/advisor.svg"}
            alt="advisor"
          />
          <h4>Достоверные отзывы</h4>
          <p>
            Отзывы помогут узнать, дополнительные сведения об отеле, найти
            достоинства или изъян.
          </p>
        </section>
      </div>
    </div>
  );
});
