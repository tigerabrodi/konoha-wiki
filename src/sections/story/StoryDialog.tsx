import { For } from 'solid-js'
import { NarutoFullStoryArt } from '../../arts/NarutoFullStoryArt'
import { CloseIcon } from '../../icons/CloseIcon'
import { storyChapters } from '../../lib/constants'
import { useClickOutside } from '../../primitives/useClickOutside'
import './StoryDialog.css'

export function StoryDialog(props: { onClose: () => void }) {
  let containerElement: HTMLDivElement | undefined

  useClickOutside(() => containerElement, props.onClose)

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
              <h2 class="text-with-gradient story__dialog__chapter-heading">
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
