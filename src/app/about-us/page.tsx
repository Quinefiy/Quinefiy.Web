import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/utils/getQueryClient";
import AboutUsPageContent from "./AboutUsPageContent";
import { getAboutUsPageContent } from "@/utils/fetchData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about Quinefiy — a software development company Developing next generation AI management solutions, cloud services, and IT consulting for global businesses.",
  keywords: [
    "Quinefiy",
    "about Quinefiy",
    "software development company",
    "AI solutions company",
    "IT consulting Egypt",
    "cloud services provider",
  ],
  openGraph: {
    title: "About Quinefiy | Software Development & AI Experts",
    description:
      "Quinefiy delivers software development, AI solutions, and IT services with a focus on innovation and digital transformation.",
    url: "https://quinefiy.com/about-us",
    siteName: "Quinefiy",
    images: [
      {
        url: "https://quinefiy.com/about-og.jpg",
        alt: "About Quinefiy",
      },
    ],
    type: "website",
  },
};


export default async function AboutUs() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({ queryKey: ["about-us-page-content"], queryFn: getAboutUsPageContent});

  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydratedState}>
      <AboutUsPageContent />
    </HydrationBoundary>
  );
}