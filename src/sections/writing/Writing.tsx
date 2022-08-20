import './Writing.css'
import masashiReadingImage from '../../assets/masashi-reading.webp'

export function Writing() {
  return (
    <section class="section writing__section">
      <h1 class="writing__heading text-with-gradient gradient-to-bottom">
        Writing
      </h1>
      <div class="writing__info">
        <h2 class="writing__info-heading text-with-gradient gradient-to-bottom">
          Masashi Kishimoto
        </h2>
        <p class="writing__info-text">
          Masashi Kishimoto was born in Okayama Prefecture, Japan on November 8,
          1974. He started drawing from childhood. The work of Naruto began in
          year 1998. In the autumn of year 1999, Naruto became a hit, and spread
          massively. Till today over 300 million copies have been sold
          worldwide.
        </p>
      </div>

      <div class="writing__image">
        <img src={masashiReadingImage} alt="masashi reading" />
      </div>
    </section>
  )
}
