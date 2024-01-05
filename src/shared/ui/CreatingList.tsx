import { Fragment } from "react";

export default function CreatingList(
  repeatNum: number,
  content: React.ReactNode
) {
  return Array.from(Array(repeatNum).keys()).map((el, i) => (
    <Fragment key={el + i}>{content}</Fragment>
  ));
}
