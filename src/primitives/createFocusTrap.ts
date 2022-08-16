import { Accessor, createEffect, onCleanup } from 'solid-js'
import { setUpFocusTrap } from '../lib/focus-trap'

export function createFocusTrap<Element extends HTMLElement = HTMLDivElement>(
  isContainerElementOpen: Accessor<boolean>,
  containerElement: Accessor<Element | undefined>
) {
  createEffect(() => {
    if (isContainerElementOpen()) {
      const restoreFocus = setUpFocusTrap(containerElement())

      onCleanup(() => restoreFocus)
    }
  })
}
