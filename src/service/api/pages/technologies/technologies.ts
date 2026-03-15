import { fetchJson } from '../../fetchJson';
import type { FrontendPageData } from '../../../../types/pages';
import type { BackendPageData } from '../../../../types/pages';
import type { MobilePageData } from '../../../../types/pages';
import type { CloudDevOpsPageData } from '../../../../types/pages';
import type { DatabasePageData } from '../../../../types/pages';


export async function getFrontendTechnologiesData(): Promise<FrontendPageData> {
  return fetchJson<FrontendPageData>(
    '/data/pages/technologies/frontend.json'
  );
}


export async function getBackendTechnologiesData(): Promise<BackendPageData> {
  return fetchJson<BackendPageData>(
    '/data/pages/technologies/backend.json'
  );
}

export async function getMobileTechnologiesData(): Promise<MobilePageData> {
  return fetchJson<MobilePageData>(
    '/data/pages/technologies/mobile.json'
  );
}



export async function getCloudDevOpsTechnologiesData(): Promise<CloudDevOpsPageData> {
  return fetchJson<CloudDevOpsPageData>(
    '/data/pages/technologies/cloudDevOps.json'
  );
}


export async function getDatabaseTechnologiesData(): Promise<DatabasePageData> {
  return fetchJson<DatabasePageData>(
    '/data/pages/technologies/database.json'
  );
}