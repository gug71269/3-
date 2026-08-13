import React from 'react';
import { Heart, Share2, Copy, Sparkles, Check } from 'lucide-react';
import { COUPLE_INFO } from '../data/weddingData';

interface FooterSectionProps {
  onOpenRsvp: () => void;
  onShare: () => void;
  onToast: (msg: string) => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenRsvp, onShare, onToast }) => {
  const [linkCopied, setLinkCopied] = React.useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setLinkCopied(true);
    onToast('청첩장 링크가 복사되었습니다.');
    setTimeout(() => setLinkCopied(false), 2000);
  };

  return (
    <footer className="relative bg-[#24211D] text-[#F5F0E6] py-20 px-6 overflow-hidden">
      {/* Sunset Hanok Photo Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hanok_eaves_sunset_1786612174395.jpg"
          alt="노을 빛 한옥 처마"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#24211D] via-[#24211D]/80 to-[#24211D]/60" />
      </div>

      <div className="max-w-md mx-auto text-center relative z-10 font-batang">
        {/* Red Stamp */}
        <div className="mb-6 flex justify-center">
          <div className="w-14 h-14 rounded-xl border-2 border-[#9D3027] bg-[#9D3027]/20 flex flex-col items-center justify-center text-[#9D3027] font-serif-kr font-bold text-xs rotate-3 shadow-lg backdrop-blur-sm">
            <span>百年</span>
            <span>佳約</span>
          </div>
        </div>

        {/* Large Hanja Title */}
        <h2 className="font-serif-kr text-4xl font-bold tracking-widest text-[#F5F0E6] mb-2">
          百年佳約
        </h2>
        <p className="text-sm text-[#B4975A] tracking-wider mb-8">
          백 년의 약속을 나누며
        </p>

        {/* Closing Poem Card */}
        <div className="p-8 rounded-2xl bg-[#24211D]/80 border border-[#B4975A]/30 backdrop-blur-md shadow-2xl mb-10 space-y-6 text-sm leading-relaxed text-[#F5F0E6]/90">
          <p>
            백 년을 함께 걷기로 약속한 오늘,<br />
            저희의 시작을 함께해 주셔서<br />
            진심으로 감사합니다.
          </p>

          <div className="w-12 h-[1px] bg-[#B4975A]/40 mx-auto" />

          <p>
            서로에게 좋은 벗이 되고<br />
            서로의 가장 편안한 집이 되어<br />
            오래도록 행복하게 살아가겠습니다.
          </p>

          <div className="pt-4 border-t border-[#B4975A]/20">
            <p className="font-serif-kr text-lg font-bold text-[#F5F0E6]">
              신랑 {COUPLE_INFO.groom.name} <span className="text-[#9D3027] font-normal mx-1">·</span> 신부 {COUPLE_INFO.bride.name}
            </p>
            <p className="text-xs text-[#B4975A] mt-1 font-mono">
              2027. 05. 15
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 mb-12">
          <button
            onClick={onOpenRsvp}
            className="w-full py-3.5 bg-[#9D3027] hover:bg-[#83261e] text-[#F5F0E6] font-serif-kr font-bold text-sm rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
          >
            <Heart className="w-4 h-4 text-red-200 fill-current" />
            참석 여부 알리기 (RSVP)
          </button>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={onShare}
              className="py-3 bg-white/10 hover:bg-white/20 border border-[#B4975A]/40 text-[#F5F0E6] text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Share2 className="w-3.5 h-3.5 text-[#B4975A]" />
              카카오톡/SNS 공유
            </button>

            <button
              onClick={handleCopyLink}
              className="py-3 bg-white/10 hover:bg-white/20 border border-[#B4975A]/40 text-[#F5F0E6] text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              {linkCopied ? <Check className="w-3.5 h-3.5 text-[#B4975A]" /> : <Copy className="w-3.5 h-3.5 text-[#B4975A]" />}
              청첩장 링크 복사
            </button>
          </div>
        </div>

        {/* Footer Credit */}
        <p className="text-[11px] text-[#F5F0E6]/40 font-dodum">
          © 2027 백년가약 (百年佳約) 전통 혼례 에디토리얼
        </p>
      </div>
    </footer>
  );
};
