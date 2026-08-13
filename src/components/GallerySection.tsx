import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/weddingData';

export const GallerySection: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIdx(index);
  };

  const closeLightbox = () => {
    setSelectedIdx(null);
  };

  const nextPhoto = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx + 1) % GALLERY_PHOTOS.length);
  };

  const prevPhoto = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
  };

  return (
    <section id="gallery" className="relative py-20 px-6 bg-[#F5F0E6] bg-hanji text-[#24211D]">
      <div className="max-w-md mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="stamp-seal">花樣年華</span>
        </div>

        <h2 className="font-serif-kr text-3xl font-bold text-[#24211D] mb-1">
          가장 아름다운 순간
        </h2>
        <p className="font-batang text-xs text-[#B4975A] tracking-widest uppercase mb-10">
          Wedding Gallery
        </p>

        {/* Gallery Grid */}
        <div className="space-y-8">
          {GALLERY_PHOTOS.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="group cursor-pointer rounded-2xl bg-[#F5F0E6] border border-[#B4975A]/40 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-[#24211D]/10">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-3 rounded-full bg-white/80 text-[#24211D] shadow-lg">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>
              </div>

              {/* Poetic Caption Strip */}
              <div className="p-5 text-center font-batang border-t border-[#B4975A]/20">
                <h3 className="font-serif-kr text-lg font-bold text-[#9D3027] mb-1">
                  {photo.caption}
                </h3>
                {photo.subCaption && (
                  <p className="text-xs text-[#24211D]/70 leading-relaxed">
                    {photo.subCaption}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Fullscreen Modal */}
      {selectedIdx !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 animate-fade-in font-batang text-[#F5F0E6]">
          {/* Top Bar */}
          <div className="flex items-center justify-between z-10 pt-2 px-2">
            <span className="font-serif-kr text-sm text-[#B4975A]">
              {selectedIdx + 1} / {GALLERY_PHOTOS.length}
            </span>
            <button
              onClick={closeLightbox}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="닫기"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Image View */}
          <div className="relative flex-1 flex items-center justify-center my-auto">
            <img
              src={GALLERY_PHOTOS[selectedIdx].url}
              alt={GALLERY_PHOTOS[selectedIdx].caption}
              referrerPolicy="no-referrer"
              className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl"
            />

            {/* Navigation Arrows */}
            <button
              onClick={prevPhoto}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
              aria-label="이전 사진"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
              aria-label="다음 사진"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Caption at bottom */}
          <div className="text-center pb-6 z-10 px-4">
            <h4 className="font-serif-kr text-xl font-bold text-[#B4975A] mb-1">
              {GALLERY_PHOTOS[selectedIdx].caption}
            </h4>
            <p className="text-xs text-[#F5F0E6]/80 font-batang">
              {GALLERY_PHOTOS[selectedIdx].subCaption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
