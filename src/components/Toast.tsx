import React, { useEffect } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'info';
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'success',
  onClose,
  duration = 3000,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-[#24211D]/95 text-[#F5F0E6] px-5 py-3 rounded-lg shadow-2xl border border-[#B4975A]/40 backdrop-blur-md animate-fade-in text-sm max-w-[90vw]">
      {type === 'success' ? (
        <CheckCircle className="w-4 h-4 text-[#B4975A] shrink-0" />
      ) : (
        <AlertCircle className="w-4 h-4 text-[#9D3027] shrink-0" />
      )}
      <span className="font-batang tracking-tight">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-[#F5F0E6]/60 hover:text-[#F5F0E6] transition-colors"
        aria-label="닫기"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
