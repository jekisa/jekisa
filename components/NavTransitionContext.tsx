"use client";
import { createContext, useContext, useRef, useState, useCallback } from "react";

type TransitionState = "idle" | "entering" | "leaving";

interface NavTransitionContextValue {
  state: TransitionState;
  navigateTo: (hash: string) => void;
}

const NavTransitionContext = createContext<NavTransitionContextValue>({
  state: "idle",
  navigateTo: () => {},
});

export function useNavTransition() {
  return useContext(NavTransitionContext);
}

export default function NavTransitionProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<TransitionState>("idle");
  const stateRef = useRef(state);
  stateRef.current = state;

  const navigateTo = useCallback((hash: string) => {
    if (stateRef.current !== "idle") return;

    setState("entering");

    setTimeout(() => {
      // Disable smooth scroll so instant jump works
      document.documentElement.classList.add("no-smooth-scroll");

      const id = hash.replace("#", "");
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "instant" as ScrollBehavior });
      } else {
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      }

      document.documentElement.classList.remove("no-smooth-scroll");

      setState("leaving");

      setTimeout(() => {
        setState("idle");
      }, 500);
    }, 450);
  }, []);

  return (
    <NavTransitionContext.Provider value={{ state, navigateTo }}>
      {children}
    </NavTransitionContext.Provider>
  );
}
