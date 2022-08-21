import type { ClassProps } from '../lib/types'

export function RightPointer(props: ClassProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 10"
      class={props.class}
    >
      <path
        fill="url(#iosdfjsif)"
        d="M9.793 4.675.508.39a.36.36 0 0 0-.507.317.355.355 0 0 0 .071.22L3.125 5 .072 9.07a.356.356 0 0 0 .435.539l9.285-4.286a.357.357 0 0 0 .001-.65v.002Z"
      />
      <defs>
        <linearGradient
          id="iosdfjsif"
          x1="5"
          x2="5"
          y1=".357"
          y2="9.643"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F0C429" />
          <stop offset=".706" stop-color="#E26232" />
          <stop offset="1" stop-color="#DE4335" />
        </linearGradient>
      </defs>
    </svg>
  )
}
