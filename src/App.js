import { Routes, Route } from "react-router-dom"
import Navigation from "./components/navigation/Navigation.component"
import Home from "./routes/home/Home.component"
import Authentication from "./routes/sign-in/authentication.component"

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Authentication />} />
      </Routes>
    </>
  )
}

export default App
