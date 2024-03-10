import { Flex, NumberInput } from "@mantine/core";
import styles from "./PriceScale.module.scss";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function PriceScale() {
  const [fromPriceValue, setFromPriceValue] = useState<string | number>("500");
  const [toPriceValue, setToPriceValue] = useState<string | number>("50000");

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

  return (
    <section className={clsx(styles.priceCost, "filter_mb")}>
      <h5>Ценовая категория</h5>
      <Flex columnGap={20} mt={15}>
        <NumberInput
          label={"от"}
          value={fromPriceValue}
          onChange={(e) => setFromPriceValue(+e)}
          radius="md"
          size="md"
          suffix={"₽"}
          hideControls
          thousandSeparator={" "}
        />
        <NumberInput
          label={"до"}
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
  );
}
