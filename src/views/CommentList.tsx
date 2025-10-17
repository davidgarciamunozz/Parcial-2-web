import { useEffect} from "react"
import getAllPosts from "../utils/Gateway"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../context/store"
import { setComments } from "../context/comment/commentSlice"
import CommentCard from "../components/CommentCard"
import { useNavigate } from "react-router-dom"

export default function CommentList() {
    
  //Acces global state
  const comments = useSelector((state:RootState) => state.comment.comments);
  console.log(comments)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect (() => {
    if(comments.length === 0) {
      getAllPosts().then((data) => {
        if(data){
          dispatch(setComments(data))
        }
      })
    }

  },[comments.length, dispatch])
    return(
      <div className="flex flex-col gap-3 max-w-2xl">
        <h1 className="text-xl">Comment List:</h1>
        <button onClick={() => navigate('/add')} >Add comment</button>
        {
          comments.map((comment) => (
            <div key={comment.id}>
              <CommentCard comment={comment} />
            </div>
          ))
        }
      </div>
    )
}