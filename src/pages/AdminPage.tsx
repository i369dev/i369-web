import React, { useState } from 'react';
import {
  Shield,
  Layers,
  Briefcase,
  Rocket,
  Users,
  Building2,
  Sliders,
  Database,
  LogOut,
  Plus,
  Trash2,
  Edit2,
  Save,
  X,
  RefreshCw,
  CheckCircle,
  AlertTriangle,
  FileCode,
  Search,
  ExternalLink,
  Menu,
  Image as ImageIcon,
  Video,
  Eye,
} from 'lucide-react';
import { useDataContext } from '../context/DataContext';
import { MediaUploader, formatFileSize } from '../components/admin/MediaUploader';
import { ServicePillar, CaseStudy, VentureItem, TeamMember } from '../types';
import { TrustedClient, PartnerMarqueeItem } from '../data/agencyData';
import { supabase } from '../lib/supabase';

export const AdminPage: React.FC = () => {
  const {
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
    refreshData,
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
  } = useDataContext();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('i369_admin_auth') === 'true';
  });
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(false);

  // Active Admin Section
  type AdminTab = 'overview' | 'services' | 'casestudies' | 'ventures' | 'team' | 'clients' | 'sitecontent' | 'media' | 'schema';
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [actionNotice, setActionNotice] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Modals / Editing States
  const [editingService, setEditingService] = useState<ServicePillar | null>(null);
  const [isNewService, setIsNewService] = useState(false);

  const [editingCaseStudy, setEditingCaseStudy] = useState<CaseStudy | null>(null);
  const [isNewCaseStudy, setIsNewCaseStudy] = useState(false);

  const [editingVenture, setEditingVenture] = useState<VentureItem | null>(null);
  const [isNewVenture, setIsNewVenture] = useState(false);

  const [editingTeamMember, setEditingTeamMember] = useState<TeamMember | null>(null);
  const [isNewTeamMember, setIsNewTeamMember] = useState(false);

  const [editingClient, setEditingClient] = useState<TrustedClient | null>(null);
  const [isNewClient, setIsNewClient] = useState(false);

  const [editingMarquee, setEditingMarquee] = useState<PartnerMarqueeItem | null>(null);
  const [isNewMarquee, setIsNewMarquee] = useState(false);

  // Standalone media test state
  const [testMediaUrl, setTestMediaUrl] = useState('');
  const [testMediaMeta, setTestMediaMeta] = useState<any>(null);

  // Notify helper
  const notify = (type: 'success' | 'error', message: string) => {
    setActionNotice({ type, message });
    setTimeout(() => setActionNotice(null), 4000);
  };

  // Login handler
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setAuthLoading(true);

    const targetEmail = 'adminweb@i369.com';
    const targetPassword = '369w@963i';

    try {
      // First try Supabase Auth signIn if user was registered in Supabase
      const { data, error } = await supabase.auth.signInWithPassword({
        email: emailInput.trim(),
        password: passwordInput,
      });

      if (!error && data?.user) {
        setIsAuthenticated(true);
        sessionStorage.setItem('i369_admin_auth', 'true');
        setAuthLoading(false);
        return;
      }

      // If credentials match the expected administrative credentials
      if (emailInput.trim().toLowerCase() === targetEmail.toLowerCase() && passwordInput === targetPassword) {
        setIsAuthenticated(true);
        sessionStorage.setItem('i369_admin_auth', 'true');
      } else {
        setAuthError('Invalid credentials. Please verify your email and password.');
      }
    } catch (err: any) {
      if (emailInput.trim().toLowerCase() === targetEmail.toLowerCase() && passwordInput === targetPassword) {
        setIsAuthenticated(true);
        sessionStorage.setItem('i369_admin_auth', 'true');
      } else {
        setAuthError(err.message || 'Authentication failed');
      }
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('i369_admin_auth');
    supabase.auth.signOut();
  };

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans text-slate-900">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-slate-200 p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-900 text-white mb-2">
              <Shield className="w-6 h-6 text-cyan-400" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Imaginative 369</h1>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-500">
              Administrative Command Center
            </p>
          </div>

          {authError && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1.5">
                Admin Email
              </label>
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="adminweb@i369.com"
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1.5">
                Password
              </label>
              <input
                type="password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 font-mono"
              />
            </div>

            <button
              type="submit"
              disabled={authLoading}
              className="w-full py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {authLoading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Shield className="w-4 h-4 text-cyan-400" />
                  <span>Authenticate & Access Dashboard</span>
                </>
              )}
            </button>
          </form>

          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-[11px] text-slate-500 leading-relaxed font-mono">
            <p className="font-semibold text-slate-700 mb-1">Expected Credentials:</p>
            <p>Email: adminweb@i369.com</p>
            <p>Password: 369w@963i</p>
          </div>
        </div>
      </div>
    );
  }

  // NAVIGATION ITEMS
  const navItems: { id: AdminTab; label: string; icon: any; count?: number }[] = [
    { id: 'overview', label: 'Overview & Status', icon: Sliders },
    { id: 'services', label: 'Service Pillars', icon: Layers, count: services.length },
    { id: 'casestudies', label: 'Case Studies', icon: Briefcase, count: caseStudies.length },
    { id: 'ventures', label: 'Ventures', icon: Rocket, count: ventures.length },
    { id: 'team', label: 'Team Members', icon: Users, count: teamMembers.length },
    { id: 'clients', label: 'Clients & Logos', icon: Building2, count: trustedClients.length },
    { id: 'sitecontent', label: 'Site Content & Video', icon: Video },
    { id: 'media', label: 'Media Inspector', icon: ImageIcon },
    { id: 'schema', label: 'Supabase SQL Setup', icon: Database },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-900">
      {/* Top Utility Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 px-4 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-slate-600 hover:bg-slate-100 rounded-lg"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded bg-slate-900 text-cyan-400 flex items-center justify-center font-bold text-xs font-mono">
              369
            </span>
            <div>
              <h1 className="text-sm font-bold text-slate-900 leading-none">Imaginative 369</h1>
              <p className="text-[10px] text-slate-500 font-mono">Admin CMS · /i369.web.admin</p>
            </div>
          </div>
        </div>

        {/* Status Indicators & Logout */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono bg-slate-50 px-2.5 py-1 rounded border border-slate-200">
            <span className={`w-2 h-2 rounded-full ${isSupabaseConnected ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
            <span className="text-slate-600">
              {isSupabaseConnected ? 'Supabase Live Sync' : 'Local Cache'}
            </span>
            {lastSyncTime && (
              <span className="text-slate-400 text-[10px]">
                ({lastSyncTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })})
              </span>
            )}
          </div>

          <button
            onClick={() => refreshData()}
            className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            title="Refresh from Supabase"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          </button>

          <button
            onClick={() => {
              window.location.pathname = '/';
              window.location.hash = '';
            }}
            className="px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors flex items-center gap-1.5 cursor-pointer"
            title="View Public Site"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">View Website</span>
          </button>

          <button
            onClick={handleLogout}
            className="px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 rounded-lg border border-red-200 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      {/* Action Notification Banner */}
      {actionNotice && (
        <div
          className={`px-4 py-2.5 text-xs font-medium flex items-center justify-between border-b ${
            actionNotice.type === 'success'
              ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
              : 'bg-red-50 text-red-800 border-red-200'
          }`}
        >
          <div className="flex items-center gap-2">
            {actionNotice.type === 'success' ? <CheckCircle className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
            <span>{actionNotice.message}</span>
          </div>
          <button onClick={() => setActionNotice(null)}>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Dashboard Layout */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Sidebar Navigation */}
        <aside
          className={`w-full lg:w-64 bg-white border-r border-slate-200 p-4 space-y-1 lg:block ${
            mobileMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 px-3 py-1 mb-2 font-semibold">
            Content Modules
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white font-semibold shadow-xs'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                </div>
                {item.count !== undefined && (
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                      isActive ? 'bg-slate-800 text-cyan-300' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}

          <div className="pt-6 mt-6 border-t border-slate-200">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-[11px] text-slate-600 space-y-2 font-mono">
              <div className="flex items-center justify-between text-slate-800 font-bold">
                <span>Supabase Live</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <p className="text-[10px] text-slate-500">
                Any updates saved here will propagate directly to the live site via Postgres WebSockets.
              </p>
            </div>
          </div>
        </aside>

        {/* Content View Area */}
        <main className="flex-1 p-4 lg:p-8 max-w-6xl">
          {/* ========================================================================= */}
          {/* TAB 1: OVERVIEW & SYSTEM STATUS */}
          {/* ========================================================================= */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Dynamic Content Management System</h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Manage all public front-end content dynamically. Media uploads extract real-time dimensions and byte weight.
                    </p>
                  </div>
                  <button
                    onClick={async () => {
                      const res = await seedDefaultData();
                      notify(res.success ? 'success' : 'error', res.message);
                    }}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors shadow-xs shrink-0"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Sync / Seed All Default Data to Supabase</span>
                  </button>
                </div>
              </div>

              {/* Stat Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <span className="text-[11px] font-mono uppercase text-slate-400">Services</span>
                  <div className="text-2xl font-bold text-slate-900 mt-1">{services.length}</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <span className="text-[11px] font-mono uppercase text-slate-400">Case Studies</span>
                  <div className="text-2xl font-bold text-slate-900 mt-1">{caseStudies.length}</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <span className="text-[11px] font-mono uppercase text-slate-400">Ventures</span>
                  <div className="text-2xl font-bold text-slate-900 mt-1">{ventures.length}</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <span className="text-[11px] font-mono uppercase text-slate-400">Team</span>
                  <div className="text-2xl font-bold text-slate-900 mt-1">{teamMembers.length}</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <span className="text-[11px] font-mono uppercase text-slate-400">Clients</span>
                  <div className="text-2xl font-bold text-slate-900 mt-1">{trustedClients.length}</div>
                </div>
              </div>

              {/* Instructions on Supabase Connection */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Database className="w-4 h-4 text-cyan-600" />
                  <span>Supabase Integration Details</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 font-mono space-y-1">
                    <div className="text-slate-400 text-[10px] uppercase">Supabase REST Endpoint</div>
                    <div className="text-slate-800 break-all font-semibold">https://sirifvmuhcnfuzdoipwl.supabase.co</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 font-mono space-y-1">
                    <div className="text-slate-400 text-[10px] uppercase">Realtime Status</div>
                    <div className="text-emerald-700 font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Postgres Channel Active & Listening</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  If your tables have not yet been run in the Supabase SQL editor, click the <strong>Supabase SQL Setup</strong> tab on the left to view and copy the initialization script. Once run, click <strong>Sync / Seed All Default Data to Supabase</strong> above to load all existing agency data into the database!
                </p>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 2: SERVICE PILLARS CRUD */}
          {/* ========================================================================= */}
          {activeTab === 'services' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Service Pillars</h2>
                  <p className="text-xs text-slate-500">Manage agency services, descriptions, and feature tags.</p>
                </div>
                <button
                  onClick={() => {
                    setEditingService({
                      id: `service-${Date.now()}`,
                      number: `0${services.length + 1}`,
                      icon: '🏔️',
                      title: '',
                      tagline: '',
                      description: '',
                      points: [''],
                      accentColor: 'teal',
                      tags: ['New'],
                    });
                    setIsNewService(true);
                  }}
                  className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Service Pillar</span>
                </button>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div key={service.id} className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl p-1.5 bg-slate-50 rounded border border-slate-200">{service.icon}</span>
                        <div>
                          <span className="text-[10px] font-mono text-slate-400">Pillar #{service.number}</span>
                          <h3 className="text-sm font-bold text-slate-900">{service.title}</h3>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => {
                            setEditingService({ ...service });
                            setIsNewService(false);
                          }}
                          className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded"
                          title="Edit Service"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={async () => {
                            if (confirm(`Delete service "${service.title}"?`)) {
                              const res = await deleteService(service.id);
                              notify(res.success ? 'success' : 'error', res.success ? 'Service deleted' : res.error!);
                            }
                          }}
                          className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded"
                          title="Delete Service"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2">{service.description}</p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {service.tags?.map((t, idx) => (
                        <span key={idx} className="text-[10px] font-mono bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Edit Modal */}
              {editingService && (
                <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4 overflow-y-auto">
                  <div className="bg-white rounded-xl max-w-2xl w-full p-6 space-y-4 shadow-xl border border-slate-300 max-h-[90vh] overflow-y-auto">
                    <div className="flex items-center justify-between border-b pb-3">
                      <h3 className="text-sm font-bold text-slate-900">
                        {isNewService ? 'Create Service Pillar' : `Edit: ${editingService.title}`}
                      </h3>
                      <button onClick={() => setEditingService(null)} className="text-slate-400 hover:text-slate-600">
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Title</label>
                        <input
                          type="text"
                          value={editingService.title}
                          onChange={(e) => setEditingService({ ...editingService, title: e.target.value })}
                          className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Number / Icon</label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={editingService.number}
                            placeholder="01"
                            onChange={(e) => setEditingService({ ...editingService, number: e.target.value })}
                            className="w-20 px-3 py-1.5 text-xs border border-slate-300 rounded font-mono"
                          />
                          <input
                            type="text"
                            value={editingService.icon}
                            placeholder="🏔️"
                            onChange={(e) => setEditingService({ ...editingService, icon: e.target.value })}
                            className="w-20 px-3 py-1.5 text-xs border border-slate-300 rounded text-center"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Tagline</label>
                      <input
                        type="text"
                        value={editingService.tagline}
                        onChange={(e) => setEditingService({ ...editingService, tagline: e.target.value })}
                        className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Description</label>
                      <textarea
                        rows={3}
                        value={editingService.description}
                        onChange={(e) => setEditingService({ ...editingService, description: e.target.value })}
                        className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                        Bullet Points (one per line)
                      </label>
                      <textarea
                        rows={4}
                        value={editingService.points?.join('\n')}
                        onChange={(e) =>
                          setEditingService({
                            ...editingService,
                            points: e.target.value.split('\n').filter((p) => p.trim().length > 0),
                          })
                        }
                        className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                        Tags (comma separated)
                      </label>
                      <input
                        type="text"
                        value={editingService.tags?.join(', ')}
                        onChange={(e) =>
                          setEditingService({
                            ...editingService,
                            tags: e.target.value.split(',').map((t) => t.trim()),
                          })
                        }
                        className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded font-mono"
                      />
                    </div>

                    <div className="flex justify-end gap-2 pt-3 border-t">
                      <button
                        type="button"
                        onClick={() => setEditingService(null)}
                        className="px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-100 rounded"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={async () => {
                          const res = await saveService(editingService);
                          if (res.success) {
                            notify('success', 'Service saved successfully!');
                            setEditingService(null);
                          } else {
                            notify('error', res.error || 'Failed to save service');
                          }
                        }}
                        className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded"
                      >
                        Save Service
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 3: CASE STUDIES CRUD WITH MEDIA DIMENSION ANALYZER */}
          {/* ========================================================================= */}
          {activeTab === 'casestudies' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Case Studies & Work</h2>
                  <p className="text-xs text-slate-500">Edit deliverables, metrics, client quotes, and hero imagery.</p>
                </div>
                <button
                  onClick={() => {
                    setEditingCaseStudy({
                      id: `case-${Date.now()}`,
                      number: `0${caseStudies.length + 1}`,
                      title: '',
                      client: '',
                      category: 'Tourism',
                      summary: '',
                      deliverables: [''],
                      stats: [{ label: 'Metric', value: '100%' }],
                      impact: '',
                      accentColor: 'teal',
                      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
                    });
                    setIsNewCaseStudy(true);
                  }}
                  className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Case Study</span>
                </button>
              </div>

              {/* Case Studies List */}
              <div className="space-y-3">
                {caseStudies.map((cs) => (
                  <div key={cs.id} className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={cs.image}
                        alt={cs.title}
                        className="w-16 h-16 rounded object-cover border border-slate-200 shrink-0"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-slate-400">#{cs.number}</span>
                          <span className="text-xs font-bold text-slate-900">{cs.title}</span>
                          <span className="text-[10px] font-mono bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">
                            {cs.client}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{cs.summary}</p>
                        <div className="flex gap-2 mt-1">
                          {cs.stats?.map((st, i) => (
                            <span key={i} className="text-[10px] font-mono text-indigo-700 bg-indigo-50 px-1 rounded">
                              {st.label}: {st.value}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 self-end sm:self-center shrink-0">
                      <button
                        onClick={() => {
                          setEditingCaseStudy({ ...cs });
                          setIsNewCaseStudy(false);
                        }}
                        className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded"
                        title="Edit Case Study"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={async () => {
                          if (confirm(`Delete case study "${cs.title}"?`)) {
                            const res = await deleteCaseStudy(cs.id);
                            notify(res.success ? 'success' : 'error', res.success ? 'Case study deleted' : res.error!);
                          }
                        }}
                        className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded"
                        title="Delete Case Study"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Case Study Edit Modal */}
              {editingCaseStudy && (
                <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4 overflow-y-auto">
                  <div className="bg-white rounded-xl max-w-3xl w-full p-6 space-y-4 shadow-xl border border-slate-300 max-h-[90vh] overflow-y-auto">
                    <div className="flex items-center justify-between border-b pb-3">
                      <h3 className="text-sm font-bold text-slate-900">
                        {isNewCaseStudy ? 'Create Case Study' : `Edit: ${editingCaseStudy.title}`}
                      </h3>
                      <button onClick={() => setEditingCaseStudy(null)} className="text-slate-400 hover:text-slate-600">
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Title</label>
                        <input
                          type="text"
                          value={editingCaseStudy.title}
                          onChange={(e) => setEditingCaseStudy({ ...editingCaseStudy, title: e.target.value })}
                          className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Client</label>
                        <input
                          type="text"
                          value={editingCaseStudy.client}
                          onChange={(e) => setEditingCaseStudy({ ...editingCaseStudy, client: e.target.value })}
                          className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Category / Number</label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={editingCaseStudy.number}
                            placeholder="01"
                            onChange={(e) => setEditingCaseStudy({ ...editingCaseStudy, number: e.target.value })}
                            className="w-16 px-2 py-1.5 text-xs border border-slate-300 rounded font-mono"
                          />
                          <input
                            type="text"
                            value={editingCaseStudy.category}
                            placeholder="Tourism"
                            onChange={(e) => setEditingCaseStudy({ ...editingCaseStudy, category: e.target.value })}
                            className="flex-1 px-2 py-1.5 text-xs border border-slate-300 rounded"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Media Uploader with exact dimension extraction */}
                    <MediaUploader
                      label="Hero Feature Image / Video"
                      value={editingCaseStudy.image}
                      onChange={(url) => setEditingCaseStudy({ ...editingCaseStudy, image: url })}
                      helpText="Upload case study hero photo. Width, height, and weight will be extracted automatically."
                    />

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Summary</label>
                      <textarea
                        rows={2}
                        value={editingCaseStudy.summary}
                        onChange={(e) => setEditingCaseStudy({ ...editingCaseStudy, summary: e.target.value })}
                        className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Impact Narrative</label>
                      <textarea
                        rows={2}
                        value={editingCaseStudy.impact}
                        onChange={(e) => setEditingCaseStudy({ ...editingCaseStudy, impact: e.target.value })}
                        className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                        Deliverables (one per line)
                      </label>
                      <textarea
                        rows={3}
                        value={editingCaseStudy.deliverables?.join('\n')}
                        onChange={(e) =>
                          setEditingCaseStudy({
                            ...editingCaseStudy,
                            deliverables: e.target.value.split('\n').filter((d) => d.trim().length > 0),
                          })
                        }
                        className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded font-mono"
                      />
                    </div>

                    <div className="flex justify-end gap-2 pt-3 border-t">
                      <button
                        type="button"
                        onClick={() => setEditingCaseStudy(null)}
                        className="px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-100 rounded"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={async () => {
                          const res = await saveCaseStudy(editingCaseStudy);
                          if (res.success) {
                            notify('success', 'Case study saved successfully!');
                            setEditingCaseStudy(null);
                          } else {
                            notify('error', res.error || 'Failed to save case study');
                          }
                        }}
                        className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded"
                      >
                        Save Case Study
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 4: VENTURES CRUD */}
          {/* ========================================================================= */}
          {activeTab === 'ventures' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Internal & Partner Ventures</h2>
                  <p className="text-xs text-slate-500">Manage AdventureTech products like LankaQuests, IntotheWILDlk, and Inhale Exhale.</p>
                </div>
                <button
                  onClick={() => {
                    setEditingVenture({
                      id: `venture-${Date.now()}`,
                      name: '',
                      tagline: '',
                      description: '',
                      features: [''],
                      techStack: ['Flutter', 'Firebase'],
                      status: 'Beta',
                      accentColor: 'teal',
                      image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1000&q=80',
                    });
                    setIsNewVenture(true);
                  }}
                  className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Venture</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ventures.map((ven) => (
                  <div key={ven.id} className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                          {ven.status}
                        </span>
                        <h3 className="text-sm font-bold text-slate-900 mt-1">{ven.name}</h3>
                        <p className="text-xs text-slate-500">{ven.tagline}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => {
                            setEditingVenture({ ...ven });
                            setIsNewVenture(false);
                          }}
                          className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={async () => {
                            if (confirm(`Delete venture "${ven.name}"?`)) {
                              const res = await deleteVenture(ven.id);
                              notify(res.success ? 'success' : 'error', res.success ? 'Venture deleted' : res.error!);
                            }
                          }}
                          className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <img src={ven.image} alt={ven.name} className="w-full h-32 object-cover rounded border border-slate-200" />
                    <p className="text-xs text-slate-600 line-clamp-2">{ven.description}</p>
                  </div>
                ))}
              </div>

              {/* Venture Modal */}
              {editingVenture && (
                <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4 overflow-y-auto">
                  <div className="bg-white rounded-xl max-w-2xl w-full p-6 space-y-4 shadow-xl border border-slate-300 max-h-[90vh] overflow-y-auto">
                    <div className="flex items-center justify-between border-b pb-3">
                      <h3 className="text-sm font-bold text-slate-900">
                        {isNewVenture ? 'Create Venture' : `Edit: ${editingVenture.name}`}
                      </h3>
                      <button onClick={() => setEditingVenture(null)} className="text-slate-400 hover:text-slate-600">
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Name</label>
                        <input
                          type="text"
                          value={editingVenture.name}
                          onChange={(e) => setEditingVenture({ ...editingVenture, name: e.target.value })}
                          className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Status</label>
                        <input
                          type="text"
                          value={editingVenture.status}
                          placeholder="Live & Scaling"
                          onChange={(e) => setEditingVenture({ ...editingVenture, status: e.target.value })}
                          className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Tagline</label>
                      <input
                        type="text"
                        value={editingVenture.tagline}
                        onChange={(e) => setEditingVenture({ ...editingVenture, tagline: e.target.value })}
                        className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded"
                      />
                    </div>

                    <MediaUploader
                      label="Venture Cover Media"
                      value={editingVenture.image}
                      onChange={(url) => setEditingVenture({ ...editingVenture, image: url })}
                    />

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Description</label>
                      <textarea
                        rows={2}
                        value={editingVenture.description}
                        onChange={(e) => setEditingVenture({ ...editingVenture, description: e.target.value })}
                        className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded"
                      />
                    </div>

                    <div className="flex justify-end gap-2 pt-3 border-t">
                      <button
                        type="button"
                        onClick={() => setEditingVenture(null)}
                        className="px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-100 rounded"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={async () => {
                          const res = await saveVenture(editingVenture);
                          if (res.success) {
                            notify('success', 'Venture saved successfully!');
                            setEditingVenture(null);
                          } else {
                            notify('error', res.error || 'Failed to save venture');
                          }
                        }}
                        className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded"
                      >
                        Save Venture
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 5: TEAM MEMBERS CRUD */}
          {/* ========================================================================= */}
          {activeTab === 'team' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Leadership & Team Members</h2>
                  <p className="text-xs text-slate-500">Update bios, headshots, and departmental specialties.</p>
                </div>
                <button
                  onClick={() => {
                    setEditingTeamMember({
                      id: `team-${Date.now()}`,
                      name: '',
                      role: '',
                      department: '',
                      bio: '',
                      accentColor: 'teal',
                      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
                      tags: ['Leadership'],
                    });
                    setIsNewTeamMember(true);
                  }}
                  className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Team Member</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {teamMembers.map((member) => (
                  <div key={member.id} className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <img src={member.image} alt={member.name} className="w-12 h-12 rounded-full object-cover border border-slate-200" />
                        <div>
                          <h4 className="text-xs font-bold text-slate-900 leading-tight">{member.name}</h4>
                          <p className="text-[11px] text-indigo-700 font-medium">{member.role}</p>
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-3 leading-relaxed">{member.bio}</p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                      <span className="text-[10px] font-mono text-slate-400">{member.department}</span>
                      <div className="flex gap-1">
                        <button
                          onClick={() => {
                            setEditingTeamMember({ ...member });
                            setIsNewTeamMember(false);
                          }}
                          className="p-1 text-slate-500 hover:text-slate-900"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={async () => {
                            if (confirm(`Remove ${member.name}?`)) {
                              const res = await deleteTeamMember(member.id);
                              notify(res.success ? 'success' : 'error', res.success ? 'Member removed' : res.error!);
                            }
                          }}
                          className="p-1 text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Team Member Modal */}
              {editingTeamMember && (
                <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4 overflow-y-auto">
                  <div className="bg-white rounded-xl max-w-2xl w-full p-6 space-y-4 shadow-xl border border-slate-300 max-h-[90vh] overflow-y-auto">
                    <div className="flex items-center justify-between border-b pb-3">
                      <h3 className="text-sm font-bold text-slate-900">
                        {isNewTeamMember ? 'Add Team Member' : `Edit: ${editingTeamMember.name}`}
                      </h3>
                      <button onClick={() => setEditingTeamMember(null)} className="text-slate-400 hover:text-slate-600">
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Full Name</label>
                        <input
                          type="text"
                          value={editingTeamMember.name}
                          onChange={(e) => setEditingTeamMember({ ...editingTeamMember, name: e.target.value })}
                          className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Role / Title</label>
                        <input
                          type="text"
                          value={editingTeamMember.role}
                          onChange={(e) => setEditingTeamMember({ ...editingTeamMember, role: e.target.value })}
                          className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Department</label>
                      <input
                        type="text"
                        value={editingTeamMember.department}
                        onChange={(e) => setEditingTeamMember({ ...editingTeamMember, department: e.target.value })}
                        className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded"
                      />
                    </div>

                    <MediaUploader
                      label="Headshot Portrait"
                      value={editingTeamMember.image}
                      onChange={(url) => setEditingTeamMember({ ...editingTeamMember, image: url })}
                      helpText="Upload portrait image. Ideal square or 4:5 ratio."
                    />

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Biography</label>
                      <textarea
                        rows={3}
                        value={editingTeamMember.bio}
                        onChange={(e) => setEditingTeamMember({ ...editingTeamMember, bio: e.target.value })}
                        className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded text-xs"
                      />
                    </div>

                    <div className="flex justify-end gap-2 pt-3 border-t">
                      <button
                        type="button"
                        onClick={() => setEditingTeamMember(null)}
                        className="px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-100 rounded"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={async () => {
                          const res = await saveTeamMember(editingTeamMember);
                          if (res.success) {
                            notify('success', 'Team member saved successfully!');
                            setEditingTeamMember(null);
                          } else {
                            notify('error', res.error || 'Failed to save team member');
                          }
                        }}
                        className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded"
                      >
                        Save Member
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 6: TRUSTED CLIENTS & MARQUEE CRUD */}
          {/* ========================================================================= */}
          {activeTab === 'clients' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Trusted Clients & Logos</h2>
                  <p className="text-xs text-slate-500">Add partner brand logos and Marquee items displayed across the homepage.</p>
                </div>
                <button
                  onClick={() => {
                    setEditingClient({
                      name: '',
                      role: 'Partner Brand',
                      logo: '',
                    });
                    setIsNewClient(true);
                  }}
                  className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Client Logo</span>
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {trustedClients.map((cl, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col items-center justify-between text-center space-y-2">
                    <div className="w-20 h-20 bg-slate-900 rounded-lg p-2 flex items-center justify-center border border-slate-800">
                      <img src={cl.logo} alt={cl.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{cl.name}</h4>
                      <p className="text-[10px] text-slate-500 font-mono">{cl.role}</p>
                    </div>
                    <div className="flex gap-2 pt-2 border-t w-full justify-center">
                      <button
                        onClick={() => {
                          setEditingClient({ ...cl });
                          setIsNewClient(false);
                        }}
                        className="text-[11px] text-slate-600 hover:text-slate-900 font-medium"
                      >
                        Edit
                      </button>
                      <button
                        onClick={async () => {
                          if (confirm(`Delete client "${cl.name}"?`)) {
                            const res = await deleteTrustedClient(cl.name);
                            notify(res.success ? 'success' : 'error', res.success ? 'Client removed' : res.error!);
                          }
                        }}
                        className="text-[11px] text-red-600 hover:text-red-800 font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Client Edit Modal */}
              {editingClient && (
                <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
                  <div className="bg-white rounded-xl max-w-lg w-full p-6 space-y-4 shadow-xl border border-slate-300">
                    <div className="flex items-center justify-between border-b pb-3">
                      <h3 className="text-sm font-bold text-slate-900">
                        {isNewClient ? 'Add Client Logo' : `Edit: ${editingClient.name}`}
                      </h3>
                      <button onClick={() => setEditingClient(null)} className="text-slate-400 hover:text-slate-600">
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Client Name</label>
                      <input
                        type="text"
                        value={editingClient.name}
                        onChange={(e) => setEditingClient({ ...editingClient, name: e.target.value })}
                        className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Role / Industry</label>
                      <input
                        type="text"
                        value={editingClient.role || ''}
                        onChange={(e) => setEditingClient({ ...editingClient, role: e.target.value })}
                        className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded"
                      />
                    </div>

                    <MediaUploader
                      label="Logo Asset (SVG / PNG / WebP)"
                      value={editingClient.logo}
                      onChange={(url) => setEditingClient({ ...editingClient, logo: url })}
                      helpText="Upload transparent PNG, SVG data, or SVG URL."
                    />

                    <div className="flex justify-end gap-2 pt-3 border-t">
                      <button
                        type="button"
                        onClick={() => setEditingClient(null)}
                        className="px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-100 rounded"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={async () => {
                          const res = await saveTrustedClient(editingClient);
                          if (res.success) {
                            notify('success', 'Client saved successfully!');
                            setEditingClient(null);
                          } else {
                            notify('error', res.error || 'Failed to save client');
                          }
                        }}
                        className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded"
                      >
                        Save Client
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 7: SITE CONTENT & HERO VIDEO */}
          {/* ========================================================================= */}
          {activeTab === 'sitecontent' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Site Content & Hero Media</h2>
                <p className="text-xs text-slate-500">Configure hero background cinema, editorial descriptions, and company details.</p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-5">
                <h3 className="text-sm font-bold text-slate-900 border-b pb-2">Hero Video & Visual Assets</h3>

                <MediaUploader
                  label="Hero 4K Cinematic Video (MP4 / WebM)"
                  value={siteContent.heroVideoUrl}
                  mediaType="video"
                  onChange={(url) => saveSiteContent({ heroVideoUrl: url })}
                  helpText="Extracts resolution, duration, and weight automatically. Reflects in the homepage hero video showcase."
                />

                <MediaUploader
                  label="Hero Video Poster Frame (Fallback image)"
                  value={siteContent.heroVideoPoster}
                  mediaType="image"
                  onChange={(url) => saveSiteContent({ heroVideoPoster: url })}
                  helpText="Shown while video loads or on low-power mobile connections."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Eyebrow Tagline</label>
                    <input
                      type="text"
                      value={siteContent.heroTagline}
                      onChange={(e) => saveSiteContent({ heroTagline: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Headline</label>
                    <input
                      type="text"
                      value={siteContent.heroHeadline}
                      onChange={(e) => saveSiteContent({ heroHeadline: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded font-bold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Hero Editorial Description</label>
                  <textarea
                    rows={3}
                    value={siteContent.heroDescription}
                    onChange={(e) => saveSiteContent({ heroDescription: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Contact Email</label>
                    <input
                      type="email"
                      value={siteContent.contactEmail}
                      onChange={(e) => saveSiteContent({ contactEmail: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Phone</label>
                    <input
                      type="text"
                      value={siteContent.contactPhone}
                      onChange={(e) => saveSiteContent({ contactPhone: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Headquarters</label>
                    <input
                      type="text"
                      value={siteContent.contactAddress}
                      onChange={(e) => saveSiteContent({ contactAddress: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 8: MEDIA INSPECTOR & ASSET UPLOADER */}
          {/* ========================================================================= */}
          {activeTab === 'media' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Custom Media Dimension & Weight Inspector</h2>
                <p className="text-xs text-slate-500">
                  Inspect any image, video, logo, or icon. The system automatically measures pixel dimensions (width & height), aspect ratio, duration, and file byte weight.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
                <MediaUploader
                  label="Inspect Any Media Asset (Image, Video, or SVG)"
                  value={testMediaUrl}
                  onChange={(url, meta) => {
                    setTestMediaUrl(url);
                    setTestMediaMeta(meta);
                  }}
                  helpText="Select or drag any asset file to measure its dimensions in real-time."
                />

                {testMediaUrl && (
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-3">
                    <div className="text-xs font-bold text-slate-900 flex items-center justify-between">
                      <span>Inspection Telemetry</span>
                      <span className="text-emerald-600 font-mono text-[11px]">Ready for CMS</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                      <div className="p-2.5 bg-white rounded border border-slate-200">
                        <span className="text-[10px] text-slate-400 font-mono block">Width & Height</span>
                        <span className="font-bold text-slate-900 font-mono">
                          {testMediaMeta?.width ? `${testMediaMeta.width} × ${testMediaMeta.height} px` : 'Vector / N/A'}
                        </span>
                      </div>
                      <div className="p-2.5 bg-white rounded border border-slate-200">
                        <span className="text-[10px] text-slate-400 font-mono block">File Weight</span>
                        <span className="font-bold text-indigo-700 font-mono">
                          {testMediaMeta?.sizeFormatted || 'Measured'}
                        </span>
                      </div>
                      <div className="p-2.5 bg-white rounded border border-slate-200">
                        <span className="text-[10px] text-slate-400 font-mono block">Aspect Ratio</span>
                        <span className="font-bold text-slate-900 font-mono">
                          {testMediaMeta?.aspectRatio || '1:1'}
                        </span>
                      </div>
                      <div className="p-2.5 bg-white rounded border border-slate-200">
                        <span className="text-[10px] text-slate-400 font-mono block">Format</span>
                        <span className="font-bold text-slate-900 font-mono uppercase">
                          {testMediaMeta?.mimeType || 'Asset'}
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-400 font-mono block mb-1">Generated Public URL</span>
                      <input
                        type="text"
                        readOnly
                        value={testMediaUrl}
                        className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded font-mono text-slate-700"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 9: SUPABASE DATABASE SCHEMA SETUP */}
          {/* ========================================================================= */}
          {activeTab === 'schema' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Supabase SQL Schema Setup</h2>
                <p className="text-xs text-slate-500">
                  Copy and paste this SQL into your Supabase project dashboard to set up all tables and enable Realtime sync.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 font-mono">Postgres SQL Initialization Script</span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(SQL_SCHEMA_SNIPPET);
                      notify('success', 'SQL copied to clipboard!');
                    }}
                    className="px-3 py-1.5 bg-slate-900 text-white rounded text-xs font-medium flex items-center gap-1.5 cursor-pointer hover:bg-slate-800"
                  >
                    <FileCode className="w-3.5 h-3.5" />
                    <span>Copy SQL</span>
                  </button>
                </div>

                <div className="p-3 bg-slate-900 text-slate-100 rounded-lg font-mono text-[11px] max-h-96 overflow-y-auto leading-relaxed border border-slate-800">
                  <pre>{SQL_SCHEMA_SNIPPET}</pre>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 space-y-2">
                  <h4 className="font-bold text-slate-900">Steps to initialize your Supabase project:</h4>
                  <ol className="list-decimal list-inside space-y-1 text-slate-600">
                    <li>Open your Supabase Dashboard: <code>https://supabase.com/dashboard/project/sirifvmuhcnfuzdoipwl</code></li>
                    <li>Click on <strong>SQL Editor</strong> in the left sidebar</li>
                    <li>Click <strong>New query</strong>, paste the script above, and click <strong>Run</strong></li>
                    <li>Return here to the Overview tab and click <strong>Sync / Seed All Default Data to Supabase</strong></li>
                  </ol>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

const SQL_SCHEMA_SNIPPET = `-- 1. Services Table
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
    tags JSONB DEFAULT '[]'::jsonb,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Trusted Clients Table
CREATE TABLE IF NOT EXISTS public.trusted_clients (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT,
    logo TEXT,
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

-- 7. Site Content Table
CREATE TABLE IF NOT EXISTS public.site_content (
    key TEXT PRIMARY KEY,
    value JSONB NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS and Permissive Policies
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ventures ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.trusted_clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.marquee_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow all to services" ON public.services FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all to case_studies" ON public.case_studies FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all to ventures" ON public.ventures FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all to team_members" ON public.team_members FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all to trusted_clients" ON public.trusted_clients FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all to marquee_items" ON public.marquee_items FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all to site_content" ON public.site_content FOR ALL USING (true) WITH CHECK (true);

-- Enable Realtime Replication
ALTER PUBLICATION supabase_realtime ADD TABLE public.services, public.case_studies, public.ventures, public.team_members, public.trusted_clients, public.marquee_items, public.site_content;`;
