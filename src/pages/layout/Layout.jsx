import { Link, Outlet } from 'react-router-dom';
import logo from '../../img/logo.png';
import texto from '../../img/texto.png'
function Layout() 
{

  return (
    <>
      <div class="w-full bg-[#fb5910]">
        <div class="container mx-auto py-6">
            <div class="flex flex-col md:flex-row gap-12 items-center  justify-between">
              <Link class="w-32" to='/'>
                  <img src={logo} alt="imgen logo" />
              </Link>

              <div class="w-full">
                <div class="flex flex-col md:flex-row md:justify-between">
                    <Link to="/computadoras" class="text-3xl font-extralight text-center text-white uppercase px-10 py-5 hover:bg-[#AD3A05] rounded-lg transition-colors">Computadoras</Link>

                    <Link to="/portatiles" class="text-3xl font-extralight text-center text-white uppercase px-10 py-5 hover:bg-[#AD3A05] rounded-lg transition-colors">Portátiles</Link>

                    <Link to="/consumibles" class="text-3xl font-extralight text-center text-white uppercase px-10 py-5 hover:bg-[#AD3A05] rounded-lg transition-colors">Consumibles</Link>
                </div>
              </div>
          </div>
        </div>
      </div>

      <Outlet/>

      <footer class="w-full bg-[#fb5910]">
      <div class="container mx-auto">
            <div class="flex flex-col md:flex-row gap-12 items-center  justify-between py-4">
              <Link class="w-28" to='/'>
                  <img src={texto} alt="imgen logo" />
              </Link>

              <div class="flex-1">
                <p className='text-3xl font-extralight text-end text-white uppercase'>Todos los derechos reservados InnoCompo ©{new Date().getFullYear()}.</p>
              </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout
