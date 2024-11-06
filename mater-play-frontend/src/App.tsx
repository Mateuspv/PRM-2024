import Footer from "./app/components/Footer"
import Header from "./app/components/Header"
import Homepage from "./app/pages/home"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/:id?" element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
