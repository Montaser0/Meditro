import './App.css'
import Home from './components/nav/Pages/Home'
import Contact from './components/nav/Pages/contact'
import Leyout from './components/Leyout'
import { createBrowserRouter, createRoutesFromElements ,Route, RouterProvider } from 'react-router-dom'
function App() {
const Routes = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Leyout/>}>
    <Route path="/Home" element={<Home />} ></Route>
    <Route path="/Contact" element={<Contact />}></Route>
  </Route>
))
  return (
    <>
    <RouterProvider router={Routes} />
    </>
  )
}

export default App
