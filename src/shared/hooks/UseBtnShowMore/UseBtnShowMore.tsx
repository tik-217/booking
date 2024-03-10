import { memo } from "react";
import styles from "./UseBtnShowMore.module.scss";
import { useAppSelector } from "src/shared/store/hooks";
import { selectMaxFiltListElem } from "src/shared/store/selectors";

export default memo(function UseBtnShowMore({
  ulItemsList,
  openFiltList,
  handlerIsOpenFiltList,
}: {
  ulItemsList: string[];
  openFiltList: boolean;
  handlerIsOpenFiltList: (propsOpenFiltList: boolean) => void;
}) {
  const maxFiltListElem = useAppSelector(selectMaxFiltListElem);

  return (
    ulItemsList.length > maxFiltListElem && (
      <p
        onClick={() => handlerIsOpenFiltList(!openFiltList)}
        className={styles.btnMore}
      >
        {openFiltList ? <>меньше</> : <>больше</>}
      </p>
    )
  );
});
