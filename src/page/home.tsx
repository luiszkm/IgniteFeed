import { Button } from "../components/button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";


export function Home (){
  return(
    <>
    <Header />
    <Button>
      Editar seu perfil
    </Button>
    <Input />
    </>
  )
}