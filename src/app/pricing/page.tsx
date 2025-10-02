import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/utils/getQueryClient";
import PricingPageContent from "./PricingPageContent";
import type { Metadata } from "next";
import { getPricingPageData } from "@/utils/fetchData";

export const metadata: Metadata = {
  title: "Pricing Plans",
  description:
    "Explore Quinefiy’s our Flexible Pricing for Every Business",
  keywords: [
    "Quinefiy Pricing Plans",
    "software development portfolio",
    "AI project examples",
    "IT consulting case studies",
    "digital transformation success",
  ],
  openGraph: {
    title: "Quinefiy Pricing Plans",
    description:
      "See how Flexible our Pricing Plans for Every Business",
    url: "https://quinefiy.com/pricing",
    siteName: "Quinefiy",
    images: [
      {
        url: "https://quinefiy.com/pricing-og.jpg",
        alt: "Quinefiy Pricing Plans",
      },
    ],
    type: "website",
  },
};



export default async function PricingPage() {
    const queryClient = getQueryClient();

    await queryClient.prefetchQuery({queryKey: ["pricing-page-content"], queryFn: getPricingPageData});

    const dehydratedState = dehydrate(queryClient);
    return (
        <HydrationBoundary state={dehydratedState}>
            <PricingPageContent />
        </HydrationBoundary>
    );
}