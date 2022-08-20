import type { ClassProps } from '../lib/types'

export function LeftArrow(props: ClassProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 8"
      class={props.class}
    >
      <path
        fill="#080A0A"
        d="M.639 3.721a.5.5 0 0 0 .012.707l3.237 3.126a.5.5 0 1 0 .695-.719L1.705 4.056 4.484 1.18a.5.5 0 1 0-.72-.695L.64 3.721Zm8.35-.292-8 .14.018 1 7.999-.14-.018-1Z"
      />
    </svg>
  )
}
