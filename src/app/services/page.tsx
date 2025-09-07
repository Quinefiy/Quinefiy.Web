
import {getProducts, getServicesPageContent } from "@/utils/fetchData";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/utils/getQueryClient";
import ServicesPageContent from "./ServicesPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Quinefiy’s services: AI & Machine Learning, API Development, Cybersecurity, Cloud Services, IT Consulting, Software Testing, and UI/UX Design.",
  keywords: [
    "AI services",
    "machine learning development",
    "API development",
    "cybersecurity company",
    "cloud services",
    "IT consulting",
    "software testing",
    "UI/UX design",
    "Quinefiy services"
  ],
  openGraph: {
    title: "Quinefiy Services | AI & Software Development",
    description:
      "Discover Quinefiy’s digital solutions: AI, cloud, software testing, UI/UX design, cybersecurity, and IT consulting.",
    url: "https://quinefiy.com/services",
    siteName: "Quinefiy",
    images: [
      {
        url: "https://quinefiy.com/services-og.jpg",
        alt: "Quinefiy Services",
      },
    ],
    type: "website",
  },
};


export default async function Services() {

    const queryClient = getQueryClient();
  
    await queryClient.prefetchQuery({ queryKey: ["software-products"], queryFn: getProducts});
    await queryClient.prefetchQuery({ queryKey: ["services-page-content"], queryFn: getServicesPageContent});

    const dehydratedState = dehydrate(queryClient);
    return (
        <HydrationBoundary state={dehydratedState}>
            <ServicesPageContent />
        </HydrationBoundary>
    );
}

