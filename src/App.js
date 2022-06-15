import { Routes, Route } from "react-router-dom"
import Navigation from "./components/navigation/Navigation.component"
import Home from "./routes/home/Home.component"
import SignIn from "./routes/sign-in/Sign-in.component"

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App
