import React from 'react';

export const PyebaekSection: React.FC = () => {
  return (
    <section id="pyebaek" className="relative py-20 px-6 bg-[#24211D] text-[#F5F0E6] overflow-hidden">
      {/* Decorative Gold Corner */}
      <div className="max-w-md mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="stamp-seal bg-[#9D3027] text-white border-[#9D3027]">幣帛</span>
        </div>

        <h2 className="font-serif-kr text-3xl font-bold text-[#F5F0E6] mb-1">
          폐백 이야기
        </h2>
        <p className="font-batang text-xs text-[#B4975A] tracking-widest uppercase mb-10">
          The Sacred Family Greeting
        </p>

        {/* Image Card */}
        <div className="relative rounded-2xl overflow-hidden border border-[#B4975A]/40 shadow-2xl mb-8">
          <img
            src="/src/assets/images/pyebaek_ceremony_1786612156641.jpg"
            alt="전통 폐백 의식 상차림"
            referrerPolicy="no-referrer"
            className="w-full h-72 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#24211D] via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-4 left-4 right-4 text-center">
            <span className="font-serif-kr text-sm text-[#B4975A] font-bold">
              "두 가족이 하나의 인연으로 이어지는 고귀한 순간"
            </span>
          </div>
        </div>

        {/* Narrative Copy */}
        <div className="space-y-6 font-batang text-sm leading-relaxed text-[#F5F0E6]/90 p-6 rounded-2xl bg-white/5 border border-[#B4975A]/20 backdrop-blur-sm">
          <p>
            혼례를 마친 뒤<br />
            신랑과 신부가 부모님께 예를 올리고<br />
            새로운 가족으로 첫 인사를 드립니다.
          </p>

          <div className="w-12 h-[1px] bg-[#B4975A]/40 mx-auto" />

          <p>
            두 사람이 하나 되는 것뿐 아니라<br />
            두 가족이 하나의 인연으로 이어지는<br />
            뜻깊은 순간입니다.
          </p>
        </div>

        {/* Core Emotional Poem */}
        <div className="mt-10 p-8 rounded-2xl border-2 border-[#B4975A]/40 bg-[#24211D] relative">
          <div className="space-y-3 font-serif-kr text-lg text-[#B4975A] font-bold leading-relaxed">
            <p className="text-[#F5F0E6]">한 사람을 만나</p>
            <p className="text-[#B4975A]">한 가족이 되고</p>
            <p className="text-[#9D3027]">한 울타리를 이루어 갑니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
