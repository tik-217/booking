"use client";

// react next
import { memo } from "react";
import Link from "next/link";

// mantine
import { Title, Text, Button, Container, Group } from "@mantine/core";

// styles
import styles from "./notFound.module.scss";

export default memo(function NotFound() {
  return (
    <Container className={styles.root}>
      <div className={styles.root__label}>404</div>
      <Title className={styles.root__title}>Вы нашли тайное место.</Title>
      <Text
        c="dimmed"
        size="lg"
        ta="center"
        className={styles.root__description}
      >
        К сожалению, это всего лишь страница 404. Возможно, вы неправильно ввели
        адрес или страница была перемещена на другой URL.
      </Text>
      <Group justify="center">
        <Link href={"/"}>
          <Button variant="subtle" size="md">
            Верни меня на домашнюю страницу
          </Button>
        </Link>
      </Group>
    </Container>
  );
});
