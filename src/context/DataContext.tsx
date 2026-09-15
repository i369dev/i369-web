import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import {
  SERVICE_PILLARS,
  CASE_STUDIES,
  VENTURES,
  TEAM_MEMBERS,
  TRUSTED_CLIENTS,
  PARTNER_MARQUEE_ITEMS,
  GROUND_ZERO_ADVANTAGES,
  TrustedClient,
  PartnerMarqueeItem,
} from '../data/agencyData';
import { ServicePillar, CaseStudy, VentureItem, TeamMember } from '../types';

export interface SiteContent {
  headerLogoUrl?: string;
  footerLogoUrl?: string;
  heroVideoUrl: string;
  heroVideoPoster: string;
  heroTagline: string;
  heroHeadline: string;
  heroDescription: string;
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
  socialInstagram: string;
  socialLinkedin: string;
  socialYoutube: string;
}

export const DEFAULT_SITE_CONTENT: SiteContent = {
  headerLogoUrl: '',
  footerLogoUrl: '',
  heroVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4',
  heroVideoPoster: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
  heroTagline: 'Strategy to Screen',
  heroHeadline: 'Imaginative 369',
  heroDescription: 'The creative media, digital marketing, and software engineering powerhouse of Sri Lanka’s Hill Country. Turning bold ideas into cinematic stories, high-performing software, and brands that win.',
  contactEmail: 'i369.developer@gmail.com',
  contactPhone: '+94 77 123 4567',
  contactAddress: '03 River Side Road, Badulla, Uva Province, Sri Lanka',
  socialInstagram: 'https://instagram.com/imaginative369',
  socialLinkedin: 'https://linkedin.com/company/imaginative369',
  socialYoutube: 'https://youtube.com',
};

interface DataContextType {
  services: ServicePillar[];
  caseStudies: CaseStudy[];
  ventures: VentureItem[];
  teamMembers: TeamMember[];
  trustedClients: TrustedClient[];
  marqueeItems: PartnerMarqueeItem[];
  siteContent: SiteContent;
  isLoading: boolean;
  isSupabaseConnected: boolean;
  lastSyncTime: Date | null;
  refreshData: () => Promise<void>;
  seedDefaultData: () => Promise<{ success: boolean; message: string }>;

  // Services CRUD
  saveService: (service: ServicePillar) => Promise<{ success: boolean; error?: string }>;
  deleteService: (id: string) => Promise<{ success: boolean; error?: string }>;

  // Case Studies CRUD
  saveCaseStudy: (caseStudy: CaseStudy) => Promise<{ success: boolean; error?: string }>;
  deleteCaseStudy: (id: string) => Promise<{ success: boolean; error?: string }>;

  // Ventures CRUD
  saveVenture: (venture: VentureItem) => Promise<{ success: boolean; error?: string }>;
  deleteVenture: (id: string) => Promise<{ success: boolean; error?: string }>;

  // Team Members CRUD
  saveTeamMember: (member: TeamMember) => Promise<{ success: boolean; error?: string }>;
  deleteTeamMember: (id: string) => Promise<{ success: boolean; error?: string }>;

  // Trusted Clients CRUD
  saveTrustedClient: (client: TrustedClient) => Promise<{ success: boolean; error?: string }>;
  deleteTrustedClient: (name: string) => Promise<{ success: boolean; error?: string }>;

  // Marquee Items CRUD
  saveMarqueeItem: (item: PartnerMarqueeItem) => Promise<{ success: boolean; error?: string }>;
  deleteMarqueeItem: (id: string) => Promise<{ success: boolean; error?: string }>;

  // Site Content CRUD
  saveSiteContent: (content: Partial<SiteContent>) => Promise<{ success: boolean; error?: string }>;
}

const DataContext = createContext<DataContextType | null>(null);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [services, setServices] = useState<ServicePillar[]>(SERVICE_PILLARS);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>(CASE_STUDIES);
  const [ventures, setVentures] = useState<VentureItem[]>(VENTURES);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(TEAM_MEMBERS);
  const [trustedClients, setTrustedClients] = useState<TrustedClient[]>(TRUSTED_CLIENTS);
  const [marqueeItems, setMarqueeItems] = useState<PartnerMarqueeItem[]>(PARTNER_MARQUEE_ITEMS);
  const [siteContent, setSiteContent] = useState<SiteContent>(DEFAULT_SITE_CONTENT);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSupabaseConnected, setIsSupabaseConnected] = useState<boolean>(false);
  const [lastSyncTime, setLastSyncTime] = useState<Date | null>(null);

  // Fetch all collections from Supabase
  const fetchData = useCallback(async () => {
    try {
      // 1. Services
      const { data: servicesData, error: sErr } = await supabase.from('services').select('*').order('number');
      if (!sErr && servicesData && servicesData.length > 0) {
        setServices(servicesData.map(s => ({
          id: s.id,
          number: s.number || '',
          icon: s.icon || '🚀',
          title: s.title,
          tagline: s.tagline || '',
          description: s.description || '',
          points: s.points || [],
          featuredClient: s.featured_client || undefined,
          featuredProject: s.featured_project || undefined,
          accentColor: s.accent_color || 'teal',
          tags: s.tags || [],
        })));
      }

      // 2. Case Studies
      const { data: caseStudiesData, error: cErr } = await supabase.from('case_studies').select('*').order('number');
      if (!cErr && caseStudiesData && caseStudiesData.length > 0) {
        setCaseStudies(caseStudiesData.map(c => ({
          id: c.id,
          number: c.number || '',
          title: c.title,
          client: c.client || '',
          category: c.category || 'General',
          summary: c.summary || '',
          deliverables: c.deliverables || [],
          stats: c.stats || [],
          impact: c.impact || '',
          accentColor: c.accent_color || 'teal',
          image: c.image || '',
          quote: c.quote || undefined,
        })));
      }

      // 3. Ventures
      const { data: venturesData, error: vErr } = await supabase.from('ventures').select('*').order('id');
      if (!vErr && venturesData && venturesData.length > 0) {
        setVentures(venturesData.map(v => ({
          id: v.id,
          name: v.name,
          tagline: v.tagline || '',
          description: v.description || '',
          features: v.features || [],
          techStack: v.tech_stack || [],
          status: v.status || 'Active',
          accentColor: v.accent_color || 'teal',
          image: v.image || '',
        })));
      }

      // 4. Team Members
      const { data: teamData, error: tErr } = await supabase.from('team_members').select('*').order('id');
      if (!tErr && teamData && teamData.length > 0) {
        setTeamMembers(teamData.map(t => ({
          id: t.id,
          name: t.name,
          role: t.role || '',
          department: t.department || '',
          bio: t.bio || '',
          accentColor: t.accent_color || 'teal',
          image: t.image || '',
          tags: t.tags || [],
        })));
      }

      // 5. Trusted Clients
      const { data: clientsData, error: clErr } = await supabase.from('trusted_clients').select('*');
      if (!clErr && clientsData && clientsData.length > 0) {
        setTrustedClients(clientsData.map(cl => ({
          name: cl.name,
          role: cl.role || undefined,
          logo: cl.logo || '',
        })));
      }

      // 6. Marquee Items
      const { data: marqueeData, error: mErr } = await supabase.from('marquee_items').select('*');
      if (!mErr && marqueeData && marqueeData.length > 0) {
        setMarqueeItems(marqueeData.map(m => ({
          id: m.id,
          name: m.name,
          category: m.category || '',
          image: m.image || '',
          accentColor: m.accent_color || 'teal',
          caseStudyId: m.case_study_id || undefined,
        })));
      }

      // 7. Site Content
      const { data: contentData, error: scErr } = await supabase.from('site_content').select('*');
      if (!scErr && contentData && contentData.length > 0) {
        const merged = { ...DEFAULT_SITE_CONTENT };
        contentData.forEach(item => {
          if (item.key in merged) {
            (merged as any)[item.key] = item.value;
          }
        });
        setSiteContent(merged);
      }

      setIsSupabaseConnected(true);
      setLastSyncTime(new Date());
    } catch (err) {
      console.warn('Supabase fetch returned error or tables not yet created. Using fallback data:', err);
      setIsSupabaseConnected(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Initial fetch and Realtime subscription
  useEffect(() => {
    fetchData();

    // Subscribe to Postgres Changes across tables for instant front-end updates
    const channel = supabase
      .channel('supabase_realtime_all')
      .on('postgres_changes', { event: '*', schema: 'public' }, (payload) => {
        console.log('Realtime change received from Supabase:', payload);
        fetchData();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [fetchData]);

  // Seed default data into Supabase if empty or requested
  const seedDefaultData = async (): Promise<{ success: boolean; message: string }> => {
    try {
      setIsLoading(true);

      // Seed Services
      const servicesPayload = SERVICE_PILLARS.map(s => ({
        id: s.id,
        number: s.number,
        icon: s.icon,
        title: s.title,
        tagline: s.tagline,
        description: s.description,
        points: s.points,
        featured_client: s.featuredClient || null,
        featured_project: s.featuredProject || null,
        accent_color: s.accentColor,
        tags: s.tags,
        updated_at: new Date().toISOString(),
      }));
      await supabase.from('services').upsert(servicesPayload, { onConflict: 'id' });

      // Seed Case Studies
      const caseStudiesPayload = CASE_STUDIES.map(c => ({
        id: c.id,
        number: c.number,
        title: c.title,
        client: c.client,
        category: c.category,
        summary: c.summary,
        deliverables: c.deliverables,
        stats: c.stats,
        impact: c.impact,
        accent_color: c.accentColor,
        image: c.image,
        quote: c.quote || null,
        updated_at: new Date().toISOString(),
      }));
      await supabase.from('case_studies').upsert(caseStudiesPayload, { onConflict: 'id' });

      // Seed Ventures
      const venturesPayload = VENTURES.map(v => ({
        id: v.id,
        name: v.name,
        tagline: v.tagline,
        description: v.description,
        features: v.features,
        tech_stack: v.techStack,
        status: v.status,
        accent_color: v.accentColor,
        image: v.image,
        updated_at: new Date().toISOString(),
      }));
      await supabase.from('ventures').upsert(venturesPayload, { onConflict: 'id' });

      // Seed Team Members
      const teamPayload = TEAM_MEMBERS.map(t => ({
        id: t.id,
        name: t.name,
        role: t.role,
        department: t.department,
        bio: t.bio,
        accent_color: t.accentColor,
        image: t.image,
        tags: t.tags,
        updated_at: new Date().toISOString(),
      }));
      await supabase.from('team_members').upsert(teamPayload, { onConflict: 'id' });

      // Seed Trusted Clients
      const clientsPayload = TRUSTED_CLIENTS.map((cl, i) => ({
        id: `client-${i}-${cl.name.toLowerCase().replace(/\s+/g, '-')}`,
        name: cl.name,
        role: cl.role || null,
        logo: cl.logo,
        updated_at: new Date().toISOString(),
      }));
      await supabase.from('trusted_clients').upsert(clientsPayload, { onConflict: 'id' });

      // Seed Marquee Items
      const marqueePayload = PARTNER_MARQUEE_ITEMS.map(m => ({
        id: m.id,
        name: m.name,
        category: m.category,
        image: m.image,
        accent_color: m.accentColor,
        case_study_id: m.caseStudyId || null,
        updated_at: new Date().toISOString(),
      }));
      await supabase.from('marquee_items').upsert(marqueePayload, { onConflict: 'id' });

      // Seed Site Content
      const siteContentRows = Object.entries(DEFAULT_SITE_CONTENT).map(([key, value]) => ({
        key,
        value,
        updated_at: new Date().toISOString(),
      }));
      await supabase.from('site_content').upsert(siteContentRows, { onConflict: 'key' });

      await fetchData();
      return { success: true, message: 'All default agency content successfully seeded into Supabase tables!' };
    } catch (err: any) {
      console.error('Failed to seed Supabase database:', err);
      return { success: false, message: err?.message || 'Database seeding failed. Please make sure the SQL schema has been executed in Supabase.' };
    } finally {
      setIsLoading(false);
    }
  };

  // CRUD: Services
  const saveService = async (service: ServicePillar) => {
    // Optimistic update
    setServices(prev => {
      const exists = prev.some(s => s.id === service.id);
      return exists ? prev.map(s => (s.id === service.id ? service : s)) : [...prev, service];
    });

    try {
      const payload = {
        id: service.id,
        number: service.number,
        icon: service.icon,
        title: service.title,
        tagline: service.tagline,
        description: service.description,
        points: service.points,
        featured_client: service.featuredClient || null,
        featured_project: service.featuredProject || null,
        accent_color: service.accentColor,
        tags: service.tags,
        updated_at: new Date().toISOString(),
      };
      const { error } = await supabase.from('services').upsert(payload, { onConflict: 'id' });
      if (error) throw error;
      setLastSyncTime(new Date());
      return { success: true };
    } catch (err: any) {
      console.error('Failed to save service:', err);
      return { success: false, error: err?.message || 'Error saving service' };
    }
  };

  const deleteService = async (id: string) => {
    setServices(prev => prev.filter(s => s.id !== id));
    try {
      const { error } = await supabase.from('services').delete().eq('id', id);
      if (error) throw error;
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err?.message || 'Error deleting service' };
    }
  };

  // CRUD: Case Studies
  const saveCaseStudy = async (caseStudy: CaseStudy) => {
    setCaseStudies(prev => {
      const exists = prev.some(c => c.id === caseStudy.id);
      return exists ? prev.map(c => (c.id === caseStudy.id ? caseStudy : c)) : [...prev, caseStudy];
    });

    try {
      const payload = {
        id: caseStudy.id,
        number: caseStudy.number,
        title: caseStudy.title,
        client: caseStudy.client,
        category: caseStudy.category,
        summary: caseStudy.summary,
        deliverables: caseStudy.deliverables,
        stats: caseStudy.stats,
        impact: caseStudy.impact,
        accent_color: caseStudy.accentColor,
        image: caseStudy.image,
        quote: caseStudy.quote || null,
        updated_at: new Date().toISOString(),
      };
      const { error } = await supabase.from('case_studies').upsert(payload, { onConflict: 'id' });
      if (error) throw error;
      setLastSyncTime(new Date());
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err?.message || 'Error saving case study' };
    }
  };

  const deleteCaseStudy = async (id: string) => {
    setCaseStudies(prev => prev.filter(c => c.id !== id));
    try {
      const { error } = await supabase.from('case_studies').delete().eq('id', id);
      if (error) throw error;
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err?.message || 'Error deleting case study' };
    }
  };

  // CRUD: Ventures
  const saveVenture = async (venture: VentureItem) => {
    setVentures(prev => {
      const exists = prev.some(v => v.id === venture.id);
      return exists ? prev.map(v => (v.id === venture.id ? venture : v)) : [...prev, venture];
    });

    try {
      const payload = {
        id: venture.id,
        name: venture.name,
        tagline: venture.tagline,
        description: venture.description,
        features: venture.features,
        tech_stack: venture.techStack,
        status: venture.status,
        accent_color: venture.accentColor,
        image: venture.image,
        updated_at: new Date().toISOString(),
      };
      const { error } = await supabase.from('ventures').upsert(payload, { onConflict: 'id' });
      if (error) throw error;
      setLastSyncTime(new Date());
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err?.message || 'Error saving venture' };
    }
  };

  const deleteVenture = async (id: string) => {
    setVentures(prev => prev.filter(v => v.id !== id));
    try {
      const { error } = await supabase.from('ventures').delete().eq('id', id);
      if (error) throw error;
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err?.message || 'Error deleting venture' };
    }
  };

  // CRUD: Team Members
  const saveTeamMember = async (member: TeamMember) => {
    setTeamMembers(prev => {
      const exists = prev.some(t => t.id === member.id);
      return exists ? prev.map(t => (t.id === member.id ? member : t)) : [...prev, member];
    });

    try {
      const payload = {
        id: member.id,
        name: member.name,
        role: member.role,
        department: member.department,
        bio: member.bio,
        accent_color: member.accentColor,
        image: member.image,
        tags: member.tags,
        updated_at: new Date().toISOString(),
      };
      const { error } = await supabase.from('team_members').upsert(payload, { onConflict: 'id' });
      if (error) throw error;
      setLastSyncTime(new Date());
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err?.message || 'Error saving team member' };
    }
  };

  const deleteTeamMember = async (id: string) => {
    setTeamMembers(prev => prev.filter(t => t.id !== id));
    try {
      const { error } = await supabase.from('team_members').delete().eq('id', id);
      if (error) throw error;
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err?.message || 'Error deleting team member' };
    }
  };

  // CRUD: Trusted Clients
  const saveTrustedClient = async (client: TrustedClient) => {
    setTrustedClients(prev => {
      const exists = prev.some(c => c.name.toLowerCase() === client.name.toLowerCase());
      return exists ? prev.map(c => (c.name.toLowerCase() === client.name.toLowerCase() ? client : c)) : [...prev, client];
    });

    try {
      const id = `client-${client.name.toLowerCase().replace(/\s+/g, '-')}`;
      const payload = {
        id,
        name: client.name,
        role: client.role || null,
        logo: client.logo,
        updated_at: new Date().toISOString(),
      };
      const { error } = await supabase.from('trusted_clients').upsert(payload, { onConflict: 'id' });
      if (error) throw error;
      setLastSyncTime(new Date());
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err?.message || 'Error saving client' };
    }
  };

  const deleteTrustedClient = async (name: string) => {
    setTrustedClients(prev => prev.filter(c => c.name.toLowerCase() !== name.toLowerCase()));
    try {
      const id = `client-${name.toLowerCase().replace(/\s+/g, '-')}`;
      const { error } = await supabase.from('trusted_clients').delete().eq('id', id);
      if (error) throw error;
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err?.message || 'Error deleting client' };
    }
  };

  // CRUD: Marquee Items
  const saveMarqueeItem = async (item: PartnerMarqueeItem) => {
    setMarqueeItems(prev => {
      const exists = prev.some(m => m.id === item.id);
      return exists ? prev.map(m => (m.id === item.id ? item : m)) : [...prev, item];
    });

    try {
      const payload = {
        id: item.id,
        name: item.name,
        category: item.category,
        image: item.image,
        accent_color: item.accentColor,
        case_study_id: item.caseStudyId || null,
        updated_at: new Date().toISOString(),
      };
      const { error } = await supabase.from('marquee_items').upsert(payload, { onConflict: 'id' });
      if (error) throw error;
      setLastSyncTime(new Date());
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err?.message || 'Error saving marquee item' };
    }
  };

  const deleteMarqueeItem = async (id: string) => {
    setMarqueeItems(prev => prev.filter(m => m.id !== id));
    try {
      const { error } = await supabase.from('marquee_items').delete().eq('id', id);
      if (error) throw error;
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err?.message || 'Error deleting marquee item' };
    }
  };

  // CRUD: Site Content
  const saveSiteContent = async (partialContent: Partial<SiteContent>) => {
    setSiteContent(prev => ({ ...prev, ...partialContent }));
    try {
      const rows = Object.entries(partialContent).map(([key, value]) => ({
        key,
        value,
        updated_at: new Date().toISOString(),
      }));
      const { error } = await supabase.from('site_content').upsert(rows, { onConflict: 'key' });
      if (error) throw error;
      setLastSyncTime(new Date());
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err?.message || 'Error saving site content' };
    }
  };

  return (
    <DataContext.Provider
      value={{
        services,
        caseStudies,
        ventures,
        teamMembers,
        trustedClients,
        marqueeItems,
        siteContent,
        isLoading,
        isSupabaseConnected,
        lastSyncTime,
        refreshData: fetchData,
        seedDefaultData,
        saveService,
        deleteService,
        saveCaseStudy,
        deleteCaseStudy,
        saveVenture,
        deleteVenture,
        saveTeamMember,
        deleteTeamMember,
        saveTrustedClient,
        deleteTrustedClient,
        saveMarqueeItem,
        deleteMarqueeItem,
        saveSiteContent,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
};
