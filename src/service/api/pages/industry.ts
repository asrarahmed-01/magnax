import { fetchJson } from '../fetchJson';
import type { IndustryPageData } from '../../../types';


export async function getIndustryPageData(): Promise<IndustryPageData> {
  return fetchJson<IndustryPageData>('/data/pages/Industries/IndustryPage1.json');
}

export async function getIndustryPage2Data(): Promise<IndustryPageData> {
  return fetchJson<IndustryPageData>('/data/pages/Industries/IndustryPage2.json');
}

export async function getIndustryPage3Data(): Promise<IndustryPageData> {
  return fetchJson<IndustryPageData>('/data/pages/Industries/IndustryPage3.json');
}

export async function getIndustryPage4Data(): Promise<IndustryPageData> {
  return fetchJson<IndustryPageData>('/data/pages/Industries/IndustryPage4.json');
}

export async function getIndustryPage5Data(): Promise<IndustryPageData> {
  return fetchJson<IndustryPageData>('/data/pages/Industries/IndustryPage5.json');
}