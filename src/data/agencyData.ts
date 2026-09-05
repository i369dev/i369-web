import { ServicePillar, CaseStudy, VentureItem } from '../types';

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

export const TRUSTED_CLIENTS = [
  { name: 'Aitken Spence', role: 'Conglomerate & Hospitality' },
  { name: 'Hilton Yala', role: 'Luxury Wilderness Resort' },
  { name: 'The Pekoe Trail', role: 'Official Digital Partner' },
  { name: 'Coco Organic', role: 'Sena Mills Sustainable Foods' },
  { name: 'Balinese Spas', role: 'Wellness & Healing Retreats' },
  { name: 'Life Balance Wellness', role: 'Holistic Health Centers' }
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
