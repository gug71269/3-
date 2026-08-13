import React, { useState } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { InvitationSection } from './components/InvitationSection';
import { CoupleSection } from './components/CoupleSection';
import { DateCountdownSection } from './components/DateCountdownSection';
import { GallerySection } from './components/GallerySection';
import { TraditionalCeremonySection } from './components/TraditionalCeremonySection';
import { PyebaekSection } from './components/PyebaekSection';
import { LocationSection } from './components/LocationSection';
import { AccountSection } from './components/AccountSection';
import { WreathSection } from './components/WreathSection';
import { GuestbookSection } from './components/GuestbookSection';
import { FooterSection } from './components/FooterSection';
import { RsvpModal } from './components/RsvpModal';
import { Toast } from './components/Toast';
import { FallingMapleLeaves } from './components/FallingMapleLeaves';
import { RsvpForm } from './types';

export default function App() {
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '백년가약 (百年佳約) — 전통 혼례 모바일 청첩장',
          text: '2027년 5월 15일 토요일 오후 12시, 운현궁 라온홀에서 백년가약을 맺습니다.',
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled share
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('청첩장 링크가 복사되었습니다.');
    }
  };

  const handleRsvpSubmit = (data: RsvpForm) => {
    showToast(`${data.name} 님의 참석 정보가 전송되었습니다. 감사드립니다!`);
  };

  return (
    <div className="min-h-screen bg-[#F5F0E6] text-[#24211D] relative selection:bg-[#9D3027] selection:text-white font-batang">
      {/* Falling Maple Leaves Animation on Invitation Load */}
      <FallingMapleLeaves durationMs={5000} />

      {/* Background Subtle Hanji Radial Pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: 'radial-gradient(#24211D 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Decorative Fixed Corner Frame Lines for Large Screens */}
      <div className="hidden lg:block fixed top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-[#B4975A]/40 z-30 pointer-events-none" />
      <div className="hidden lg:block fixed top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-[#B4975A]/40 z-30 pointer-events-none" />
      <div className="hidden lg:block fixed bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-[#B4975A]/40 z-30 pointer-events-none" />
      <div className="hidden lg:block fixed bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-[#B4975A]/40 z-30 pointer-events-none" />

      {/* Main Container max-w-md for Authentic Mobile Centric Layout */}
      <div className="relative z-10 max-w-md mx-auto shadow-2xl bg-[#F5F0E6] border-x border-[#B4975A]/20 min-h-screen overflow-hidden">
        {/* Navigation Bar */}
        <HeaderNav
          onOpenRsvp={() => setRsvpOpen(true)}
          onShare={handleShare}
        />

        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Invitation Poem & Greeting */}
        <InvitationSection />

        {/* 3. Groom & Bride Couple Section */}
        <CoupleSection />

        {/* 4. Auspicious Date & Countdown */}
        <DateCountdownSection onToast={showToast} />

        {/* 5. Photo Gallery */}
        <GallerySection />

        {/* 6. Traditional Ceremony Rites Guide */}
        <TraditionalCeremonySection />

        {/* 7. Pyebaek Family Rites Section */}
        <PyebaekSection />

        {/* 8. Location & Transport */}
        <LocationSection onToast={showToast} />

        {/* 9. Account Details for Gifts */}
        <AccountSection onToast={showToast} />

        {/* 10. Send Wedding Wreath */}
        <WreathSection onToast={showToast} />

        {/* 11. Guestbook */}
        <GuestbookSection onToast={showToast} />

        {/* 12. Footer */}
        <FooterSection
          onOpenRsvp={() => setRsvpOpen(true)}
          onShare={handleShare}
          onToast={showToast}
        />
      </div>

      {/* Floating Bottom Action Sticky Bar (Mobile Only) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-full max-w-xs px-4 sm:hidden">
        <button
          onClick={() => setRsvpOpen(true)}
          className="w-full py-3 bg-[#9D3027] hover:bg-[#83261e] text-[#F5F0E6] font-serif-kr font-bold text-xs rounded-full shadow-2xl border border-[#B4975A]/40 flex items-center justify-center gap-2 transition-transform active:scale-95"
        >
          <span className="stamp-seal bg-white text-[#9D3027] border-white text-[9px] py-0">出席</span>
          <span>참석 여부 알리기 (RSVP)</span>
        </button>
      </div>

      {/* RSVP Modal */}
      <RsvpModal
        isOpen={rsvpOpen}
        onClose={() => setRsvpOpen(false)}
        onSubmit={handleRsvpSubmit}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}
    </div>
  );
}
