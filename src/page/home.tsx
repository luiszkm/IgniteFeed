import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/luiszkm.png',
      name: 'luis soares',
      role: 'Web Developer',
    },
    postContent: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'devsoares.com' },
    ],
    publishedAt: new Date('2022-11-10 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CET Rocketseat',
    },
    postContent: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'devsoares.com' },
    ],
    publishedAt: new Date('2022-11-10 20:00:00')
  },
]

export function Home() {
  return (
    <div >
      <Header />
      <div className="flex w-full flex-col items-center justify-center py-8 gap-8 md:flex-row md:items-start">
        <SideBar />
        <main className=" px-2">
          { 
          posts.map(post => (
            <Card data={post} />
          ))
          }
        </main>
      </div>
    </div>
  )
}