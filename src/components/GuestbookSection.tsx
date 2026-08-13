import React, { useState, useEffect } from 'react';
import { MessageSquare, Send, Heart, UserCheck } from 'lucide-react';
import { INITIAL_GUESTBOOK } from '../data/weddingData';
import { GuestbookEntry } from '../types';

interface GuestbookSectionProps {
  onToast: (msg: string) => void;
}

export const GuestbookSection: React.FC<GuestbookSectionProps> = ({ onToast }) => {
  const [entries, setEntries] = useState<GuestbookEntry[]>(() => {
    const saved = localStorage.getItem('wedding_guestbook');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_GUESTBOOK;
      }
    }
    return INITIAL_GUESTBOOK;
  });

  const [name, setName] = useState('');
  const [relation, setRelation] = useState<'groom' | 'bride' | 'general'>('groom');
  const [message, setMessage] = useState('');
  const [sealColor, setSealColor] = useState('#9D3027');

  useEffect(() => {
    localStorage.setItem('wedding_guestbook', JSON.stringify(entries));
  }, [entries]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newEntry: GuestbookEntry = {
      id: `gb-${Date.now()}`,
      name: name.trim(),
      relation,
      message: message.trim(),
      sealColor,
      createdAt: new Date().toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }),
    };

    setEntries([newEntry, ...entries]);
    setName('');
    setMessage('');
    onToast('축하 메시지가 소중하게 등록되었습니다.');
  };

  return (
    <section id="guestbook" className="relative py-20 px-6 bg-[#F5F0E6] bg-hanji text-[#24211D]">
      <div className="max-w-md mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="stamp-seal">祝辭</span>
        </div>

        <h2 className="font-serif-kr text-3xl font-bold text-[#24211D] mb-1">
          축하의 글
        </h2>
        <p className="font-batang text-xs text-[#B4975A] tracking-widest uppercase mb-6">
          Guestbook
        </p>

        {/* Intro */}
        <p className="font-batang text-sm text-[#24211D]/80 leading-relaxed mb-8">
          새로운 시작을 앞둔 두 사람에게<br />
          따뜻한 축하의 글을 남겨주세요.
        </p>

        {/* Input Form Card */}
        <div className="p-6 rounded-2xl bg-[#F5F0E6] border border-[#B4975A]/40 shadow-xl mb-10 text-left font-batang">
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {/* Relation Pills */}
            <div>
              <label className="block text-[11px] font-bold text-[#24211D]/80 mb-1.5">
                관계 구분
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'groom', label: '신랑측 하객', bg: 'bg-[#234B52]', color: '#234B52' },
                  { id: 'bride', label: '신부측 하객', bg: 'bg-[#9D3027]', color: '#9D3027' },
                  { id: 'general', label: '지인 / 하객', bg: 'bg-[#B4975A]', color: '#B4975A' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setRelation(item.id as 'groom' | 'bride' | 'general');
                      setSealColor(item.color);
                    }}
                    className={`py-2 px-2 rounded-lg border text-center transition-all ${
                      relation === item.id
                        ? `${item.bg} text-white font-bold border-transparent shadow-sm`
                        : 'bg-white/80 border-[#B4975A]/30 text-[#24211D]/70 hover:border-[#B4975A]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-[11px] font-bold text-[#24211D]/80 mb-1">
                성함 *
              </label>
              <input
                type="text"
                required
                placeholder="축하해주시는 분 성함"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#B4975A]/40 rounded-lg text-xs focus:outline-none focus:border-[#9D3027]"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-[11px] font-bold text-[#24211D]/80 mb-1">
                축하 메시지 *
              </label>
              <textarea
                required
                rows={3}
                placeholder="두 사람의 아름다운 백년가약을 축하하는 마음을 적어주세요."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#B4975A]/40 rounded-lg text-xs focus:outline-none focus:border-[#9D3027] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#24211D] hover:bg-[#38332d] text-[#F5F0E6] font-serif-kr font-bold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 mt-2"
            >
              <Send className="w-3.5 h-3.5 text-[#B4975A]" />
              축하 글 남기기 (등록)
            </button>
          </form>
        </div>

        {/* Guestbook List Display */}
        <div className="space-y-4 text-left font-batang">
          <div className="flex items-center justify-between px-2 mb-2">
            <span className="font-serif-kr text-sm font-bold text-[#24211D]">
              축하메시지 <span className="text-[#9D3027]">({entries.length})</span>
            </span>
            <span className="text-[10px] text-[#B4975A]">전통 인장 카드</span>
          </div>

          {entries.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-[#F5F0E6] border border-[#B4975A]/30 shadow-md relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-3 border-b border-[#B4975A]/20 pb-2">
                <div className="flex items-center gap-2">
                  <span
                    className="w-7 h-7 rounded-full text-white text-[10px] font-bold flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: item.sealColor }}
                  >
                    {item.relation === 'groom' ? '男' : item.relation === 'bride' ? '女' : '賀'}
                  </span>
                  <div>
                    <span className="font-bold text-sm text-[#24211D]">{item.name}</span>
                    <span className="ml-2 text-[10px] text-[#24211D]/50">{item.createdAt}</span>
                  </div>
                </div>

                <div
                  className="px-2 py-0.5 rounded text-[10px] font-bold border"
                  style={{ color: item.sealColor, borderColor: `${item.sealColor}40` }}
                >
                  {item.relation === 'groom' ? '신랑측' : item.relation === 'bride' ? '신부측' : '하객'}
                </div>
              </div>

              <p className="text-xs text-[#24211D]/90 leading-relaxed whitespace-pre-line">
                {item.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
