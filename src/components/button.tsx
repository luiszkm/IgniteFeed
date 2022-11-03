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
    "bg-transparent flex gap-2 px-6 py-4 rounded-lg border text-green-500 border-green-500 hover:bg-green-600 hover:text-white hover:border-green-600" :
    "bg-green-600  px-6 py-4 rounded-lg text-white hover:bg-green-500"
    }>
    {props.children}
   </button>
  )
}