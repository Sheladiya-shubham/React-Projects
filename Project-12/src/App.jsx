import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Components/Home'
import Header from './Components/Header'
import AddMovie from './Components/AddMovie'
import EditMovie from './Components/EditMovie'
import SingleMovie from './Components/SingleMovie'
import SignIN from './Components/Signin/SignIn'
import SignUP from './Components/Signin/SignUp'

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIN />} />
        <Route path="/signUp" element={<SignUP />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/edit-movie/:id" element={<EditMovie />} />
        <Route path="/single-movie/:id" element={<SingleMovie />} />

      </Routes>
    </>
  )
}

export default App