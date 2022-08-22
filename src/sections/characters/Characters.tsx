import { createSignal, For } from 'solid-js'
import { ItachiCharacterArt } from '../../arts/ItachiCharacterArt'
import { NarutoCharacterArt } from '../../arts/NarutoCharacterArt'
import { SasukeCharacterArt } from '../../arts/SasukeCharacterArt'
import { LeftArrow } from '../../icons/LeftArrow'
import { RightArrow } from '../../icons/RightArrow'
import './Characters.css'

type CharacterId = 'naruto' | 'sasuke' | 'itachi'

const characterIds = {
  sasuke: 'sasuke',
  naruto: 'naruto',
  itachi: 'itachi',
} as const

export const charactersContent = {
  naruto: {
    fullname: 'Naruto Uzumaki',
    bio: [
      'The son of the Minato Namikaze and Kushina Uzumaki. Naruto’s early childhood was tragic, living alone as an orphan, shunned by the village, and crying nights due to hunger and sadness.',
      'He was able to find strength and courage, make friends, and work hard. He ended up becoming the greatest ninja and Hokage in history. He truly changed the world.',
    ],
    art: <NarutoCharacterArt class="characters__character-art" />,
  },
  sasuke: {
    fullname: 'Sasuke Uchiha',
    bio: [
      'The younger brother of Itachi. Sasuke looked up to his older browser as a young child and strived to seek his father’s recognition. After his brother killed the Uchiha clan, Sasuke swore to take revenge,',
      'Sasuke ended up getting lost in darker paths, with the intention of becoming stronger to kill his older brother. In the end, Naruto made him see the light, and he started the journey of atoning for his sins.',
    ],
    art: <SasukeCharacterArt class="characters__character-art" />,
  },
  itachi: {
    fullname: 'Itachi Uchiha',
    bio: [
      'The first born of Mikoto Uchiha and Fugaku Uchiha. Itachi was one of the most talented ninjas, already at the age of 7 thinking like a Hokage. He spent a great time growing up being mentored by Shisui Uchiha.',
      'He killed the Uchiha clan believing it was best option to avoid another world war. Itachi became recognized as a criminal worldwide, despite being the hero in the shadows. He played an essential role throughout the whole series, even in the very end during the war.',
    ],
    art: <ItachiCharacterArt class="characters__character-art" />,
  },
} as const

const charactersSelectionArts = {
  itachi: <ItachiCharacterArt class="characters__selection-character-art" />,
  sasuke: <SasukeCharacterArt class="characters__selection-character-art" />,
  naruto: <NarutoCharacterArt class="characters__selection-character-art" />,
}

export function Characters() {
  const [characterValue, setCharacterValue] =
    createSignal<CharacterId>('naruto')

  const handleCharacterSelectionChange = (
    event: Event & { currentTarget: HTMLInputElement; target: Element }
  ) => {
    setCharacterValue((event.target as HTMLInputElement).value as CharacterId)
  }

  function switchCharacter(direction: 'left' | 'right') {
    if (characterValue() === 'naruto') {
      const newCharacterValue = direction === 'left' ? 'sasuke' : 'itachi'
      setCharacterValue(newCharacterValue)
      return
    }

    if (characterValue() === 'sasuke') {
      const newCharacterValue = direction === 'left' ? 'itachi' : 'naruto'
      setCharacterValue(newCharacterValue)
      return
    }

    if (characterValue() === 'itachi') {
      const newCharacterValue = direction === 'left' ? 'naruto' : 'sasuke'
      setCharacterValue(newCharacterValue)
      return
    }
  }

  return (
    <section class="section characters__section">
      <h1 class="text-with-gradient gradient-to-bottom characters__heading">
        Characters
      </h1>
      <div class="characters__character">
        {charactersContent[characterValue()].art}
        <div class="characters__character-spotlight" aria-hidden="true" />

        <button
          class="characters__selection-button characters__selection-button-desktop characters__selection-button-right"
          onClick={() => switchCharacter('right')}
          aria-label="Select character to the right"
        >
          <RightArrow />
        </button>

        <button
          class="characters__selection-button characters__selection-button-desktop characters__selection-button-left"
          onClick={() => switchCharacter('left')}
          aria-label="Select character to the left"
        >
          <LeftArrow />
        </button>
      </div>
      <h2 class="characters__fullname text-with-gradient gradient-to-right">
        {charactersContent[characterValue()].fullname}
      </h2>
      <div class="characters__bio">
        <For each={charactersContent[characterValue()].bio}>
          {(content) => <p class="characters__bio-text">{content}</p>}
        </For>
      </div>

      <div class="characters__selection">
        <button
          class="characters__selection-button characters__selection-button-mobile"
          onClick={() => switchCharacter('left')}
          aria-label="Select character to the left"
        >
          <LeftArrow />
        </button>

        <div class="characters__selection-character-wrapper">
          <For each={Object.keys(characterIds)}>
            {(id) => (
              <>
                <input
                  type="radio"
                  id={id}
                  value={id}
                  checked={characterValue() === id}
                  onChange={handleCharacterSelectionChange}
                  class="sr-only characters__selection-character-input"
                />
                <label
                  for={id}
                  aria-label={`select ${id}`}
                  class="characters__selection-character-label"
                >
                  {charactersSelectionArts[id as CharacterId]}
                </label>
              </>
            )}
          </For>
        </div>

        <button
          class="characters__selection-button characters__selection-button-mobile"
          onClick={() => switchCharacter('right')}
          aria-label="Select character to the right"
        >
          <RightArrow />
        </button>
      </div>
    </section>
  )
}
