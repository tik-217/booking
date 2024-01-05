// react
import { memo, useState } from "react";

// mantine
import { Input, MantineProvider, TextInput, createTheme } from "@mantine/core";
import { useForm } from "@mantine/form";

// shared
import MainButton from "src/shared/ui/MainButton/MainButton";

// styles
import styles from "./Mailing.module.scss";

export default memo(function Mailing() {
  const [formValue, setFormValue] = useState<IFormValues>();

  const mailing = useForm({
    initialValues: {
      email: "",
    } as IFormValues,
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
    <div className={styles.mailing}>
      <h3 className={styles.mailing__title}>
        Будьте в курсе привлекательных предложений в нашей email рассылке
      </h3>
      <form
        className={styles.mailing__input}
        onSubmit={mailing.onSubmit((values) => setFormValue(values))}
      >
        <MantineProvider theme={theme}>
          <TextInput
            placeholder="Ваш email"
            c={"#ffffff"}
            size={"sm"}
            radius={"md"}
            rightSection={
              <button type="submit" className={styles.mailing__btnMobile}>
                Подписаться
              </button>
            }
            label={
              formValue?.email &&
              "Успешно! Проверьте почту и подтвердите действия в письме"
            }
            {...mailing.getInputProps("email")}
          />
        </MantineProvider>
        <div className={styles.mailing__btn}>
          <MainButton btnText="Подписаться" bgTheme="blue" />
        </div>
      </form>
    </div>
  );
});
