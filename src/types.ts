export type Lang = 'en' | 'pt'

export interface LocalizedString {
  en: string
  pt: string
}

export interface AlbumPhoto {
  id: string
  url: string
  caption: LocalizedString
}

export interface Album {
  id: string
  title: LocalizedString
  description: LocalizedString
  coverUrl: string
  location: LocalizedString
  year: string
  photos: AlbumPhoto[]
}

export interface EquipmentItem {
  id: string
  name: LocalizedString
  description: LocalizedString
  dailyRate: LocalizedString
  imageUrl: string
}

export interface ExperienceItem {
  id: string
  title: LocalizedString
  detail: LocalizedString
}

export interface QuoteRequest {
  id: string
  name: string
  email: string
  phone: string
  address: string
  projectType: string
  message: string
  lang: Lang
  createdAt: string
}

export interface SiteContent {
  brandName: string
  tagline: LocalizedString
  heroTitle: LocalizedString
  heroSubtitle: LocalizedString
  heroImage: string
  aboutTitle: LocalizedString
  aboutText: LocalizedString
  aboutImage: string
  experienceTitle: LocalizedString
  experienceIntro: LocalizedString
  experience: ExperienceItem[]
  equipmentTitle: LocalizedString
  equipmentIntro: LocalizedString
  equipment: EquipmentItem[]
  contactPhone: string
  contactEmail: string
  contactAddress: LocalizedString
  serviceArea: LocalizedString
  quoteIntro: LocalizedString
  albums: Album[]
  quoteRequests: QuoteRequest[]
  adminPassword: string
}

export type ContentUpdater = (prev: SiteContent) => SiteContent
