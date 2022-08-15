import { generateUniqueIds } from '../lib/utils'

export function CloseIcon(props: { class: string }) {
  const uniqueIdsForUrlsInSVG = generateUniqueIds(1)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 12 12"
      class={props.class}
    >
      <g clip-path={`url(#${uniqueIdsForUrlsInSVG['1st']})`}>
        <path
          fill="#FF7F43"
          d="m7.1 6 4.672-4.673a.778.778 0 0 0-1.1-1.099L6 4.901 1.327.228a.777.777 0 1 0-1.099 1.1L4.901 6 .228 10.673a.777.777 0 1 0 1.1 1.1L6 7.098l4.673 4.673a.776.776 0 1 0 1.099-1.1L7.099 6H7.1Z"
        />
      </g>
      <defs>
        <clipPath id={uniqueIdsForUrlsInSVG['1st']}>
          <path fill="#fff" d="M0 0h12v12H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
