import { ButtonHTMLAttributes, ReactNode } from "react";



interface ButtonProps extends ButtonHTMLAttributes <HTMLElement>{
  children: ReactNode;
  primary?: boolean

}


export function Button (props:ButtonProps) {

  return(
   <button {...props}
   className={
    props.primary ? 
    "bg-transparent w-full flex items-center gap-2 text-sm px-6 py-4 rounded-lg border transition text-green-500 border-green-500 hover:bg-green-600 hover:text-white hover:border-green-600" :
    "bg-green-600  px-6 py-4 rounded-lg text-white transition hover:bg-green-500"
    }>
    {props.children}
   </button>
  )
}