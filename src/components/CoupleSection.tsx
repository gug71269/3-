import React, { useState } from 'react';
import { Phone, MessageSquare, X } from 'lucide-react';
import { COUPLE_INFO } from '../data/weddingData';

export const CoupleSection: React.FC = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section id="couple" className="relative py-20 px-6 bg-[#F5F0E6] text-[#24211D]">
      <div className="max-w-md mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="stamp-seal">緣</span>
        </div>

        <h2 className="font-serif-kr text-3xl font-bold text-[#24211D] mb-1">
          인연
        </h2>
        <p className="font-batang text-xs text-[#B4975A] tracking-widest uppercase mb-10">
          Groom & Bride
        </p>

        {/* Main Photo Card */}
        <div className="relative mb-10 rounded-2xl overflow-hidden border border-[#B4975A]/40 shadow-xl">
          <img
            src="/src/assets/images/traditional_couple_1786612138535.jpg"
            alt="신랑 김현우 신부 이서연 전통한복"
            referrerPolicy="no-referrer"
            className="w-full h-80 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#24211D]/80 via-transparent to-transparent flex flex-col justify-end p-6 text-[#F5F0E6] text-left">
            <span className="font-batang text-xs text-[#B4975A] mb-1">百年佳約 · 緣</span>
            <h3 className="font-serif-kr text-xl font-bold">
              김현우 <span className="text-[#9D3027] font-normal mx-1">♥</span> 이서연
            </h3>
          </div>
        </div>

        {/* Family Relationship Traditional Text Cards */}
        <div className="space-y-6 font-batang text-base leading-relaxed">
          {/* Groom Side */}
          <div className="p-6 rounded-xl bg-[#F5F0E6] border border-[#B4975A]/30 shadow-md">
            <div className="flex items-center justify-between mb-3 border-b border-[#B4975A]/20 pb-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-[#234B52] text-[#F5F0E6]">
                신랑측
              </span>
              <span className="font-serif-kr text-lg font-bold text-[#234B52]">
                신랑 {COUPLE_INFO.groom.name}
              </span>
            </div>
            <p className="text-sm text-[#24211D]/80">
              아버지 <strong className="text-[#24211D]">{COUPLE_INFO.groom.father}</strong> · 어머니 <strong className="text-[#24211D]">{COUPLE_INFO.groom.mother}</strong> 의 {COUPLE_INFO.groom.relation}
            </p>
          </div>

          {/* Center Knot Divider */}
          <div className="flex items-center justify-center gap-3 my-2 text-[#9D3027]">
            <div className="h-[1px] w-16 bg-[#B4975A]/40" />
            <span className="text-sm font-bold">인연(緣)</span>
            <div className="h-[1px] w-16 bg-[#B4975A]/40" />
          </div>

          {/* Bride Side */}
          <div className="p-6 rounded-xl bg-[#F5F0E6] border border-[#B4975A]/30 shadow-md">
            <div className="flex items-center justify-between mb-3 border-b border-[#B4975A]/20 pb-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-[#9D3027] text-[#F5F0E6]">
                신부측
              </span>
              <span className="font-serif-kr text-lg font-bold text-[#9D3027]">
                신부 {COUPLE_INFO.bride.name}
              </span>
            </div>
            <p className="text-sm text-[#24211D]/80">
              아버지 <strong className="text-[#24211D]">{COUPLE_INFO.bride.father}</strong> · 어머니 <strong className="text-[#24211D]">{COUPLE_INFO.bride.mother}</strong> 의 {COUPLE_INFO.bride.relation}
            </p>
          </div>
        </div>

        {/* Contact Trigger Button */}
        <div className="mt-8">
          <button
            onClick={() => setContactModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#24211D] text-[#F5F0E6] font-serif-kr font-bold text-sm shadow-lg hover:bg-[#38332d] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#B4975A]" />
            신랑 · 신부에게 연락하기
          </button>
        </div>
      </div>

      {/* Contact Details Modal */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in font-batang">
          <div className="w-full max-w-sm bg-[#F5F0E6] text-[#24211D] rounded-2xl border border-[#B4975A]/40 shadow-2xl p-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#B4975A]/30 mb-4">
              <h3 className="font-serif-kr font-bold text-lg">연락처 안내</h3>
              <button
                onClick={() => setContactModalOpen(false)}
                className="p-1 rounded-full text-[#24211D]/60 hover:text-[#24211D]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm">
              {/* Groom Contacts */}
              <div className="p-3 bg-white/70 rounded-xl border border-[#B4975A]/20">
                <p className="font-bold text-[#234B52] mb-2 text-xs">신랑 측</p>
                <div className="flex items-center justify-between py-1.5 border-b border-[#24211D]/5">
                  <span>신랑 {COUPLE_INFO.groom.name}</span>
                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${COUPLE_INFO.groom.phone}`}
                      className="p-1.5 rounded bg-[#234B52] text-white hover:opacity-90"
                      title="전화 연결"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={`sms:${COUPLE_INFO.groom.phone}`}
                      className="p-1.5 rounded bg-[#24211D] text-white hover:opacity-90"
                      title="문자 보내기"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[#24211D]/5 text-xs text-[#24211D]/80">
                  <span>신랑 부친 {COUPLE_INFO.groom.father}</span>
                  <a href="tel:010-0000-0000" className="text-[#234B52] font-medium underline">
                    전화하기
                  </a>
                </div>
                <div className="flex items-center justify-between py-1.5 text-xs text-[#24211D]/80">
                  <span>신랑 모친 {COUPLE_INFO.groom.mother}</span>
                  <a href="tel:010-0000-0000" className="text-[#234B52] font-medium underline">
                    전화하기
                  </a>
                </div>
              </div>

              {/* Bride Contacts */}
              <div className="p-3 bg-white/70 rounded-xl border border-[#B4975A]/20">
                <p className="font-bold text-[#9D3027] mb-2 text-xs">신부 측</p>
                <div className="flex items-center justify-between py-1.5 border-b border-[#24211D]/5">
                  <span>신부 {COUPLE_INFO.bride.name}</span>
                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${COUPLE_INFO.bride.phone}`}
                      className="p-1.5 rounded bg-[#9D3027] text-white hover:opacity-90"
                      title="전화 연결"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={`sms:${COUPLE_INFO.bride.phone}`}
                      className="p-1.5 rounded bg-[#24211D] text-white hover:opacity-90"
                      title="문자 보내기"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[#24211D]/5 text-xs text-[#24211D]/80">
                  <span>신부 부친 {COUPLE_INFO.bride.father}</span>
                  <a href="tel:010-0000-0000" className="text-[#9D3027] font-medium underline">
                    전화하기
                  </a>
                </div>
                <div className="flex items-center justify-between py-1.5 text-xs text-[#24211D]/80">
                  <span>신부 모친 {COUPLE_INFO.bride.mother}</span>
                  <a href="tel:010-0000-0000" className="text-[#9D3027] font-medium underline">
                    전화하기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
