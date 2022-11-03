import { Button } from "../components/button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { SideBar } from "../components/SideBar";


export function Home() {
  return (
    <>
      <Header />
      <div>
        <SideBar />
        <main></main>
      </div>
    </>
  )
}