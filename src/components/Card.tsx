import { Button } from "./Button";
import { Comment } from "./Comment";
import { Input } from "./Input";

interface CardProps {
 data : any
}


export function Card({data}:CardProps) {
console.log(data);


  return (
    <div className="w-full max-w-[832px] p-10 bg-gray-800 rounded-lg flex flex-col gap-6">
      <header className="flex items-center justify-between">
        <div className="flex gap-6 items-center">

          <img className="w-16 h-16 border-2 border-gray-800 outline outline-green-500 rounded-lg object-fill"
            src={data.author.avatarUrl} alt="foto do usuário" />

          <div className="flex flex-col" >
            <strong className="text-white">{data.author.name}</strong>
            <span className="text-gray-300">{data.author.role}</span>
          </div>

        </div>
        <time
          title="07 de  novembro as 10:00"
          dateTime="2022-05-11 10:00:30"
          className="text-gray-300">publicado há 1h
        </time>
      </header>

      <main className="text-gray-300 flex flex-col gap-7 border-b-2 border-gray-700 py-6">
        <h2>fala galera</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore laboriosam, doloribus laudantium odio voluptas, ipsa veniam nam magni distinctio dignissimos fugit facilis in dicta. Expedita tempora veniam error tenetur enim.</p>

        <p className="flex flex-col gap-5">
          <a href="" className="text-green-600 font-bold">dev.soares/nlw</a>
          <a href="" className="text-green-600 font-bold">dev.soares</a>
        </p>

      </main>

      <footer className="flex flex-col py-6 gap-4">
        <h3 className="text-gray-100 font-bold" >Deixe seu feedback</h3>

        <Input />

        <Button> Publicar</Button>
      </footer>
    <Comment />
   
    </div>
  )
}