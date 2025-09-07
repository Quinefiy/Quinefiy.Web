"use client";

import { ReactNode } from "react";
import { useIsFetching } from "@tanstack/react-query";
import AnimatedLogo from "@/components/Loader";

interface PageLoaderProps {
  children: ReactNode;
}

export default function PageLoader({ children }: PageLoaderProps) {
  const isFetching = useIsFetching();

  if (isFetching > 0) {
    return <AnimatedLogo />;
  }

  return <>{children}</>;
}
