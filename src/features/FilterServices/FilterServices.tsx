import { Checkbox } from "@mantine/core";
import React, { Fragment, useState } from "react";
import UseBtnShowMore from "src/shared/hooks/UseBtnShowMore/UseBtnShowMore";
import styles from "./FilterServices.module.scss";
import clsx from "clsx";
import {
  selectIsAllFiltList,
  selectMaxFiltListElem,
} from "src/shared/store/selectors";
import { useAppSelector } from "src/shared/store/hooks";

export default function FilterServices() {
  const [checkboxVal, setCheckboxVal] = useState<string[]>([]);
  const [openFiltHotels, setOpenFiltHotels] = useState(false);
  const [openFiltRooms, setOpenFiltRooms] = useState(false);

  const isAllFiltList = useAppSelector(selectIsAllFiltList);
  const maxFiltListElem = useAppSelector(selectMaxFiltListElem);

  const inTheHotel = [
    "Трансфер",
    "Парковка",
    "Бассейн",
    "Тренажерный зал",
    "Бар или ресторан",
    "Бар или ресторан",
    "Бар или ресторан",
    "Бар или ресторан",
    "Бар или ресторан",
    "Бар или ресторан",
    "Бар или ресторан",
    "Бар или ресторан",
  ];

  const inTheRoom = [
    "Кондиционер",
    "Ванная комната в номере",
    "Кухня",
    "Балкон",
    "Балкон",
    "Балкон",
    "Балкон",
    "Балкон",
    "Балкон",
  ];

  function handlerIsOpenFiltHotels(propsOpenFiltList: boolean) {
    setOpenFiltHotels(propsOpenFiltList);
  }

  function handlerIsOpenFiltRooms(propsOpenFiltList: boolean) {
    setOpenFiltRooms(propsOpenFiltList);
  }

  return (
    <div className={clsx(styles.filterServices, "filter_mb")}>
      <h5>Услуги</h5>
      <section className={styles.filterServices__wrap}>
        <h6 className={styles.filterServices__subTitle}>В отеле</h6>
        <ul className={styles.filterServices__list}>
          <Checkbox.Group value={checkboxVal} onChange={setCheckboxVal}>
            {inTheHotel.map((el, i) => {
              if (!openFiltHotels && i >= maxFiltListElem)
                return <Fragment key={el + i}></Fragment>;

              return (
                <li key={el + i}>
                  <Checkbox
                    size="xs"
                    value={`${el}`}
                    label={el}
                    styles={{
                      input: { cursor: "pointer" },
                      label: { cursor: "pointer" },
                    }}
                  />
                </li>
              );
            })}
          </Checkbox.Group>
        </ul>
        <UseBtnShowMore
          ulItemsList={inTheHotel}
          openFiltList={openFiltHotels}
          handlerIsOpenFiltList={handlerIsOpenFiltHotels}
        />
      </section>
      <section className={styles.filterServices__wrap}>
        <h6 className={styles.filterServices__subTitle}>В номере</h6>
        <ul className={styles.filterServices__list}>
          <Checkbox.Group value={checkboxVal} onChange={setCheckboxVal}>
            {inTheRoom.map((el, i) => {
              if (!openFiltRooms && i >= maxFiltListElem)
                return <Fragment key={el + i}></Fragment>;

              return (
                <li key={el + i} className={styles.filterServices__listItem}>
                  <Checkbox
                    size="xs"
                    value={`${el}`}
                    label={el}
                    styles={{
                      input: { cursor: "pointer" },
                      label: { cursor: "pointer" },
                    }}
                  />
                </li>
              );
            })}
          </Checkbox.Group>
        </ul>
        <UseBtnShowMore
          ulItemsList={inTheHotel}
          openFiltList={openFiltRooms}
          handlerIsOpenFiltList={handlerIsOpenFiltRooms}
        />
      </section>
    </div>
  );
}
