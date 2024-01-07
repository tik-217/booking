"use client";

// next
import Link from "next/link";
import { useRouter } from "next/navigation";

// styles
import styles from "./notFound.module.scss";

// shared
import BtnArrow from "src/shared/ui/BtnArrow/BtnArrow";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className={styles.notFound}>
      <h2 className={styles.notFound__title}>
        <Link href="/">Vroom Room</Link>
      </h2>
      <div className={styles.notFound__main}>
        <div className={styles.notFound__errorInfo}>
          <h1 className={styles.notFound__errorCode}>404</h1>
          <p className={styles.notFound__errorDescription}>
            Страница не найдена
          </p>
        </div>
        <div className={styles.notFound__btns}>
          <Link href="/">
            <BtnArrow btnText="На главную" />
          </Link>
          <Link href="/" onClick={() => router.back()}>
            <BtnArrow btnText="Назад" arrowVector="left" />
          </Link>
        </div>
      </div>
    </main>
  );
}
