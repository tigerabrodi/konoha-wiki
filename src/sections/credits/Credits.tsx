import { RightPointer } from '../../icons/RightPointer'
import './Credits.css'

export function Credits() {
  return (
    <section class="section">
      <h1 class="credits__heading text-with-gradient gradient-to-bottom">
        Credits
      </h1>
      <div class="credits__wrapper">
        <div class="credits__item">
          <RightPointer class="credits__item-poiner" />
          <p class="credits__item-text">
            Developed, designed and created by{' '}
            <a
              href="https://tigerabrodi.tech"
              class="text-with-gradient gradient-to-bottom credits__item-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tiger Abrodi
            </a>
            .
          </p>
        </div>

        <div class="credits__item">
          <RightPointer class="credits__item-poiner" />
          <p class="credits__item-text">
            The source code can be found{' '}
            <a
              href="https://github.com/narutosstudent/konoha-wiki"
              class="text-with-gradient gradient-to-bottom credits__item-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
