"use client";

import { useEffect } from "react";
import { useIsFetching } from "@tanstack/react-query";
import AnimatedLogo from "@/components/Loader";
import { initScrollAnimations } from "@/utils/scrollAnimations";

export default function PageWithLoader({ isLoading, children }: { isLoading: boolean; children: React.ReactNode }) {
  const isFetching = useIsFetching();

  useEffect(() => {
    if (!isLoading && isFetching === 0) {
      initScrollAnimations();
    }
  }, [isLoading, isFetching]);

  if (isLoading || isFetching > 0) return <AnimatedLogo />;

  return <>{children}</>;
}
