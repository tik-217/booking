"use client";

// react next
import { Fragment, memo, useEffect, useState } from "react";

// mantine
import { Checkbox } from "@mantine/core";

// styles
import styles from "./Filtering.module.scss";
import { IFilteringProps } from "./Filtering.types";
import UseBtnShowMore from "src/shared/hooks/UseBtnShowMore/UseBtnShowMore";
import { useAppSelector } from "src/shared/store/hooks";
import { selectMaxFiltListElem } from "src/shared/store/selectors";

export default memo(function Filtering({ filteringInfo }: IFilteringProps) {
  const [checkboxVal, setCheckboxVal] = useState<string[]>([]);
  const [openFiltList, setOpenFiltList] = useState(false);
  const maxFiltListElem = useAppSelector(selectMaxFiltListElem);

  let title = "";
  let items: string[] = [];

  useEffect(() => {
    // erases fields if more than one item is selected
    if (checkboxVal.length >= 2) {
      setCheckboxVal([checkboxVal[1]]);
    }
  }, [checkboxVal]);

  if (filteringInfo) {
    title = filteringInfo[0].title;
    items = filteringInfo[0].items as string[];
  }

  function handlerIsOpenFiltList(propsOpenFiltList: boolean) {
    setOpenFiltList(propsOpenFiltList);
  }

  function printFilter(filterItemsList: string[]) {
    // displays the filtering list
    return (
      <>
        <ul>
          {filterItemsList.map((el, i) => {
            if (!openFiltList && i >= maxFiltListElem) {
              return <Fragment key={el + i}></Fragment>;
            }

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
        </ul>
        <UseBtnShowMore
          ulItemsList={filterItemsList}
          openFiltList={openFiltList}
          handlerIsOpenFiltList={handlerIsOpenFiltList}
        />
      </>
    );
  }

  return (
    <div className={styles.filtering}>
      <section className={"filter_mb"}>
        <h5>{title}</h5>
        {printFilter(items)}
      </section>
    </div>
  );
});
