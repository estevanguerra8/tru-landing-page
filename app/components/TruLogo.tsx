"use client";

export default function TruLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="frontTriGrad" x1="20" y1="180" x2="140" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6D28D9" />
          <stop offset="50%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="backTriGrad" x1="80" y1="180" x2="180" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#C4B5FD" />
        </linearGradient>
      </defs>
      {/* Back triangle — lighter lavender */}
      <polygon
        points="100,18 185,175 55,175"
        fill="url(#backTriGrad)"
      />
      {/* Front triangle — deep purple gradient */}
      <polygon
        points="60,25 160,175 10,175"
        fill="url(#frontTriGrad)"
      />
      {/* Inner cutout triangle — creates the negative space */}
      <polygon
        points="85,72 120,135 65,135"
        fill="currentColor"
        className="text-cream-50 dark:text-navy-950"
      />
    </svg>
  );
}
