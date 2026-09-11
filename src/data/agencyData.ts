import { ServicePillar, CaseStudy, VentureItem, TeamMember } from '../types';

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'tourism-marketing',
    number: '01',
    icon: '🏔️',
    title: 'Tourism & Destination Marketing',
    tagline: 'Turn your destination into a story people want to book.',
    description: 'Strategic digital roadmaps, experiential storytelling, and community-first campaigns for tourism boards, eco-resorts, and hospitality brands across Sri Lanka and beyond.',
    points: [
      'Destination management & strategic digital roadmaps',
      'Crisis management and real-time community engagement',
      'Slow travel & experiential marketing campaigns',
      'Cultural heritage and eco-tourism storytelling'
    ],
    featuredClient: 'The Pekoe Trail Organization',
    accentColor: 'teal',
    tags: ['Eco-Tourism', 'Trail Passes', 'Highland Marketing', 'Community First']
  },
  {
    id: 'software-engineering',
    number: '02',
    icon: '💻',
    title: 'Software Engineering & AdventureTech',
    tagline: 'Build the platform. Ship it fast. Make it feel alive.',
    description: 'Web and mobile apps, booking engines, and location-based gaming platforms built with Flutter, React Native, Firebase, and Gemini AI.',
    points: [
      'High-performance web apps (SPA) and e-commerce platforms',
      'Cross-platform mobile apps (Flutter / React Native)',
      'Location-based mobile gaming & gamified tourism experiences',
      'AI-integrated features powered by Google Firebase, Google Maps & Gemini AI',
      'Business automation, booking engines & partner portals'
    ],
    featuredProject: 'LankaQuests — a location-based AdventureTech gaming platform',
    accentColor: 'pink',
    tags: ['Flutter', 'React Native', 'Firebase', 'Gemini AI', 'GPS Offline']
  },
  {
    id: 'cinematic-media',
    number: '03',
    icon: '🎥',
    title: 'Cinematic Media Production & Visual Identity',
    tagline: 'National Geographic–standard storytelling for brands that deserve better than stock footage.',
    description: '4K commercial videography, aerial drone photography, and brand identity work that makes people stop scrolling and feel the highland atmosphere.',
    points: [
      '4K commercial videography & aerial drone photography',
      'Lifestyle and event coverage',
      'Logo development & brand style guides',
      '3D asset modeling and packaging design',
      'Print collateral & eco-conscious production'
    ],
    featuredProject: 'Ayana Garden Ella Full Cinematic Launch',
    accentColor: 'orange',
    tags: ['4K Cinema', 'DJI Ronin', 'Aerial Drone', 'Brand Identity']
  },
  {
    id: 'digital-operations',
    number: '04',
    icon: '📈',
    title: 'Digital Operations & Performance Marketing',
    tagline: 'Always-on management. Always-on results.',
    description: '24/7 community management, weekly content engines, and precision paid media across Meta, TikTok, and Google Ads.',
    points: [
      '24/7 social media & community management',
      'Strategic content grids across all platforms',
      'Paid performance marketing (Meta, TikTok, Google Ads)',
      'Precision audience targeting & multi-platform optimization'
    ],
    featuredClient: 'Solar Maps (Pvt) Ltd — 40MW+ Renewable Lead Engine',
    accentColor: 'teal',
    tags: ['Meta Ads', 'TikTok Marketing', 'Google Ads', '24/7 Community']
  },
  {
    id: 'printing-production',
    number: '05',
    icon: '🖨️',
    title: 'Printing & Production',
    tagline: 'High-precision commercial print and tactile brand collateral.',
    description: 'High-precision commercial printing and collateral production tailored for corporate, tourism, and highland hospitality brands.',
    points: [
      'Custom Hotel & Restaurant Menus (Waterproof, textured, leatherette & foiled)',
      'Premium Business Cards & Corporate Stationery (Embossed & spot UV)',
      'Custom Die-Cut Vinyl Stickers & Brand Decals',
      'High-Resolution Digital Printing & Rapid Deliverables',
      'Large-Scale Commercial Offset Printing & Packaging'
    ],
    featuredClient: 'Highland Hospitality Collateral & Corporate Packaging',
    accentColor: 'orange',
    tags: ['Hotel Menus', 'Business Cards', 'Stickers', 'Digital Printing', 'Offset Printing']
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'pekoe-trail',
    number: '01',
    title: 'The Pekoe Trail',
    client: 'The Pekoe Trail Organization',
    category: 'Tourism',
    summary: 'Official digital partner for Sri Lanka\'s premier 300km central highlands hiking route — driving end-to-end digital operations, ground-zero community management, and Trail Pass conversions.',
    deliverables: [
      'Official Trail Pass digital booking integration',
      'Interactive stage-by-stage hiking guide architecture',
      'Ground-zero community response system for hiker safety',
      'Highland cinematic social campaigns & documentation'
    ],
    stats: [
      { label: 'Trail Length', value: '300 km' },
      { label: 'Pass Conversion Lift', value: '+340%' },
      { label: 'Active Trail Community', value: '85k+' }
    ],
    impact: 'Established the central highlands as South Asia\'s premier sustainable long-distance walking trail, boosting international hiker traffic and regional homestay livelihoods.',
    accentColor: 'teal',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    quote: {
      text: 'Imaginative369 gave The Pekoe Trail a digital presence worthy of its world-class landscape. Their ground-zero presence in Badulla was irreplaceable.',
      author: 'Operations Directorate',
      role: 'The Pekoe Trail Organization'
    }
  },
  {
    id: 'solar-maps',
    number: '02',
    title: 'Solar Maps (Pvt) Ltd',
    client: 'Solar Maps (Pvt) Ltd',
    category: 'Performance',
    summary: 'Full-scale B2B/B2C social media strategy and lead-generation for 40MW+ renewable energy assets — positioning a technical business as an approachable, trustworthy national brand.',
    deliverables: [
      'Precision enterprise B2B lead generation funnels',
      'Educational clean-energy content series',
      'High-converting interactive solar ROI calculators',
      'Brand positioning & executive thought leadership'
    ],
    stats: [
      { label: 'Clean Energy Pipeline', value: '40MW+' },
      { label: 'Qualified Inquiries', value: '1,200+' },
      { label: 'Cost Per Acquisition', value: '-48%' }
    ],
    impact: 'Transformed complex commercial solar engineering into compelling consumer and B2B narratives, accelerating clean energy adoption across provincial industries.',
    accentColor: 'orange',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'hill-country-tourism',
    number: '03',
    title: 'Hill Country Tourism Bureau',
    client: 'Regional Tourism Directorate',
    category: 'Tourism',
    summary: 'Regional crisis communication and real-time safety verification, including "Green Route" mapping to support tourism recovery across the highlands.',
    deliverables: [
      'Real-time crisis bulletin & verification portal',
      'Interactive "Green Route" Highland safety map',
      'Multilingual traveler reassurance campaign',
      'Provincial hospitality stakeholder coordination'
    ],
    stats: [
      { label: 'Verified Safe Routes', value: '100%' },
      { label: 'Traveler Reach', value: '420k+' },
      { label: 'Recovery Velocity', value: '2.4x' }
    ],
    impact: 'Provided authoritative, transparent updates during weather anomalies, preserving international traveler confidence in Ella, Badulla, and Nuwara Eliya destinations.',
    accentColor: 'teal',
    image: 'https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'ayana-garden-ella',
    number: '04',
    title: 'Ayana Garden Ella',
    client: 'Ayana Hospitality Group',
    category: 'Media',
    summary: 'A full brand launch — cinematic photography and video, a custom SPA web platform, OTA listing setup, and print stationery — delivered as one cohesive package.',
    deliverables: [
      'Ultra-fast custom SPA boutique booking web app',
      'National Geographic-grade dawn drone & interior cinema',
      'Eco-conscious luxury brand identity & menu stationery',
      'Direct booking engine bypassing high OTA commissions'
    ],
    stats: [
      { label: 'Direct Booking Share', value: '68%' },
      { label: 'Occupancy Rate in Q1', value: '94%' },
      { label: 'Average Page Load', value: '0.6s' }
    ],
    impact: 'Positioned Ayana Garden as one of Ella’s most sought-after boutique luxury hideouts within 60 days of launch.',
    accentColor: 'pink',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'the-quest-adventuretech',
    number: '05',
    title: 'The Quest: One Epic Day',
    client: 'Internal Venture / AdventureTech',
    category: 'AdventureTech',
    summary: 'An internal AdventureTech venture combining physical trekking, mobile GPS puzzles, and AI-generated riddles — proof that we build what we pitch.',
    deliverables: [
      'Offline GPS waypoint tracking through jungle deadzones',
      'Gemini AI dynamic riddle generation engine',
      'Real-time team leaderboard & emergency beacon',
      'Highland field testing with 50+ international explorers'
    ],
    stats: [
      { label: 'Hiking Elevation Gain', value: '1,420m' },
      { label: 'Riddles Solved', value: '840+' },
      { label: 'Zero-Signal Uptime', value: '100%' }
    ],
    impact: 'Demonstrated the viability of gamified adventure tourism in Sri Lanka’s rugged highlands, laying the technical foundation for LankaQuests.',
    accentColor: 'orange',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80'
  }
];

export const VENTURES: VentureItem[] = [
  {
    id: 'lankaquests',
    name: 'LankaQuests',
    tagline: 'AdventureTech Real-World Exploration Platform',
    description: 'A real-world mobile gaming and exploration platform combining GPS-based missions, offline-first architecture for the highlands\' dead zones, and an SOS emergency system for hikers.',
    features: [
      'Offline-first geographic routing and vector topo maps',
      'GPS waypoint puzzle triggers and AR cultural checkpoints',
      'Direct SOS satellite/GSM emergency broadcast beacon',
      'Community leaderboard and verified trail badges'
    ],
    techStack: ['Flutter', 'Firebase Offline Sync', 'Gemini AI', 'Mapbox SDK'],
    status: 'Public Beta · Highlands Sector',
    accentColor: 'teal',
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'intothewildlk',
    name: 'IntotheWILDlk',
    tagline: 'Boutique Off-Grid Hospitality Network',
    description: 'A destination network connecting high-income urban travelers directly with off-grid boutique stays, tea bungalows, and wild sanctuaries across Sri Lanka.',
    features: [
      'Curated invitation-only listings for sustainable retreats',
      'Frictionless direct payment and WhatsApp concierge sync',
      'Immersive 360-degree virtual soundscapes and view previews',
      'Local community benefit sharing transparency index'
    ],
    techStack: ['React SPA', 'Stripe Gateway', 'Cloudflare Workers', 'Tailwind'],
    status: 'Live & Scaling',
    accentColor: 'pink',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'inhale-exhale',
    name: 'Inhale Exhale',
    tagline: 'Highland Progressive House Record Label',
    description: 'An independent progressive house record label — producing original soundtracks for our own cinematic campaigns and releasing atmospheric electronic music worldwide.',
    features: [
      'Custom cinematic sound design and campaign scoring',
      'Organic field recordings sampled from Sri Lankan cloud forests',
      'Global distribution across Spotify, Apple Music, Beatport',
      'Highland outdoor sunrise sessions and live sets'
    ],
    techStack: ['Ableton Live Suite', 'Soundcloud API', 'Dolby Atmos Mastering'],
    status: 'Catalog Active · 14 Releases',
    accentColor: 'orange',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80'
  }
];

export interface TrustedClient {
  name: string;
  role?: string;
  logo: string;
}

export const TRUSTED_CLIENTS: TrustedClient[] = [
  {
    name: 'Aitken Spence',
    role: 'Conglomerate & Hospitality',
    logo: `data:image/svg+xml;utf8,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" fill="none">
        <path d="M100 14L128 48H72L100 14Z" stroke="#FFFFFF" stroke-width="3" stroke-linejoin="round"/>
        <path d="M72 48L52 74H148L128 48" stroke="#FFFFFF" stroke-width="2.5" stroke-linejoin="round"/>
        <circle cx="100" cy="44" r="3.5" fill="#00FFFF"/>
        <text x="100" y="98" font-family="'Space Grotesk', system-ui, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="3.5">AITKEN SPENCE</text>
        <text x="100" y="112" font-family="monospace" font-size="7" font-weight="600" fill="#888888" text-anchor="middle" letter-spacing="2">HOTELS &amp; RESORTS</text>
      </svg>
    `)}`
  },
  {
    name: 'Hilton Yala',
    role: 'Luxury Wilderness Resort',
    logo: `data:image/svg+xml;utf8,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" fill="none">
        <rect x="80" y="14" width="40" height="46" rx="4" stroke="#FFFFFF" stroke-width="2.5" fill="none"/>
        <path d="M90 25V49M110 25V49M90 37H110" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
        <circle cx="100" cy="14" r="2.5" fill="#FFFF00"/>
        <text x="100" y="82" font-family="'Cinzel', Georgia, serif" font-size="16" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="4">HILTON</text>
        <text x="100" y="98" font-family="monospace" font-size="7.5" font-weight="600" fill="#888888" text-anchor="middle" letter-spacing="3.5">YALA WILDERNESS</text>
      </svg>
    `)}`
  },
  {
    name: 'The Pekoe Trail',
    role: 'Official Digital Partner',
    logo: `data:image/svg+xml;utf8,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" fill="none">
        <path d="M100 12C85 28 85 46 100 58C115 46 115 28 100 12Z" stroke="#FFFFFF" stroke-width="2.5" fill="none"/>
        <path d="M100 20V52" stroke="#00FFFF" stroke-width="2" stroke-linecap="round"/>
        <path d="M72 58C86 52 114 62 128 56" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
        <text x="100" y="85" font-family="'Space Grotesk', system-ui, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="3.5">THE PEKOE TRAIL</text>
        <text x="100" y="100" font-family="monospace" font-size="7.5" font-weight="500" fill="#888888" text-anchor="middle" letter-spacing="2.5">CEYLON HIGHLANDS</text>
      </svg>
    `)}`
  },
  {
    name: 'Coco Organic',
    role: 'Sena Mills Sustainable Foods',
    logo: `data:image/svg+xml;utf8,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" fill="none">
        <circle cx="100" cy="35" r="22" stroke="#FFFFFF" stroke-width="2" stroke-dasharray="3 2" fill="none"/>
        <path d="M100 20C92 27 92 39 100 47C108 39 108 27 100 20Z" fill="#00FFFF" opacity="0.9"/>
        <path d="M85 36C95 36 105 32 115 32" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
        <text x="100" y="82" font-family="'Space Grotesk', system-ui, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="4">COCO ORGANIC</text>
        <text x="100" y="98" font-family="monospace" font-size="7.5" font-weight="500" fill="#888888" text-anchor="middle" letter-spacing="2">SENA MILLS FOODS</text>
      </svg>
    `)}`
  },
  {
    name: 'Balinese Spas',
    role: 'Wellness & Healing Retreats',
    logo: `data:image/svg+xml;utf8,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" fill="none">
        <path d="M100 16C94 28 88 38 78 46C90 46 96 38 100 30C104 38 110 46 122 46C112 38 106 28 100 16Z" stroke="#FFFFFF" stroke-width="2.5" fill="none"/>
        <circle cx="100" cy="38" r="3.5" fill="#FF00FF"/>
        <path d="M74 48H126" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/>
        <text x="100" y="80" font-family="'Cinzel', Georgia, serif" font-size="14" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="4">BALINESE SPAS</text>
        <text x="100" y="96" font-family="monospace" font-size="7.5" font-weight="500" fill="#888888" text-anchor="middle" letter-spacing="2.5">LUXURY WELLNESS</text>
      </svg>
    `)}`
  },
  {
    name: 'Life Balance Wellness',
    role: 'Holistic Health Centers',
    logo: `data:image/svg+xml;utf8,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" fill="none">
        <ellipse cx="100" cy="46" rx="20" ry="7" stroke="#FFFFFF" stroke-width="2" fill="none"/>
        <ellipse cx="100" cy="34" rx="14" ry="5.5" stroke="#FFFFFF" stroke-width="2" fill="none"/>
        <ellipse cx="100" cy="23" rx="8" ry="4" stroke="#FFFF00" stroke-width="2" fill="none"/>
        <text x="100" y="82" font-family="'Space Grotesk', system-ui, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="3">LIFE BALANCE</text>
        <text x="100" y="98" font-family="monospace" font-size="7.5" font-weight="500" fill="#888888" text-anchor="middle" letter-spacing="2">HEALTH CENTERS</text>
      </svg>
    `)}`
  }
];

export interface PartnerMarqueeItem {
  id: string;
  name: string;
  category: string;
  image: string;
  accentColor: 'teal' | 'pink' | 'orange';
  caseStudyId?: string;
}

export const PARTNER_MARQUEE_ITEMS: PartnerMarqueeItem[] = [
  {
    id: 'pekoe-trail',
    name: 'The Pekoe Trail',
    category: 'Official Digital Partner',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=300&q=80',
    accentColor: 'teal',
    caseStudyId: 'pekoe-trail'
  },
  {
    id: 'solar-maps',
    name: 'Solar Maps (Pvt) Ltd',
    category: '40MW+ Renewable Lead Engine',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=300&q=80',
    accentColor: 'orange',
    caseStudyId: 'solar-maps'
  },
  {
    id: 'ayana-garden',
    name: 'Ayana Garden Ella',
    category: 'Boutique Luxury Hospitality',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=300&q=80',
    accentColor: 'pink',
    caseStudyId: 'ayana-garden-ella'
  },
  {
    id: 'lankaquests',
    name: 'LankaQuests',
    category: 'AdventureTech Gaming Platform',
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=300&q=80',
    accentColor: 'teal'
  },
  {
    id: 'hilton-yala',
    name: 'Hilton Yala',
    category: 'Luxury Wilderness Resort',
    image: 'https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=300&q=80',
    accentColor: 'orange'
  },
  {
    id: 'aitken-spence',
    name: 'Aitken Spence',
    category: 'Conglomerate & Hospitality',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=300&q=80',
    accentColor: 'teal'
  },
  {
    id: 'intothewildlk',
    name: 'IntotheWILDlk',
    category: 'Boutique Off-Grid Network',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=300&q=80',
    accentColor: 'pink'
  },
  {
    id: 'the-quest',
    name: 'The Quest',
    category: 'Highland Adventure Expedition',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=300&q=80',
    accentColor: 'orange',
    caseStudyId: 'the-quest-adventuretech'
  },
  {
    id: 'coco-organic',
    name: 'Coco Organic',
    category: 'Sustainable Agro Brand',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=300&q=80',
    accentColor: 'teal'
  },
  {
    id: 'inhale-exhale',
    name: 'Inhale Exhale',
    category: 'Highland House Music Label',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=300&q=80',
    accentColor: 'pink'
  },
  {
    id: 'balinese-spas',
    name: 'Balinese Spas',
    category: 'Holistic Wellness Retreats',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=300&q=80',
    accentColor: 'orange'
  },
  {
    id: 'hill-country-tourism',
    name: 'Hill Country Tourism',
    category: 'Regional Tourism Directorate',
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=300&q=80',
    accentColor: 'teal',
    caseStudyId: 'hill-country-tourism'
  }
];

export const GROUND_ZERO_ADVANTAGES = [
  {
    id: 'overhead',
    number: '01',
    title: 'Lower Overhead, Better Margins',
    description: 'Regional cost efficiency passed on directly through sharper pricing and faster turnarounds — enterprise-grade craft without Colombo agency bloat.',
    metric: '40%+',
    metricLabel: 'Cost-to-Output Efficiency',
    accentColor: 'teal' as const
  },
  {
    id: 'access',
    number: '02',
    title: 'Real-Time Access',
    description: 'The Hill Country\'s misty tea plantations, ridgelines, trail networks, and eco-tourism assets are minutes away, not a flight or day-long highway haul.',
    metric: '15 Min',
    metricLabel: 'Highland Location Response',
    accentColor: 'pink' as const
  },
  {
    id: 'execution',
    number: '03',
    title: 'On-The-Ground Execution',
    description: 'We shoot, build, and launch where the story actually happens. No guesswork from an air-conditioned tower 200 kilometers away.',
    metric: '100%',
    metricLabel: 'Authentic Field Reality',
    accentColor: 'orange' as const
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'mithila-bandara',
    name: 'Mithila Bhashitha Navarathna Bandara',
    role: 'Founder & Managing Director',
    department: 'Executive Leadership & Creative Direction',
    bio: 'Pioneering regional technology infrastructure, creative direction, and sustainable venture building in Sri Lanka\'s central highlands. Leading the strategic fusion of AdventureTech and destination marketing.',
    accentColor: 'teal',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    tags: ['Strategic Vision', 'Creative Direction', 'Venture Architecture']
  },
  {
    id: 'kavishka-senarath',
    name: 'Kavishka Senarath',
    role: 'Head of Software Engineering',
    department: 'AdventureTech & Platforms',
    bio: 'Architecting offline-first mobile apps, GPS spatial engines, and AI-driven platforms powering LankaQuests, high-performance booking engines, and enterprise web solutions.',
    accentColor: 'pink',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    tags: ['Flutter / Mobile', 'Spatial GPS', 'Cloud Architecture']
  },
  {
    id: 'tharindu-madusanka',
    name: 'Tharindu Madusanka',
    role: 'Director of Cinematic Media & Aerials',
    department: 'Media Production & Visual Identity',
    bio: 'Crafting 4K destination cinema, National Geographic-grade highland expeditions, and high-impact visual identities that capture the raw, misty atmosphere of Sri Lanka.',
    accentColor: 'orange',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    tags: ['4K Cinematography', 'Aerial Drone', 'Atmospheric Grading']
  },
  {
    id: 'sachini-jayasundara',
    name: 'Sachini Jayasundara',
    role: 'Head of Tourism & Growth Strategy',
    department: 'Digital Operations & Performance',
    bio: 'Leading multi-channel digital operations, regional stakeholder partnerships, and data-backed conversion funnels for national trails and luxury eco-resorts.',
    accentColor: 'teal',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    tags: ['Destination Roadmaps', 'Meta & Google Ads', 'Stakeholder Growth']
  },
  {
    id: 'dinuka-perera',
    name: 'Dinuka Perera',
    role: 'Lead Spatial Systems Architect',
    department: 'AdventureTech & GIS Engineering',
    bio: 'Specializing in high-precision terrain mapping, offline topographical navigation, and real-time telemetry processing for high-altitude expeditions and eco-trails.',
    accentColor: 'pink',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    tags: ['GIS Mapping', 'Telemetry Pipeline', 'Highland Topography']
  },
  {
    id: 'anjali-wickramasinghe',
    name: 'Anjali Wickramasinghe',
    role: 'Principal Brand Strategist',
    department: 'Brand Systems & Global Narrative',
    bio: 'Translating rich regional heritage into globally resonant brand identities, strategic communication roadmaps, and international partner campaigns for luxury travel brands.',
    accentColor: 'teal',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    tags: ['Brand Architecture', 'Global Narrative', 'Campaign Strategy']
  },
  {
    id: 'ravindu-silva',
    name: 'Ravindu Silva',
    role: 'Senior Expedition Cinematographer',
    department: 'Cinematic Media & Field Production',
    bio: 'Veteran highland documentarian capturing remote expeditions, microclimate weather shifts, and cultural heritage films across Sri Lanka\'s central massif.',
    accentColor: 'orange',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    tags: ['Field Expeditions', 'High-Speed Cine', 'Color Grading']
  },
  {
    id: 'neluni-fernando',
    name: 'Neluni Fernando',
    role: 'Head of UX & Creative Technologist',
    department: 'Interactive Products & Design Systems',
    bio: 'Bridging sensory aesthetics with rugged digital utilities. Crafting human-centered interfaces for offline outdoor exploration and luxury booking portals.',
    accentColor: 'teal',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    tags: ['Design Systems', 'Creative Tech', 'Adventure UX']
  }
];

