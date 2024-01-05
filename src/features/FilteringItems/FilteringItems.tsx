"use client";

// next
import Image from "next/image";
import { memo } from "react";

// features
import Filtering from "src/entities/Filtering/Filtering";

// shared
import CreatingList from "src/shared/ui/CreatingList";

export default memo(function FilteringItems() {
  const stars = (starsNum: number) =>
    CreatingList(
      starsNum,
      <Image height={10} width={10} src={"/images/ico/star.svg"} alt={"star"} />
    );

  return (
    <>
      <Filtering
        filteringInfo={[
          {
            title: "Сортировка",
            items: [
              "По популярности",
              "Сначала дешевые",
              "Сначала дорогие",
              "С высокой оценкой",
            ],
          },
        ]}
        markOne={true}
      />
      <Filtering
        filteringInfo={[
          {
            title: "Тип размещения",
            items: [
              "Гостиницы",
              "Гостевые дома",
              "Апартаменты, квартиры",
              "Коттеджи, виллы, бунгало",
              "Кемпинг",
            ],
          },
        ]}
      />
      <Filtering
        filteringInfoNested={[
          {
            title: "Услуги",
            subTitles: [
              {
                title: "В отеле",
                items: [
                  "Трансфер",
                  "Парковка",
                  "Бассейн",
                  "Тренажерный зал",
                  "Бар или ресторан",
                ],
              },
              {
                title: "В номере",
                items: [
                  "Кондиционер",
                  "Ванная комната в номере",
                  "Кухня",
                  "Балкон",
                ],
              },
            ],
          },
        ]}
        isNested={true}
      />
      <Filtering
        filteringInfo={[
          {
            title: "Количество звёзд",
            items: [
              stars(5),
              stars(4),
              stars(3),
              stars(2),
              stars(1),
              "Без звезд",
            ],
          },
        ]}
        isNeedBtnMore={false}
      />
      <Filtering priceScale={true} />
      <Filtering
        filteringInfo={[
          {
            title: "Особенности размещения",
            items: ["Можно курить", "Разрешено с животными", "Доп кровать"],
          },
        ]}
      />
      <Filtering
        filteringInfo={[
          {
            title: "Питание",
            items: [
              "Питание не включено",
              "Завтрак включен",
              "Завтрак + обед или ужин включены",
              "Завтрак, обед и ужин включены",
              "Все включено",
            ],
          },
        ]}
      />
      <Filtering
        filteringInfo={[
          {
            title: "Рейтинг",
            items: [
              "9 и больше",
              "8 и больше",
              "7 и больше",
              "6 и больше",
              "5 и больше",
            ],
          },
        ]}
      />
      <Filtering
        filteringInfo={[
          {
            title: "Число комнат",
            items: [
              "1 комната",
              "2 комнаты",
              "3 комнаты",
              "4 комнаты",
              "5 комнат",
              "6 комнат",
            ],
          },
        ]}
        isNeedBtnMore={false}
      />
      <Filtering
        filteringInfo={[
          {
            title: "Тип кроватей",
            items: ["Двуспальная кровать", "Односпальные кровати"],
          },
        ]}
      />
    </>
  );
});
