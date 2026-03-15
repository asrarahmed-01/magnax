// src/service/api/pages.ts

import { fetchJson } from './fetchJson';
import type { OurProductPageData,SoftwareDevelopmentPageData } from '../../types/pages';
import type { WebMobilePageData } from '../../types/pages';
import type { APIPageData } from '../../types/pages';
import type { ITConsultingPageData } from '../../types/pages';
import type { AgileDevOpsPageData } from '../../types/pages';
import type { KeyProjectsPageData } from '../../types/pages';
import type { ApproachPageData } from '../../types/pages';
import type { AboutPageData } from '../../types/pages';
import type { ClientsData } from '../../types/pages';
import type { FAQData } from '../../types/pages';
import type { HeroData } from '../../types/pages';
import type { ProcessData } from '../../types/pages';
import type { ServicesData } from '../../types/pages';
import type { TestimonialsData } from '../../types/pages';
import type { WhyChooseUsData } from '../../types/pages';

/**
 * Fetch data specifically for the Frontend Technologies page
 */


export async function getOurProductData(): Promise<OurProductPageData> {
  return fetchJson<OurProductPageData>('/data/pages/ourProduct.json');
}

export async function getSoftwareDevelopmentData(): Promise<SoftwareDevelopmentPageData> {
  return fetchJson<SoftwareDevelopmentPageData>(
    '/data/pages/Services/SoftwareDevelopment.json'
  );
}

export async function getWebMobileDevelopmentData(): Promise<WebMobilePageData> {
  return fetchJson<WebMobilePageData>(
    '/data/pages/Services/WebMobileDevelopment.json'
  );
}

export async function getAPIDevelopmentData(): Promise<APIPageData> {
  return fetchJson<APIPageData>('/data/pages/Services/APIDevelopment.json');
}

export async function getITConsultingDigitalData(): Promise<ITConsultingPageData> {
  return fetchJson<ITConsultingPageData>('/data/pages/Services/ITConsultingDigital.json');
}

export async function getAgileDevOpsConsultingData(): Promise<AgileDevOpsPageData> {
  return fetchJson<AgileDevOpsPageData>('/data/pages/Services/AgileDevOpsConsulting.json');
}

export async function getKeyProjectsData(): Promise<KeyProjectsPageData> {
  return fetchJson<KeyProjectsPageData>('/data/pages/keyProjects.json');
}

export async function getApproachData(): Promise<ApproachPageData> {
  return fetchJson<ApproachPageData>('/data/pages/About/Approach.json');
}

export async function getAboutData(): Promise<AboutPageData> {
  return fetchJson<AboutPageData>('/data/pages/HomePage/About.json');
}

export async function getClientsData(): Promise<ClientsData> {
  return fetchJson<ClientsData>('/data/pages/HomePage/Clients.json');
}

export async function getFAQData(): Promise<FAQData> {
  return fetchJson<FAQData>('/data/pages/HomePage/FAQ.json');
}

export async function getHeroData(): Promise<HeroData> {
  return fetchJson<HeroData>('/data/pages/HomePage/Hero.json');
}

export async function getProcessData(): Promise<ProcessData> {
  return fetchJson<ProcessData>('/data/pages/HomePage/Process.json');
}

export async function getServicesData(): Promise<ServicesData> {
  return fetchJson<ServicesData>('/data/pages/HomePage/Services.json');
}

export async function getTestimonialsData(): Promise<TestimonialsData> {
  return fetchJson<TestimonialsData>('/data/pages/HomePage/Testimonials.json');
}

export async function getWhyChooseUsData(): Promise<WhyChooseUsData> {
  return fetchJson<WhyChooseUsData>('/data/pages/HomePage/WhyChooseUs.json');
}