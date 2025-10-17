import { useNavigate } from 'react-router-dom'
import type {Comment} from '../types/commentTypes'

export default function CommentCard ({comment}: {comment:Comment}) {

    const navigate = useNavigate()
    return(
        <>
        <div className="border border-black rounded-2xl p-4">
            <h3><span className='font-bold'>Name: </span>{comment.name}</h3>  
            <h4><span className='font-bold'>Email: </span>{comment.email}</h4>
            <p><span className='font-bold'>Body: </span>{comment.body}</p>   

            <div className='pt-2'>
                <button onClick={()=> navigate(`/edit/${comment.id}`)}>Edit</button>
                <button onClick={()=> navigate('/favorites')}>Favorite</button>
            </div>
        </div>
        </>
    )
}