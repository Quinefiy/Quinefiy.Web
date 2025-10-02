import api from "@/lib/api"

export async function getHomePageData() {
  return await api.get("/home-page?populate[hero][populate]=*&populate[partners][populate]=*&populate[softwareProducts][populate][products][populate]=*&populate[ourServices][populate][services][populate]=icon&populate[pricing][populate][pricingPlans][populate]=benefits&populate[ourCaseStudies][populate][case_studies][populate]=*&populate[startYourJourney][populate]=*").then(res => res.data.data)
}
export async function getAboutUsPageData() {
  return await api.get("/about-us-page?populate[AboutUsHero][populate]=*&populate[manageBusiness][populate][ceo][populate]=*&populate[manageBusiness][populate][vision][populate]=*&populate[team][populate][teamMemebers][populate]=photo&populate[ourUsers][populate][usersQuotes][populate]=*&populate[startYourJourney][populate]=*").then(res => res.data.data)
}
export async function getServicesPageData() {
  return await api.get("/services-page?populate[servicesHero][populate]=*&populate[services][populate]=*&populate[softwareProducts][populate][products][populate]=*&populate[startYourJourney][populate]=*").then(res => res.data.data)
}
export async function getProjectsPageData() {
  return await api.get("/projects-page?populate[projectsHero][populate]=*&populate[projects][populate]=*&populate[startYourJourney][populate]=*").then(res => res.data.data)
}
export async function getPricingPageData() {
  return await api.get("/pricing-page?populate[pricingHero][populate]=*&populate[pricingPlans][populate][pricingPlans][populate]=benefits&populate[startYourJourney][populate]=*").then(res => res.data.data)
}
export async function getContactUSPageData() {
  return await api.get("/contact-us-page?populate[getInTouch][populate][contactInfo][populate]=icon&populate[startYourJourney][populate]=*").then(res => res.data.data)
}
export async function getCaseStudiesPageData() {
  return await api.get("/case-studies-page?populate[caseStudies][populate][case_studies][populate]=*&populate[startYourJourney][populate]=*").then(res => res.data.data)
}
export async function fetchCaseStudyBySlug(slug: string) {
  return await api.get(`/case-studies?filters[slug][$eq]=${slug}&populate=*`).then(res => res.data.data[0])
}
export async function fetchFooterData() {
  return await api.get("/footer?populate[footer][populate][media][populate]=*").then(res => res.data.data.footer)
}


 

