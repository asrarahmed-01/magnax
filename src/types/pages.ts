// src/types/page-data.ts

// ─── Frontend Technologies Page ────────────────────────────────────────
export interface FrontendTech {
  name: string;
  category: string;
  description: string;
  features: string[];
  icon: string;
  gradient: string;
}

export interface Capability {
  icon: string;           // lucide icon name e.g. "Monitor"
  title: string;
  description: string;
}

export interface Project {
  name: string;
  client: string;
  tech: string;
  description: string;
  results: string[];
  image: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface FloatingIcon {
  iconName: string;       // lucide icon name e.g. "Code2"
  delay: string;
  duration: string;
  pos: {
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
  };
}

// ─── The full shape of frontend-page.json ──────────────────────────────
export interface FrontendPageData {
  frontendTech: FrontendTech[];
  capabilities: Capability[];
  projects: Project[];
  testimonials: Testimonial[];
  stats: Stat[];
  floatingIcons: FloatingIcon[];
}

// ─── Optional: if you want to add other pages later ─────────────────────
export interface GenericPageData {
  // ... future shared structure if many pages look similar
}

// Add this below FrontendPageData

export interface BackendTech {
  name: string;
  category: string;
  description: string;
  features: string[];
  icon: string;
}

export interface BackendCapability {
  icon: string;
  title: string;
  description: string;
}

export interface BackendProject {
  name: string;
  client: string;
  tech: string;
  description: string;
  results: string[];
  image: string;
}

export interface BackendTestimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface BackendStat {
  value: string;
  label: string;
}

export interface BackendFloatingIcon {
  iconName: string;
  delay: string;
  duration: string;
  pos: { top?: string; left?: string; bottom?: string; right?: string };
}

export interface BackendPageData {
  backendTech: BackendTech[];
  capabilities: BackendCapability[];
  projects: BackendProject[];
  testimonials: BackendTestimonial[];
  stats: BackendStat[];
  floatingIcons: BackendFloatingIcon[];
}

// Add these interfaces to your existing page-data.ts / pages.ts file

export interface MobileTech {
  name: string;
  category: string;
  description: string;
  features: string[];
  icon: string;
}

export interface MobileCapability {
  icon: string;
  title: string;
  description: string;
}

export interface MobileProject {
  name: string;
  client: string;
  tech: string;
  description: string;
  results: string[];
  image: string;
}

export interface MobileTestimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface MobileStat {
  value: string;
  label: string;
}

export interface MobileFloatingIcon {
  iconName: string;
  delay: string;
  duration: string;
  pos: { top?: string; left?: string; bottom?: string; right?: string };
}

export interface MobileProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface MobilePageData {
  mobileTech: MobileTech[];
  capabilities: MobileCapability[];
  projects: MobileProject[];
  testimonials: MobileTestimonial[];
  stats: MobileStat[];
  floatingIcons: MobileFloatingIcon[];
  processSteps: MobileProcessStep[];
}

// Add these interfaces

export interface CloudTech {
  name: string;
  category: string;
  description: string;
  features: string[];
  icon: string;
}

export interface CloudCapability {
  icon: string;
  title: string;
  description: string;
}

export interface CloudProject {
  name: string;
  client: string;
  tech: string;
  description: string;
  results: string[];
  image: string;
}

export interface CloudTestimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface CloudStat {
  value: string;
  label: string;
}

export interface CloudFloatingIcon {
  iconName: string;
  delay: string;
  duration: string;
  pos: { top?: string; left?: string; bottom?: string; right?: string };
}

export interface CloudLifecycleStep {
  num: string;
  title: string;
  desc: string;
}

export interface CloudDevOpsPageData {
  cloudTech: CloudTech[];
  capabilities: CloudCapability[];
  projects: CloudProject[];
  testimonials: CloudTestimonial[];
  stats: CloudStat[];
  floatingIcons: CloudFloatingIcon[];
  lifecycleSteps: CloudLifecycleStep[];
}

// Add these interfaces

export interface DatabaseTech {
  name: string;
  category: string;
  description: string;
  features: string[];
  icon: string;
}

export interface DatabaseCapability {
  icon: string;
  title: string;
  description: string;
}

export interface DatabaseProject {
  name: string;
  client: string;
  tech: string;
  description: string;
  results: string[];
  image: string;
}

export interface DatabaseTestimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface DatabaseStat {
  value: string;
  label: string;
}

export interface DatabaseFloatingIcon {
  iconName: string;
  delay: string;
  duration: string;
  pos: { top?: string; left?: string; bottom?: string; right?: string };
}

export interface DatabaseArchitectureItem {
  num: string;
  title: string;
  desc: string;
}

export interface DatabasePageData {
  databaseTech: DatabaseTech[];
  capabilities: DatabaseCapability[];
  projects: DatabaseProject[];
  testimonials: DatabaseTestimonial[];
  stats: DatabaseStat[];
  floatingIcons: DatabaseFloatingIcon[];
  architectureItems: DatabaseArchitectureItem[];
}

// Add these interfaces

export interface FeatureItem {
  icon?: string; // optional – if you later add icons to JSON
  text: string;
}

export interface BenefitItem {
  icon?: string;
  title: string;
  desc: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FloatingIconItem {
  iconName: string;
  delay: string;
  duration: string;
  pos: { top?: string; left?: string; bottom?: string; right?: string };
}
export interface WhyAdvantage {
  title: string;
  desc: string;
}

export interface OurProductPageData {
  heroDescription?: string;
  heroInfo?: string[];
  platformInfo?: { title: string; desc: string }[];
  studentFeatures: FeatureItem[];
  teacherFeatures: FeatureItem[];
  parentFeatures: FeatureItem[];
  adminFeatures: FeatureItem[];
  benefits: BenefitItem[];
  testimonials: Testimonial[];
  heroStats: StatItem[];
  floatingIcons: FloatingIconItem[];
  WhyAdvantages: WhyAdvantage[];
}

 export interface TechItem {
  name: string;
  category: string;
}

export interface SoftwareFeature {
  title: string;
  description: string;
  description2: string;
  icon: string;
  size:number; // icon name from lucide-react
}

export interface MvpFeature {
  title: string;
  description: string;
  description2: string;
    icon: string; // icon name from lucide-react
    size?: number; // optional size for the icon, default can be set in the component
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FloatingIcon {
  iconName: string;
  delay: string;
  duration: string;
  pos: { top?: string; left?: string; bottom?: string; right?: string };
}

export interface SoftwareDevelopmentPageData {
  heroDescription?: string;
  techStack: TechItem[];
  softwareFeatures: SoftwareFeature[];
  mvpFeatures: MvpFeature[];
  testimonials: Testimonial[];
  stats: StatItem[];
  floatingIcons: FloatingIcon[];
}

export interface TechItem {
  name: string;
  category: string;
}

export interface WebMobileFeature {
  icon: string;
  title: string;
  description: string;
  description2: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FloatingIcon {
  iconName: string;
  delay: string;
  duration: string;
  pos: { top?: string; left?: string; bottom?: string; right?: string };
}

export interface WebMobilePageData {
  heroDescription?: string;
  stats: StatItem[];
  webTechStack: TechItem[];
  mobileTechStack: TechItem[];
  webFeatures: WebMobileFeature[];
  mobileFeatures: WebMobileFeature[];
  testimonials: Testimonial[];
  floatingIcons: FloatingIcon[];
}

export interface TechItem {
  name: string;
  category: string;
}

export interface APIFeature {
  icon: string;
  title: string;
  description: string;
  description2: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FloatingIcon {
  iconName: string;
  delay: string;
  duration: string;
  pos: { top?: string; left?: string; bottom?: string; right?: string };
}

export interface APIPageData {
  heroDescription?: string;
  stats: StatItem[];
  techStack: TechItem[];
  apiFeatures: APIFeature[];
  testimonials: Testimonial[];
  floatingIcons: FloatingIcon[];
  ctaDescription?: string;
}

export interface PillarItem {
  name: string;
  category: string;
}

export interface ConsultingFeature {
  icon: string;
  title: string;
  description: string;
  description2: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FloatingIcon {
  iconName: string;
  delay: string;
  duration: string;
  pos: { top?: string; left?: string; bottom?: string; right?: string };
}

export interface ITConsultingPageData {
  heroDescription?: string;
  stats: StatItem[];
  consultingAreas: PillarItem[];
  consultingFeatures: ConsultingFeature[];
  transformationPillars: PillarItem[];
  transformationFeatures: ConsultingFeature[];
  processSteps: ProcessStep[];
  testimonials: Testimonial[];
  floatingIcons: FloatingIcon[];
  ctaDescription?: string;
}


export interface PracticeItem {
  name: string;
  category: string;
}

export interface AgileFeature {
  icon: string;
  title: string;
  description: string;
  description2: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FloatingIcon {
  iconName: string;
  delay: string;
  duration: string;
  pos: { top?: string; left?: string; bottom?: string; right?: string };
}

export interface AgileDevOpsPageData {
  heroDescription?: string;
  stats: StatItem[];
  agilePractices: PracticeItem[];
  agileFeatures: AgileFeature[];
  devopsTools: PracticeItem[];
  devopsFeatures: AgileFeature[];
  testimonials: Testimonial[];
  floatingIcons: FloatingIcon[];
  ctaDescription?: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  industry: string;
  icon: string;
  solution: string;
  description: string;
  highlights: string[];
  color: string;
  stats: { value: string; label: string };
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FloatingIcon {
  iconName: string;
  delay: string;
  duration: string;
  pos: { top?: string; left?: string; bottom?: string; right?: string };
}

export interface KeyProjectsPageData {
  heroDescription?: string;
  industries: string[];
  projects: ProjectItem[];
  stats: StatItem[];
  floatingIcons: FloatingIcon[];
  ctaDescription?: string;
}


export interface SectionItem {
  id: string;
  label: string;
  icon: string;
}

export interface PricingModel {
  title: string;
  description: string;
  features: string[];
}

export interface FeatureItem {
  title: string;
  desc: string;
}

export interface PillarItem {
  icon: string;
  title: string;
  desc: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FloatingIcon {
  iconName: string;
  delay: string;
  duration: string;
  pos: { top?: string; left?: string; bottom?: string; right?: string };
}

export interface ApproachPageData {
  heroDescription?: string;
  heroInfo?: string[];
  heroStats: StatItem[];
  sections: SectionItem[];
  startSteps?: { num: string; title: string; desc: string }[];
  pricingModels: PricingModel[];
  pmoIntro?: string;
  pmoFeatures?: FeatureItem[];
  archIntro?: string;
  archAreas?: FeatureItem[];
  partnershipIntro?: string;
  partnershipBenefits?: string[];
  sustainabilityIntro?: string;
  sustainabilityPillars: PillarItem[];
  floatingIcons: FloatingIcon[];
  ctaDescription?: string;
}

export interface StatCard {
  icon: string;
  number: string;
  label: string;
  sublabel: string;
}

export interface AboutPageData {
  subtitle?: string;
  title?: string;
  descriptionLg?: string;
  descriptionSm?: string;
  linkText?: string;
  image?: string;
  stats: StatCard[];
}

export interface ClientItem {
  name: string;
  logo: string;
}

export interface ClientsData {
  subtitle?: string;
  title?: string;
  description?: string;
  clients: ClientItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactLink {
  text: string;
  href: string;
}

export interface FAQData {
  subtitle?: string;
  title?: string;
  description?: string;
  contactLink?: ContactLink;
  faqs: FAQItem[];
}export interface HeroSlide {
  src: string;
  alt: string;
}

export interface BadgeInfo {
  rating: string;
  label: string;
}

export interface HeroData {
  subtitle?: string;
  title?: string;
  description?: string;
  patternImage?: string;
  slides: HeroSlide[];
  badge?: BadgeInfo;
}

export interface ProcessStep {
  icon: string;
  number: string;
  title: string;
  description: string;
}

export interface ProcessData {
  subtitle?: string;
  title?: string;
  description?: string;
  steps: ProcessStep[];
}export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  color: string;
  path: string;
}

export interface ServicesData {
  subtitle?: string;
  title?: string;
  description?: string;
  services: ServiceItem[];
}

export interface TestimonialItem {
  role: string;
  image: string;
  content: string;
  rating: number;
}

export interface TestimonialsData {
  subtitle?: string;
  title?: string;
  testimonials: TestimonialItem[];
}
export interface FeatureItem {
  icon?: string;
  title: string;
  description: string;
}

export interface StatItem {
  number: number;
  suffix: string;
  label: string;
}

export interface WhyChooseUsData {
  subtitle?: string;
  title?: string;
  description?: string;
  features: FeatureItem[];
  stats: StatItem[];
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  features: string[];
}

export interface IndustryPageData {
  heroTitle?: string;
  heroDescription?: string;
  ctaDescription?: string;
  industries: IndustryItem[];
}