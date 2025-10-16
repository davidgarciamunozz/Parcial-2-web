
import './App.css'
import AddComment from './components/AddComment'
import CommentList from './components/CommentList'
import { Routes, Route } from 'react-router-dom'
import FavoriteComments from './components/FavoriteComments'
import EditComment from './components/EditComment'

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
