import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Clock,
  User,
  ShieldCheck,
  Calendar,
  Share2,
  CheckCircle2,
  AlertTriangle,
  Info,
  Phone,
  ArrowRight,
  FileCheck,
  Sparkles,
  ChevronRight,
  Bookmark
} from 'lucide-react';
import { getBlogPostBySlug, BLOG_POSTS } from '../data/blogPosts';
import { BUSINESS_INFO } from '../data/hours';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import AEOQuestionAnswer from '../components/AEOQuestionAnswer';
import { getArticleSchema } from '../data/schemas';

export default function BlogPostPage({ onOpenBookingModal }) {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <Navigate to="/knowledge-base" replace />;
  }

  const articleSchema = getArticleSchema(post);
  const otherPosts = BLOG_POSTS.filter(p => p.slug !== post.slug);

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEOHead
        title={`${post.title} | Passionate HVAC Guide`}
        description={post.excerpt}
        canonicalPath={`/knowledge-base/${post.slug}`}
        ogImage={post.coverImage}
        schema={articleSchema}
      />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <Breadcrumbs
          items={[
            { name: "Knowledge Base", url: "/knowledge-base" },
            { name: post.title, url: `/knowledge-base/${post.slug}` }
          ]}
        />
      </div>

      {/* ARTICLE HEADER HERO */}
      <header className="bg-[#07152b] text-white pt-12 pb-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
            <span className={`px-3 py-1 rounded-full font-black uppercase tracking-wider border shadow-sm ${post.categoryBadgeColor} bg-white`}>
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">Published {post.publishDate}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] mb-6 text-white">
            {post.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-medium leading-relaxed mb-6">
            {post.excerpt}
          </p>

          {/* Author Badge */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/10">
            <div className="w-10 h-10 rounded-full bg-red-600 text-white font-black flex items-center justify-center text-sm shadow-md">
              {post.author.name.charAt(0)}
            </div>
            <div>
              <div className="font-bold text-white text-sm">
                By {post.author.name}
              </div>
              <div className="text-xs text-slate-300">
                {post.author.title}
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* MAIN CONTENT WRAPPER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT: STICKY TABLE OF CONTENTS & QUICK DISPATCH (DESKTOP) */}
          <aside className="hidden lg:block lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6">
              
              {/* Table of Contents Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                <div className="flex items-center gap-2 font-black text-xs uppercase tracking-wider text-slate-600 mb-3 pb-2 border-b border-slate-100">
                  <Bookmark className="w-4 h-4 text-red-600" />
                  <span>Table of Contents</span>
                </div>
                <nav className="space-y-1.5 text-xs">
                  {post.tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block p-2 rounded-lg text-slate-700 hover:text-red-600 hover:bg-slate-50 transition-colors font-medium"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Direct Dispatch Hotline Widget */}
              <div className="bg-gradient-to-br from-[#07152b] to-slate-900 text-white rounded-2xl p-5 shadow-md">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 mb-2">
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                  <span>Immediate Technician Dispatch</span>
                </div>
                <h3 className="font-bold text-sm text-white mb-2">
                  Experiencing These Exact Symptoms?
                </h3>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  Our trucks carry OEM replacement parts. Get an honest master technician on-site in 45 minutes or less.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black py-2.5 rounded-xl text-xs transition-colors shadow-md"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call (702) 858-1211</span>
                </a>
              </div>

            </div>
          </aside>

          {/* RIGHT: MAIN ARTICLE BODY */}
          <main className="lg:col-span-8 space-y-8">
            
            {/* INVERTED PYRAMID DIRECT ANSWER BLOCK (FOR AEO SNIPPET EXTRACTION) */}
            <div className="bg-white border-l-4 border-red-600 p-6 rounded-r-2xl shadow-sm border border-y-slate-200 border-r-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-red-700 mb-2">
                <Sparkles className="w-4 h-4 text-red-600" />
                <span>Executive Summary (Direct 50-Word Takeaway):</span>
              </div>
              <p className="text-base sm:text-lg text-slate-900 leading-relaxed font-bold">
                {post.invertedPyramidTakeaway}
              </p>
            </div>

            {/* KEY FACTS & OPERATIONAL SPECS TABLE */}
            {post.keyFacts && post.keyFacts.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500 mb-4">
                  <FileCheck className="w-4 h-4 text-sky-600" />
                  <span>Clark County Environmental & Engineering Specifications:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  {post.keyFacts.map((fact, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col justify-between"
                    >
                      <span className="font-bold text-slate-600 text-xs mb-1">{fact.label}:</span>
                      <span className="font-black text-[#07152b]">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ARTICLE CONTENT SECTIONS */}
            <article className="prose prose-slate max-w-none space-y-10">
              {post.content.map((sec) => (
                <section key={sec.sectionId} id={sec.sectionId} className="scroll-mt-24 space-y-4">
                  
                  <h2 className="text-xl sm:text-2xl font-black text-[#07152b] tracking-tight border-b border-slate-200 pb-2">
                    {sec.heading}
                  </h2>

                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-slate-700 leading-relaxed text-sm sm:text-base font-normal">
                      {p}
                    </p>
                  ))}

                  {/* Checklist if provided */}
                  {sec.checklist && sec.checklist.length > 0 && (
                    <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2.5 my-4">
                      <div className="text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                        Diagnostic Verification Steps:
                      </div>
                      <ul className="space-y-2">
                        {sec.checklist.map((step, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </section>
              ))}
            </article>

            {/* AUTHOR CREDENTIALS SIGNATURE */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-red-600 text-white font-black flex items-center justify-center text-lg flex-shrink-0">
                {post.author.name.charAt(0)}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-black text-slate-900 text-base">{post.author.name}</h3>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    Verified Pro
                  </span>
                </div>
                <p className="text-xs font-bold text-red-600">{post.author.title}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{post.author.bio}</p>
              </div>
            </div>

            {/* EMBEDDED AEO Q&A SECTION FOR THIS SPECIFIC TOPIC */}
            {post.aeoQuestions && post.aeoQuestions.length > 0 && (
              <div className="pt-6">
                <AEOQuestionAnswer
                  title="Frequently Asked Technical Questions"
                  subtitle="Snippet-formatted direct answers regarding this specific HVAC/Plumbing failure mode."
                  items={post.aeoQuestions}
                  includeSchema={true}
                />
              </div>
            )}

            {/* RELATED ARTICLES */}
            <div className="pt-8 border-t border-slate-200">
              <h3 className="text-lg font-black text-[#07152b] mb-4">
                More Technical Climate & Plumbing Guides:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {otherPosts.map((other) => (
                  <Link
                    key={other.slug}
                    to={`/knowledge-base/${other.slug}`}
                    className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-red-400 hover:shadow-md transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-red-600">
                        {other.category}
                      </span>
                      <h4 className="font-bold text-sm text-[#07152b] group-hover:text-red-600 transition-colors mt-1 line-clamp-2">
                        {other.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-bold text-red-600 mt-3">
                      <span>Read guide</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* BOTTOM BOOKING CTA */}
            <div className="bg-[#07152b] rounded-3xl p-8 text-white text-center space-y-4">
              <h3 className="text-xl sm:text-2xl font-black">
                Need A Master Technician On-Site Today?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
                Passionate Cooling & Heating provides $0 diagnostic fees with completed repairs and true 24/7/365 emergency dispatch across all of Clark County.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black px-6 py-3 rounded-xl text-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call (702) 858-1211</span>
                </a>
                <button
                  type="button"
                  onClick={() => onOpenBookingModal?.(`Service from Guide: ${post.title}`)}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-6 py-3 rounded-xl text-sm transition-colors"
                >
                  <span>Book Priority Dispatch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </main>

        </div>
      </div>

    </div>
  );
}
