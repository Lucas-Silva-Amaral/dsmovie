import { BrowserRouter, Routes, Route } from "react-router-dom"
import Listing from "pages/Listing"
import Form from "pages/Form"
import Nav from "components/Nav"

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
