import { Link, Outlet } from 'react-router-dom';
import logo from '../../img/logo.png';
import texto from '../../img/texto.png';
function Layout() 
{

  return (
    <>
      <div className="w-full bg-[#fb5910]">
        <div className="container mx-auto p-6">
            <div className="flex flex-col md:flex-row gap-12 items-center  justify-between">
              <Link className="w-32" to='/'>
                  <img src={logo} alt="imgen logo" />
              </Link>

              <div className="w-full">
                <div className="flex flex-col md:flex-row md:justify-between">
                    <Link to="/computadoras" className="text-3xl font-extralight text-center text-white uppercase px-10 py-5 hover:bg-[#AD3A05] rounded-lg transition-colors">Computadoras</Link>

                    <Link to="/portatiles" className="text-3xl font-extralight text-center text-white uppercase px-10 py-5 hover:bg-[#AD3A05] rounded-lg transition-colors">Portátiles</Link>

                    <Link to="/consumibles" className="text-3xl font-extralight text-center text-white uppercase px-10 py-5 hover:bg-[#AD3A05] rounded-lg transition-colors">Consumibles</Link>
                </div>
              </div>
          </div>
        </div>
      </div>

      <Outlet/>

      <footer className="w-full bg-[#fb5910]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center  justify-between py-4">
            <Link className="w-28" to='/'>
                <img src={texto} alt="imgen logo" />
            </Link>

            <div className="flex-1">
              <p className='text-2xl font-extralight text-center md:text-end text-white uppercase'>Todos los derechos reservados InnoCompo ©{new Date().getFullYear()}.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout
