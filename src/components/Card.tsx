import React, { useState } from "react";
import { Button } from "./Button";
import { Comment } from "./Comment";
import { Input } from "./Input";


type Author = {
  avatarUrl: string
  name: string
  role: string
}

type PostContent = {
  type: string
  content: string
}
interface CardProps {
  author: Author,
  postContent: PostContent[],
  publishedAt: any

}


export function Card({ author, postContent, publishedAt }: CardProps) {
const [comments, setComments] = useState <string[]>([])
const [newComment, setNewComment] = useState('')

  const dataFormatPublished = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit'
  }).format(publishedAt)

  const publishedLAstDay: any = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
  }).format(publishedAt)

  const day = Number(new Date().getDate() - publishedLAstDay)


  
  function handleCreateNewComment (){
    event?.preventDefault()
    setComments(prevState =>[...prevState, newComment])
    setNewComment('')

  }

  function handleDeleteComment(commentToDelete:string){
    const commentsWithoutDeletedOne = comments.filter(comment =>{
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne)
  }

  function handleNewCommentInvalid(){

  }

  return (
    <div className="w-full max-w-[832px] p-10 bg-gray-800 rounded-lg flex flex-col gap-6">
      <header className="flex items-center justify-between">
        <div className="flex gap-6 items-center">

          <img className="w-16 h-16 border-2 border-gray-800 outline outline-green-500 rounded-lg object-fill"
            src={author.avatarUrl} alt="foto do usuário" />

          <div className="flex flex-col" >
            <strong className="text-white">{author.name}</strong>
            <span className="text-gray-300">{author.role}</span>
          </div>

        </div>
        <time
          title={dataFormatPublished}
          dateTime={publishedAt}
          className="text-gray-300">{day > 1 ? `Publicado há ${day} dias` : 'Publicado hoje'}
        </time>
      </header>

      <main className="text-gray-300 flex flex-col gap-7 border-b-2 border-gray-700 py-6">
        {postContent.map(content => (
          
          content.type === 'paragraph' ?
            <p key={content.content}>{content.content}</p> :
            content.type === 'title' ?
              <h2 key={content.content}>{content.content}</h2> : ''

        ))}


        <p className="flex flex-col gap-5">
          {postContent.map(content => (
            content.type === 'link' ?
              <a key={content.content} href="#" className="text-green-600 font-bold">{content.content}</a> : ''
          ))}
        </p>

      </main>

      <form className="flex flex-col py-6 gap-4"
      onSubmit={handleCreateNewComment}>
        <h3 className="text-gray-100 font-bold" >Deixe seu feedback</h3>


        <Input value={newComment}
         onChange={(e:React.ChangeEvent<HTMLInputElement>) => setNewComment(e.target.value)} 
         onInvalid={()=>handleNewCommentInvalid()}
         required/>

        <Button disabled={newComment.length ===0}> Publicar</Button>
      </form>

      {comments.map(text =>(
        <Comment key={ text}
         text={text}
         deleteComment={()=>handleDeleteComment(text)}  />
      ))}

    </div>
  )
}