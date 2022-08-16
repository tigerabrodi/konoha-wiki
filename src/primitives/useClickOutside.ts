import { Accessor, createEffect, onCleanup } from 'solid-js'

export function useClickOutside<
  ElementType extends HTMLElement = HTMLDivElement
>(container: Accessor<ElementType | undefined>, callback: () => void) {
  const handleOutsideClick = (event: Event) => {
    const isOutsideContainerElement = !container()?.contains(
      event.target as Node
    )

    // We don't want to trigger the callback if the user clicks on the button that opens the dialog.
    const isTargetAButton =
      (event.target as HTMLButtonElement).tagName.toLowerCase() === 'button'

    if (isOutsideContainerElement && !isTargetAButton) {
      callback()
    }
  }

  createEffect(() => {
    window.addEventListener('click', handleOutsideClick)
  })

  onCleanup(() => window.removeEventListener('click', handleOutsideClick))
}
