"use client";

import React, { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export const PhotoGallery: React.FC = () => {
  const { config, isSinhala } = useLanguage();
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const photos = config.gallery;

  const handleNext = useCallback(() => {
    setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % photos.length : null));
  }, [photos.length]);

  const handlePrev = useCallback(() => {
    setActivePhotoIndex((prev) => (prev !== null ? (prev - 1 + photos.length) % photos.length : null));
  }, [photos.length]);

  const handleClose = useCallback(() => {
    setActivePhotoIndex(null);
  }, []);

  useEffect(() => {
    if (activePhotoIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex, handleClose, handleNext, handlePrev]);

  return (
    <section id="gallery" className="mx-auto max-w-5xl px-6 py-9 sm:px-7 sm:py-12">
      <div className="mb-10 text-center sm:mb-14">
        <span
          className="mb-2 block text-[0.66rem] uppercase tracking-[0.34em]"
          style={{ fontFamily: "var(--font-montserrat)", color: "#B98A2F" }}
        >
          Gallery
        </span>

        <h2
          className="leading-tight"
          style={{
            fontFamily: "var(--font-sinhala)",
            fontWeight: 700,
            color: "#8C6420",
            fontSize: "clamp(1.7rem, 4.2vw, 2.6rem)",
          }}
        >
          {isSinhala ? "ඡායාරූප එකතුව" : "Photo Gallery"}
        </h2>

        {/* Flourish */}
        <div
          aria-hidden="true"
          className="mt-3 gpd-flourish"
          style={{
            width: "120px",
            aspectRatio: "2100 / 756",
            margin: "0 auto",
          }}
        />
      </div>

      {/* Gallery Grid - 4 Square Photos */}
<div
  className="grid grid-cols-2 sm:grid-cols-4"
  style={{ gap: "clamp(10px, 1.4vw, 18px)" }}
>
  {/* Photo 1 */}
  <div
    onClick={() => setActivePhotoIndex(0)}
    className="group relative overflow-hidden cursor-pointer"
    style={{
      aspectRatio: "3 / 4",
      borderRadius: "12px",
      border: "1px solid rgba(185, 138, 47, 0.35)",
    }}
  >
    <img
      src="/golden-poruwa-demo/gallery/Shoot1.jpeg"
      alt="Preshoot 1"
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
    />
  </div>

  {/* Photo 2 */}
  <div
    onClick={() => setActivePhotoIndex(1)}
    className="group relative overflow-hidden cursor-pointer"
    style={{
      aspectRatio: "3 / 4",
      borderRadius: "12px",
      border: "1px solid rgba(185, 138, 47, 0.35)",
    }}
  >
    <img
      src="/golden-poruwa-demo/gallery/Shoot2.jpeg"
      alt="Preshoot 2"
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
    />
  </div>

  {/* Photo 3 */}
  <div
    onClick={() => setActivePhotoIndex(2)}
    className="group relative overflow-hidden cursor-pointer"
    style={{
      aspectRatio: "3 / 4",
      borderRadius: "12px",
      border: "1px solid rgba(185, 138, 47, 0.35)",
    }}
  >
    <img
      src="/golden-poruwa-demo/gallery/Shoot3.jpeg"
      alt="Preshoot 3"
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
    />
  </div>

  {/* Photo 4 */}
  <div
    onClick={() => setActivePhotoIndex(3)}
    className="group relative overflow-hidden cursor-pointer"
    style={{
      aspectRatio: "3 / 4",
      borderRadius: "12px",
      border: "1px solid rgba(185, 138, 47, 0.35)",
    }}
  >
    <img
      src="/golden-poruwa-demo/gallery/Shoot4.jpeg"
      alt="Preshoot 4"
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
    />
  </div>
</div>

      {/* Lightbox Modal */}
      {activePhotoIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 text-white/80 hover:text-white p-2"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 text-white/80 hover:text-white p-2"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <img
            src={photos[activePhotoIndex].src}
            alt=""
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
