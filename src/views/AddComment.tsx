// import { useState } from "react"
// import { useDispatch } from "react-redux"
// import { useNavigate } from "react-router-dom"

export default function AddComment() {


    // const navigate =useNavigate()
    // const dispatch = useDispatch()

    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [body, setBody] = useState('')
    

    // const handleSubmmit = (e:React.FormEvent) {
    //     e.preventDefault()

    //     // const newComment = {
    //     //         id: crypto.randomUUID,
    //     //         name: name,
    //     //         email: email,
    //     //         body: body,
    //     //         postId: Date.now()
    //     // }

    //     // dispatch()
    //     // navigate('/')
    // }
    return(
        <>
        <form>

            <h1 className="text-[12px]">Fill the Form for new comment</h1>
            <div>
                <input
            className="border-none bg-gray-50 p-4"
            type="text"
            placeholder="Enter name"
            // onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            className="border-none bg-gray-50 p-4"
            type="email"
            placeholder={'Insert Email'}
            // onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="border-none bg-gray-50 p-4"
            type="text"
            placeholder={'Insert Message'}
            // onChange={(e) => setBody(e.target.value)}
            required
          />
            </div>

        </form>
        </>
    )
}