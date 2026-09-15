-- ========================================================================
-- IMAGINATIVE 369 - SUPABASE DATABASE SCHEMA & REALTIME CONFIGURATION
-- Run this SQL in your Supabase Project Dashboard -> SQL Editor -> Run
-- ========================================================================

-- 1. Services Table
CREATE TABLE IF NOT EXISTS public.services (
    id TEXT PRIMARY KEY,
    number TEXT,
    icon TEXT,
    title TEXT NOT NULL,
    tagline TEXT,
    description TEXT,
    points JSONB DEFAULT '[]'::jsonb,
    featured_client TEXT,
    featured_project TEXT,
    accent_color TEXT DEFAULT 'teal',
    tags JSONB DEFAULT '[]'::jsonb,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Case Studies Table
CREATE TABLE IF NOT EXISTS public.case_studies (
    id TEXT PRIMARY KEY,
    number TEXT,
    title TEXT NOT NULL,
    client TEXT,
    category TEXT,
    summary TEXT,
    deliverables JSONB DEFAULT '[]'::jsonb,
    stats JSONB DEFAULT '[]'::jsonb,
    impact TEXT,
    accent_color TEXT DEFAULT 'teal',
    image TEXT,
    image_meta JSONB DEFAULT '{}'::jsonb,
    quote JSONB DEFAULT '{}'::jsonb,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Ventures Table
CREATE TABLE IF NOT EXISTS public.ventures (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    tagline TEXT,
    description TEXT,
    features JSONB DEFAULT '[]'::jsonb,
    tech_stack JSONB DEFAULT '[]'::jsonb,
    status TEXT,
    accent_color TEXT DEFAULT 'teal',
    image TEXT,
    image_meta JSONB DEFAULT '{}'::jsonb,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Team Members Table
CREATE TABLE IF NOT EXISTS public.team_members (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT,
    department TEXT,
    bio TEXT,
    accent_color TEXT DEFAULT 'teal',
    image TEXT,
    image_meta JSONB DEFAULT '{}'::jsonb,
    tags JSONB DEFAULT '[]'::jsonb,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Trusted Clients Table
CREATE TABLE IF NOT EXISTS public.trusted_clients (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT,
    logo TEXT,
    logo_meta JSONB DEFAULT '{}'::jsonb,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. Marquee Items Table
CREATE TABLE IF NOT EXISTS public.marquee_items (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT,
    image TEXT,
    accent_color TEXT DEFAULT 'teal',
    case_study_id TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 7. Site Content Table (Key-Value for hero videos, contact info, brand headlines)
CREATE TABLE IF NOT EXISTS public.site_content (
    key TEXT PRIMARY KEY,
    value JSONB NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ========================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- Enable public read and anon CRUD access for the Admin Panel
-- ========================================================================

ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ventures ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.trusted_clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.marquee_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any to avoid errors on rerun
DROP POLICY IF EXISTS "Allow all access to services" ON public.services;
DROP POLICY IF EXISTS "Allow all access to case_studies" ON public.case_studies;
DROP POLICY IF EXISTS "Allow all access to ventures" ON public.ventures;
DROP POLICY IF EXISTS "Allow all access to team_members" ON public.team_members;
DROP POLICY IF EXISTS "Allow all access to trusted_clients" ON public.trusted_clients;
DROP POLICY IF EXISTS "Allow all access to marquee_items" ON public.marquee_items;
DROP POLICY IF EXISTS "Allow all access to site_content" ON public.site_content;

-- Create permissive policies for both public reading and admin updating
CREATE POLICY "Allow all access to services" ON public.services FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all access to case_studies" ON public.case_studies FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all access to ventures" ON public.ventures FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all access to team_members" ON public.team_members FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all access to trusted_clients" ON public.trusted_clients FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all access to marquee_items" ON public.marquee_items FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all access to site_content" ON public.site_content FOR ALL USING (true) WITH CHECK (true);

-- ========================================================================
-- ENABLE SUPABASE REALTIME REPLICATION
-- This allows instant front-end updates as soon as an edit is made in Admin
-- ========================================================================
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' AND tablename = 'services'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.services;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' AND tablename = 'case_studies'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.case_studies;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' AND tablename = 'ventures'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.ventures;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' AND tablename = 'team_members'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.team_members;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' AND tablename = 'trusted_clients'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.trusted_clients;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' AND tablename = 'marquee_items'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.marquee_items;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' AND tablename = 'site_content'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.site_content;
  END IF;
END $$;

-- Storage Bucket setup (Optional if Supabase Storage is used)
-- INSERT INTO storage.buckets (id, name, public) VALUES ('media', 'media', true) ON CONFLICT DO NOTHING;
