"use client";
import { useNavTransition } from "./NavTransitionContext";
import styles from "./PageTransitionOverlay.module.css";

export default function PageTransitionOverlay() {
  const { state } = useNavTransition();

  return (
    <div
      className={`${styles.overlay} ${styles[state]}`}
      aria-hidden="true"
    />
  );
}
