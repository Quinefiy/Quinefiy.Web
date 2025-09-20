"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function useHasLoadedBefore() {
  const pathname = usePathname();
  const [hasLoadedBefore, setHasLoadedBefore] = useState(false);

  useEffect(() => {
    const key = `hasLoadedOnce:${pathname}`;

    const checkFlag = () => {
      if (sessionStorage.getItem(key)) {
        setHasLoadedBefore(true);
      } else {
        sessionStorage.setItem(key, "true");
        setHasLoadedBefore(false);
      }
    };

    checkFlag(); // run once when mounted

    document.addEventListener("visibilitychange", checkFlag);
    return () => document.removeEventListener("visibilitychange", checkFlag);
  }, [pathname]);

  return hasLoadedBefore;
}
