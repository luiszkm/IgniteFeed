import { BsTrash } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'

interface CommentProps {
  text:string
}
export function Comment({text}:CommentProps) {

  return (
    <div className='flex items-start gap-4'>
      <img className="w-16 h-16 border-2 border-gray-800 rounded-lg object-fill"
        src="https://github.com/luiszkm.png" alt="foto do usuário" />

      <div className='w-full'>

        <main className='flex flex-col gap-4'>
          <div className='relative bg-gray-600 p-4 min-h-[120px] rounded-lg'>
            <h3 className='text-gray-100 font-bold'>Jenny</h3>
            <time
              title="07 de  novembro as 10:00"
              dateTime="2022-05-11 10:00:30"
              className="text-gray-300 text-xs">cerca de 2h
            </time>
            <BsTrash className='cursor-pointer absolute top-4 right-4 fill-gray-300 stroke-gray-300 hover:fill-red-400' size={20} />
            <p className='text-white'>{text}</p>
          </div>

          <div className='cursor-pointer text-gray-300 flex gap-2 hover:text-white active:text-green-500'>
            <AiOutlineLike  size={20} />
              <span >Aplaudir</span>
              <span >03</span>
          </div>
        </main>

        <footer>

        </footer>
      </div>
    </div>
  )

}