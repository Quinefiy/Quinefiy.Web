import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/utils/getQueryClient";
import ProjectsPageContent from "./ProjectsPageContent";
import { getProjectsPageContent } from "@/utils/fetchData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore Quinefiy’s Projects",
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
    title: "Quinefiy Projects | AI & Software Development",
    description:
      "Take a look at our projects",
    url: "https://quinefiy.com/projects",
    siteName: "Quinefiy",
    images: [
      {
        url: "https://quinefiy.com/projects-og.jpg",
        alt: "Quinefiy Projects",
      },
    ],
    type: "website",
  },
};


export default async function Projects() {
    const queryClient = getQueryClient();

    await queryClient.prefetchQuery({ queryKey: ["projects-page-content"], queryFn: getProjectsPageContent});

    const dehydratedState = dehydrate(queryClient);
    return (
        <HydrationBoundary state={dehydratedState}>
            <ProjectsPageContent />
        </HydrationBoundary>
    );
}

