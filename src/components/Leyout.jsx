import Navbars from './nav/navbar'
import Footer from './nav/footer/footer'
import { Outlet } from 'react-router-dom'
function Leyout() {
  return (
    <>
    <Navbars />
    <main>
        <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default Leyout