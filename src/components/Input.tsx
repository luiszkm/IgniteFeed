import { InputHTMLAttributes } from "react";


interface InputProps extends InputHTMLAttributes <HTMLElement>{

}

export function Input (props: InputProps){


  return(
    <input className="bg-gray-900 w-full h-24 p-16  text-gray-200 placeholder:text-gray-400 focus:border-green-600"
    {...props} />
  )

}