

export function Card() {


  return (
    <div className="w-full max-w-[832px] p-10 bg-gray-800 rounded-lg flex flex-col gap-6">
      <header className="flex items-center justify-between">
        <div className="flex gap-6 items-center">

          <img className="w-16 h-16 border-2 border-gray-800 outline outline-green-500 rounded-lg object-fill"
            src="https://github.com/luiszkm.png" alt="foto do usuário" />

          <div className="flex flex-col" >
            <strong className="text-white">Irineu</strong>
            <span className="text-gray-300">Front-End</span>
          </div>

        </div>
        <span className="text-gray-300">publicado há 1h</span>
      </header>

      <main className="text-gray-300">
        <h2>fala galera</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore laboriosam, doloribus laudantium odio voluptas, ipsa veniam nam magni distinctio dignissimos fugit facilis in dicta. Expedita tempora veniam error tenetur enim.</p>
      </main>
    </div>
  )
}