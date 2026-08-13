import React, { useState } from 'react';
import { X, Check, Heart } from 'lucide-react';
import { RsvpForm } from '../types';

interface RsvpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: RsvpForm) => void;
}

export const RsvpModal: React.FC<RsvpModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [form, setForm] = useState<RsvpForm>({
    name: '',
    side: 'groom',
    attendance: 'yes',
    count: 1,
    dining: 'yes',
    phone: '',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    onSubmit(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-[#F5F0E6] text-[#24211D] rounded-xl border border-[#B4975A]/40 shadow-2xl overflow-hidden p-6 font-batang">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#B4975A]/30 mb-5">
          <div className="flex items-center gap-2">
            <span className="stamp-seal">出席</span>
            <h3 className="text-lg font-bold font-serif-kr text-[#24211D]">참석 여부 전달하기</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#24211D]/60 hover:text-[#24211D] hover:bg-[#24211D]/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          {/* Side selection */}
          <div>
            <label className="block text-xs font-bold text-[#24211D]/70 mb-1.5">구분</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setForm({ ...form, side: 'groom' })}
                className={`py-2 px-3 rounded-lg border text-center transition-all ${
                  form.side === 'groom'
                    ? 'bg-[#234B52] text-[#F5F0E6] border-[#234B52] font-bold shadow-sm'
                    : 'bg-[#F5F0E6] border-[#B4975A]/40 text-[#24211D]/80 hover:border-[#234B52]'
                }`}
              >
                신랑측
              </button>
              <button
                type="button"
                onClick={() => setForm({ ...form, side: 'bride' })}
                className={`py-2 px-3 rounded-lg border text-center transition-all ${
                  form.side === 'bride'
                    ? 'bg-[#9D3027] text-[#F5F0E6] border-[#9D3027] font-bold shadow-sm'
                    : 'bg-[#F5F0E6] border-[#B4975A]/40 text-[#24211D]/80 hover:border-[#9D3027]'
                }`}
              >
                신부측
              </button>
            </div>
          </div>

          {/* Name & Phone */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#24211D]/70 mb-1">성함 *</label>
              <input
                type="text"
                required
                placeholder="홍길동"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-3 py-2 bg-white/80 border border-[#B4975A]/40 rounded-lg text-[#24211D] focus:outline-none focus:border-[#9D3027]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#24211D]/70 mb-1">연락처</label>
              <input
                type="tel"
                placeholder="010-0000-0000"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-3 py-2 bg-white/80 border border-[#B4975A]/40 rounded-lg text-[#24211D] focus:outline-none focus:border-[#9D3027]"
              />
            </div>
          </div>

          {/* Attendance Status */}
          <div>
            <label className="block text-xs font-bold text-[#24211D]/70 mb-1.5">참석 여부</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setForm({ ...form, attendance: 'yes' })}
                className={`py-2 px-3 rounded-lg border text-center transition-all ${
                  form.attendance === 'yes'
                    ? 'bg-[#9D3027] text-white border-[#9D3027] font-bold shadow-sm'
                    : 'bg-white/80 border-[#B4975A]/40 text-[#24211D]/70'
                }`}
              >
                참석 가능
              </button>
              <button
                type="button"
                onClick={() => setForm({ ...form, attendance: 'no' })}
                className={`py-2 px-3 rounded-lg border text-center transition-all ${
                  form.attendance === 'no'
                    ? 'bg-[#24211D] text-white border-[#24211D] font-bold shadow-sm'
                    : 'bg-white/80 border-[#B4975A]/40 text-[#24211D]/70'
                }`}
              >
                참석 어려움
              </button>
            </div>
          </div>

          {form.attendance === 'yes' && (
            <>
              {/* Guest Count */}
              <div>
                <label className="block text-xs font-bold text-[#24211D]/70 mb-1">동행 인원 (본인 포함)</label>
                <select
                  value={form.count}
                  onChange={(e) => setForm({ ...form, count: Number(e.target.value) })}
                  className="w-full px-3 py-2 bg-white/80 border border-[#B4975A]/40 rounded-lg text-[#24211D] focus:outline-none focus:border-[#9D3027]"
                >
                  <option value={1}>1명 (본인만)</option>
                  <option value={2}>2명</option>
                  <option value={3}>3명</option>
                  <option value={4}>4명 이상</option>
                </select>
              </div>

              {/* Dining choice */}
              <div>
                <label className="block text-xs font-bold text-[#24211D]/70 mb-1">식사 여부</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'yes', label: '식사 예정' },
                    { id: 'no', label: '식사 안 함' },
                    { id: 'undecided', label: '미정' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setForm({ ...form, dining: item.id as 'yes' | 'no' | 'undecided' })}
                      className={`py-1.5 px-2 rounded border text-xs text-center transition-all ${
                        form.dining === item.id
                          ? 'bg-[#B4975A] text-white border-[#B4975A] font-bold'
                          : 'bg-white/80 border-[#B4975A]/30 text-[#24211D]/70'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Optional Message */}
          <div>
            <label className="block text-xs font-bold text-[#24211D]/70 mb-1">축하 한마디 (선택)</label>
            <textarea
              rows={2}
              placeholder="신랑 신부에게 남길 따뜻한 축하의 한마디..."
              value={form.message || ''}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-3 py-2 bg-white/80 border border-[#B4975A]/40 rounded-lg text-[#24211D] focus:outline-none focus:border-[#9D3027] resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#9D3027] hover:bg-[#83261e] text-[#F5F0E6] font-bold font-serif-kr rounded-lg transition-colors shadow-md flex items-center justify-center gap-2 mt-2"
          >
            <Heart className="w-4 h-4 fill-current text-red-200" />
            참석 정보 제출하기
          </button>
        </form>
      </div>
    </div>
  );
};
