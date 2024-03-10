"use client";

// react
import { memo, useState } from "react";

// mantine
import { Input, MantineProvider, Textarea, createTheme } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IMaskInput } from "react-imask";

// shared
import MainButton from "src/shared/ui/MainButton/MainButton";

// clsx
import clsx from "clsx";

// styles
import styles from "./contacts.module.scss";

export default memo(function Contacts() {
  const [, setSupportValue] = useState<ISupport>();

  const support = useForm({
    initialValues: {
      phone: "",
      email: "",
      question: "",
    } as ISupport,
    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Некорректное значение",
    },
  });

  const theme = createTheme({
    components: {
      InputWrapper: Input.Wrapper.extend({
        defaultProps: {
          inputWrapperOrder: ["input", "label", "error"],
        },
      }),
    },
  });

  return (
    <main className={clsx(styles.contacts, "windowWidth")}>
      <div className={styles.contacts__question}>
        <h4 className={styles.contacts__title}>Задать вопрос</h4>
        <form
          onSubmit={support.onSubmit((values) => setSupportValue(values))}
          className={styles.contacts__form}
        >
          <MantineProvider theme={theme}>
            <div className={styles.contacts__firstSection}>
              <Input
                variant="default"
                placeholder="Ваш email"
                size="md"
                radius={"md"}
                {...support.getInputProps("email")}
              />
              <Input
                variant="default"
                placeholder="Телефон"
                radius={"md"}
                component={IMaskInput}
                mask="+7 (000) 000-00-00"
                size="md"
                {...support.getInputProps("phone")}
              />
            </div>
            <Textarea
              variant="default"
              placeholder="Вопрос или претензия"
              autosize
              className={styles.contacts__questionInput}
              radius={"md"}
              size="md"
              minRows={4}
              {...support.getInputProps("question")}
            />
            <MainButton btnText="Отправить" bgTheme="blue" colorTheme="black" />
          </MantineProvider>
        </form>
      </div>
      <div className={styles.contacts__description}>
        <p>
          * Служба поддержки работает круглосуточно. Ответ поступит к вам в
          течении 3-ех рабочих дней.
        </p>
      </div>
    </main>
  );
});
