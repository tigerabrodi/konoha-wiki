import { Accessor, For } from 'solid-js'
import { NarutoFullStoryArt } from '../../arts/NarutoFullStoryArt'
import { CloseIcon } from '../../icons/CloseIcon'
import { storyChapters } from '../../lib/constants'
import { createFocusTrap } from '../../primitives/createFocusTrap'
import { useClickOutside } from '../../primitives/useClickOutside'
import './StoryDialog.css'

export function StoryDialog(props: {
  onClose: () => void
  isOpen: Accessor<boolean>
}) {
  let containerElement: HTMLDivElement | undefined

  useClickOutside(() => containerElement, props.onClose)

  createFocusTrap(props.isOpen, () => containerElement)

  return (
    <>
      <div class="story__dialog-overlay" />
      <div role="dialog" class="story__dialog" ref={containerElement}>
        <h1 class="sr-only">Naruto full story</h1>
        <button
          type="button"
          onClick={props.onClose}
          class="story__dialog-close"
          aria-label="Close story dialog"
        >
          <CloseIcon />
        </button>
        <div class="story__dialog-art-wrapper">
          <NarutoFullStoryArt class="story__dialog-art" />
        </div>
        <For each={storyChapters}>
          {(chapter) => (
            <div class="story__dialog__chapter">
              <h2 class="text-with-gradient gradient-to-bottom story__dialog__chapter-heading">
                {chapter.chapter}
              </h2>

              <For each={chapter.content}>
                {(content) => (
                  <p class="story__dialog__chapter-content">{content}</p>
                )}
              </For>
            </div>
          )}
        </For>
      </div>
    </>
  )
}
