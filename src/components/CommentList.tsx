import { useEffect, useState } from "react"
import getAllPosts from "../utils/Gateway"

export default function CommentList() {
    
  const [_comments,setComments] = useState("")

  useEffect (() => {
    getAllPosts().then((data)=> {
      setComments(data)
      console.log(data)
    })

  },[])
    return(
        <>
        <h3>Comment List </h3>
        </>
    )
}