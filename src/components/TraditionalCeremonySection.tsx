import React, { useState } from 'react';
import { Bird, Sparkles, Wine, ChevronRight, X, Heart } from 'lucide-react';
import { CEREMONY_RITES } from '../data/weddingData';
import { CeremonyRite } from '../types';

export const TraditionalCeremonySection: React.FC = () => {
  const [selectedRite, setSelectedRite] = useState<CeremonyRite | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Bird':
        return <Bird className="w-6 h-6 text-[#9D3027]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#234B52]" />;
      case 'Wine':
        return <Wine className="w-6 h-6 text-[#B4975A]" />;
      default:
        return <Heart className="w-6 h-6 text-[#9D3027]" />;
    }
  };

  return (
    <section id="tradition" className="relative py-20 px-6 bg-[#F5F0E6] text-[#24211D]">
      <div className="max-w-md mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="stamp-seal">傳統婚禮</span>
        </div>

        <h2 className="font-serif-kr text-3xl font-bold text-[#24211D] mb-1">
          전통의 아름다움
        </h2>
        <p className="font-batang text-xs text-[#B4975A] tracking-widest uppercase mb-6">
          Traditional Ceremony
        </p>

        {/* Intro Copy */}
        <p className="font-batang text-sm text-[#24211D]/80 leading-relaxed mb-10 px-4">
          오랜 시간 이어져 온 혼례의 뜻을 담아<br />
          저희 두 사람도 소중한 예를 갖추고<br />
          새로운 가정을 시작합니다.
        </p>

        {/* Rites Cards */}
        <div className="space-y-4 text-left">
          {CEREMONY_RITES.map((rite, idx) => (
            <div
              key={rite.id}
              onClick={() => setSelectedRite(rite)}
              className="group cursor-pointer p-6 rounded-2xl bg-[#F5F0E6] border border-[#B4975A]/40 shadow-md hover:shadow-xl hover:border-[#9D3027] transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-white/80 border border-[#B4975A]/20 shadow-sm">
                    {getIcon(rite.iconName)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#9D3027] font-serif-kr">
                        0{idx + 1}.
                      </span>
                      <h3 className="font-serif-kr text-xl font-bold text-[#24211D]">
                        {rite.title}
                      </h3>
                      <span className="text-xs text-[#B4975A] font-medium">({rite.hanja})</span>
                    </div>
                    <p className="font-batang text-xs text-[#24211D]/70 mt-1 line-clamp-2">
                      {rite.shortDesc}
                    </p>
                  </div>
                </div>

                <ChevronRight className="w-5 h-5 text-[#B4975A] group-hover:text-[#9D3027] group-hover:translate-x-1 transition-all shrink-0 mt-2" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedRite && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in font-batang text-[#24211D]">
          <div className="w-full max-w-md bg-[#F5F0E6] rounded-2xl border border-[#B4975A]/40 shadow-2xl p-6 relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-[#B4975A]/30 mb-4">
              <div className="flex items-center gap-3">
                <span className="stamp-seal">{selectedRite.hanja}</span>
                <h3 className="font-serif-kr text-xl font-bold text-[#24211D]">
                  {selectedRite.title} 이야기
                </h3>
              </div>
              <button
                onClick={() => setSelectedRite(null)}
                className="p-1 rounded-full text-[#24211D]/60 hover:text-[#24211D]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-[#24211D]/90">
              <div className="p-4 rounded-xl bg-[#24211D]/5 border border-[#B4975A]/20">
                <p className="font-bold text-[#9D3027] text-xs mb-1">상징과 의미</p>
                <p className="font-serif-kr text-sm text-[#24211D] font-semibold">
                  "{selectedRite.meaning}"
                </p>
              </div>

              <p>{selectedRite.fullDesc}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#B4975A]/30 text-center">
              <button
                onClick={() => setSelectedRite(null)}
                className="w-full py-2.5 rounded-xl bg-[#9D3027] text-[#F5F0E6] font-serif-kr font-bold text-xs hover:bg-[#83261e] transition-colors"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
