'use client';

import React from 'react';

/**
 * Editorial Corner Accents & Geometric SVG Ornaments
 * Adds modern architectural & graphic-design corner marks to elevate the aesthetic.
 */
export const ViewportCornerAccents: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-30 select-none hidden sm:block"
      aria-hidden="true"
    >
      {/* ======================================================== */}
      {/* TOP-LEFT CORNER: Architectural Bracket & Monogram Coordinates */}
      {/* ======================================================== */}
      <div className="absolute top-4 left-4 lg:top-6 lg:left-6 flex items-start gap-2 text-[#965239]/60">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          className="transition-transform duration-300 hover:scale-110"
        >
          {/* Corner L-bracket */}
          <path
            d="M3 29V3H29"
            strokeWidth="1.25"
            strokeLinecap="round"
            className="stroke-[#B76E4F]/70"
          />
          {/* Center registration dot */}
          <circle cx="3" cy="3" r="1.5" className="fill-[#B76E4F]" />
          {/* Inner accent crosshair */}
          <path
            d="M10 3V8M3 10H8"
            strokeWidth="1"
            className="stroke-[#EAD8C8]"
          />
        </svg>
        <div className="hidden lg:flex flex-col text-[9px] font-mono tracking-wider text-[#965239]/70 leading-tight pt-1">
          <span>PORTFOLIO // V2.6</span>
          <span className="text-[#6E675F]/60">28°36&apos;N · 77°12&apos;E</span>
        </div>
      </div>

      {/* ======================================================== */}
      {/* TOP-RIGHT CORNER: Rotating Geometric Starburst Emblem   */}
      {/* ======================================================== */}
      <div className="absolute top-4 right-4 lg:top-6 lg:right-6 flex items-start gap-2 text-[#965239]/60">
        <div className="hidden lg:flex flex-col text-[9px] font-mono tracking-wider text-right text-[#965239]/70 leading-tight pt-1">
          <span>FULL-STACK DEV</span>
          <span className="text-emerald-700/80 font-semibold flex items-center justify-end gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            AVAILABLE
          </span>
        </div>
        <div className="relative">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            className="transition-transform duration-300"
          >
            {/* Corner L-bracket */}
            <path
              d="M29 29V3H3"
              strokeWidth="1.25"
              strokeLinecap="round"
              className="stroke-[#B76E4F]/70"
            />
            {/* Center registration dot */}
            <circle cx="29" cy="3" r="1.5" className="fill-[#B76E4F]" />
          </svg>
          {/* Rotating mini starburst placed inside the corner */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="absolute top-2 right-2 animate-[spin_20s_linear_infinite] text-[#B76E4F]/80"
          >
            <path
              d="M12 2V22M2 12H22M4.93 4.93L19.07 19.07M4.93 19.07L19.07 4.93"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* ======================================================== */}
      {/* BOTTOM-LEFT CORNER: Technical Registration Frame        */}
      {/* ======================================================== */}
      <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 flex items-end gap-2 text-[#965239]/60">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
        >
          {/* Corner L-bracket */}
          <path
            d="M3 3V29H29"
            strokeWidth="1.25"
            strokeLinecap="round"
            className="stroke-[#B76E4F]/70"
          />
          {/* Center registration dot */}
          <circle cx="3" cy="29" r="1.5" className="fill-[#B76E4F]" />
          {/* Inner tick */}
          <path
            d="M10 29V24M3 22H8"
            strokeWidth="1"
            className="stroke-[#EAD8C8]"
          />
        </svg>
        <div className="hidden lg:flex flex-col text-[9px] font-mono tracking-wider text-[#965239]/70 leading-tight pb-1">
          <span>NEERAJ KUMAR</span>
          <span className="text-[#6E675F]/60">EST. 2026 // SYSTEM</span>
        </div>
      </div>

      {/* ======================================================== */}
      {/* BOTTOM-RIGHT CORNER: Architectural Target & Compass Mark */}
      {/* ======================================================== */}
      <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 flex items-end gap-2 text-[#965239]/60">
        <div className="hidden lg:flex flex-col text-[9px] font-mono tracking-wider text-right text-[#965239]/70 leading-tight pb-1">
          <span>CLEAN ARCHITECTURE</span>
          <span className="text-[#6E675F]/60">UI/UX · WEB · DEV</span>
        </div>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
        >
          {/* Corner L-bracket */}
          <path
            d="M29 3V29H3"
            strokeWidth="1.25"
            strokeLinecap="round"
            className="stroke-[#B76E4F]/70"
          />
          {/* Center registration dot */}
          <circle cx="29" cy="29" r="1.5" className="fill-[#B76E4F]" />
          {/* Inner tick */}
          <path
            d="M22 29V24M29 22H24"
            strokeWidth="1"
            className="stroke-[#EAD8C8]"
          />
        </svg>
      </div>
    </div>
  );
};

/**
 * Reusable Corner Ornament for Cards, Hero Images, or Sections
 * Adds 4 delicate corner crosshairs/brackets inside any relative container.
 */
export const CardCornerCrosshairs: React.FC<{
  className?: string;
  size?: number;
  color?: string;
}> = ({
  className = '',
  size = 14,
  color = 'text-[#B76E4F]/40',
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Top-Left Crosshair */}
      <div className={`absolute top-2 left-2 ${color}`}>
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor">
          <path d="M8 2V14M2 8H14" strokeWidth="1.25" strokeLinecap="round" />
        </svg>
      </div>

      {/* Top-Right Crosshair */}
      <div className={`absolute top-2 right-2 ${color}`}>
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor">
          <path d="M8 2V14M2 8H14" strokeWidth="1.25" strokeLinecap="round" />
        </svg>
      </div>

      {/* Bottom-Left Crosshair */}
      <div className={`absolute bottom-2 left-2 ${color}`}>
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor">
          <path d="M8 2V14M2 8H14" strokeWidth="1.25" strokeLinecap="round" />
        </svg>
      </div>

      {/* Bottom-Right Crosshair */}
      <div className={`absolute bottom-2 right-2 ${color}`}>
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor">
          <path d="M8 2V14M2 8H14" strokeWidth="1.25" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
};
