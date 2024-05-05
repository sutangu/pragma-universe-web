// import Image from "next/image";
import Link from 'next/link';
import styles from "./page.module.scss";

interface LinkInterface {
  title: string;
  url: string;
}

interface BlocksMOCKInterface {
  title: string;
  summary: string;
  description?: string;
  link?: LinkInterface;
}

const blocksMOCK: BlocksMOCKInterface[] = [
  {
    title: 'Приветственный блок текста',
    summary: 'Начинается с ритуального приветствия',
    description: 'Заканчивается приглашением прочитать далее подробнее',
  },
  {
    title: 'Что такое Прагма?',
    summary: 'Описание новой глобальной идеологии',
    description: 'Заканчивается текстом о необходимости построить глобальное государство',
  },
  {
    title: 'Вечная Империя',
    summary: 'Описание что это такое и зачем нужно (выживание)',
    description: 'Заканчивается тезисом о том, что человечеству нужно объединить усилия для достижения бессмертия',
    link: {
      title: 'Страница о Вечной Империи',
      url: 'empire'
    },
  },
  {
    title: 'Бессмертие',
    summary: 'Радикальное продление жизни как основная цель Вечной Империи',
    description: 'Заканчивается вопросом о том, где мы все бессмертные будем жить',
    link: {
      title: 'Страница о Бессмертии',
      url: 'immortality'
    },
  },
  {
    title: 'Экспансия',
    summary: 'Отвечает на вопрос о необходимости космической экспансии, как безальтернативном сценарии развития для предотвращения катастроф, и чтобы бессмерный вид мог расширять своё жизненное пространсво',
    link: {
      title: 'Страница Экспансии',
      url: 'expansion'
    },
  }
];

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Добро пожаловать во вселенную Прагмы!</h1>

      <ul className={styles.blocks}>
        {blocksMOCK.map((block: BlocksMOCKInterface) => (
          <li key={block.title} className={styles.block}>
            <h3>{block.title}</h3>
            <p className={styles.summary}>{block.summary}</p>
            {block.description ? <p className={styles.description}>{block.description}</p> : null}
            {block.link?.url ? <Link className={styles.link} href={`/${block.link.url}`}>
              {block.link.title ?
                <>
                  {block.link.title}
                  <span aria-hidden={true} className={styles.arrow}>→</span>
                </> : null
              }
            </Link> : null}
          </li>
        ))}
      </ul>
    </main>
  );
}
