import React, { useState } from 'react';
import { ChevronDown, Copy, Check, Heart } from 'lucide-react';
import { COUPLE_INFO } from '../data/weddingData';

interface AccountSectionProps {
  onToast: (msg: string) => void;
}

export const AccountSection: React.FC<AccountSectionProps> = ({ onToast }) => {
  const [groomOpen, setGroomOpen] = useState(true);
  const [brideOpen, setBrideOpen] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const handleCopy = (bank: string, accountNum: string, holder: string) => {
    const textToCopy = `${bank} ${accountNum} (${holder})`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedAccount(accountNum);
    onToast(`${holder} 님의 계좌번호가 복사되었습니다.`);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  return (
    <section id="account" className="relative py-20 px-6 bg-[#F5F0E6] bg-hanji text-[#24211D]">
      <div className="max-w-md mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="stamp-seal">祝意</span>
        </div>

        <h2 className="font-serif-kr text-3xl font-bold text-[#24211D] mb-1">
          마음을 전하는 곳
        </h2>
        <p className="font-batang text-xs text-[#B4975A] tracking-widest uppercase mb-6">
          Account Details
        </p>

        {/* Warm Copy */}
        <p className="font-batang text-sm text-[#24211D]/80 leading-relaxed mb-8 px-4">
          함께하지 못하시더라도<br />
          보내주시는 따뜻한 마음을<br />
          감사히 간직하겠습니다.
        </p>

        {/* Accordions */}
        <div className="space-y-4 text-left font-batang">
          {/* Groom Side Accordion */}
          <div className="rounded-2xl bg-[#F5F0E6] border border-[#B4975A]/40 shadow-md overflow-hidden">
            <button
              onClick={() => setGroomOpen(!groomOpen)}
              className="w-full p-5 flex items-center justify-between bg-[#234B52] text-[#F5F0E6] font-serif-kr font-bold text-base transition-colors"
            >
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#B4975A]" />
                <span>신랑측 계좌번호 안내</span>
              </div>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${groomOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {groomOpen && (
              <div className="p-5 space-y-4 bg-white/70 animate-fade-in text-xs">
                {/* Groom */}
                <div className="p-3.5 rounded-xl border border-[#B4975A]/20 bg-white">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-[#234B52] text-sm">
                      신랑 {COUPLE_INFO.groom.name}
                    </span>
                    <span className="text-[11px] text-[#24211D]/60">{COUPLE_INFO.groom.account.bank}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-mono text-sm tracking-wide font-semibold text-[#24211D]">
                      {COUPLE_INFO.groom.account.accountNumber}
                    </span>
                    <button
                      onClick={() =>
                        handleCopy(
                          COUPLE_INFO.groom.account.bank,
                          COUPLE_INFO.groom.account.accountNumber,
                          COUPLE_INFO.groom.name
                        )
                      }
                      className="px-3 py-1.5 rounded-lg bg-[#234B52] text-white text-[11px] font-bold flex items-center gap-1 hover:opacity-90"
                    >
                      {copiedAccount === COUPLE_INFO.groom.account.accountNumber ? (
                        <Check className="w-3 h-3 text-[#B4975A]" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                      복사
                    </button>
                  </div>
                </div>

                {/* Groom Father */}
                <div className="p-3.5 rounded-xl border border-[#B4975A]/20 bg-white">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-[#24211D] text-sm">
                      부친 {COUPLE_INFO.groom.father}
                    </span>
                    <span className="text-[11px] text-[#24211D]/60">{COUPLE_INFO.groom.fatherAccount.bank}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-mono text-sm tracking-wide text-[#24211D]">
                      {COUPLE_INFO.groom.fatherAccount.accountNumber}
                    </span>
                    <button
                      onClick={() =>
                        handleCopy(
                          COUPLE_INFO.groom.fatherAccount.bank,
                          COUPLE_INFO.groom.fatherAccount.accountNumber,
                          COUPLE_INFO.groom.father
                        )
                      }
                      className="px-3 py-1.5 rounded-lg bg-[#24211D] text-white text-[11px] font-bold flex items-center gap-1 hover:opacity-90"
                    >
                      <Copy className="w-3 h-3" />
                      복사
                    </button>
                  </div>
                </div>

                {/* Groom Mother */}
                <div className="p-3.5 rounded-xl border border-[#B4975A]/20 bg-white">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-[#24211D] text-sm">
                      모친 {COUPLE_INFO.groom.mother}
                    </span>
                    <span className="text-[11px] text-[#24211D]/60">{COUPLE_INFO.groom.motherAccount.bank}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-mono text-sm tracking-wide text-[#24211D]">
                      {COUPLE_INFO.groom.motherAccount.accountNumber}
                    </span>
                    <button
                      onClick={() =>
                        handleCopy(
                          COUPLE_INFO.groom.motherAccount.bank,
                          COUPLE_INFO.groom.motherAccount.accountNumber,
                          COUPLE_INFO.groom.mother
                        )
                      }
                      className="px-3 py-1.5 rounded-lg bg-[#24211D] text-white text-[11px] font-bold flex items-center gap-1 hover:opacity-90"
                    >
                      <Copy className="w-3 h-3" />
                      복사
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bride Side Accordion */}
          <div className="rounded-2xl bg-[#F5F0E6] border border-[#B4975A]/40 shadow-md overflow-hidden">
            <button
              onClick={() => setBrideOpen(!brideOpen)}
              className="w-full p-5 flex items-center justify-between bg-[#9D3027] text-[#F5F0E6] font-serif-kr font-bold text-base transition-colors"
            >
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#B4975A]" />
                <span>신부측 계좌번호 안내</span>
              </div>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${brideOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {brideOpen && (
              <div className="p-5 space-y-4 bg-white/70 animate-fade-in text-xs">
                {/* Bride */}
                <div className="p-3.5 rounded-xl border border-[#B4975A]/20 bg-white">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-[#9D3027] text-sm">
                      신부 {COUPLE_INFO.bride.name}
                    </span>
                    <span className="text-[11px] text-[#24211D]/60">{COUPLE_INFO.bride.account.bank}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-mono text-sm tracking-wide font-semibold text-[#24211D]">
                      {COUPLE_INFO.bride.account.accountNumber}
                    </span>
                    <button
                      onClick={() =>
                        handleCopy(
                          COUPLE_INFO.bride.account.bank,
                          COUPLE_INFO.bride.account.accountNumber,
                          COUPLE_INFO.bride.name
                        )
                      }
                      className="px-3 py-1.5 rounded-lg bg-[#9D3027] text-white text-[11px] font-bold flex items-center gap-1 hover:opacity-90"
                    >
                      {copiedAccount === COUPLE_INFO.bride.account.accountNumber ? (
                        <Check className="w-3 h-3 text-[#B4975A]" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                      복사
                    </button>
                  </div>
                </div>

                {/* Bride Father */}
                <div className="p-3.5 rounded-xl border border-[#B4975A]/20 bg-white">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-[#24211D] text-sm">
                      부친 {COUPLE_INFO.bride.father}
                    </span>
                    <span className="text-[11px] text-[#24211D]/60">{COUPLE_INFO.bride.fatherAccount.bank}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-mono text-sm tracking-wide text-[#24211D]">
                      {COUPLE_INFO.bride.fatherAccount.accountNumber}
                    </span>
                    <button
                      onClick={() =>
                        handleCopy(
                          COUPLE_INFO.bride.fatherAccount.bank,
                          COUPLE_INFO.bride.fatherAccount.accountNumber,
                          COUPLE_INFO.bride.father
                        )
                      }
                      className="px-3 py-1.5 rounded-lg bg-[#24211D] text-white text-[11px] font-bold flex items-center gap-1 hover:opacity-90"
                    >
                      <Copy className="w-3 h-3" />
                      복사
                    </button>
                  </div>
                </div>

                {/* Bride Mother */}
                <div className="p-3.5 rounded-xl border border-[#B4975A]/20 bg-white">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-[#24211D] text-sm">
                      모친 {COUPLE_INFO.bride.mother}
                    </span>
                    <span className="text-[11px] text-[#24211D]/60">{COUPLE_INFO.bride.motherAccount.bank}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-mono text-sm tracking-wide text-[#24211D]">
                      {COUPLE_INFO.bride.motherAccount.accountNumber}
                    </span>
                    <button
                      onClick={() =>
                        handleCopy(
                          COUPLE_INFO.bride.motherAccount.bank,
                          COUPLE_INFO.bride.motherAccount.accountNumber,
                          COUPLE_INFO.bride.mother
                        )
                      }
                      className="px-3 py-1.5 rounded-lg bg-[#24211D] text-white text-[11px] font-bold flex items-center gap-1 hover:opacity-90"
                    >
                      <Copy className="w-3 h-3" />
                      복사
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
