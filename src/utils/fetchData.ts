import api from "@/lib/api"

export async function getHeroSectionData() {
  return await api.get("/hero-sections?populate=*").then(res => res.data.data[0]);

};

export async function fetchServices() {
  const res = await api.get("/services?populate=*");
  return res.data.data; // Strapi usually returns data inside `data`
}

export async function getProducts() {
  return await api.get("/software-sections?populate[items][populate]=icon").then(res => res.data.data[0])
}

export async function getPricingPlans() {
  return await api.get('/pricing-plans?populate=*').then(res => res.data.data)
}

export async function getCaseStudies() {
  return await api.get("/case-studies?populate[items][populate]=icon").then(res => res.data.data[0])
}

export async function getAboutUsPageContent() {
  return await api.get("/about-us-pages?populate[mainImage][populate]=*&populate[OurTeam][populate]=photo&populate[teamHighlight][populate]=*&populate[usersQuotes][populate]=*").then(res => res.data.data[0])
}
export async function getServicesPageContent() {
  return await api.get("/service-pages?populate[items][populate]=*").then(res => res.data.data)
}
export async function getProjectsPageContent() {
  return await api.get("/project-pages?populate[items][populate]=*").then(res => res.data.data[0])
}
export async function getContactUSPageContent() {
  return await api.get("/contact-us-pages?populate=*").then(res => res.data.data[0])
}

export async function getCaseStudyBySlug(id:string) {
  return await api.get('').then(res => res.data.data)
}

