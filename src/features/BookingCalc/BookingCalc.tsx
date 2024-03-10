"use client";

// react / next
import { memo, useState } from "react";
import Link from "next/link";

// mantine
import { useForm } from "@mantine/form";
import { Select } from "@mantine/core";
import {
  DatePickerInput,
  DatesProvider,
  DatesRangeValue,
} from "@mantine/dates";

// dayjs
import dayjs from "dayjs";
import "dayjs/locale/ru";

// styles
import styles from "./BookingCalc.module.scss";
import MainButton from "src/shared/ui/MainButton/MainButton";

export default memo(function BookingCalc() {
  const [, setSubmittedValues] = useState("");

  const mantine = useForm({
    initialValues: {
      direction: "Москва",
      checkInOut: [
        new Date(),
        dayjs(new Date()).add(1, "day").toDate(),
      ] as DatesRangeValue,
      guests: "2 гостя",
    },
  });

  return (
    <form
      className={styles.calc}
      onSubmit={mantine.onSubmit((values) =>
        setSubmittedValues(JSON.stringify(values, null, 2))
      )}
    >
      <div className={styles.calc__direction}>
        <Select
          placeholder="Направление"
          label="Направление"
          size="md"
          c="#cdcdcd"
          className={styles.calc__directionInput}
          data={[
            {
              group: "Города",
              items: ["Москва"],
            },
            {
              group: "Отели",
              items: ["FioLeto", "Repin"],
            },
          ]}
          searchable
          {...mantine.getInputProps("direction")}
        />
      </div>
      <div className={styles.calc__datePicker}>
        <DatesProvider
          settings={{
            locale: "ru",
            firstDayOfWeek: 1,
            weekendDays: [0, 6],
            timezone: "UTC",
          }}
        >
          <DatePickerInput
            label="Дата заезда и выезд"
            minDate={new Date()}
            type="range"
            size="md"
            valueFormat="DD MMM YYYY"
            placeholder="Заезд - Выезд"
            c="#cdcdcd"
            className={styles.calc__datePickerInput}
            {...mantine.getInputProps("checkInOut")}
          />
        </DatesProvider>
      </div>
      <div className={styles.calc__guests}>
        <Select
          label="Количество гостей"
          c="#cdcdcd"
          placeholder="Гости"
          className={styles.calc__guestsInput}
          data={["2 гостя", "3 гостя", "4 гостя"]}
          size="md"
          {...mantine.getInputProps("guests")}
        />
      </div>
      <div className={styles.calc__searchHotels}>
        <Link href={"/hotels"}>
          <MainButton btnText={"Подобрать"} />
        </Link>
      </div>
    </form>
  );
});
