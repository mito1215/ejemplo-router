import { BrowserRouter, Route, Routes } from "react-router-dom"
import Drink from "./components/drink"
import List from "./components/list"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<List/>}></Route>
          <Route path="/drink/:id" element={<Drink/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
