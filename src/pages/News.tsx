import { FutterComponent } from "../components/FutterComponent"
import { NavbarComponent } from "../components/NavbarComponent"


export const News = () => {
  return (
    <>
      <NavbarComponent />
      <h2 className=" text-3xl font-bold tracking-tight text-cyan-200 text-center sm:text-4xl p-10 intoNews ">Latest News About
        Billie
      </h2>
      <div className="intoNews">
        {/*  <!--noticia 1--> */}
        <div className="flex justify-center py-3 ">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <a target="_blank"
              href="https://www.primicias.ec/entretenimiento/musica/billie-eilish-chafrlie-xcx-cancion-guess-75532/">
              <img className="rounded-t-lg" src="/src/assets/img/noticia1.jpeg" alt="img noticia1" />
            </a>
            <div className="p-5">
              <a target="_blank"
                href="https://www.primicias.ec/entretenimiento/musica/billie-eilish-chafrlie-xcx-cancion-guess-75532/">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Billie Eilish y
                  Charlie XCX arrasan con el remix de 'Guess'
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">La colaboración entre Billie Eilish y
                Charlie XCX en el remix de 'Guess' se convierte en un éxito viral en su primer día.
              </p>
              <a target="_blank"
                href="https://www.primicias.ec/entretenimiento/musica/billie-eilish-chafrlie-xcx-cancion-guess-75532/"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/*  <!--noticia 2--> */}
        <div className="flex justify-center py-3">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a target="_blank"
              href="https://www.expreso.ec/ocio/billie-elish-le-arrebata-puesto-cancion-oida-sabrina-carpenter-226748.html">
              <img className="rounded-t-lg" src="/src/assets/img/noticia2.jpeg" alt="noticia2img" />
            </a>
            <div className="p-5">
              <a target="_blank"
                href="https://www.expreso.ec/ocio/billie-elish-le-arrebata-puesto-cancion-oida-sabrina-carpenter-226748.html">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Billie Elish le
                  arrebata el puesto de la canción más escuchada a Sabrina Carpenter</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Birds of a feather supera a Espresso en lo
                más escuchado de Spotify en 2024</p>
              <a target="_blank"
                href="https://www.expreso.ec/ocio/billie-elish-le-arrebata-puesto-cancion-oida-sabrina-carpenter-226748.html"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* <!--noticia 3--> */}
        <div className="flex justify-center py-3">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a target="_blank"
              href="https://www.apple.com/es/newsroom/2024/11/billie-eilish-is-apple-musics-artist-of-the-year-for-2024/">
              <img className="rounded-t-lg" src="/src/assets/img/noticia3.jpg" alt="img noticia3" />
            </a>
            <div className="p-5">
              <a target="_blank"
                href="https://www.apple.com/es/newsroom/2024/11/billie-eilish-is-apple-musics-artist-of-the-year-for-2024/">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Billie Eilish es la
                  Artista del Año 2024 de Apple Music</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Apple Music ha nombrado Artista del Año
                2024 a Billie Eilish en reconocimiento al impacto alcanzado por la cantante y compositora con su
                tercer álbum, HIT ME HARD AND SOFT.</p>
              <a target="_blank"
                href="https://www.apple.com/es/newsroom/2024/11/billie-eilish-is-apple-musics-artist-of-the-year-for-2024/"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/*  <!--noticia 4--> */}
        <div className="flex justify-center py-3">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a target="_blank"
              href="https://www.infobae.com/entretenimiento/2024/10/09/la-extrana-afeccion-que-sufre-billie-eilish-que-le-provoca-lesiones-musculares/">
              <img className="rounded-t-lg" src="/src/assets/img/noticia4.jpeg" alt="img noticia4" />
            </a>
            <div className="p-5">
              <a target="_blank"
                href="https://www.infobae.com/entretenimiento/2024/10/09/la-extrana-afeccion-que-sufre-billie-eilish-que-le-provoca-lesiones-musculares/">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">La extraña afección
                  que sufre Billie Eilish que le provoca lesiones musculares</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">La joven estrella compartió cómo su
                dolencia física ha influido en su salud mental y cómo está trabajando para superar estas
                dificultades</p>
              <a target="_blank"
                href="https://www.infobae.com/entretenimiento/2024/10/09/la-extrana-afeccion-que-sufre-billie-eilish-que-le-provoca-lesiones-musculares/"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* <!--noticia 5--> */}
        <div className="flex justify-center py-3">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a target="_blank"
              href="https://www.independent.co.uk/life-style/billie-eilish-necklace-glendale-concert-etiquette-b2664879.html">
              <img className="rounded-t-lg" src="/src/assets/img/noticia5.jpg" alt="imgNoticia5" />
            </a>
            <div className="p-5">
              <a target="_blank"
                href="https://www.independent.co.uk/life-style/billie-eilish-necklace-glendale-concert-etiquette-b2664879.html">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Los fanáticos
                  provocan un debate sobre la etiqueta de los conciertos después de que Billie Eilish fuera
                  golpeada con un collar en su último concierto</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Las conversaciones sobre la etiqueta de los
                conciertos han vuelto a surgir cuando Billie Eilish se convirtió en la última artista en ser
                golpeada en el escenario por un objeto volador.</p>
              <a target="_blank"
                href="https://www.independent.co.uk/life-style/billie-eilish-necklace-glendale-concert-etiquette-b2664879.html"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <FutterComponent />
    </>
  )
}
