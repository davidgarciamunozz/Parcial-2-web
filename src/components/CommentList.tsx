import { useEffect, useState } from "react"
import getAllPosts from "../utils/Gateway"

export default function CommentList() {
    
  const [comments,setComments] = useState("")

  useEffect (() => {
    getAllPosts().then((data)=> {
      setComments(data)
    })

    console.log(comments)
  }
)
    return(
        
        <>
        <h3>Comment List </h3>
        </>
    )
}