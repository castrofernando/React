import { Header } from "../src/components/Header"
import styles from './App.module.css';
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

export const App = () => {

  type Post = {
    id: number,
    avatarUrl: string,
    name:string,
    role:string,
    publishedAt: Date,
    content:PostContent[]
  }

  type PostContent = {
    type: 'paragraph' | 'link' | 'hashtag',
    content:string
  }

  const posts:Post[] = [
    {
      id: 1,
      avatarUrl: 'https://avatars.githubusercontent.com/u/21298892?v=4',
      role:'Dev. Backend',
      name:'Fernando Castro',
      publishedAt: new Date('2024-10-02 20:07:00'),
      content: [
        {
          type: 'paragraph',
          content: 'Fala galeraa 👋'
        },
        {
          type: 'paragraph',
          content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
        },
        {
          type: 'link',
          content: '👉 jane.design/doctorcare'
        },
        {
          type: 'hashtag',
          content: '#novoprojeto'
        },
        {
          type: 'hashtag',
          content: '#nlw'
        },
      ]
    },
    {
      id: 2,
      avatarUrl: 'https://avatars.githubusercontent.com/u/59931542?v=4',
      role:'Dev. Frontend',
      name:'Rafael Okida',
      publishedAt: new Date('2024-10-01 20:12:00'),
      content: [
        {
          type: 'paragraph',
          content: 'Fala galeraa 👋'
        },
        {
          type: 'paragraph',
          content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
        },
        {
          type: 'link',
          content: '👉 jane.design/doctorcare'
        },
        {
          type: 'hashtag',
          content: '#novoprojeto'
        },
        {
          type: 'hashtag',
          content: '#nlw'
        },
      ]
    }
  ]

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {
            posts.map(p => {
              return (
                <Post
                  key={p.id}
                  avatarUrl={p.avatarUrl} 
                  name={p.name}
                  content={p.content}
                  role={p.role}
                  publishedAt={p.publishedAt} />
              )
              ;
            })
          }
        </main>
      </div>
    </>
  )
}
