import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Clock,
  User,
  ArrowRight,
  Sparkles,
  Search,
  Filter,
  ShieldCheck,
  Zap,
  Phone,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { BLOG_POSTS } from '../data/blogPosts';
import { BUSINESS_INFO } from '../data/hours';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';

export default function KnowledgeBasePage({ onOpenBookingModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'AC Diagnostics & Repair', 'Plumbing & Water Quality', 'Energy Efficiency & Rebates'];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEOHead
        title="HVAC & Plumbing Knowledge Base | Technical Guides & Diagnostics | Passionate HVAC"
        description="Master technician guides for Clark County homeowners. Learn why AC capacitors blow in 115°F heat, how to descale tankless water heaters for 22-grain hard water, and SEER2 rebate tips."
        canonicalPath="/knowledge-base"
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <Breadcrumbs items={[{ name: "Knowledge Base", url: "/knowledge-base" }]} />
      </div>

      {/* HERO SECTION */}
      <section className="bg-[#07152b] text-white pt-14 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-0 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-sky-600 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-blue-700 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-md border border-cyan-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Southern Nevada Climate Engineering Library</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
            HVAC & Desert Plumbing Knowledge Base
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed mb-8">
            Transparent, master-technician guides engineered to answer your exact questions about 115°F cooling failures, hard water scale, and utility bill reductions.
          </p>

          {/* Quick Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search diagnostic topics (e.g. capacitor, hard water, rebates)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/10 backdrop-blur border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm sm:text-base shadow-inner"
            />
          </div>
        </div>
      </section>

      {/* FILTER BUTTONS & ARTICLE DIRECTORY */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Cover Image Container */}
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border shadow-sm ${post.categoryBadgeColor} bg-white/95 backdrop-blur`}>
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{post.readTime}</span>
                    </span>
                    <span>•</span>
                    <span>{post.publishDate}</span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-black text-[#07152b] group-hover:text-sky-600 transition-colors leading-snug mb-3">
                    <Link to={`/knowledge-base/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs">
                      {post.author.name.charAt(0)}
                    </div>
                    <span className="text-xs font-bold text-slate-800 truncate max-w-[140px]">
                      {post.author.name}
                    </span>
                  </div>

                  <Link
                    to={`/knowledge-base/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-black text-sky-600 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <FileText className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No guides found matching your search.</h3>
            <p className="text-sm text-slate-500 mt-1">Try another search term or click 'All' categories above.</p>
          </div>
        )}

      </section>

      {/* EMERGENCY CTA BANNER */}
      <section className="bg-[#07152b] text-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 text-white text-xs font-bold uppercase tracking-wider border border-cyan-400/30">
            <span>Facing An Active Cooling Emergency?</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black">
            Don't Wait For Overheating to Burn Out Your Motor
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Our master technicians are on call 24 hours a day, 7 days a week across Clark County with a 45-minute average arrival time.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black px-7 py-3.5 rounded-xl text-base shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Call (702) 858-1211</span>
            </a>
            <button
              type="button"
              onClick={() => onOpenBookingModal?.("Knowledge Base Consultation")}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-6 py-3.5 rounded-xl text-base transition-colors"
            >
              <span>Book Online ($0 Diagnostic with Repair)</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
