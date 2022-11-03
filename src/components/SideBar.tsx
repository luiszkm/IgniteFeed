import { Button } from "./button";
import { AiOutlineEdit } from 'react-icons/ai'

export function SideBar() {

  return (
    <aside className="w-64 h-80 bg-gray-800 rounded-lg flex flex-col items-center justify-between">

      <img className="w-full h-[72px]"
        src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" alt="user background" />


      <div className="flex flex-col items-center -mt-20">

        <img className="w-16 h-16 border-2 border-gray-800 outline outline-green-500 rounded-lg object-fill"
          src="https://github.com/luiszkm.png" alt="" />
          
        <strong className="font-bold text-gray-100">Luis Soares</strong>
        <span className="text-gray-300">Web Developer</span>
      </div>

      <footer className="p-6 border-t border-gray-700">
        <a href="#">
          <Button primary>
            <AiOutlineEdit size={24} />
            Editar seu perfil
          </Button>
        </a>
      </footer>

    </aside>
  )
}