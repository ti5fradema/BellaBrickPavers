export interface AlbumPhoto {
  id: string
  url: string
  caption: string
}

export interface Album {
  id: string
  title: string
  description: string
  coverUrl: string
  location: string
  year: string
  photos: AlbumPhoto[]
}

export interface EquipmentItem {
  id: string
  name: string
  description: string
  dailyRate: string
  imageUrl: string
}

export interface ExperienceItem {
  id: string
  title: string
  detail: string
}

export interface QuoteRequest {
  id: string
  name: string
  email: string
  phone: string
  address: string
  projectType: string
  message: string
  createdAt: string
}

export interface SiteContent {
  brandName: string
  tagline: string
  heroTitle: string
  heroSubtitle: string
  heroImage: string
  aboutTitle: string
  aboutText: string
  aboutImage: string
  experienceTitle: string
  experienceIntro: string
  experience: ExperienceItem[]
  equipmentTitle: string
  equipmentIntro: string
  equipment: EquipmentItem[]
  contactPhone: string
  contactEmail: string
  contactAddress: string
  serviceArea: string
  quoteIntro: string
  albums: Album[]
  quoteRequests: QuoteRequest[]
  adminPassword: string
}

export type ContentUpdater = (prev: SiteContent) => SiteContent
