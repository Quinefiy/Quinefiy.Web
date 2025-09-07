import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/utils/getQueryClient";
import { getContactUSPageContent} from "@/utils/fetchData";
import ContactUsPageContent from "./ContactUsPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Quinefiy for software development, AI & machine learning, cloud services, and IT consulting. Let’s build your digital future together.",
  keywords: [
    "contact Quinefiy",
    "software development contact",
    "AI consulting contact",
    "hire software developers",
    "IT support Egypt",
  ],
  openGraph: {
    title: "Contact Quinefiy | Build Your Digital Future",
    description:
      "Reach out to Quinefiy for AI solutions, software development, and IT consulting. Let’s start your digital journey today.",
    url: "https://quinefiy.com/contact-us",
    siteName: "Quinefiy",
    images: [
      {
        url: "https://quinefiy.com/contact-og.jpg",
        alt: "Contact Quinefiy",
      },
    ],
    type: "website",
  },
};



export default async function ContactUs() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({ queryKey: ["contact-us-page-content"], queryFn: getContactUSPageContent });

  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydratedState}>
      <ContactUsPageContent />
    </HydrationBoundary>
  );
}

