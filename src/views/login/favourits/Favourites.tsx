// entities
import HeaderProfile from "src/entities/HeaderProfile/HeaderProfile";
import ShortCard from "src/entities/ShortCard/ShortCard";

// clsx
import clsx from "clsx";

// styles
import styles from "./Favourites.module.scss";

export default function Favourites() {
  return (
    <>
      <HeaderProfile />
      <div className={clsx(styles.favourites, "windowWidth")}>
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
      </div>
    </>
  );
}
