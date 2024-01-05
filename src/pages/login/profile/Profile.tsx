// next
import Image from "next/image";

// entities
import HeaderProfile from "src/entities/HeaderProfile/HeaderProfile";

// mantine
import { Button } from "@mantine/core";

// clsx
import clsx from "clsx";

// styles
import styles from "./Profile.module.scss";

export default function Profile() {
  return (
    <>
      <HeaderProfile />
      <div className={clsx(styles.persona, "windowWidth")}>
        <div className={styles.persona__wrap}>
          <div className={styles.shortInfo}>
            <div className={styles.shortInfo__wrap}>
              <div className={styles.shortInfo__image}>
                <div className={styles.shortInfo__ico}>
                  <Image
                    height={30}
                    width={30}
                    src={"/images/ico/bear.svg"}
                    alt="logo"
                    className={styles.shortInfo__logo}
                  />
                </div>
                <Button variant="transparent" size="xs" p={0}>
                  Изменить фото
                </Button>
              </div>
              <div className={styles.shortInfo__nameBlock}>
                <span className={styles.shortInfo__name}>Имя</span>
                <span className={styles.shortInfo__surname}>Фамилия</span>
              </div>
            </div>
          </div>
          <div className={styles.metadata}>
            <div className={styles.metadata__wrap}>
              <div className={styles.metadata__item}>
                <h5 className={styles.metadata__title}>Город</h5>
                <span className={styles.metadata__text}>Анапа</span>
                <Button
                  variant="transparent"
                  size="xs"
                  p={0}
                  className={styles.metadata__edit}
                >
                  Изменить
                </Button>
              </div>
              <div className={styles.metadata__item}>
                <h5 className={styles.metadata__title}>Почта</h5>
                <span className={styles.metadata__text}>
                  tigran.gabulyan.2001@mail.ru
                </span>
                <Button
                  variant="transparent"
                  size="xs"
                  p={0}
                  className={styles.metadata__edit}
                >
                  Изменить
                </Button>
              </div>
              <div className={styles.metadata__item}>
                <h5 className={styles.metadata__title}>Пол</h5>
                <span className={styles.metadata__text}>Мужской</span>
                <Button
                  variant="transparent"
                  size="xs"
                  p={0}
                  className={styles.metadata__edit}
                >
                  Изменить
                </Button>
              </div>
              <div className={styles.metadata__item}>
                <h5 className={styles.metadata__title}>Номер телефона</h5>
                <span className={styles.metadata__text}>8-(918)-022-09-01</span>
                <Button
                  variant="transparent"
                  size="xs"
                  p={0}
                  className={styles.metadata__edit}
                >
                  Изменить
                </Button>
              </div>
              <div className={styles.metadata__item}>
                <h5 className={styles.metadata__title}>Дата рождения</h5>
                <span className={styles.metadata__text}>01 января 2001 г.</span>
                <Button
                  variant="transparent"
                  size="xs"
                  p={0}
                  className={styles.metadata__edit}
                >
                  Изменить
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
