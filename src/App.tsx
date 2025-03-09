import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { AboutHer } from "./pages/AboutHer"
import { AboutUs } from "./pages/AboutUs"
import { Carrito } from "./pages/Carrito"
import { News } from "./pages/News"
import { Store } from "./pages/Store"
import { Tour } from "./pages/Tour"


function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutHer" element={<AboutHer />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/card" element={<Carrito />} />
      <Route path="/news" element={<News />} />
      <Route path="/store" element={<Store />} />
      <Route path="/tour" element={<Tour />} />
    </Routes>
  )
}

export default App
