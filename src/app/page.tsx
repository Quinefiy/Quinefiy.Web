
import HomePageContent from "./HomePageContent";
import { HydrationBoundary,dehydrate} from "@tanstack/react-query";
import {getQueryClient} from "@/utils/getQueryClient";
import Particles from "@/components/HeroBackground/Particles";
import { getHomePageData } from "@/utils/fetchData";

export default async function Home() {
    const queryClient = getQueryClient();
  
    await queryClient.prefetchQuery({queryKey:['home-page-content'],queryFn: getHomePageData})
    const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="relative w-full overflow-hidden">

      <Particles count={140} />
      <HomePageContent />
      </div>
    </HydrationBoundary>
   
  );
}
