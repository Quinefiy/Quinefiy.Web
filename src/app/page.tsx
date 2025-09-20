
import HomePageContent from "./HomePageContent";
import { HydrationBoundary,dehydrate} from "@tanstack/react-query";
import {getQueryClient} from "@/utils/getQueryClient";
import { fetchServices, getCaseStudies, getHeroSectionData, getPricingPlans, getProducts } from "@/utils/fetchData";
// import Particles from "@/components/HeroBackground/Particles";

export default async function Home() {
    const queryClient = getQueryClient();
  
    // Prefetch on the server
    await queryClient.prefetchQuery({queryKey:["services"],queryFn: fetchServices});
    await queryClient.prefetchQuery({queryKey:["hero-data"],queryFn: getHeroSectionData});
    await queryClient.prefetchQuery({queryKey:["software-products"],queryFn: getProducts});
    await queryClient.prefetchQuery({queryKey: ["pricing-palns"], queryFn: getPricingPlans});
    await queryClient.prefetchQuery({queryKey: ["cases-studies"], queryFn: getCaseStudies});
    const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="relative w-full overflow-hidden">

      {/* <Particles count={110} /> */}
      <HomePageContent />
      </div>
    </HydrationBoundary>
   
  );
}
