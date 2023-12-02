import Home from "./pages/Home"
import FormPage from "./pages/FormPage"
import UpdateForm from "./components/UpdateForm"  // Certifique-se de importar corretamente o UpdateForm

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cellphones" element={<FormPage />} />
          <Route path="/cellphones/update/:id" element={<UpdateForm />} /> {/* Adicione esta linha */}
        </Routes>
      </Router>
    </>
  )
}

export default App
