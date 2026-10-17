'use client';

import { Heart, MessageCircle, BadgeCheck, ExternalLink } from 'lucide-react';
import { INSTAGRAM_POSTS } from '@/lib/mockData';
import { siteConfig } from '@/config/site';

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function InstagramFeed() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-md space-y-6">
      
      {/* Instagram Profile Header Mockup */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
        
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full p-[2.5px] bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex-shrink-0">
            <div className="w-full h-full rounded-full bg-white p-0.5">
              <div className="w-full h-full rounded-full bg-blue-700 flex items-center justify-center text-white font-black text-lg">
                PC
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="font-extrabold text-base sm:text-lg text-slate-900">
                {siteConfig.contact.instagramHandle}
              </h4>
              <BadgeCheck className="w-4 h-4 text-blue-600 fill-blue-600 text-white" />
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              {siteConfig.brand.name} 공식 계정 · 생생한 시공 비포&애프터 현장 기록
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-600 mt-1 font-semibold">
              <span>게시물 <strong className="text-slate-900 font-bold">1,240</strong></span>
              <span>팔로워 <strong className="text-slate-900 font-bold">18.5K</strong></span>
              <span>팔로잉 <strong className="text-slate-900 font-bold">42</strong></span>
            </div>
          </div>
        </div>

        <a
          href={siteConfig.contact.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-rose-500 to-amber-500 hover:opacity-90 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm transition-all cursor-pointer active:scale-95"
        >
          <InstagramIcon className="w-4 h-4" />
          <span>인스타그램 바로가기</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

      </div>

      {/* Grid of 6 Photos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {INSTAGRAM_POSTS.map((post) => (
          <div
            key={post.id}
            className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-100 shadow-inner cursor-pointer"
          >
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundImage: `url('${post.image}')` }}
            />

            {/* Hover Dark Overlay with stats and caption snippet */}
            <div className="absolute inset-0 bg-slate-950/75 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-3 text-white">
              <div className="flex items-center justify-center gap-3 h-full">
                <div className="flex items-center gap-1 text-xs font-bold">
                  <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold">
                  <MessageCircle className="w-4 h-4 fill-white text-white" />
                  <span>{post.comments}</span>
                </div>
              </div>
              <p className="text-[10px] text-slate-200 line-clamp-2 leading-tight">
                {post.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-2">
        <p className="text-xs text-slate-400">
          #프리미어클린 #입주청소 #이사청소 #사무실청소 #청소의기준 태그로 고객님들의 실시간 후기를 확인해보세요.
        </p>
      </div>

    </div>
  );
}
