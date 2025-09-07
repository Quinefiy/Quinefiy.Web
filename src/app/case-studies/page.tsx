import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/utils/getQueryClient";
import CaseStudiesPageContent from "./CaseStudiesContent";
import { getCaseStudies } from "@/utils/fetchData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore Quinefiy’s case studies and success stories in software development, AI solutions, IT consulting, and digital transformation for global businesses.",
  keywords: [
    "Quinefiy case studies",
    "software development portfolio",
    "AI project examples",
    "IT consulting case studies",
    "digital transformation success",
  ],
  openGraph: {
    title: "Quinefiy Case Studies | Software & AI Success Stories",
    description:
      "See how Quinefiy helps businesses with AI, software development, and IT consulting through real-world case studies.",
    url: "https://quinefiy.com/case-studies",
    siteName: "Quinefiy",
    images: [
      {
        url: "https://quinefiy.com/case-studies-og.jpg",
        alt: "Quinefiy Case Studies",
      },
    ],
    type: "website",
  },
};


export default async function CaseStudiesPage() {
    const queryClient = getQueryClient();

    await queryClient.prefetchQuery({queryKey: ["cases-studies"], queryFn: getCaseStudies});

    const dehydratedState = dehydrate(queryClient);
    return (
        <HydrationBoundary state={dehydratedState}>
          <CaseStudiesPageContent /> 
        </HydrationBoundary>
    );
}