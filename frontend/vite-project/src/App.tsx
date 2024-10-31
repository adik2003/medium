
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signin } from './Singin'
import { Signup } from './Signup'
import { Blog } from './Blog'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
<Route element={<Signin/>} path="/signin"></Route>
<Route element={<Signup></Signup>} path="/signup"></Route>
<Route element={<Blog></Blog>} path="/blog:id"></Route>
<Route element ={<Blog></Blog>} path="/blogs"></Route>


     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
