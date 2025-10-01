"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function useHasLoadedBefore() {
  const pathname = usePathname();
  const [hasLoadedBefore, setHasLoadedBefore] = useState(false);

  useEffect(() => {
    const key = `hasLoadedOnce:${pathname}`;
    const alreadyLoaded = sessionStorage.getItem(key) === "true";

    if (alreadyLoaded) {
      setHasLoadedBefore(true);
      console.log("yes", key);
    } else {
      sessionStorage.setItem(key, "true");
      setHasLoadedBefore(false);
      console.log("no", key);
    }
  }, [pathname]);

  return hasLoadedBefore;
}
