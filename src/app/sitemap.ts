import { MetadataRoute } from "next";
import { getCaseStudies } from "@/utils/fetchData"; 

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "http://localhost:3000"; 

  // Fetch dynamic case studies from your API
  const caseStudies = await getCaseStudies();
  

  // Static pages
  const staticPages = [
    "",
    "/about",
    "/services",
    "/contact",
    "/case-studies",
    "/pricing",
  ];

  // Map static pages
  const staticRoutes = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  
  // Map case study dynamic pages
  const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
  const caseStudyRoutes =
    caseStudies?.items.map((study: any) => ({
      url: `${baseUrl}/case-studies/${slugify(study.title)}-${study.id}`,
      lastModified: caseStudies.updatedAt ? new Date(caseStudies.updatedAt) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9, // higher priority for case studies
    })) || [];

  return [...staticRoutes, ...caseStudyRoutes];
}
