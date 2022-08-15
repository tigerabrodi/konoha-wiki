import { createSignal } from 'solid-js'
import { NarutoStoryArt } from '../../arts/NarutoStoryArt'
import { storyChapters } from '../../lib/constants'
import './Story.css'
import { StoryDialog } from './StoryDialog'

const firstStoryContent = storyChapters[0].content[0]

const secondStoryContent = storyChapters[0].content[1]

export function Story() {
  const [isStoryDialogOpen, setIsStoryDialogOpen] = createSignal(false)

  return (
    <>
      <section class="section">
        <h1 class="text-with-gradient story__heading">Story</h1>
        <div class="story__intro">
          <h2 class="text-with-gradient story__intro-heading">Intro</h2>
          <p class="story__intro-text">{firstStoryContent}</p>
          <p class="story__intro-text">{secondStoryContent}</p>
        </div>
        <button
          class="story__intro-button"
          onClick={() => setIsStoryDialogOpen(true)}
        >
          Full Story
        </button>
        <NarutoStoryArt class="story__art" />
      </section>
      {isStoryDialogOpen() && (
        <StoryDialog onClose={() => setIsStoryDialogOpen(false)} />
      )}
    </>
  )
}
