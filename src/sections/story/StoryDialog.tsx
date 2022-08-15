import { For } from 'solid-js'
import { NarutoFullStoryArt } from '../../arts/NarutoFullStoryArt'
import { CloseIcon } from '../../icons/CloseIcon'
import './StoryDialog.css'

const storyChapters = [
  {
    chapter: 'Intro',
    content: [
      'Before the story, shortly after the birth of Naruto, the Nine-Tailed beast attacked Konoha (his village). As a result both his parents died. His father Minato Namikaze sacrificed himself as the leader of the village at the time (fourth Hokage) and sealed the Nine-Tails into Naruto.',
      'Naruto became an orphan and was shunned by the villagers, who out of fear and anger, viewed him as the Nine-Tails itself. No one spoke about the Nine-Tails since it became law not to speak about it, this was done so that it didn’t become worldly known that Naruto had a part of Nine-Tails inside of him.',
      'Naruto, not being acknowledged by anyone, swore to become the greatest Ninja and Hokage (leader of his village), and become acknowledged by everyone.',
    ],
  },
  {
    chapter: 'Early Childhood',
    content: [
      'It is worth mentioning, that throughout his journey till much later, he didn’t know who his two parents were, Minato Namikaze, and Kushina Uzumaki.',
      'He eventually got into Team 7 with Sasuke, Sakura, and their Sensei Kakashi Hatake.',
      'Sasuke due to wanting revenge on his brother, Itachi Uchiha, for killing the whole Uchiha village, ran from Konoha and got lost on a dark path doing evil to become stronger in order to be able to kill his brother.',
      'Naruto swore to bring back Sasuke, make him see the light, and come back to the village since he is his friend and the closest thing Naruto had as a brother.',
      'Naruto wasn’t strong enough to bring Sasuke back and wanted to become stronger, so he went with his Mentor and Godfather Jirayia away for three years to train.',
    ],
  },
  {
    chapter: 'Teenage Years',
    content: [
      'When Naruto came back, he continued doing missions and training. There are numerous arcs that could be mentioned, but worth briefly mentioning are the Pain Arc and the Fourth Shinobi World War.',
    ],
  },
  {
    chapter: 'Pain Arc',
    content: [
      "During the Pain Arc Nagato who was Jirayia's former student, known as Pain at the time, the leader of the crime group Akatsuki, killed Jirayia and later on attacked Konoha in order to try to find Naruto and steal the Nine-Tails within him, in the end, Naruto came back to the village from training in the mountains and saved the entire village.",
    ],
  },
  {
    chapter: 'World War',
    content: [
      'The Fourth Shinobi World War brought the nations together since everyone was at risk. The risk of Obito and Madara taking over the world with their army and everyone ending up living in the illusion of Infinite Tsukuyomi.',
    ],
  },
  {
    chapter: 'Becoming Hokage',
    content: [
      'After the Fourth Shinobi World War, the world became much more peaceful than it was, and the nations united, all who saw Naruto as the hero, and had great respect and admiration for him.',
      'There wasn’t a single person who didn’t respect, admire, or was thankful to Naruto, because of him the peace could be achieved.',
      'From the time from the War had ended till Naruto became Hokage, he would do missions time to time, as well as teach the younger ones in Konoha. He also had to go back and study, since he didn’t finish all the academic ranks, this was also important since to become the leader of the village, there are no shortcuts, even for the greatest ones. This is also to set an example for the latter generations.',
      'Naruto married Hinata Hyuga. Their relationship began in childhood, but Naruto realized much later that he loved and had feelings for Hinata. They ended up having two children, a son and a daughter, Boruto and Himawari.',
      'Naruto became Hokage at the age of 28, which is almost 10 years after his marriage.',
    ],
  },
] as const

export function StoryDialog() {
  return (
    <>
      <div class="story__dialog-overlay" />
      <div role="dialog" class="story__dialog">
        <h1 class="sr-only">Naruto full story</h1>
        <CloseIcon class="story__dialog-close-icon" />
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
