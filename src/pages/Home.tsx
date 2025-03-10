import { Link } from "react-router-dom"
import { FutterComponent } from "../components/FutterComponent"
import { NavbarComponent } from "../components/NavbarComponent"


export const Home = () => {
    return (
        <>
            <NavbarComponent />
            {/* <!--Mensajito de Introduccion--> */}
            <div className="bg-transparent">
                <div className="mx-auto max-w-7xl py-10 lg:py-10 xl:py-10 md:py-10 sm:px-6 sm:py-0 lg:px-8 ">
                    <div
                        className="fondito relative isolate overflow-hidden  px-6 pt-16  sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">

                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-10 lg:text-left ">
                            <h2 className=" text-3xl font-bold tracking-tight text-cyan-200 sm:text-4xl">Welcome To The
                                Best Bebsite Of Billie Eilish.</h2>
                            <p className="mt-6  text-lg/8 text-white font-semibold">Bienvenidos a Eilish Vibes 🩵✨ El lugar donde
                                los fanáticos de Billie Eilish se sumergen en su mundo único. Aquí encontrarás las últimas
                                noticias, souvenirs, tours,historia y todo lo que te hace sentir más conectado con Billie.</p>
                            <p className="font-bold mt-6  text-lg/8 text-white">¿Listo para comenzar?</p>
                            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                <button id="botonInicioSesion"
                                    className="rounded-md bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium text-sm px-3.5 py-2.5 text-gray-900 shadow-sm hover:bg-white focus-visible:outline-offset-2 focus-visible:outline-white">
                                    Sign In
                                </button>
                                <Link to={'/aboutHer'} className="text-sm/6 font-bold text-white">Explore Her Story
                                    <span aria-hidden="true">→</span></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <FutterComponent />
        </>
    )
}
