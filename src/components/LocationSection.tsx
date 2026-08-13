import React, { useState } from 'react';
import { MapPin, Navigation, Car, Bus, Copy, ExternalLink, Check } from 'lucide-react';
import { COUPLE_INFO } from '../data/weddingData';

interface LocationSectionProps {
  onToast: (msg: string) => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onToast }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(COUPLE_INFO.event.address);
    setCopied(true);
    onToast('주소가 클립보드에 복사되었습니다.');
    setTimeout(() => setCopied(false), 2000);
  };

  const mapApps = [
    {
      name: '네이버 지도',
      color: 'bg-[#03C75A] text-white',
      url: `https://map.naver.com/v5/search/${encodeURIComponent(COUPLE_INFO.event.venueName)}`,
    },
    {
      name: '카카오맵',
      color: 'bg-[#FEE500] text-[#191919]',
      url: `https://map.kakao.com/link/search/${encodeURIComponent(COUPLE_INFO.event.venueName)}`,
    },
    {
      name: '티맵 (T map)',
      color: 'bg-[#002B49] text-white',
      url: `https://tmap.co.kr/`,
    },
  ];

  return (
    <section id="location" className="relative py-20 px-6 bg-[#F5F0E6] text-[#24211D]">
      <div className="max-w-md mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="stamp-seal">來賓之路</span>
        </div>

        <h2 className="font-serif-kr text-3xl font-bold text-[#24211D] mb-1">
          오시는 길
        </h2>
        <p className="font-batang text-xs text-[#B4975A] tracking-widest uppercase mb-10">
          Location & Transportation
        </p>

        {/* Venue Title & Address */}
        <div className="p-6 rounded-2xl bg-[#F5F0E6] border border-[#B4975A]/40 shadow-xl mb-6">
          <h3 className="font-serif-kr text-xl font-bold text-[#24211D] mb-2 flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5 text-[#9D3027]" />
            {COUPLE_INFO.event.venueName}
          </h3>
          <p className="font-batang text-sm text-[#24211D]/80 mb-1">
            {COUPLE_INFO.event.address}
          </p>
          <p className="font-batang text-xs text-[#B4975A] mb-4">
            ({COUPLE_INFO.event.detailAddress})
          </p>

          <button
            onClick={handleCopyAddress}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#24211D] text-[#F5F0E6] text-xs font-serif-kr font-bold hover:bg-[#38332d] transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#B4975A]" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? '주소 복사 완료' : '주소 복사하기'}</span>
          </button>
        </div>

        {/* Interactive Stylized Map Visual Frame */}
        <div className="relative rounded-2xl border border-[#B4975A]/40 overflow-hidden shadow-lg mb-8 bg-[#EFE9DC] p-6 text-left font-batang">
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#9D3027] text-white text-[10px] font-bold">
            지하철 3호선 안국역 4번출구
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[#24211D] font-bold text-sm">
              <Navigation className="w-4 h-4 text-[#9D3027]" />
              <span>운현궁 야외 한옥 혼례장 위치</span>
            </div>

            <div className="p-4 rounded-xl bg-white/80 border border-[#B4975A]/20 text-xs leading-relaxed space-y-2">
              <p className="text-[#234B52] font-bold">
                🚩 서울 종로구 삼일대로 464 (운현궁 정문 입구)
              </p>
              <p className="text-[#24211D]/70">
                정문으로 입장하시면 유생 도포를 입은 안내 요원이 혼례 마당으로 안내해 드립니다.
              </p>
            </div>
          </div>

          {/* Map App Action Buttons */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            {mapApps.map((app) => (
              <a
                key={app.name}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`py-2 px-1 rounded-lg ${app.color} font-bold text-[11px] text-center flex items-center justify-center gap-1 shadow-sm hover:opacity-90 transition-opacity`}
              >
                <span>{app.name}</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            ))}
          </div>
        </div>

        {/* Transportation Guide Accordions / Cards */}
        <div className="space-y-4 text-left font-batang text-sm">
          {/* Subway & Bus */}
          <div className="p-5 rounded-xl bg-[#F5F0E6] border border-[#B4975A]/30 shadow-sm">
            <div className="flex items-center gap-2 font-bold text-[#234B52] mb-2 font-serif-kr">
              <Bus className="w-4 h-4" />
              <span>지하철 & 버스</span>
            </div>
            <ul className="space-y-1.5 text-xs text-[#24211D]/80 leading-relaxed pl-1">
              <li>
                <strong className="text-[#234B52]">3호선 안국역</strong> 4번 출구에서 도보 1분 (약 100m)
              </li>
              <li>
                <strong className="text-[#234B52]">5호선 종로3가역</strong> 5번 출구에서 도보 5분
              </li>
              <li>
                <strong>버스:</strong> 안국역·종로경찰서 정류장 하차 (간선 109, 151, 162, 171, 172)
              </li>
            </ul>
          </div>

          {/* Car & Parking */}
          <div className="p-5 rounded-xl bg-[#F5F0E6] border border-[#B4975A]/30 shadow-sm">
            <div className="flex items-center gap-2 font-bold text-[#9D3027] mb-2 font-serif-kr">
              <Car className="w-4 h-4" />
              <span>자가용 & 주차 안내</span>
            </div>
            <ul className="space-y-1.5 text-xs text-[#24211D]/80 leading-relaxed pl-1">
              <li>
                네비게이션에 <strong>'운현궁'</strong> 또는 <strong>'삼환빌딩 주차장'</strong> 검색
              </li>
              <li>
                <strong>인근 주차장:</strong> 삼환빌딩 주차장 (도보 2분) 및 덕성여대 종로캠퍼스 주차장
              </li>
              <li className="text-[#9D3027] font-semibold">
                * 하객 안내 데스크에서 2시간 무료 주차권을 받아 가세요.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
