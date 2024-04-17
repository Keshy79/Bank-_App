
import './App.css'
import Signin from '../assets/Components/Signin'
import Signup from '../assets/Components/Signup'

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
