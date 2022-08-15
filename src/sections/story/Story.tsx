import { NarutoStoryArt } from '../../arts/NarutoStoryArt'
import './Story.css'

export function Story() {
  return (
    <section class="section">
      <h1 class="text-with-gradient story__heading">Story</h1>
      <div class="story__intro">
        <h2 class="text-with-gradient story__intro-heading">Intro</h2>
        <p class="story__intro-text">
          Before the story, shortly after the birth of Naruto, the Nine-Tailed
          beast attacked Konoha (his village). As a result both his parents
          died. His father Minato Namikaze sacrificed himself as the leader of
          the village at the time (fourth Hokage) and sealed the Nine-Tails into
          Naruto.
        </p>
        <p class="story__intro-text">
          Naruto became an orphan and was shunned by the villagers, who out of
          fear and anger, viewed him as the Nine-Tails itself. No one spoke
          about the Nine-Tails since it became law not to speak about it, this
          was done so that it didn’t become worldly known that Naruto had a part
          of Nine-Tails inside of him.
        </p>
      </div>
      <button class="story__intro-button">Full Story</button>
      <NarutoStoryArt class="story__art" />
    </section>
  )
}
