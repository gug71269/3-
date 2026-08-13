import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, Download } from 'lucide-react';
import { WEDDING_DATE, COUPLE_INFO } from '../data/weddingData';

interface DateCountdownProps {
  onToast: (msg: string) => void;
}

export const DateCountdownSection: React.FC<DateCountdownProps> = ({ onToast }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(WEDDING_DATE).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Calendar matrix for May 2027
  // May 1, 2027 is Saturday. Total days: 31
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const may2027Grid = [
    // week 1
    null, null, null, null, null, null, 1,
    // week 2
    2, 3, 4, 5, 6, 7, 8,
    // week 3
    9, 10, 11, 12, 13, 14, 15,
    // week 4
    16, 17, 18, 19, 20, 21, 22,
    // week 5
    23, 24, 25, 26, 27, 28, 29,
    // week 6
    30, 31, null, null, null, null, null,
  ];

  const handleDownloadIcs = () => {
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Baeknyeongayag//Wedding Invitation//KO
BEGIN:VEVENT
SUMMARY:김현우 ♥ 이서연 백년가약 (전통 혼례)
DESCRIPTION:신랑 김현우와 신부 이서연의 전통 혼례에 초대합니다.\\n장소: 운현궁 한옥마을
LOCATION:서울특별시 종로구 삼일대로 464 (운현궁)
DTSTART:20270515T030000Z
DTEND:20270515T060000Z
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'wedding-20270515.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onToast('캘린더 일정(ICS) 파일이 다운로드되었습니다.');
  };

  return (
    <section id="date" className="relative py-20 px-6 bg-[#F5F0E6] text-[#24211D]">
      <div className="max-w-md mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="stamp-seal">吉日</span>
        </div>

        <h2 className="font-serif-kr text-3xl font-bold text-[#24211D] mb-1">
          혼례일
        </h2>
        <p className="font-batang text-xs text-[#B4975A] tracking-widest uppercase mb-8">
          The Auspicious Date
        </p>

        {/* Date Big Display Card */}
        <div className="p-6 rounded-2xl bg-[#F5F0E6] border border-[#B4975A]/40 shadow-xl mb-8">
          <p className="font-serif-kr text-2xl font-bold text-[#24211D] mb-1">
            {COUPLE_INFO.event.dateDisplay}
          </p>
          <p className="font-batang text-lg font-semibold text-[#9D3027] mb-2 flex items-center justify-center gap-1.5">
            <Clock className="w-4 h-4" />
            {COUPLE_INFO.event.timeDisplay}
          </p>
          <p className="font-batang text-xs text-[#24211D]/60 tracking-wider">
            {COUPLE_INFO.event.lunarDisplay} · {COUPLE_INFO.event.venueName}
          </p>
        </div>

        {/* May 2027 Calendar Grid */}
        <div className="p-6 rounded-2xl bg-[#F5F0E6] border border-[#B4975A]/30 shadow-md mb-8">
          <div className="font-serif-kr text-lg font-bold text-[#24211D] mb-4">
            2027年 5月
          </div>

          <div className="grid grid-cols-7 gap-1 text-xs font-batang text-center mb-2">
            {daysOfWeek.map((day, idx) => (
              <div
                key={day}
                className={`py-1 font-bold ${
                  idx === 0 ? 'text-[#9D3027]' : idx === 6 ? 'text-[#234B52]' : 'text-[#24211D]/70'
                }`}
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 text-sm font-batang text-center">
            {may2027Grid.map((day, index) => {
              const isWeddingDay = day === 15;
              const isSunday = index % 7 === 0;
              const isSaturday = index % 7 === 6;

              if (day === null) {
                return <div key={`empty-${index}`} className="p-2" />;
              }

              return (
                <div
                  key={day}
                  className={`p-2 rounded-full relative flex items-center justify-center font-medium ${
                    isWeddingDay
                      ? 'bg-[#9D3027] text-white font-bold shadow-md scale-105'
                      : isSunday
                      ? 'text-[#9D3027]'
                      : isSaturday
                      ? 'text-[#234B52]'
                      : 'text-[#24211D]/80'
                  }`}
                >
                  {day}
                  {isWeddingDay && (
                    <span className="absolute -top-1 -right-1 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B4975A] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B4975A]"></span>
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Countdown Counter */}
        <div className="p-6 rounded-2xl bg-[#24211D] text-[#F5F0E6] shadow-xl border border-[#B4975A]/40 mb-6">
          <p className="font-batang text-xs text-[#B4975A] tracking-widest uppercase mb-2">
            우리의 혼례까지
          </p>

          <div className="font-serif-kr text-3xl font-bold text-[#9D3027] mb-4">
            D - {timeLeft.days}
          </div>

          <div className="grid grid-cols-4 gap-2 text-center font-batang text-xs">
            <div className="p-2 rounded bg-white/10 border border-white/10">
              <span className="block text-lg font-bold text-[#F5F0E6]">{timeLeft.days}</span>
              <span className="text-[10px] text-[#B4975A]">DAYS</span>
            </div>
            <div className="p-2 rounded bg-white/10 border border-white/10">
              <span className="block text-lg font-bold text-[#F5F0E6]">{timeLeft.hours}</span>
              <span className="text-[10px] text-[#B4975A]">HOURS</span>
            </div>
            <div className="p-2 rounded bg-white/10 border border-white/10">
              <span className="block text-lg font-bold text-[#F5F0E6]">{timeLeft.minutes}</span>
              <span className="text-[10px] text-[#B4975A]">MINS</span>
            </div>
            <div className="p-2 rounded bg-white/10 border border-white/10">
              <span className="block text-lg font-bold text-[#F5F0E6]">{timeLeft.seconds}</span>
              <span className="text-[10px] text-[#B4975A]">SECS</span>
            </div>
          </div>
        </div>

        {/* Calendar Add Button */}
        <button
          onClick={handleDownloadIcs}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#B4975A] bg-[#F5F0E6] text-[#24211D] hover:bg-[#B4975A] hover:text-[#F5F0E6] font-serif-kr font-bold text-xs transition-colors shadow-sm"
        >
          <Download className="w-3.5 h-3.5 text-[#9D3027]" />
          일정 캘린더 저장하기 (.ICS)
        </button>
      </div>
    </section>
  );
};
