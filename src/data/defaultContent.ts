import type { SiteContent } from '../types'

const uid = () => crypto.randomUUID()

export const DEFAULT_CONTENT: SiteContent = {
  brandName: 'Bella Brick Pavers',
  tagline: 'Precision paving. Heavy equipment ready.',
  heroTitle: 'Driveways, patios & hardscapes built to last',
  heroSubtitle:
    'Family-run paving company with years of field experience — now also renting construction equipment for jobs of every size.',
  heroImage:
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80',
  aboutTitle: 'Craftsmanship rooted in experience',
  aboutText:
    'Bella Brick Pavers started as a hands-on brick and paver business and grew into a trusted partner for residential and commercial hardscape projects across our service area. Every job is measured, prepped, and finished with the same care — clean lines, solid base work, and finishes that hold up season after season.\n\nToday we also rent machinery so contractors and homeowners can move dirt, compact bases, and finish sites without buying equipment they only need for a few days.',
  aboutImage:
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80',
  experienceTitle: 'Years in the trade',
  experienceIntro:
    'From interlocking driveways to commercial walkways and equipment support on active job sites — this is the work we know.',
  experience: [
    {
      id: uid(),
      title: 'Interlocking pavers',
      detail:
        'Driveways, patios, pool decks, and walkways with proper base, edge restraint, and joint sand.',
    },
    {
      id: uid(),
      title: 'Brick & hardscape',
      detail:
        'Retaining walls, steps, borders, and custom layouts matched to the architecture of the property.',
    },
    {
      id: uid(),
      title: 'Site prep & grading',
      detail:
        'Base excavation, compaction, and drainage planning so the finished surface stays level and durable.',
    },
    {
      id: uid(),
      title: 'Equipment rental',
      detail:
        'Skid steers, compactors, and related machines available by the day for contractors and DIYs with a plan.',
    },
  ],
  equipmentTitle: 'Equipment rental',
  equipmentIntro:
    'Need a machine for a weekend pour or a week-long remodel? Browse what we rent and request availability on the quote form.',
  equipment: [
    {
      id: uid(),
      name: 'Skid steer',
      description: 'Ideal for moving material, clearing pads, and loading trucks on tight sites.',
      dailyRate: 'From $350/day',
      imageUrl:
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: uid(),
      name: 'Plate compactor',
      description: 'Essential for locking paver bases and compacting gravel before install.',
      dailyRate: 'From $75/day',
      imageUrl:
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: uid(),
      name: 'Mini excavator',
      description: 'Dig trenches, set grades, and remove old concrete without tearing up the yard.',
      dailyRate: 'From $400/day',
      imageUrl:
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=80',
    },
  ],
  contactPhone: '(555) 014-8820',
  contactEmail: 'hello@bellabrickpavers.com',
  contactAddress: 'Serving homeowners & contractors across the local metro area',
  serviceArea: 'Residential & commercial — USA',
  quoteIntro:
    'Tell us about your project or equipment need. We review every request and follow up with an estimate.',
  albums: [
    {
      id: uid(),
      title: 'Herringbone driveway',
      description: 'Full driveway rebuild with charcoal herringbone pavers and concrete border.',
      coverUrl:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      location: 'Suburban residence',
      year: '2024',
      photos: [
        {
          id: uid(),
          url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
          caption: 'Finished driveway',
        },
        {
          id: uid(),
          url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80',
          caption: 'Approach detail',
        },
      ],
    },
    {
      id: uid(),
      title: 'Backyard patio set',
      description: 'Entertaining patio with seating walls and matching steps.',
      coverUrl:
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      location: 'Private backyard',
      year: '2023',
      photos: [
        {
          id: uid(),
          url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80',
          caption: 'Patio overview',
        },
        {
          id: uid(),
          url: 'https://images.unsplash.com/photo-1600573472591-ee6981cf35b6?auto=format&fit=crop&w=1400&q=80',
          caption: 'Evening view',
        },
      ],
    },
    {
      id: uid(),
      title: 'Commercial walkway',
      description: 'High-traffic walkway with slip-resistant finish and clean transitions.',
      coverUrl:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      location: 'Office park',
      year: '2025',
      photos: [
        {
          id: uid(),
          url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
          caption: 'Front entrance path',
        },
      ],
    },
  ],
  quoteRequests: [],
  adminPassword: 'bella2026',
}

export const STORAGE_KEY = 'bella-brick-pavers-content-v1'
export const AUTH_KEY = 'bella-brick-pavers-auth'
