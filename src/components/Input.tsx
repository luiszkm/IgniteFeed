import { InputHTMLAttributes } from "react";


interface InputProps extends InputHTMLAttributes <HTMLElement>{

}

export function Input (props: InputProps){


  return(
    <input className="bg-gray-900 w-full h-24 p-16 rounded-lg text-gray-200 placeholder:text-gray-400 outline-none  focus:ring-1 ring-green-600"
    {...props} />
  )

}