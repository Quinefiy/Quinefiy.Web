import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/utils/getQueryClient";
import CaseStudyPageContent from "./CaseStudyPageContent";
import { fetchCaseStudyBySlug } from "@/utils/fetchData";
// import { Metadata } from "next";
// import { getCaseStudyBySlug } from "@/utils/fetchData";

// export async function generateMetadata(
//   { params }: { params: { slug: string } }
// ): Promise<Metadata> {
//   const { slug } = params;

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_STRAPI_UR}/case-studies?filters[slug][$eq]=${slug}&populate=*`,
//     { cache: "no-store" }
//   );

//   const data = await res.json();
//   const caseStudy = data.data[0];

//   if (!caseStudy) {
//     return {
//       title: "Case Study Not Found | Quinefiy",
//       description: "The case study you are looking for does not exist.",
//     };
//   }

//   return {
//     title: `${caseStudy.title} | Case Study | Quinefiy`,
//     description:
//       caseStudy.excerpt ||
//       caseStudy.summary ||
//       "Discover how Quinefiy helped businesses with AI, software development, and IT solutions.",
//     openGraph: {
//       title: `${caseStudy.title} | Quinefiy Case Study`,
//       description: caseStudy.excerpt || caseStudy.summary,
//       // url: `https://quinefiy.com/case-studies/${slug}`,
//       siteName: "Quinefiy",
//       // images: [
//       //   {
//       //     url: caseStudy.image || "https://quinefiy.com/case-studies-og.jpg",
//       //     alt: caseStudy.title,
//       //   },
//       // ],
//       type: "article",
//     },
//   };
// }

// export async function generateMetadata(
//   { params }: { params: { slug: string } }
// ): Promise<Metadata> {
//   const { slug } = params;

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_STRAPI_URL}/case-studies?filters[slug][$eq]=${slug}&populate=*`,
//     { cache: "no-store" }
//   );

//   const data = await res.json();
//   const caseStudy = data.data[0];

//   // if (!caseStudy) {
//   //   return {
//   //     title: "Case Study Not Found | Quinefiy",
//   //     description: "The case study you are looking for does not exist.",
//   //   };
//   // }

//   return {
//     // title: `${caseStudy.title} | Case Study | Quinefiy`,
//     // description:
//     //   caseStudy.excerpt ||
//     //   caseStudy.summary ||
//     //   "Discover how Quinefiy helped businesses with AI, software development, and IT solutions.",
//     // openGraph: {
//     //   title: `${caseStudy.title} | Quinefiy Case Study`,
//     //   description: caseStudy.excerpt || caseStudy.summary,
//     //   // url: `https://quinefiy.com/case-studies/${slug}`,
//     //   siteName: "Quinefiy",
//     //   // images: [
//     //   //   {
//     //   //     url: caseStudy.image || "https://quinefiy.com/case-studies-og.jpg",
//     //   //     alt: caseStudy.title,
//     //   //   },
//     //   // ],
//     //   type: "article",
//     // },
//   };
// }


export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["case-study", slug],
    queryFn: () => fetchCaseStudyBySlug(slug),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <CaseStudyPageContent slug={slug} />
    </HydrationBoundary>
  );
}
