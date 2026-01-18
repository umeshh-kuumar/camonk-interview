import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import CreateBlogForm from "./components/CreateBlogForm"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateBlogForm />} />
    </Routes>
  )
}

export default App
