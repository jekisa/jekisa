"use client";
import { useEffect, useRef } from "react";
import styles from "./Cursor.module.css";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mx = useRef(0);
  const my = useRef(0);
  const rx = useRef(0);
  const ry = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.current = e.clientX;
      my.current = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = mx.current - 6 + "px";
        cursorRef.current.style.top = my.current - 6 + "px";
      }
    };
    document.addEventListener("mousemove", onMove);

    const animate = () => {
      rx.current += (mx.current - rx.current - 18) * 0.12;
      ry.current += (my.current - ry.current - 18) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = rx.current + "px";
        ringRef.current.style.top = ry.current + "px";
      }
      requestAnimationFrame(animate);
    };
    animate();

    const interactables = document.querySelectorAll("a, button, .skill-card, .stat-box");
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (cursorRef.current) cursorRef.current.style.transform = "scale(2.5)";
        if (ringRef.current) ringRef.current.style.transform = "scale(1.5)";
      });
      el.addEventListener("mouseleave", () => {
        if (cursorRef.current) cursorRef.current.style.transform = "scale(1)";
        if (ringRef.current) ringRef.current.style.transform = "scale(1)";
      });
    });

    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div ref={cursorRef} className={styles.cursor} />
      <div ref={ringRef} className={styles.ring} />
    </>
  );
}
