// react
import { memo } from "react";

// clsx
import clsx from "clsx";

// mantine
import { Button } from "@mantine/core";

// styles
import styles from "./MainButton.module.scss";

export default memo(function MainButton({
  btnText,
  bgTheme,
  colorTheme,
}: {
  btnText: string;
  bgTheme?: "blue";
  colorTheme?: "black";
}) {
  return (
    <Button
      size="md"
      type="button"
      className={clsx(
        styles.button,
        bgTheme === "blue" ? styles.button_blue : "",
        colorTheme === "black" ? styles.button_colorBlack : ""
      )}
    >
      {btnText}
    </Button>
  );
});
