"use client";

// next
import { memo } from "react";
import FilterServices from "src/features/FilterServices/FilterServices";
import PriceScale from "src/entities/PriceScale/PriceScale";

// features
import Filtering from "src/features/Filtering/Filtering";

// shared
import FilterSorting from "../FilterSorting/FilterSorting";

export default memo(function FilteringItems() {
  return (
    <>
      <FilterSorting />
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
              "Кемпинг",
              "Кемпинг",
              "Кемпинг",
              "Кемпинг",
              "Кемпинг",
              "Кемпинг",
              "Кемпинг",
              "Кемпинг",
            ],
          },
        ]}
      />
      <FilterServices />
      <Filtering
        filteringInfo={[
          {
            title: "Количество звёзд",
            items: ["5", "4", "3", "2", "1", "Без звезд"],
          },
        ]}
        isNeedBtnMore={false}
      />
      <PriceScale />
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
              "Все включено",
              "Все включено",
              "Все включено",
              "Все включено",
              "Все включено",
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
