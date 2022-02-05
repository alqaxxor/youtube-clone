const AutoPlay = () => {
  return (
    <svg width="44" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect opacity=".1" width="44" height="28" rx="14" fill="#fff" />
      <g filter="url(#a)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M30 26c6.627 0 12-5.373 12-12S36.627 2 30 2 18 7.373 18 14s5.373 12 12 12Z"
          fill="#fff"
        />
        <path
          d="M41.7 14c0 6.462-5.238 11.7-11.7 11.7-6.462 0-11.7-5.238-11.7-11.7 0-6.462 5.238-11.7 11.7-11.7 6.462 0 11.7 5.238 11.7 11.7Z"
          stroke="url(#b)"
          stroke-width=".6"
        />
        <path
          d="M41.7 14c0 6.462-5.238 11.7-11.7 11.7-6.462 0-11.7-5.238-11.7-11.7 0-6.462 5.238-11.7 11.7-11.7 6.462 0 11.7 5.238 11.7 11.7Z"
          stroke="url(#c)"
          stroke-width=".6"
        />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1="18.117"
          y1="2"
          x2="18.117"
          y2="25.765"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity=".01" />
          <stop offset=".8" stop-opacity=".02" />
          <stop offset="1" stop-opacity=".04" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="18"
          y1="2"
          x2="18"
          y2="26"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" stop-opacity=".12" />
          <stop offset=".2" stop-color="#fff" stop-opacity=".06" />
          <stop offset="1" stop-color="#fff" stop-opacity=".01" />
        </linearGradient>
        <filter
          id="a"
          x="17"
          y="1"
          width="26"
          height="27"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation=".5" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.237602 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1579"
          />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation=".5" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
          <feBlend
            in2="effect1_dropShadow_0_1579"
            result="effect2_dropShadow_0_1579"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_0_1579"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
export default AutoPlay;
