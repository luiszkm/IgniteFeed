
import igniteLogo from '../assets/logo.svg'

export function Header(){

  return(
    <header className='bg-gray-800 flex gap-4 py-5 items-center justify-center'>
      <img src={igniteLogo} alt="logo ignite" />
      <h2 className='text-white font-bold text-xl'>Ignite Feed</h2>
    </header>
  )
} 