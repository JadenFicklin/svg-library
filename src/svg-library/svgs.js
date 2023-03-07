import React from "react";

export const svgObjects = (size, stroke, color) => [
  {
    title: "2fa",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-2fa"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        stroke-width={stroke}
        stroke={color}
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 16h-4l3.47 -4.66a2 2 0 1 0 -3.47 -1.54" />
        <path d="M10 16v-8h4" />
        <line x1="10" y1="12" x2="13" y2="12" />
        <path d="M17 16v-6a2 2 0 0 1 4 0v6" />
        <line x1="17" y1="13" x2="21" y2="13" />
      </svg>
    ),
  },
  {
    title: "3d-cube-sphere",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-3d-cube-sphere"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        stroke-width={stroke}
        stroke={color}
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 17.6l-2 -1.1v-2.5" />
        <path d="M4 10v-2.5l2 -1.1" />
        <path d="M10 4.1l2 -1.1l2 1.1" />
        <path d="M18 6.4l2 1.1v2.5" />
        <path d="M20 14v2.5l-2 1.12" />
        <path d="M14 19.9l-2 1.1l-2 -1.1" />
        <line x1="12" y1="12" x2="14" y2="10.9" />
        <line x1="18" y1="8.6" x2="20" y2="7.5" />
        <line x1="12" y1="12" x2="12" y2="14.5" />
        <line x1="12" y1="18.5" x2="12" y2="21" />
        <path d="M12 12l-2 -1.12" />
        <line x1="6" y1="8.6" x2="4" y2="7.5" />
      </svg>
    ),
  },
  {
    title: "a-b",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-a-b"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        stroke-width={stroke}
        stroke={color}
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 16v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5" />
        <line x1="12" y1="6" x2="12" y2="18" />
        <path d="M16 16v-8h3a2 2 0 0 1 0 4h-3m3 0a2 2 0 0 1 0 4h-3" />
      </svg>
    ),
  },
  {
    title: "access-point-off",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-access-point-off"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        stroke-width={stroke}
        stroke={color}
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="3" y1="3" x2="21" y2="21" />
        <path d="M14.828 9.172a4 4 0 0 1 1.172 2.828" />
        <path d="M17.657 6.343a8 8 0 0 1 1.635 8.952" />
        <path d="M9.168 14.828a4 4 0 0 1 0 -5.656" />
        <path d="M6.337 17.657a8 8 0 0 1 0 -11.314" />
      </svg>
    ),
  },
];
