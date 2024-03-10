import { Checkbox } from "@mantine/core";
import { useEffect, useState } from "react";
import styles from "./FilterSorting.module.scss";

export default function FilterSorting() {
  const [checkboxVal, setCheckboxVal] = useState<string[]>([]);

  const sorting = [
    "По популярности",
    "Сначала дешевые",
    "Сначала дорогие",
    "С высокой оценкой",
  ];

  if (checkboxVal.length >= 2) {
    setCheckboxVal([checkboxVal[1]]);
  }

  useEffect(() => {
    if (checkboxVal.length !== 1) return;

    
  }, [checkboxVal]);

  return (
    <div className={styles.filterSorting}>
      <section className={"filter_mb"}>
        <h5>Сортировка</h5>
        <ul>
          <Checkbox.Group value={checkboxVal} onChange={setCheckboxVal}>
            {sorting.map((el, i) => {
              return (
                <li key={el + i} data-id={el + i}>
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
      </section>
    </div>
  );
}
