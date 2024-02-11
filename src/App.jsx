import { Outlet } from "react-router-dom"
import Footer from "./Components/Home/Footer/Footer"
import NavBar from "./Components/Home/NavBar/NavBar"

function App() {
  

  return (
    <>
     <NavBar></NavBar>
     <Outlet></Outlet>
     <Footer></Footer>
    </>
  )
}

export default App
