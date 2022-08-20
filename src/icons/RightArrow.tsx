import type { ClassProps } from '../lib/types'

export function RightArrow(props: ClassProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 9 8"
      class={props.class}
    >
      <path
        fill="#080A0A"
        d="M8.354 4.354a.5.5 0 0 0 0-.708L5.172.464a.5.5 0 1 0-.708.708L7.293 4 4.464 6.828a.5.5 0 1 0 .708.708l3.182-3.182ZM0 4.5h8v-1H0v1Z"
      />
    </svg>
  )
}
