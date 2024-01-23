"use client";

// react next
import { memo, useEffect, useState } from "react";

// mantine
import { Checkbox, Flex, NumberInput } from "@mantine/core";

// styles
import styles from "./Filtering.module.scss";

export default memo(function Filtering({
  filteringInfo,
  isNeedBtnMore = true,
  filteringInfoNested,
  isNested,
  markOne,
  priceScale,
}: IFilteringProps) {
  const [isOpenBtnMore, setIsOpenBtnMore] = useState(false);
  const [checkboxVal, setCheckboxVal] = useState<string[]>([]);
  const [fromPriceValue, setFromPriceValue] = useState<string | number>("500");
  const [toPriceValue, setToPriceValue] = useState<string | number>("50000");

  let title = "";
  let items: string[] = [];
  let nestedTitle = "";
  let nestedItems: IFilteringInfo[] = [];
  const maxListElem = 5;

  useEffect(() => {
    // erases fields if more than one item is selected
    if (checkboxVal.length >= 2) {
      setCheckboxVal([checkboxVal[1]]);
    }
  }, [checkboxVal]);

  useEffect(() => {
    if (fromPriceValue > toPriceValue) {
      setToPriceValue(+fromPriceValue);
    }
    // eslint-disable-next-line
  }, [fromPriceValue]);

  useEffect(() => {
    if (toPriceValue < fromPriceValue) {
      setFromPriceValue(+toPriceValue);
    }
    // eslint-disable-next-line
  }, [toPriceValue]);

  if (filteringInfo) {
    title = filteringInfo[0].title;
    items = filteringInfo[0].items as string[];
  }

  if (filteringInfoNested) {
    nestedTitle = filteringInfoNested[0].title;
    nestedItems = filteringInfoNested[0].subTitles;
  }

  function printFilterList(items: IFilteringListItems) {
    // displays the list items
    return items.map((el, i) => {
      if (isNeedBtnMore && !isOpenBtnMore && i >= maxListElem) return;

      return (
        <li key={title + el + i}>
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
    });
  }

  function printFilter(filterItemsList: IFilteringListItems) {
    // displays the filtering list
    return (
      <>
        <ul>
          {!!markOne ? (
            <Checkbox.Group value={checkboxVal} onChange={setCheckboxVal}>
              {printFilterList(filterItemsList)}
            </Checkbox.Group>
          ) : (
            <>{printFilterList(filterItemsList)}</>
          )}
        </ul>
        {buttonShowMore(filterItemsList && filterItemsList)}
      </>
    );
  }

  function buttonShowMore(filteringNestedItems?: IFilteringListItems) {
    // the more less button
    // it is not shown if the isNeedBtnMore variable is set and the filtering list is less than or equal to 5
    let filterItemsList: IFilteringListItems = items;

    if (filteringNestedItems) filterItemsList = filteringNestedItems;

    const conditionShowBtnMore =
      isNeedBtnMore && filterItemsList.length > maxListElem;

    return (
      conditionShowBtnMore && (
        <p
          onClick={() => setIsOpenBtnMore(!isOpenBtnMore)}
          className={styles.filtering__openBtnMore}
        >
          {isOpenBtnMore ? <>меньше</> : <>больше</>}
        </p>
      )
    );
  }

  return (
    <div className={styles.filtering}>
      {!isNested ? (
        <section>
          <h5>{title}</h5>
          {printFilter(items)}
        </section>
      ) : (
        <>
          <h5>{nestedTitle}</h5>
          {nestedItems.map((el, i) => (
            <section key={el.title + i}>
              <h6>{el.title}</h6>
              {printFilter(el.items)}
            </section>
          ))}
        </>
      )}
      {priceScale && (
        <section className={styles.filtering__priceCost}>
          <h5>Ценовая категория</h5>
          <Flex columnGap={20} mt={15}>
            <NumberInput
              radius="md"
              size="md"
              description={"от"}
              suffix={"₽"}
              hideControls
              thousandSeparator={" "}
              value={fromPriceValue}
              onChange={(e) => setFromPriceValue(+e)}
            />
            <NumberInput
              description={"до"}
              value={toPriceValue}
              onChange={(e) => setToPriceValue(+e)}
              radius="md"
              size="md"
              suffix={"₽"}
              hideControls
              thousandSeparator={" "}
            />
          </Flex>
        </section>
      )}
    </div>
  );
});
