
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signin } from './Singin'
import { Signup } from './Signup'
import { Blogs } from './Blogs'
import { Blog } from './Blog'
import { Publish } from './Publish'

function App() {

  
  return (
    <>
     <BrowserRouter>
     <Routes>
<Route element={<Signin/>} path="/signin"></Route>
<Route element={<Signup></Signup>} path="/signup"></Route>
<Route element={<Blog></Blog>} path="/blog/:id"></Route>
<Route element ={<Blogs></Blogs>} path="/blogs"></Route>
<Route element={<Publish></Publish>} path='/publish'></Route>


     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
