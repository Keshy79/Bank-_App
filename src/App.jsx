
import { Routes, Route} from 'react-router-dom'
import './App.css'
import Signin from './Components/Signin'
import Signup from './Components/Signup'


function App() {
  

  return (
    <>
     <Routes>
        <Route path='/' element={<Signup/>}/>
       <Route path='/signin' element={<Signin/>}/>
     </Routes>
    </>
  )
}

export default App
