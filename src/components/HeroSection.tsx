import React, { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { COUPLE_INFO } from '../data/weddingData';
import heroBgImg from '../assets/images/hanok_hero_bg_1786612124545.jpg';

export const HeroSection: React.FC = () => {
  const [opened, setOpened] = useState(false);

  const handleOpenEnvelope = () => {
    setOpened(true);
    const target = document.querySelector('#invitation');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between items-center text-center overflow-hidden bg-[#24211D] text-[#F5F0E6]">
      {/* Background Image with Warm Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImg || '/assets/images/hanok_hero_bg_1786612124545.jpg'}
          alt="운현궁 한옥 처마 배경"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/assets/images/hanok_hero_bg_1786612124545.jpg';
          }}
          className="w-full h-full object-cover object-center opacity-45 scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#24211D] via-[#24211D]/60 to-[#24211D]/40" />
      </div>

      {/* Decorative Traditional Border Header */}
      <div className="relative z-10 pt-16 px-6 max-w-md w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B4975A]/60 bg-[#24211D]/60 backdrop-blur-sm text-xs font-batang text-[#B4975A] tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>전통 혼례 에디토리얼</span>
        </div>
      </div>

      {/* Center Calligraphy & Main Title */}
      <div className="relative z-10 px-6 py-12 max-w-md w-full flex flex-col items-center">
        {/* Red Traditional Stamp */}
        <div className="mb-6">
          <div className="w-12 h-12 rounded-lg border-2 border-[#9D3027] bg-[#9D3027]/20 flex items-center justify-center text-[#9D3027] font-serif-kr font-bold text-lg rotate-3 shadow-lg backdrop-blur-sm">
            佳約
          </div>
        </div>

        {/* Hanja Large Title */}
        <h1 className="font-serif-kr text-5xl sm:text-6xl font-bold tracking-widest text-[#F5F0E6] drop-shadow-md mb-2">
          百年佳約
        </h1>

        {/* Korean Subtitle */}
        <p className="font-batang text-2xl tracking-wider text-[#B4975A] font-medium mb-8">
          백년가약
        </p>

        {/* Traditional Divider */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#B4975A] to-transparent mb-8" />

        {/* Groom & Bride Names */}
        <div className="text-2xl font-serif-kr font-semibold text-[#F5F0E6] tracking-widest mb-4 flex items-center gap-3">
          <span>신랑 {COUPLE_INFO.groom.name}</span>
          <span className="text-[#9D3027] text-lg font-normal">·</span>
          <span>신부 {COUPLE_INFO.bride.name}</span>
        </div>

        {/* Date & Location */}
        <p className="font-batang text-sm text-[#F5F0E6]/90 tracking-wide mb-1">
          {COUPLE_INFO.event.dateDisplay} {COUPLE_INFO.event.timeDisplay}
        </p>
        <p className="font-batang text-xs text-[#B4975A] tracking-widest">
          {COUPLE_INFO.event.venueName}
        </p>

        {/* Warm Introductory Poem Copy */}
        <div className="mt-10 p-5 rounded-xl border border-[#B4975A]/30 bg-[#24211D]/70 backdrop-blur-md text-center max-w-xs">
          <p className="font-batang text-sm leading-relaxed text-[#F5F0E6]/90">
            좋은 날, 좋은 사람을 만났습니다.
          </p>
          <p className="font-batang text-xs leading-relaxed text-[#B4975A] mt-2">
            그리고 오늘<br />그 사람과 평생을 약속하려 합니다.
          </p>
        </div>
      </div>

      {/* Bottom Envelope Trigger */}
      <div className="relative z-10 pb-12 px-6 w-full max-w-md flex flex-col items-center">
        <button
          onClick={handleOpenEnvelope}
          className="group flex flex-col items-center gap-2 text-[#B4975A] hover:text-[#F5F0E6] transition-colors cursor-pointer"
        >
          <span className="font-batang text-xs tracking-widest border-b border-[#B4975A]/50 pb-0.5 group-hover:border-[#F5F0E6]">
            청첩장을 펼쳐주세요
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce text-[#9D3027]" />
        </button>
      </div>
    </section>
  );
};
