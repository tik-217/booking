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
  bgTheme?: "yellow" | "blue";
  colorTheme?: "black";
}) {
  return (
    <Button
      size="md"
      type="submit"
      className={clsx(
        styles.button,
        bgTheme ?? bgTheme === "blue" ? styles.button_blue : "",
        bgTheme ?? bgTheme === "yellow" ? styles.button_yellow : "",
        colorTheme === "black" ? styles.button_colorBlack : ""
      )}
    >
      {btnText}
    </Button>
  );
});
