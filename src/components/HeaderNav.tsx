import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Share2 } from 'lucide-react';
import { AudioPlayer } from './AudioPlayer';

interface HeaderNavProps {
  onOpenRsvp: () => void;
  onShare: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ onOpenRsvp, onShare }) => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#invitation', label: '초대글 (婚禮之日)' },
    { href: '#couple', label: '신랑·신부 (緣)' },
    { href: '#date', label: '혼례일 (吉日)' },
    { href: '#gallery', label: '갤러리 (花樣年華)' },
    { href: '#tradition', label: '전통혼례 (傳統婚禮)' },
    { href: '#pyebaek', label: '폐백 이야기 (幣帛)' },
    { href: '#location', label: '오시는 길 (來賓之路)' },
    { href: '#account', label: '마음 전하실 곳 (祝意)' },
    { href: '#wreath', label: '축하 화환 (賀花)' },
    { href: '#guestbook', label: '축하 방명록 (祝辭)' },
  ];

  const handleNavClick = (href: string) => {
    setDrawerOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Floating Glass Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F5F0E6]/90 backdrop-blur-md shadow-md border-b border-[#B4975A]/20 py-2.5 px-4'
            : 'bg-transparent py-4 px-4 text-[#24211D]'
        }`}
      >
        <div className="max-w-md mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-left group">
            <span className="stamp-seal text-[10px]">佳約</span>
            <span className="font-serif-kr font-bold text-base tracking-wider text-[#24211D]">
              백년가약
            </span>
          </a>

          <div className="flex items-center gap-2">
            <AudioPlayer />

            <button
              onClick={onShare}
              className="p-1.5 rounded-full bg-[#24211D]/5 hover:bg-[#24211D]/10 text-[#24211D] transition-colors"
              aria-label="공유하기"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              onClick={() => setDrawerOpen(true)}
              className="p-1.5 rounded-full bg-[#24211D]/5 hover:bg-[#24211D]/10 text-[#24211D] transition-colors"
              aria-label="메뉴 열기"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Side Navigation Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end animate-fade-in">
          <div className="w-4/5 max-w-xs bg-[#F5F0E6] text-[#24211D] h-full p-6 flex flex-col justify-between border-l border-[#B4975A]/30 shadow-2xl font-batang overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#B4975A]/30 mb-6">
                <div>
                  <span className="stamp-seal text-xs">百年佳約</span>
                  <h3 className="text-lg font-serif-kr font-bold mt-1">목차</h3>
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-1 rounded-full text-[#24211D]/70 hover:text-[#24211D]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="space-y-3">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left py-2 px-3 rounded-lg hover:bg-[#24211D]/5 text-sm font-medium transition-colors border-b border-[#B4975A]/10 text-[#24211D]/90 flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-[#9D3027] text-xs">›</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#B4975A]/30 space-y-3">
              <button
                onClick={() => {
                  setDrawerOpen(false);
                  onOpenRsvp();
                }}
                className="w-full py-2.5 bg-[#9D3027] text-[#F5F0E6] font-bold font-serif-kr rounded-lg flex items-center justify-center gap-2 shadow hover:bg-[#83261e] transition-colors"
              >
                <Heart className="w-4 h-4 fill-current text-red-200" />
                참석 여부 전달하기
              </button>
              <p className="text-center text-[11px] text-[#24211D]/50 font-dodum">
                2027. 05. 15 운현궁 한옥마을
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
