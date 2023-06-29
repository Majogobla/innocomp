import { Link, Outlet, useLocation } from 'react-router-dom';
import logo from '../../img/logo.png';
import texto from '../../img/texto.png';
function Layout() 
{
  const location = useLocation();

  return (
    <>
      <div className="w-full bg-[#fb5910]">
        <div className="container mx-auto p-6">
          <div className="flex flex-col md:flex-row gap-12 items-center  justify-between">
            <Link className="w-20" to='/'>
              <img src={logo} alt="imagen logo" />
            </Link>

            <div className="w-full">
              <div className="flex flex-col md:flex-row justify-center md:justify-end gap-2">
                {/* <Link to="/computadoras" className={`${location.pathname === '/computadoras' ? 'bg-[#AD3A05]' : 'hover:bg-[#AD3A05]'} text-2xl font-extralight text-center text-white uppercase px-10 py-5 rounded-lg transition-colors`}>Computadoras</Link> */}

                <Link to="/tecnologia" className={`${location.pathname === '/tecnologia' ? 'bg-[#AD3A05]' : 'hover:bg-[#AD3A05]'} text-2xl font-extralight text-center text-white uppercase px-10 py-5 rounded-lg transition-colors`}>Tecnología</Link>

                <Link to="/office" className={`${location.pathname === '/office' ? 'bg-[#AD3A05]' : 'hover:bg-[#AD3A05]'} text-2xl font-extralight text-center text-white uppercase px-10 py-5 rounded-lg transition-colors`}>Office</Link>

                <Link to="/keys" className={`${location.pathname === '/keys' ? 'bg-[#AD3A05]' : 'hover:bg-[#AD3A05]'} text-2xl font-extralight text-center text-white uppercase px-10 py-5 rounded-lg transition-colors`}>Games & Keys</Link>
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
