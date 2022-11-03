import { Button } from "../components/button";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { SideBar } from "../components/SideBar";


export function Home() {
  return (
    <>
      <Header />
      <div className="flex w-full  gap-8">
        <SideBar />
        <main className="w-full">
          <Card />
        </main>
      </div>
    </>
  )
}