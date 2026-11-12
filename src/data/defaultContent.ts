import type { SiteContent } from '../types'

const uid = () => crypto.randomUUID()
const L = (en: string, pt: string) => ({ en, pt })

export const DEFAULT_CONTENT: SiteContent = {
  brandName: 'Bella Brick Pavers',
  tagline: L(
    'Precision paving. Heavy equipment ready.',
    'Pavimentação precisa. Equipamentos pesados prontos.',
  ),
  heroTitle: L(
    'Driveways, patios & hardscapes built to last',
    'Driveways, pátios e hardscapes feitos para durar',
  ),
  heroSubtitle: L(
    'Family-run paving company with years of field experience — now also renting construction equipment for jobs of every size.',
    'Empresa familiar de pavimentação com anos de experiência — agora também alugando equipamentos de construção para obras de todos os portes.',
  ),
  heroImage:
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80',
  aboutTitle: L(
    'Craftsmanship rooted in experience',
    'Mão de obra baseada em experiência',
  ),
  aboutText: L(
    'Bella Brick Pavers started as a hands-on brick and paver business and grew into a trusted partner for residential and commercial hardscape projects across our service area. Every job is measured, prepped, and finished with the same care — clean lines, solid base work, and finishes that hold up season after season.\n\nToday we also rent machinery so contractors and homeowners can move dirt, compact bases, and finish sites without buying equipment they only need for a few days.',
    'A Bella Brick Pavers começou como uma empresa prática de tijolos e pavers e cresceu até se tornar uma parceira de confiança em projetos residenciais e comerciais de hardscape. Cada obra é medida, preparada e finalizada com o mesmo cuidado — linhas limpas, base firme e acabamentos que aguentam o tempo.\n\nHoje também alugamos maquinário para que empreiteiros e proprietários possam movimentar terra, compactar bases e finalizar obras sem comprar equipamentos que só usam por poucos dias.',
  ),
  aboutImage:
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80',
  experienceTitle: L('Years in the trade', 'Anos no ofício'),
  experienceIntro: L(
    'From interlocking driveways to commercial walkways and equipment support on active job sites — this is the work we know.',
    'De driveways intertravados a calçadas comerciais e suporte com equipamentos em obras ativas — este é o trabalho que dominamos.',
  ),
  experience: [
    {
      id: uid(),
      title: L('Interlocking pavers', 'Pavers intertravados'),
      detail: L(
        'Driveways, patios, pool decks, and walkways with proper base, edge restraint, and joint sand.',
        'Driveways, pátios, decks de piscina e caminhos com base correta, contenção lateral e areia de junta.',
      ),
    },
    {
      id: uid(),
      title: L('Brick & hardscape', 'Tijolo e hardscape'),
      detail: L(
        'Retaining walls, steps, borders, and custom layouts matched to the architecture of the property.',
        'Muros de contenção, degraus, bordas e layouts sob medida alinhados à arquitetura do imóvel.',
      ),
    },
    {
      id: uid(),
      title: L('Site prep & grading', 'Preparação e nivelamento'),
      detail: L(
        'Base excavation, compaction, and drainage planning so the finished surface stays level and durable.',
        'Escavação de base, compactação e planejamento de drenagem para a superfície final ficar nivelada e durável.',
      ),
    },
    {
      id: uid(),
      title: L('Equipment rental', 'Aluguel de equipamentos'),
      detail: L(
        'Skid steers, compactors, and related machines available by the day for contractors and DIYs with a plan.',
        'Minicarregadeiras, compactadores e máquinas relacionadas disponíveis por dia para empreiteiros e quem tem um projeto em mãos.',
      ),
    },
  ],
  equipmentTitle: L('Equipment rental', 'Aluguel de equipamentos'),
  equipmentIntro: L(
    'Need a machine for a weekend pour or a week-long remodel? Browse what we rent and request availability on the quote form.',
    'Precisa de uma máquina para um final de semana ou uma reforma de uma semana? Veja o que alugamos e peça disponibilidade no formulário de orçamento.',
  ),
  equipment: [
    {
      id: uid(),
      name: L('Skid steer', 'Minicarregadeira'),
      description: L(
        'Ideal for moving material, clearing pads, and loading trucks on tight sites.',
        'Ideal para mover material, limpar áreas e carregar caminhões em espaços apertados.',
      ),
      dailyRate: L('From $350/day', 'A partir de US$ 350/dia'),
      imageUrl:
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: uid(),
      name: L('Plate compactor', 'Compactador de placa'),
      description: L(
        'Essential for locking paver bases and compacting gravel before install.',
        'Essencial para travar a base dos pavers e compactar brita antes da instalação.',
      ),
      dailyRate: L('From $75/day', 'A partir de US$ 75/dia'),
      imageUrl:
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: uid(),
      name: L('Mini excavator', 'Mini escavadeira'),
      description: L(
        'Dig trenches, set grades, and remove old concrete without tearing up the yard.',
        'Abre valas, acerta níveis e remove concreto antigo sem destruir o jardim.',
      ),
      dailyRate: L('From $400/day', 'A partir de US$ 400/dia'),
      imageUrl:
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=80',
    },
  ],
  contactPhone: '(555) 014-8820',
  contactEmail: 'hello@bellabrickpavers.com',
  contactAddress: L(
    'Serving homeowners & contractors across the local metro area',
    'Atendendo residências e empreiteiros na região metropolitana local',
  ),
  serviceArea: L(
    'Residential & commercial — USA',
    'Residencial e comercial — EUA',
  ),
  quoteIntro: L(
    'Tell us about your project or equipment need. We review every request and follow up with an estimate.',
    'Conte sobre seu projeto ou necessidade de equipamento. Analisamos cada pedido e retornamos com um orçamento.',
  ),
  albums: [
    {
      id: uid(),
      title: L('Herringbone driveway', 'Driveway em espinha de peixe'),
      description: L(
        'Full driveway rebuild with charcoal herringbone pavers and concrete border.',
        'Reconstrução completa do driveway com pavers charcoal em espinha de peixe e borda de concreto.',
      ),
      coverUrl:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      location: L('Suburban residence', 'Residência suburbana'),
      year: '2024',
      photos: [
        {
          id: uid(),
          url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
          caption: L('Finished driveway', 'Driveway finalizado'),
        },
        {
          id: uid(),
          url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80',
          caption: L('Approach detail', 'Detalhe da entrada'),
        },
      ],
    },
    {
      id: uid(),
      title: L('Backyard patio set', 'Pátio de fundo'),
      description: L(
        'Entertaining patio with seating walls and matching steps.',
        'Pátio para convivência com muros de assento e degraus combinando.',
      ),
      coverUrl:
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      location: L('Private backyard', 'Quintal particular'),
      year: '2023',
      photos: [
        {
          id: uid(),
          url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80',
          caption: L('Patio overview', 'Visão geral do pátio'),
        },
        {
          id: uid(),
          url: 'https://images.unsplash.com/photo-1600573472591-ee6981cf35b6?auto=format&fit=crop&w=1400&q=80',
          caption: L('Evening view', 'Vista noturna'),
        },
      ],
    },
    {
      id: uid(),
      title: L('Commercial walkway', 'Calçada comercial'),
      description: L(
        'High-traffic walkway with slip-resistant finish and clean transitions.',
        'Calçada de alto tráfego com acabamento antiderrapante e transições limpas.',
      ),
      coverUrl:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      location: L('Office park', 'Conjunto comercial'),
      year: '2025',
      photos: [
        {
          id: uid(),
          url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
          caption: L('Front entrance path', 'Caminho da entrada principal'),
        },
      ],
    },
  ],
  quoteRequests: [],
  adminPassword: 'bella2026',
}

export const STORAGE_KEY = 'bella-brick-pavers-content-v2'
export const AUTH_KEY = 'bella-brick-pavers-auth'
