import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";


export function Home() {
  return (
    <div >
      <Header />
      <div className="flex w-full flex-col items-center justify-center py-8 gap-8 md:flex-row md:items-start">
        <SideBar />
        <main className=" px-2">
          <Card />
        </main>
      </div>
    </div>
  )
}