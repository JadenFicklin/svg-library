import React from 'react';

export const svgObjects = (size, stroke, color) => [
  {
    title: '2fa',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-2fa"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 16h-4l3.47 -4.66a2 2 0 1 0 -3.47 -1.54" />
        <path d="M10 16v-8h4" />
        <line x1="10" y1="12" x2="13" y2="12" />
        <path d="M17 16v-6a2 2 0 0 1 4 0v6" />
        <line x1="17" y1="13" x2="21" y2="13" />
      </svg>
    )
  },
  {
    title: '3d-cube-sphere',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-3d-cube-sphere"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
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
    )
  },
  {
    title: 'a-b',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-a-b"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 16v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5" />
        <line x1="12" y1="6" x2="12" y2="18" />
        <path d="M16 16v-8h3a2 2 0 0 1 0 4h-3m3 0a2 2 0 0 1 0 4h-3" />
      </svg>
    )
  },
  {
    title: 'access-point-off',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-access-point-off"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="3" y1="3" x2="21" y2="21" />
        <path d="M14.828 9.172a4 4 0 0 1 1.172 2.828" />
        <path d="M17.657 6.343a8 8 0 0 1 1.635 8.952" />
        <path d="M9.168 14.828a4 4 0 0 1 0 -5.656" />
        <path d="M6.337 17.657a8 8 0 0 1 0 -11.314" />
      </svg>
    )
  },
  {
    title: 'access-point',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-access-point"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="12" y1="12" x2="12" y2="12.01" />
        <path d="M14.828 9.172a4 4 0 0 1 0 5.656" />
        <path d="M17.657 6.343a8 8 0 0 1 0 11.314" />
        <path d="M9.168 14.828a4 4 0 0 1 0 -5.656" />
        <path d="M6.337 17.657a8 8 0 0 1 0 -11.314" />
      </svg>
    )
  },
  {
    title: 'accessible',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-accessible"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="9" />
        <path d="M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1" />
        <circle cx="12" cy="7.5" r=".5" fill="currentColor" />
      </svg>
    )
  },
  {
    title: 'activity',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-activity"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 12h4l3 8l4 -16l3 8h4" />
      </svg>
    )
  },
  {
    title: 'ad-2',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-ad-2"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M11.933 5h-6.933v16h13v-8" />
        <path d="M14 17h-5" />
        <path d="M9 13h5v-4h-5z" />
        <path d="M15 5v-2" />
        <path d="M18 6l2 -2" />
        <path d="M19 9h2" />
      </svg>
    )
  },
  {
    title: 'ad',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-ad"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M7 15v-4a2 2 0 0 1 4 0v4" />
        <line x1="7" y1="13" x2="11" y2="13" />
        <path d="M17 9v6h-1.5a1.5 1.5 0 1 1 1.5 -1.5" />
      </svg>
    )
  },
  {
    title: 'adjustments-alt',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-adjustments-alt"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="8" width="4" height="4" />
        <line x1="6" y1="4" x2="6" y2="8" />
        <line x1="6" y1="12" x2="6" y2="20" />
        <rect x="10" y="14" width="4" height="4" />
        <line x1="12" y1="4" x2="12" y2="14" />
        <line x1="12" y1="18" x2="12" y2="20" />
        <rect x="16" y="5" width="4" height="4" />
        <line x1="18" y1="4" x2="18" y2="5" />
        <line x1="18" y1="9" x2="18" y2="20" />
      </svg>
    )
  },
  {
    title: 'adjustments-horizontal',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-adjustments-horizontal"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="14" cy="6" r="2" />
        <line x1="4" y1="6" x2="12" y2="6" />
        <line x1="16" y1="6" x2="20" y2="6" />
        <circle cx="8" cy="12" r="2" />
        <line x1="4" y1="12" x2="6" y2="12" />
        <line x1="10" y1="12" x2="20" y2="12" />
        <circle cx="17" cy="18" r="2" />
        <line x1="4" y1="18" x2="15" y2="18" />
        <line x1="19" y1="18" x2="20" y2="18" />
      </svg>
    )
  },
  {
    title: 'adjustments',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-adjustments"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="6" cy="10" r="2" />
        <line x1="6" y1="4" x2="6" y2="8" />
        <line x1="6" y1="12" x2="6" y2="20" />
        <circle cx="12" cy="16" r="2" />
        <line x1="12" y1="4" x2="12" y2="14" />
        <line x1="12" y1="18" x2="12" y2="20" />
        <circle cx="18" cy="7" r="2" />
        <line x1="18" y1="4" x2="18" y2="5" />
        <line x1="18" y1="9" x2="18" y2="20" />
      </svg>
    )
  },
  {
    title: 'aerial-lift',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-aerial-lift"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 5l16 -2m-8 1v10m-5.106 -6h10.306c2.45 3 2.45 9 -.2 12h-10.106c-2.544 -3 -2.544 -9 0 -12zm-1.894 6h14" />
      </svg>
    )
  },
  {
    title: 'affiliate',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-affiliate"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275" />
        <path d="M11.683 12.317l5.759 -5.759" />
        <circle cx="5.5" cy="5.5" r="1.5" />
        <circle cx="18.5" cy="5.5" r="1.5" />
        <circle cx="18.5" cy="18.5" r="1.5" />
        <circle cx="8.5" cy="15.5" r="4.5" />
      </svg>
    )
  },
  {
    title: 'alarm',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-alarm"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="13" r="7" />
        <polyline points="12 10 12 13 14 13" />
        <line x1="7" y1="4" x2="4.25" y2="6" />
        <line x1="17" y1="4" x2="19.75" y2="6" />
      </svg>
    )
  },
  {
    title: 'alert-circle',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-alert-circle"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="9" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    )
  },
  {
    title: 'alert-octogon',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-alert-octagon"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8.7 3h6.6c.3 0 .5 .1 .7 .3l4.7 4.7c.2 .2 .3 .4 .3 .7v6.6c0 .3 -.1 .5 -.3 .7l-4.7 4.7c-.2 .2 -.4 .3 -.7 .3h-6.6c-.3 0 -.5 -.1 -.7 -.3l-4.7 -4.7c-.2 -.2 -.3 -.4 -.3 -.7v-6.6c0 -.3 .1 -.5 .3 -.7l4.7 -4.7c.2 -.2 .4 -.3 .7 -.3z" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    )
  },
  {
    title: 'alert-triangle',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-alert-triangle"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 9v2m0 4v.01" />
        <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
      </svg>
    )
  },
  {
    title: 'alien',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-alien"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M11 17a2.5 2.5 0 0 0 2 0" />
        <path d="M12 3c-4.664 0 -7.396 2.331 -7.862 5.595a11.816 11.816 0 0 0 2 8.592a10.777 10.777 0 0 0 3.199 3.064c1.666 1 3.664 1 5.33 0a10.777 10.777 0 0 0 3.199 -3.064a11.89 11.89 0 0 0 2 -8.592c-.466 -3.265 -3.198 -5.595 -7.862 -5.595z" />
        <line x1="8" y1="11" x2="10" y2="13" />
        <line x1="16" y1="11" x2="14" y2="13" />
      </svg>
    )
  },
  {
    title: 'align-center',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-align-center"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="6" y1="18" x2="18" y2="18" />
      </svg>
    )
  },
  {
    title: 'align-justified',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-align-justified"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="16" y2="18" />
      </svg>
    )
  },
  {
    title: 'align-left',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-align-left"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="14" y2="12" />
        <line x1="4" y1="18" x2="18" y2="18" />
      </svg>
    )
  },
  {
    title: 'align-right',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-align-right"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="10" y1="12" x2="20" y2="12" />
        <line x1="6" y1="18" x2="20" y2="18" />
      </svg>
    )
  },
  {
    title: 'ambulance',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-ambulance"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
        <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
        <path d="M6 10h4m-2 -2v4" />
      </svg>
    )
  },
  {
    title: 'anchor',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-anchor"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 9v12m-8 -8a8 8 0 0 0 16 0m1 0h-2m-14 0h-2" />
        <circle cx="12" cy="6" r="3" />
      </svg>
    )
  },
  {
    title: 'angle',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-angle"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M21 19h-18l9 -15" />
        <path d="M20.615 15.171h.015" />
        <path d="M19.515 11.771h.015" />
        <path d="M17.715 8.671h.015" />
        <path d="M15.415 5.971h.015" />
      </svg>
    )
  },
  {
    title: 'antenna-bars-1',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-antenna-bars-1"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="6" y1="18" x2="6" y2="18.01" />
        <line x1="10" y1="18" x2="10" y2="18.01" />
        <line x1="14" y1="18" x2="14" y2="18.01" />
        <line x1="18" y1="18" x2="18" y2="18.01" />
      </svg>
    )
  },
  {
    title: 'antenna-bars-2',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-antenna-bars-2"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="6" y1="18" x2="6" y2="15" />
        <line x1="10" y1="18" x2="10" y2="18.01" />
        <line x1="14" y1="18" x2="14" y2="18.01" />
        <line x1="18" y1="18" x2="18" y2="18.01" />
      </svg>
    )
  },
  {
    title: 'antenna-bars-3',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-antenna-bars-3"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="6" y1="18" x2="6" y2="15" />
        <line x1="10" y1="18" x2="10" y2="12" />
        <line x1="14" y1="18" x2="14" y2="18.01" />
        <line x1="18" y1="18" x2="18" y2="18.01" />
      </svg>
    )
  },
  {
    title: 'antenna-bars-4',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-antenna-bars-4"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="6" y1="18" x2="6" y2="15" />
        <line x1="10" y1="18" x2="10" y2="12" />
        <line x1="14" y1="18" x2="14" y2="9" />
        <line x1="18" y1="18" x2="18" y2="18.01" />
      </svg>
    )
  },
  {
    title: 'antenna-bars-5',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-antenna-bars-5"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="6" y1="18" x2="6" y2="15" />
        <line x1="10" y1="18" x2="10" y2="12" />
        <line x1="14" y1="18" x2="14" y2="9" />
        <line x1="18" y1="18" x2="18" y2="6" />
      </svg>
    )
  },
  {
    title: 'aperture',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-aperture"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="9" />
        <line x1="3.6" y1="15" x2="14.15" y2="15" />
        <line
          x1="3.6"
          y1="15"
          x2="14.15"
          y2="15"
          transform="rotate(72 12 12)"
        />
        <line
          x1="3.6"
          y1="15"
          x2="14.15"
          y2="15"
          transform="rotate(144 12 12)"
        />
        <line
          x1="3.6"
          y1="15"
          x2="14.15"
          y2="15"
          transform="rotate(216 12 12)"
        />
        <line
          x1="3.6"
          y1="15"
          x2="14.15"
          y2="15"
          transform="rotate(288 12 12)"
        />
      </svg>
    )
  },
  {
    title: 'apple',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-apple"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="14" r="7" />
        <path d="M12 11v-6a2 2 0 0 1 2 -2h2v1a2 2 0 0 1 -2 2h-2" />
        <path d="M10 10.5c1.333 .667 2.667 .667 4 0" />
      </svg>
    )
  },
  {
    title: 'apps',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-apps"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="4" width="6" height="6" rx="1" />
        <rect x="4" y="14" width="6" height="6" rx="1" />
        <rect x="14" y="14" width="6" height="6" rx="1" />
        <line x1="14" y1="7" x2="20" y2="7" />
        <line x1="17" y1="4" x2="17" y2="10" />
      </svg>
    )
  },
  {
    title: 'archive',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-archive"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="3" y="4" width="18" height="4" rx="2" />
        <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
        <line x1="10" y1="12" x2="14" y2="12" />
      </svg>
    )
  },
  {
    title: 'armchair',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-armchair"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 1 1 4 0v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
        <path d="M5 11v-5a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v5" />
        <path d="M6 19v2" />
        <path d="M18 19v2" />
      </svg>
    )
  },
  {
    title: 'arrow-autofit-content',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-autofit-content"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 4l-3 3l3 3" />
        <path d="M18 4l3 3l-3 3" />
        <rect x="4" y="14" width="16" height="6" rx="2" />
        <path d="M10 7h-7" />
        <path d="M21 7h-7" />
      </svg>
    )
  },
  {
    title: 'arrow-autofit-down',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-autofit-down"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8" />
        <path d="M18 4v17" />
        <path d="M15 18l3 3l3 -3" />
      </svg>
    )
  },
  {
    title: 'arrow-autofit-height',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-autofit-height"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6" />
        <path d="M18 14v7" />
        <path d="M18 3v7" />
        <path d="M15 18l3 3l3 -3" />
        <path d="M15 6l3 -3l3 3" />
      </svg>
    )
  },
  {
    title: 'arrow-autofit-left',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-autofit-left"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8" />
        <path d="M20 18h-17" />
        <path d="M6 15l-3 3l3 3" />
      </svg>
    )
  },
  {
    title: 'arrow-autofit-right',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-autofit-right"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8" />
        <path d="M4 18h17" />
        <path d="M18 15l3 3l-3 3" />
      </svg>
    )
  },
  {
    title: 'arrow-autofit-up',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-autofit-up"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 4h-6a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h8" />
        <path d="M18 20v-17" />
        <path d="M15 6l3 -3l3 3" />
      </svg>
    )
  },
  {
    title: 'arrow-autofit-width',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-autofit-width"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />
        <path d="M10 18h-7" />
        <path d="M21 18h-7" />
        <path d="M6 15l-3 3l3 3" />
        <path d="M18 15l3 3l-3 3" />
      </svg>
    )
  },
  {
    title: 'arrow-back-up',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-back-up"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
      </svg>
    )
  },
  {
    title: 'arrow-back',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-back"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
      </svg>
    )
  },
  {
    title: 'arrow-bar-down',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-bar-down"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="12" y1="20" x2="16" y2="16" />
        <line x1="12" y1="20" x2="8" y2="16" />
        <line x1="4" y1="4" x2="20" y2="4" />
      </svg>
    )
  },
  {
    title: 'arrow-bar-left',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-bar-left"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="4" y1="12" x2="14" y2="12" />
        <line x1="4" y1="12" x2="8" y2="16" />
        <line x1="4" y1="12" x2="8" y2="8" />
        <line x1="20" y1="4" x2="20" y2="20" />
      </svg>
    )
  },
  {
    title: 'arrow-bar-right',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-bar-right"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="20" y1="12" x2="10" y2="12" />
        <line x1="20" y1="12" x2="16" y2="16" />
        <line x1="20" y1="12" x2="16" y2="8" />
        <line x1="4" y1="4" x2="4" y2="20" />
      </svg>
    )
  },
  {
    title: 'arrow-bar-to-down',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-bar-to-down"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="4" y1="20" x2="20" y2="20" />
        <line x1="12" y1="14" x2="12" y2="4" />
        <line x1="12" y1="14" x2="16" y2="10" />
        <line x1="12" y1="14" x2="8" y2="10" />
      </svg>
    )
  },
  {
    title: 'arrow-bar-to-left',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-bar-to-left"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="10" y1="12" x2="20" y2="12" />
        <line x1="10" y1="12" x2="14" y2="16" />
        <line x1="10" y1="12" x2="14" y2="8" />
        <line x1="4" y1="4" x2="4" y2="20" />
      </svg>
    )
  },
  {
    title: 'arrow-bar-to-right',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-bar-to-right"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="14" y1="12" x2="4" y2="12" />
        <line x1="14" y1="12" x2="10" y2="16" />
        <line x1="14" y1="12" x2="10" y2="8" />
        <line x1="20" y1="4" x2="20" y2="20" />
      </svg>
    )
  },
  {
    title: 'arrow-bar-to-up',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-bar-to-up"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="12" y1="10" x2="12" y2="20" />
        <line x1="12" y1="10" x2="16" y2="14" />
        <line x1="12" y1="10" x2="8" y2="14" />
        <line x1="4" y1="4" x2="20" y2="4" />
      </svg>
    )
  },
  {
    title: 'arrow-bar-up',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-bar-up"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="12" y1="4" x2="12" y2="14" />
        <line x1="12" y1="4" x2="16" y2="8" />
        <line x1="12" y1="4" x2="8" y2="8" />
        <line x1="4" y1="20" x2="20" y2="20" />
      </svg>
    )
  },
  {
    title: 'arrow-big-down',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-big-down"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-8a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1z" />
      </svg>
    )
  },
  {
    title: 'arrow-big-left',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-big-left"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z" />
      </svg>
    )
  },
  {
    title: 'arrow-big-right',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-big-right"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z" />
      </svg>
    )
  },
  {
    title: 'arrow-big-top',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-big-top"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 20v-8h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v8a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
      </svg>
    )
  },
  {
    title: 'arrow-bottom-bar',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-bottom-bar"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 3v18" />
        <path d="M9 18l3 3l3 -3" />
        <path d="M9 3h6" />
      </svg>
    )
  },
  {
    title: 'arrow-bottom-circle',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-bottom-circle"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 7v14" />
        <path d="M9 18l3 3l3 -3" />
        <circle cx="12" cy="5" r="2" />
      </svg>
    )
  },
  {
    title: 'arrow-bottom-square',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-bottom-square"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 7v14" />
        <path d="M9 18l3 3l3 -3" />
        <path d="M14 3v4h-4v-4z" />
      </svg>
    )
  },
  {
    title: 'arrow-down-right-circle',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-down-right-circle"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="9" />
        <line x1="15" y1="15" x2="9" y2="15" />
        <polyline points="15 9 15 15 9 9" />
      </svg>
    )
  },
  {
    title: 'arrow-down-right',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-down-right"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="7" y1="7" x2="17" y2="17" />
        <polyline points="17 8 17 17 8 17" />
      </svg>
    )
  },
  {
    title: 'arrow-down',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-down"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="18" y1="13" x2="12" y2="19" />
        <line x1="6" y1="13" x2="12" y2="19" />
      </svg>
    )
  },
  {
    title: 'arrow-forward-up',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-forward-up"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 13l4 -4l-4 -4m4 4h-11a4 4 0 0 0 0 8h1" />
      </svg>
    )
  },
  {
    title: 'arrow-forward',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-forward"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 11l4 4l-4 4m4 -4h-11a4 4 0 0 1 0 -8h1" />
      </svg>
    )
  },
  {
    title: 'arrow-left-bar',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-left-bar"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M21 12h-18" />
        <path d="M6 9l-3 3l3 3" />
        <path d="M21 9v6" />
      </svg>
    )
  },
  {
    title: 'arrow-left-circle',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-left-circle"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M17 12h-14" />
        <path d="M6 9l-3 3l3 3" />
        <circle cx="19" cy="12" r="2" />
      </svg>
    )
  },
  {
    title: 'arrow-left-square',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-left-square"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M17 12h-14" />
        <path d="M6 9l-3 3l3 3" />
        <path d="M21 14h-4v-4h4z" />
      </svg>
    )
  },
  {
    title: 'arrow-left-tail',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-left-tail"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 12h-15" />
        <path d="M6 9l-3 3l3 3" />
        <path d="M21 9l-3 3l3 3" />
      </svg>
    )
  },
  {
    title: 'arrow-left',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-left"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="5" y1="12" x2="19" y2="12" />
        <line x1="5" y1="12" x2="11" y2="18" />
        <line x1="5" y1="12" x2="11" y2="6" />
      </svg>
    )
  },
  {
    title: 'arrow-loop-left',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-loop-left"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M13 21v-13a4 4 0 1 1 4 4h-13" />
        <path d="M7 15l-3 -3l3 -3" />
      </svg>
    )
  },
  {
    title: 'arrow-loop-right',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-loop-right"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 21v-13a4 4 0 1 0 -4 4h13" />
        <path d="M18 15l3 -3l-3 -3" />
      </svg>
    )
  },
  {
    title: 'arrow-narrow-down',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-narrow-down"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="16" y1="15" x2="12" y2="19" />
        <line x1="8" y1="15" x2="12" y2="19" />
      </svg>
    )
  },
  {
    title: 'arrow-narrow-left',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-narrow-left"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="5" y1="12" x2="19" y2="12" />
        <line x1="5" y1="12" x2="9" y2="16" />
        <line x1="5" y1="12" x2="9" y2="8" />
      </svg>
    )
  },
  {
    title: 'arrow-narrow-right',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-narrow-right"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="5" y1="12" x2="19" y2="12" />
        <line x1="15" y1="16" x2="19" y2="12" />
        <line x1="15" y1="8" x2="19" y2="12" />
      </svg>
    )
  },
  {
    title: 'arrow-narrow-up',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-narrow-up"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="16" y1="9" x2="12" y2="5" />
        <line x1="8" y1="9" x2="12" y2="5" />
      </svg>
    )
  },
  {
    title: 'arrow-ramp-left',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-ramp-left"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="17" y1="3" x2="17" y2="11.707" />
        <path d="M13 7l4 -4l4 4" />
        <path d="M7 14l-4 -4l4 -4" />
        <path d="M17 21a11 11 0 0 0 -11 -11h-3" />
      </svg>
    )
  },
  {
    title: 'arrow-ramp-right',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-ramp-right"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="7" y1="3" x2="7" y2="11.707" />
        <path d="M11 7l-4 -4l-4 4" />
        <path d="M17 14l4 -4l-4 -4" />
        <path d="M7 21a11 11 0 0 1 11 -11h3" />
      </svg>
    )
  },
  {
    title: 'arrow-right-bar',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-right-bar"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 15l3 -3l-3 -3" />
        <path d="M3 12h18" />
        <path d="M3 9v6" />
      </svg>
    )
  },
  {
    title: 'arrow-right-circle',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-right-circle"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 15l3 -3l-3 -3" />
        <circle cx="5" cy="12" r="2" />
        <path d="M7 12h14" />
      </svg>
    )
  },
  {
    title: 'arrow-right-square',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-right-square"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="7" y1="12" x2="21" y2="12" />
        <path d="M18 15l3 -3l-3 -3" />
        <path d="M3 10h4v4h-4z" />
      </svg>
    )
  },
  {
    title: 'arrow-right-tail',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-right-tail"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 15l3 -3l-3 -3" />
        <path d="M3 15l3 -3l-3 -3" />
        <line x1="6" y1="12" x2="21" y2="12" />
      </svg>
    )
  },
  {
    title: 'arrow-right',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-right"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="5" y1="12" x2="19" y2="12" />
        <line x1="13" y1="18" x2="19" y2="12" />
        <line x1="13" y1="6" x2="19" y2="12" />
      </svg>
    )
  },
  {
    title: 'arrow-top-bar',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-top-bar"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="12" y1="21" x2="12" y2="3" />
        <path d="M15 6l-3 -3l-3 3" />
        <line x1="9" y1="21" x2="15" y2="21" />
      </svg>
    )
  },
  {
    title: 'arrow-top-circle',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-top-circle"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="12" y1="17" x2="12" y2="3" />
        <path d="M15 6l-3 -3l-3 3" />
        <circle cx="12" cy="19" r="2" />
      </svg>
    )
  },
  {
    title: 'arrow-top-square',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-top-square"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="12" y1="17" x2="12" y2="3" />
        <path d="M15 6l-3 -3l-3 3" />
        <path d="M10 21v-4h4v4z" />
      </svg>
    )
  },
  {
    title: 'arrow-top-tail',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-top-tail"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="12" y1="18" x2="12" y2="3" />
        <path d="M15 6l-3 -3l-3 3" />
        <path d="M15 21l-3 -3l-3 3" />
      </svg>
    )
  },
  {
    title: 'arrow-up-circle',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-up-circle"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="9" />
        <line x1="12" y1="8" x2="8" y2="12" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="16" y1="12" x2="12" y2="8" />
      </svg>
    )
  },
  {
    title: 'arrow-up-left-circle',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-up-left-circle"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="9" />
        <line x1="9" y1="9" x2="15" y2="15" />
        <polyline points="15 9 9 9 9 15" />
      </svg>
    )
  },
  {
    title: 'arrow-up-left',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-up-left"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="7" y1="7" x2="17" y2="17" />
        <polyline points="16 7 7 7 7 16" />
      </svg>
    )
  },
  {
    title: 'arrow-up-right-circle',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-up-right-circle"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="9" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <polyline points="15 15 15 9 9 9" />
      </svg>
    )
  },
  {
    title: 'arrow-up-right',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-up-right"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="17" y1="7" x2="7" y2="17" />
        <polyline points="8 7 17 7 17 16" />
      </svg>
    )
  },
  {
    title: 'arrow-up',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-up"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="18" y1="11" x2="12" y2="5" />
        <line x1="6" y1="11" x2="12" y2="5" />
      </svg>
    )
  },
  {
    title: 'arrow-wave-left-down',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-wave-left-down"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 13.998h-4v-4" />
        <path d="M21 11.998c-.887 1.284 -2.48 2.033 -4 2c-1.52 .033 -3.113 -.716 -4 -2s-2.48 -2.033 -4 -2c-1.52 -.033 -3 1 -4 2l-2 2" />
      </svg>
    )
  },
  {
    title: 'arrow-wave-left-up',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-wave-left-up"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 9.996h-4v4" />
        <path d="M21 11.996c-.887 -1.285 -2.48 -2.033 -4 -2c-1.52 -.033 -3.113 .715 -4 2c-.887 1.284 -2.48 2.033 -4 2c-1.52 .033 -3 -1 -4 -2l-2 -2" />
      </svg>
    )
  },
  {
    title: 'arrow-wave-right-down',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-wave-right-down"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M17 13.998h4v-4" />
        <path d="M3 11.998c.887 1.284 2.48 2.033 4 2c1.52 .033 3.113 -.716 4 -2s2.48 -2.033 4 -2c1.52 -.033 3 1 4 2l2 2" />
      </svg>
    )
  },
  {
    title: 'arrow-wave-right-up',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-wave-right-up"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M17 10h4v4" />
        <path d="M3 12c.887 -1.284 2.48 -2.033 4 -2c1.52 -.033 3.113 .716 4 2s2.48 2.033 4 2c1.52 .033 3 -1 4 -2l2 -2" />
      </svg>
    )
  },
  {
    title: 'arrows-diagonal-2',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrows-diagonal-2"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="16 20 20 20 20 16" />
        <line x1="14" y1="14" x2="20" y2="20" />
        <polyline points="8 4 4 4 4 8" />
        <line x1="4" y1="4" x2="10" y2="10" />
      </svg>
    )
  },
  {
    title: 'arrows-diagonal-minimize-2',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrows-diagonal-minimize-2"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 10h-4v-4" />
        <path d="M20 4l-6 6" />
        <path d="M6 14h4v4" />
        <path d="M10 14l-6 6" />
      </svg>
    )
  },
  {
    title: 'arrows-diagonal-minimize',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrows-diagonal-minimize"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 10h4v-4" />
        <path d="M4 4l6 6" />
        <path d="M18 14h-4v4" />
        <path d="M14 14l6 6" />
      </svg>
    )
  },
  {
    title: 'arrows-diagonal',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrows-diagonal"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="16 4 20 4 20 8" />
        <line x1="14" y1="10" x2="20" y2="4" />
        <polyline points="8 20 4 20 4 16" />
        <line x1="4" y1="20" x2="10" y2="14" />
      </svg>
    )
  },
  {
    title: 'arrows-double-ne-sw',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrows-double-ne-sw"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 14l11 -11" />
        <path d="M10 3h4v4" />
        <path d="M10 17v4h4" />
        <path d="M21 10l-11 11" />
      </svg>
    )
  },
  {
    title: 'arrows-double-nw-se',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrows-double-nw-se"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M14 21l-11 -11" />
        <path d="M3 14v-4h4" />
        <path d="M17 14h4v-4" />
        <line x1="10" y1="3" x2="21" y2="14" />
      </svg>
    )
  },
  {
    title: 'arrows-double-se-nw',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrows-double-se-nw"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="3" y1="10" x2="14" y2="21" />
        <path d="M14 17v4h-4" />
        <path d="M14 3h-4v4" />
        <path d="M21 14l-11 -11" />
      </svg>
    )
  },
  {
    title: 'arrows-double-sw-ne',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrows-double-sw-ne"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M14 3l-11 11" />
        <path d="M3 10v4h4" />
        <path d="M17 10h4v4" />
        <path d="M10 21l11 -11" />
      </svg>
    )
  },
  {
    title: 'arrows-down-up',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrows-down-up"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="17" y1="3" x2="17" y2="21" />
        <path d="M10 18l-3 3l-3 -3" />
        <line x1="7" y1="21" x2="7" y2="3" />
        <path d="M20 6l-3 -3l-3 3" />
      </svg>
    )
  },
  {
    title: 'arrows-down',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrows-down"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="7" y1="21" x2="7" y2="3" />
        <path d="M20 18l-3 3l-3 -3" />
        <path d="M4 18l3 3l3 -3" />
        <line x1="17" y1="21" x2="17" y2="3" />
      </svg>
    )
  },
  {
    title: 'arrows-horizontal',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrows-horizontal"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="7 8 3 12 7 16" />
        <polyline points="17 8 21 12 17 16" />
        <line x1="3" y1="12" x2="21" y2="12" />
      </svg>
    )
  },
  {
    title: 'arrows-join-2',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrows-join-2"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 7h1.948c1.913 0 3.705 .933 4.802 2.5a5.861 5.861 0 0 0 4.802 2.5h6.448" />
        <path d="M3 17h1.95a5.854 5.854 0 0 0 4.798 -2.5a5.854 5.854 0 0 1 4.798 -2.5h5.454" />
        <path d="M18 15l3 -3l-3 -3" />
      </svg>
    )
  },
  {
    title: 'arrows-join',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrows-join"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 7h5l3.5 5h9.5" />
        <path d="M3 17h5l3.495 -5" />
        <path d="M18 15l3 -3l-3 -3" />
      </svg>
    )
  },
  {
    title: 'arrows-left-down',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrows-left-down"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 3l-4 4l4 4" />
        <path d="M3 7h11a3 3 0 0 1 3 3v11" />
        <path d="M13 17l4 4l4 -4" />
      </svg>
    )
  },
  {
    title: 'arrows-left-right',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrows-left-right"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="21" y1="17" x2="3" y2="17" />
        <path d="M6 10l-3 -3l3 -3" />
        <line x1="3" y1="7" x2="21" y2="7" />
        <path d="M18 20l3 -3l-3 -3" />
      </svg>
    )
  },
  {
    title: 'arrows-left',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrows-left"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="3" y1="7" x2="21" y2="7" />
        <path d="M6 20l-3 -3l3 -3" />
        <path d="M6 4l-3 3l3 3" />
        <line x1="3" y1="17" x2="21" y2="17" />
      </svg>
    )
  },
  {
    title: 'arrows-maximize',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrows-maximize"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="16 4 20 4 20 8" />
        <line x1="14" y1="10" x2="20" y2="4" />
        <polyline points="8 20 4 20 4 16" />
        <line x1="4" y1="20" x2="10" y2="14" />
        <polyline points="16 20 20 20 20 16" />
        <line x1="14" y1="14" x2="20" y2="20" />
        <polyline points="8 4 4 4 4 8" />
        <line x1="4" y1="4" x2="10" y2="10" />
      </svg>
    )
  },
  {
    title: 'arrows-minimize',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrows-minimize"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="5 9 9 9 9 5" />
        <line x1="3" y1="3" x2="9" y2="9" />
        <polyline points="5 15 9 15 9 19" />
        <line x1="3" y1="21" x2="9" y2="15" />
        <polyline points="19 9 15 9 15 5" />
        <line x1="15" y1="9" x2="21" y2="3" />
        <polyline points="19 15 15 15 15 19" />
        <line x1="15" y1="15" x2="21" y2="21" />
      </svg>
    )
  },
  {
    title: 'arrows-right-down',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrows-right-down"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 17l4 4l4 -4" />
        <path d="M7 21v-11a3 3 0 0 1 3 -3h11" />
        <path d="M17 11l4 -4l-4 -4" />
      </svg>
    )
  },
  {
    title: 'arrows-right-left',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrows-right-left"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="21" y1="7" x2="3" y2="7" />
        <path d="M18 10l3 -3l-3 -3" />
        <path d="M6 20l-3 -3l3 -3" />
        <line x1="3" y1="17" x2="21" y2="17" />
      </svg>
    )
  },
  {
    title: 'arrows-right',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrows-right"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="21" y1="17" x2="3" y2="17" />
        <path d="M18 4l3 3l-3 3" />
        <path d="M18 20l3 -3l-3 -3" />
        <line x1="21" y1="7" x2="3" y2="7" />
      </svg>
    )
  },
  {
    title: 'arrows-sort',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrows-sort"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 9l4 -4l4 4m-4 -4v14" />
        <path d="M21 15l-4 4l-4 -4m4 4v-14" />
      </svg>
    )
  },
  {
    title: 'arrows-split-2',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrows-split-2"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M21 17h-5.397a5 5 0 0 1 -4.096 -2.133l-.514 -.734a5 5 0 0 0 -4.096 -2.133h-3.897" />
        <path d="M21 7h-5.395a5 5 0 0 0 -4.098 2.135l-.51 .73a5 5 0 0 1 -4.097 2.135h-3.9" />
        <path d="M18 10l3 -3l-3 -3" />
        <path d="M18 20l3 -3l-3 -3" />
      </svg>
    )
  },
  {
    title: 'arrows-split',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrows-split"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M21 17h-8l-3.5 -5h-6.5" />
        <path d="M21 7h-8l-3.495 5" />
        <path d="M18 10l3 -3l-3 -3" />
        <path d="M18 20l3 -3l-3 -3" />
      </svg>
    )
  },
  {
    title: 'arrows-up-down',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrows-up-down"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="7" y1="3" x2="7" y2="21" />
        <path d="M10 6l-3 -3l-3 3" />
        <path d="M20 18l-3 3l-3 -3" />
        <line x1="17" y1="21" x2="17" y2="3" />
      </svg>
    )
  },
  {
    title: 'arrows-up-left',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrows-up-left"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M21 7l-4 -4l-4 4" />
        <path d="M17 3v11a3 3 0 0 1 -3 3h-11" />
        <path d="M7 13l-4 4l4 4" />
      </svg>
    )
  },
  {
    title: 'arrows-up-right',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrows-up-right"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M17 21l4 -4l-4 -4" />
        <path d="M21 17h-11a3 3 0 0 1 -3 -3v-11" />
        <path d="M11 7l-4 -4l-4 4" />
      </svg>
    )
  },
  {
    title: 'arrows-up',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrows-up"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="17" y1="3" x2="17" y2="21" />
        <path d="M4 6l3 -3l3 3" />
        <path d="M20 6l-3 -3l-3 3" />
        <line x1="7" y1="3" x2="7" y2="21" />
      </svg>
    )
  },
  {
    title: 'arrows-vertical',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrows-vertical"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="8 7 12 3 16 7" />
        <polyline points="8 17 12 21 16 17" />
        <line x1="12" y1="3" x2="12" y2="21" />
      </svg>
    )
  },
  {
    title: 'artboard',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-artboard"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="8" y="8" width="8" height="8" rx="1" />
        <line x1="3" y1="8" x2="4" y2="8" />
        <line x1="3" y1="16" x2="4" y2="16" />
        <line x1="8" y1="3" x2="8" y2="4" />
        <line x1="16" y1="3" x2="16" y2="4" />
        <line x1="20" y1="8" x2="21" y2="8" />
        <line x1="20" y1="16" x2="21" y2="16" />
        <line x1="8" y1="20" x2="8" y2="21" />
        <line x1="16" y1="20" x2="16" y2="21" />
      </svg>
    )
  },
  {
    title: 'aspect-ratio',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-aspect-ratio"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M7 12v-3h3" />
        <path d="M17 12v3h-3" />
      </svg>
    )
  },
  {
    title: 'at',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-at"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="4" />
        <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
      </svg>
    )
  },
  {
    title: 'atom-2',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-atom-2"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="21" x2="12" y2="21.01" />
        <line x1="3" y1="9" x2="3" y2="9.01" />
        <line x1="21" y1="9" x2="21" y2="9.01" />
        <path d="M8 20.1a9 9 0 0 1 -5 -7.1" />
        <path d="M16 20.1a9 9 0 0 0 5 -7.1" />
        <path d="M6.2 5a9 9 0 0 1 11.4 0" />
      </svg>
    )
  },
  {
    title: 'atom',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-atom"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="12" y1="12" x2="12" y2="12.01" />
        <path
          d="M12 2a4 10 0 0 0 -4 10a4 10 0 0 0 4 10a4 10 0 0 0 4 -10a4 10 0 0 0 -4 -10"
          transform="rotate(45 12 12)"
        />
        <path
          d="M12 2a4 10 0 0 0 -4 10a4 10 0 0 0 4 10a4 10 0 0 0 4 -10a4 10 0 0 0 -4 -10"
          transform="rotate(-45 12 12)"
        />
      </svg>
    )
  },
  {
    title: 'award',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-award"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="9" r="6" />
        <polyline
          points="9 14.2 9 21 12 19 15 21 15 14.2"
          transform="rotate(-30 12 9)"
        />
        <polyline
          points="9 14.2 9 21 12 19 15 21 15 14.2"
          transform="rotate(30 12 9)"
        />
      </svg>
    )
  },
  {
    title: 'axe',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-axe"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M13 9l7.383 7.418c.823 .82 .823 2.148 0 2.967a2.11 2.11 0 0 1 -2.976 0l-7.407 -7.385" />
        <path d="M6.66 15.66l-3.32 -3.32a1.25 1.25 0 0 1 .42 -2.044l3.24 -1.296l6 -6l3 3l-6 6l-1.296 3.24a1.25 1.25 0 0 1 -2.044 .42z" />
      </svg>
    )
  },
  {
    title: 'axis-x',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-axis-x"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 13v.01" />
        <path d="M4 9v.01" />
        <path d="M4 5v.01" />
        <path d="M17 20l3 -3l-3 -3" />
        <path d="M4 17h16" />
      </svg>
    )
  },
  {
    title: 'axis-y',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-axis-y"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M11 20h-.01" />
        <path d="M15 20h-.01" />
        <path d="M19 20h-.01" />
        <path d="M4 7l3 -3l3 3" />
        <path d="M7 20v-16" />
      </svg>
    )
  },
  {
    title: 'backhoe',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-backhoe"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="4" cy="17" r="2" />
        <circle cx="13" cy="17" r="2" />
        <line x1="13" y1="19" x2="4" y2="19" />
        <line x1="4" y1="15" x2="13" y2="15" />
        <path d="M8 12v-5h2a3 3 0 0 1 3 3v5" />
        <path d="M5 15v-2a1 1 0 0 1 1 -1h7" />
        <path d="M21.12 9.88l-3.12 -4.88l-5 5" />
        <path d="M21.12 9.88a3 3 0 0 1 -2.12 5.12a3 3 0 0 1 -2.12 -.88l4.24 -4.24z" />
      </svg>
    )
  },
  {
    title: 'backpack',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-backpack"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M11 7h2a6 6 0 0 1 6 6v6a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-6a6 6 0 0 1 6 -6z" />
        <path d="M10 7v-1a2 2 0 1 1 4 0v1" />
        <path d="M10 15h4" />
      </svg>
    )
  },
  {
    title: 'backspace',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-backspace"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M20 6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-11l-5 -5a1.5 1.5 0 0 1 0 -2l5 -5z" />
        <path d="M12 10l4 4m0 -4l-4 4" />
      </svg>
    )
  },
  {
    title: 'ball-american-football',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-ball-american-football"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="10" y1="12" x2="12" y2="14" />
        <line x1="12" y1="10" x2="14" y2="12" />
        <path d="M8 21a5 5 0 0 0 -5 -5" />
        <path d="M16 3c-7.18 0 -13 5.82 -13 13a5 5 0 0 0 5 5c7.18 0 13 -5.82 13 -13a5 5 0 0 0 -5 -5" />
        <path d="M16 3a5 5 0 0 0 5 5" />
      </svg>
    )
  },
  {
    title: 'ball-baseball',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-ball-baseball"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5.636 18.364a9 9 0 1 0 12.728 -12.728a9 9 0 0 0 -12.728 12.728z" />
        <path d="M12.495 3.02a9 9 0 0 1 -9.475 9.475" />
        <path d="M20.98 11.505a9 9 0 0 0 -9.475 9.475" />
      </svg>
    )
  },
  {
    title: 'ball-basketball',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-ball-basketball"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="9" />
        <line x1="5.65" y1="5.65" x2="18.35" y2="18.35" />
        <line x1="5.65" y1="18.35" x2="18.35" y2="5.65" />
        <path d="M12 3a9 9 0 0 0 9 9" />
        <path d="M3 12a9 9 0 0 1 9 9" />
      </svg>
    )
  },
  {
    title: 'ball-bowling',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-ball-bowling"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="9" />
        <line x1="11" y1="9" x2="11" y2="9.01" />
        <line x1="15" y1="8" x2="15" y2="8.01" />
        <line x1="14" y1="12" x2="14" y2="12.01" />
      </svg>
    )
  }
];
