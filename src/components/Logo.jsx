/**
 * The SHA-PAY mark: a kiwi-green rounded square carrying a stylised
 * "S" formed by a payment arrow, so it reads as both brand and product.
 */
export default function Logo({ size = 40, className = "" }) {
  return (
    <svg
      className={`logo ${className}`}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-label="SHA-PAY"
    >
      <defs>
        <linearGradient id="shaLogoGrad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8CC63E" />
          <stop offset="1" stopColor="#3A5F0B" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#shaLogoGrad)" />
      <path
        d="M31.5 17.5c-1.4-1.7-3.6-2.7-6.1-2.7-4.3 0-7.4 2.6-7.4 6.2 0 3.9 3.4 5.2 7.3 6.1 3.3.8 4.6 1.4 4.6 3 0 1.6-1.5 2.7-3.8 2.7-2.4 0-4.4-1-5.8-2.8"
        stroke="#F7F5E8"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 34.5h13"
        stroke="#F7F5E8"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <circle cx="34" cy="34" r="6.5" fill="#3A5F0B" />
      <path
        d="M31.4 34h5.2M34.2 31.6L36.8 34l-2.6 2.4"
        stroke="#C6E387"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
