
import Login from './componentes/Login/Login'
import Register from './componentes/Register/Register'
import{BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  return(

  <div className='App'>
    <BrowserRouter>

      <Routes>
        <Route path='' element= {<Login />}></Route>
        <Route path='/Register' element= {<Register />}></Route>

      </Routes>

    </BrowserRouter>


  </div>

  )
}

  

export default App
