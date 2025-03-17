import { Link } from "react-router-dom"
import { FutterComponent } from "../components/FutterComponent"
import { NavbarComponent } from "../components/NavbarComponent"


export const AboutUs = () => {
    return (
        <>
            <NavbarComponent />
            {/* <!--main--> */}
            <section className="py-24 relative intoAboutUs">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                        <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                                <h2
                                    className="text-cyan-200 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                    About Us</h2>
                                <p className="text-white text-base font-normal leading-relaxed lg:text-start text-center">
                                    <span className="font-bold">Eilish
                                        Vibes</span> es una página diseñada para todos los fans o personas interesadas en
                                    conocer más
                                    acerca de Billie Eilish, ya que tenemos varias secciones relacionadas a la artista, una de
                                    las mejores secciones que tenemos es la de Tienda en la cual vendemos productos de la más
                                    alta calidad.
                                </p>
                            </div>
                            <Link to={'/'}
                                className="rounded-md bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium text-sm px-3.5 py-2.5 text-white shadow-sm hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                Empezar
                            </Link>
                        </div>
                        <img className="lg:mx-0 mx-auto h-full rounded-3xl object-cover" src="/src/assets/img/logoEmpresa.jpg"
                            alt="about Us image" />
                    </div>
                </div>
            </section>

            <FutterComponent />
        </>
    )
}
