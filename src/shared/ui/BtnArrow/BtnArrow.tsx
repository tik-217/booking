"use client";

// react
import { memo } from "react";

// mantine
import { Button } from "@mantine/core";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

// styles
import styles from "./BtnArrow.module.scss";

export default memo(function BtnArrow({
  btnText,
  arrowVector = "right",
}: {
  btnText: string;
  arrowVector?: string;
}) {
  return (
    <Button
      size="md"
      radius={"md"}
      type="submit"
      className={styles.button}
      rightSection={arrowVector === "right" ? <IconArrowRight size={14} /> : ""}
      leftSection={arrowVector === "left" ? <IconArrowLeft size={14} /> : ""}
    >
      {btnText}
    </Button>
  );
});
