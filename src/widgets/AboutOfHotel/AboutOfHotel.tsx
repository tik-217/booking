// react next
import { memo } from "react";
import Link from "next/link";
import Image from "next/image";

// clsx
import clsx from "clsx";

// styles
import styles from "./AboutOfHotel.module.scss";

export default memo(function AboutOfHotel() {
  return (
    <div className={styles.aboutOfHotel}>
      <div className={clsx(styles.aboutOfHotel__wrap, "windowWidth")}>
        <h3 className={styles.aboutOfHotel__title}>Описание</h3>
        <div className={styles.aboutOfHotel__mainBlock}>
          <p className={styles.aboutOfHotel__text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
            possimus accusantium alias expedita, consequatur quae dolorum
            praesentium quas modi hic dolorem necessitatibus in, quisquam dolor
            exercitationem optio magni cupiditate numquam?
          </p>
          <div className={styles.aboutOfHotel__map}>
            <Link
              href="https://yandex.ru/maps/?um=constructor%3A587807d28e39fe45a94bc4dc7172b7552034acf3d58c5f11661e45f12ac07fd8&amp;source=constructorStatic"
              target="_blank"
            >
              <Image
                src={
                  "https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A587807d28e39fe45a94bc4dc7172b7552034acf3d58c5f11661e45f12ac07fd8&amp;width=300&amp;height=200&amp;lang=ru_RU"
                }
                alt="map"
                quality={100}
                width={300}
                height={300}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});
