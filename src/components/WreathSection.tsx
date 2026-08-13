import React, { useState } from 'react';
import { Flower, X, Check, Sparkles, Send } from 'lucide-react';

interface WreathSectionProps {
  onToast: (msg: string) => void;
}

export const WreathSection: React.FC<WreathSectionProps> = ({ onToast }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [wreathType, setWreathType] = useState('전통 축하화환 (3단)');
  const [leftRibbon, setLeftRibbon] = useState('祝 結婚');
  const [rightRibbon, setRightRibbon] = useState('두 분의 앞날에 행복만 가득하기를');
  const [senderName, setSenderName] = useState('');

  const wreathOptions = [
    { id: 'traditional', name: '전통 축하화환 (3단)', price: '100,000원', desc: '풍성한 전통 생화로 정성스럽게 연출' },
    { id: 'premium', name: '프리미엄 단청 화환', price: '150,000원', desc: '고품격 전통 문양 자수 리본 및 특선 생화' },
    { id: 'hanok', name: '한옥 웨딩 특별 화환', price: '200,000원', desc: '한옥 혼례장 입구를 빛내는 전통 에디토리얼 화환' },
  ];

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setModalOpen(false);
    onToast(`'${wreathType}' 화환 주문 신청이 완료되었습니다.`);
    setSenderName('');
  };

  return (
    <section id="wreath" className="relative py-20 px-6 bg-[#F5F0E6] text-[#24211D]">
      <div className="max-w-md mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="stamp-seal">賀花</span>
        </div>

        <h2 className="font-serif-kr text-3xl font-bold text-[#24211D] mb-1">
          축하의 꽃
        </h2>
        <p className="font-batang text-xs text-[#B4975A] tracking-widest uppercase mb-6">
          Send Wedding Wreath
        </p>

        {/* Intro */}
        <p className="font-batang text-sm text-[#24211D]/80 leading-relaxed mb-8">
          두 사람의 새로운 시작을<br />
          아름다운 꽃으로 축복해주세요.
        </p>

        {/* Wreath Card Box */}
        <div className="p-8 rounded-2xl bg-[#F5F0E6] border border-[#B4975A]/40 shadow-xl mb-6 relative overflow-hidden">
          <div className="w-16 h-16 rounded-full bg-[#9D3027]/10 text-[#9D3027] border border-[#9D3027]/30 flex items-center justify-center mx-auto mb-4">
            <Flower className="w-8 h-8" />
          </div>

          <h3 className="font-serif-kr text-xl font-bold text-[#24211D] mb-2">
            전통 혼례 축하 화환
          </h3>
          <p className="font-batang text-xs text-[#24211D]/70 mb-6 leading-relaxed">
            운현궁 한옥 혼례장에 어울리는 품격 있는 화환을 편리하게 보내실 수 있습니다.
          </p>

          <button
            onClick={() => setModalOpen(true)}
            className="w-full py-3.5 bg-[#9D3027] hover:bg-[#83261e] text-[#F5F0E6] font-serif-kr font-bold text-sm rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#B4975A]" />
            축하 화환 보내기
          </button>
        </div>
      </div>

      {/* Interactive Wreath Order Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in font-batang text-[#24211D]">
          <div className="w-full max-w-md bg-[#F5F0E6] rounded-2xl border border-[#B4975A]/40 shadow-2xl p-6 relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-[#B4975A]/30 mb-5">
              <div className="flex items-center gap-2">
                <span className="stamp-seal">賀花</span>
                <h3 className="font-serif-kr text-lg font-bold">화환 선택 및 리본 문구</h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1 rounded-full text-[#24211D]/60 hover:text-[#24211D]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleOrder} className="space-y-5 text-sm">
              {/* Select Wreath */}
              <div>
                <label className="block text-xs font-bold text-[#24211D]/80 mb-2">
                  화환 종류 선택
                </label>
                <div className="space-y-2">
                  {wreathOptions.map((opt) => (
                    <div
                      key={opt.id}
                      onClick={() => setWreathType(opt.name)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        wreathType === opt.name
                          ? 'bg-[#9D3027]/10 border-[#9D3027] text-[#24211D] font-semibold'
                          : 'bg-white/80 border-[#B4975A]/30 text-[#24211D]/70 hover:border-[#9D3027]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif-kr font-bold text-sm text-[#24211D]">{opt.name}</span>
                        <span className="font-mono text-xs text-[#9D3027] font-bold">{opt.price}</span>
                      </div>
                      <p className="text-[11px] text-[#24211D]/60 mt-1">{opt.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ribbon Live Preview Box */}
              <div>
                <label className="block text-xs font-bold text-[#24211D]/80 mb-2">
                  리본 문구 실시간 미리보기
                </label>
                <div className="p-4 rounded-xl bg-[#24211D] text-[#F5F0E6] border border-[#B4975A]/40 flex items-center justify-between text-center font-serif-kr">
                  {/* Left Ribbon */}
                  <div className="flex-1 p-2 bg-[#9D3027]/80 rounded text-[#F5F0E6] text-xs font-bold border border-[#B4975A]/30">
                    <span className="block text-[10px] text-[#B4975A] font-sans">왼쪽 리본</span>
                    <span className="mt-1 block">{leftRibbon || '祝 結婚'}</span>
                  </div>

                  {/* Center Flower Icon */}
                  <div className="px-3 text-[#B4975A]">
                    <Flower className="w-6 h-6 animate-spin-slow" />
                  </div>

                  {/* Right Ribbon */}
                  <div className="flex-1 p-2 bg-[#234B52]/80 rounded text-[#F5F0E6] text-xs font-bold border border-[#B4975A]/30">
                    <span className="block text-[10px] text-[#B4975A] font-sans">오른쪽 리본</span>
                    <span className="mt-1 block">{rightRibbon || '축하 메시지'}</span>
                  </div>
                </div>
              </div>

              {/* Ribbon Text Input Fields */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-[#24211D]/70 mb-1">
                    왼쪽 문구 (경조사어)
                  </label>
                  <input
                    type="text"
                    value={leftRibbon}
                    onChange={(e) => setLeftRibbon(e.target.value)}
                    placeholder="祝 結婚"
                    className="w-full px-3 py-2 bg-white border border-[#B4975A]/40 rounded-lg text-xs focus:outline-none focus:border-[#9D3027]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#24211D]/70 mb-1">
                    오른쪽 문구 (축하글)
                  </label>
                  <input
                    type="text"
                    value={rightRibbon}
                    onChange={(e) => setRightRibbon(e.target.value)}
                    placeholder="두 분의 행복을 기원합니다"
                    className="w-full px-3 py-2 bg-white border border-[#B4975A]/40 rounded-lg text-xs focus:outline-none focus:border-[#9D3027]"
                  />
                </div>
              </div>

              {/* Sender Name */}
              <div>
                <label className="block text-[11px] font-bold text-[#24211D]/70 mb-1">
                  보내시는 분 성함/단체명 *
                </label>
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="예: (주)한국물산 대표 홍길동"
                  className="w-full px-3 py-2 bg-white border border-[#B4975A]/40 rounded-lg text-xs focus:outline-none focus:border-[#9D3027]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#9D3027] hover:bg-[#83261e] text-[#F5F0E6] font-serif-kr font-bold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 mt-2"
              >
                <Send className="w-3.5 h-3.5 text-[#B4975A]" />
                축하 화환 주문 완료하기
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
