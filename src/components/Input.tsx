import { InputHTMLAttributes } from "react";


interface InputProps extends InputHTMLAttributes <HTMLElement>{

}

export function Input (props: InputProps){


  return(
    <textarea className="bg-gray-900 overflow-hidden w-full h-24 p-3 rounded-lg text-gray-200 placeholder:text-gray-400 outline-none  focus:ring-1 ring-green-600"
    {...props} />
  )

}