import React from 'react';

export const InvitationSection: React.FC = () => {
  return (
    <section id="invitation" className="relative py-20 px-6 bg-[#F5F0E6] bg-hanji text-[#24211D]">
      <div className="max-w-md mx-auto text-center">
        {/* Subtle Section Header */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="stamp-seal">婚禮之日</span>
        </div>

        <h2 className="font-serif-kr text-3xl font-bold text-[#24211D] mb-1">
          혼례의 날
        </h2>
        <p className="font-batang text-xs text-[#B4975A] tracking-widest uppercase mb-10">
          The Wedding Day
        </p>

        {/* Traditional Parchment Card */}
        <div className="relative p-8 rounded-2xl bg-[#F5F0E6] border border-[#B4975A]/40 shadow-xl overflow-hidden">
          {/* Top Traditional Corner Lattice Ornaments */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#B4975A]/60" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#B4975A]/60" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#B4975A]/60" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#B4975A]/60" />

          {/* Invitation Copy */}
          <div className="space-y-6 font-batang text-base leading-relaxed text-[#24211D]/90">
            <p>
              귀한 걸음 하시어<br />
              두 사람의 인연이 하나 되는 날을<br />
              함께 축복해 주시기를 바랍니다.
            </p>

            <div className="w-12 h-[1px] bg-[#B4975A]/40 mx-auto" />

            <p>
              서로 다른 길을 걸어온 두 사람이 만나<br />
              이제는 한 길을 함께 걸으려 합니다.
            </p>

            <div className="w-12 h-[1px] bg-[#B4975A]/40 mx-auto" />

            <p>
              저희의 첫걸음에<br />
              따뜻한 마음으로 함께해 주신다면<br />
              더없는 기쁨으로 간직하겠습니다.
            </p>
          </div>

          {/* Red Traditional Stamp at Bottom */}
          <div className="mt-8 flex justify-center">
            <div className="w-14 h-14 rounded-lg border-2 border-[#9D3027] bg-[#9D3027]/10 flex flex-col items-center justify-center text-[#9D3027] font-serif-kr font-bold text-xs -rotate-6 shadow-sm">
              <span>백년</span>
              <span>가약</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
