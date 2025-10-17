
import './App.css'
import AddComment from './views/AddComment'
import CommentList from './views/CommentList'
import { Routes, Route } from 'react-router-dom'
import FavoriteComments from './views/FavoriteComments'
import EditComment from './views/EditComment'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<CommentList/>}></Route>
        <Route path='/add' element={<AddComment/>}></Route>
        <Route path='/favorites' element={<FavoriteComments/>}></Route>
        <Route path='/edit/:id' element={<EditComment/>}></Route>
      </Routes>

    </>
  )
}

export default App
