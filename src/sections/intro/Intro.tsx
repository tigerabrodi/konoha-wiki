import './Intro.css'
import { NarutoMainArt } from '../../arts/NarutoMainArt'
import { NarutoSasukeArt } from '../../arts/NarutoSasukeArt'
import NarutoSasukeFightVideo from '../../assets/naruto-sasuke-fight.mp4'

export function Intro() {
  return (
    <section class="section intro__section">
      <h1 class="sr-only">Intro</h1>
      <video
        src={NarutoSasukeFightVideo}
        autoplay
        loop
        muted
        aria-hidden="true"
        class="intro__video"
      />
      <div aria-hidden="true" class="intro__overlay" />
      <NarutoMainArt class="intro__main-art" />
      <h2 class="intro__subtitle text-with-gradient gradient-to-right">
        The tale of Naruto Uzumaki, from an orphan to the greatest ninja in
        history.
      </h2>
      <NarutoSasukeArt class="intro__naruto-sasuke-art" />
    </section>
  )
}
