import { Accessor, createSignal, For } from 'solid-js'
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
  const [scrollProgress, setScrollProgress] = createSignal(0)
  let containerElement: HTMLDivElement | undefined

  useClickOutside(() => containerElement, props.onClose)

  createFocusTrap(props.isOpen, () => containerElement)

  function handleScrollProgress() {
    if (containerElement) {
      const winScroll = containerElement.scrollTop
      const height =
        containerElement.scrollHeight - document.documentElement.clientHeight
      const newScrollProgress = (winScroll / height) * 100

      // Check here is necessary since you may scroll too fast and then the number would end up being 103 instead of 100.
      setScrollProgress(newScrollProgress > 100 ? 100 : newScrollProgress)
    }
  }

  return (
    <>
      <div class="story__dialog-overlay" />
      <div
        role="dialog"
        class="story__dialog"
        ref={containerElement}
        onScroll={handleScrollProgress}
      >
        <h1 class="sr-only">Naruto full story</h1>
        <div
          class="story__progress gradient-to-right"
          role="progressbar"
          aria-valuemax="100"
          aria-valuemin="0"
          aria-valuenow={scrollProgress()}
          style={{ transform: `scaleX(${scrollProgress() * 0.01})` }}
        />
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
