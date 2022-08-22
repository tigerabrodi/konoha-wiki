import { storyChapters } from '../../src/lib/constants'

const charactersContent = {
  naruto: {
    fullname: 'Naruto Uzumaki',
    bio: [
      'The son of the Minato Namikaze and Kushina Uzumaki. Naruto’s early childhood was tragic, living alone as an orphan, shunned by the village, and crying nights due to hunger and sadness.',
      'He was able to find strength and courage, make friends, and work hard. He ended up becoming the greatest ninja and Hokage in history. He truly changed the world.',
    ],
  },
  sasuke: {
    fullname: 'Sasuke Uchiha',
    bio: [
      'The younger brother of Itachi. Sasuke looked up to his older browser as a young child and strived to seek his father’s recognition. After his brother killed the Uchiha clan, Sasuke swore to take revenge,',
      'Sasuke ended up getting lost in darker paths, with the intention of becoming stronger to kill his older brother. In the end, Naruto made him see the light, and he started the journey of atoning for his sins.',
    ],
  },
  itachi: {
    fullname: 'Itachi Uchiha',
    bio: [
      'The first born of Mikoto Uchiha and Fugaku Uchiha. Itachi was one of the most talented ninjas, already at the age of 7 thinking like a Hokage. He spent a great time growing up being mentored by Shisui Uchiha.',
      'He killed the Uchiha clan believing it was best option to avoid another world war. Itachi became recognized as a criminal worldwide, despite being the hero in the shadows. He played an essential role throughout the whole series, even in the very end during the war.',
    ],
  },
} as const

const firstChapterFirstContent = storyChapters[0].content[0]
const firstChapterSecondContent = storyChapters[0].content[1]

it('Should be accessible and contain the right content', () => {
  cy.visit('/')
  cy.findByRole('heading', { level: 1, name: 'Intro' }).should('exist')
  cy.findByRole('heading', {
    level: 2,
    name: 'The tale of Naruto Uzumaki, from an orphan to the greatest ninja in history.',
  }).should('exist')

  // Story
  cy.findByRole('heading', { level: 1, name: 'Story' }).should('exist')
  cy.findByRole('heading', { level: 2, name: 'Intro' }).should('exist')

  cy.findByText(firstChapterFirstContent).should('exist')

  cy.findByText(firstChapterSecondContent).should('exist')

  cy.findByRole('button', { name: 'Full Story' }).should('exist')

  // Characters
  cy.findByRole('heading', { level: 1, name: 'Characters' }).should('exist')

  cy.findByRole('heading', {
    level: 2,
    name: charactersContent['naruto'].fullname,
  }).should('exist')

  for (const text of charactersContent['naruto'].bio) {
    cy.findByText(text).should('exist')
  }

  // Writing
  cy.findByRole('heading', { level: 1, name: 'Writing' }).should('exist')
  cy.findByRole('heading', { level: 2, name: 'Masashi Kishimoto' }).should(
    'exist'
  )
  cy.findByText(
    'Masashi Kishimoto was born in Okayama Prefecture, Japan on November 8, 1974. He started drawing from childhood. The work of Naruto began in year 1998. In the autumn of year 1999, Naruto became a hit, and spread massively. Till today over 300 million copies have been sold worldwide.'
  ).should('exist')

  // Credits
  cy.findByRole('heading', { level: 1, name: 'Credits' }).should('exist')
})
