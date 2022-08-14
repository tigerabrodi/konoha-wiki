import './Intro.css'
import { NarutoMainArt } from '../../arts/NarutoMainArt'
import { NarutoSasukeArt } from '../../arts/NarutoSasukeArt'

export function Intro() {
  return (
    <section class="section">
      <h1 class="sr-only">Naruto</h1>
      <NarutoMainArt class="intro__main-art" />
      <h2 class="intro__subtitle text-with-gradient">
        The tale of Naruto Uzumaki, from an orphan to the greatest ninja in
        history.
      </h2>
      <NarutoSasukeArt class="intro__naruto-sasuke-art" />
    </section>
  )
}
