import { Link } from "react-router-dom"
import { FutterComponent } from "../components/FutterComponent"
import { NavbarComponent } from "../components/NavbarComponent"


export const AboutHer = () => {
  return (
    <>
      <NavbarComponent />

      {/* <!--Contenido--> */}
      <h2 className=" text-3xl font-bold tracking-tight text-cyan-200 text-center sm:text-4xl p-4 xs:py-10">Billie Eilish
        Story
      </h2>
      <div className="max-w-screen-xl mx-auto p-4 py-6 lg:py-8  ">
        {/* <!--quien es ella--> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <img src="/src/assets/img/Billie-Eilish-Introduction.webp" alt="img de billie"
            className="w-full h-auto rounded-lg" />
          <div className="w-full h-full flex flex-col justify-center">
            <h1 className="text-2xl text-emerald-300 font-bold mb-4">Who's Her</h1>
            <p className="text-base leading-relaxed text-white">Billie Eilish, nacida el 18 de diciembre de 2001 en Los
              Ángeles, es
              una cantante y compositora
              estadounidense reconocida mundialmente. Desde su debut con "Ocean Eyes" en 2015, ha destacado por su
              estilo único, letras introspectivas y colaboraciones con su hermano Finneas. En 2024, lanzó su
              tercer álbum de estudio, consolidando su evolución artística y abordando temas profundos. Además de
              su música, es una activa defensora del medio ambiente y los derechos de los animales. Con múltiples
              premios, incluidos Grammys y un Oscar, Eilish es un ícono de su generación y una figura influyente
              en la cultura contemporánea.</p>
          </div>
        </div>
        <br /><br />
        {/* <!--primer album ep--> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="w-full h-full flex flex-col justify-center">
            <h1 className="text-2xl text-emerald-300 font-bold mb-4">Don't Smile at Me</h1>
            <p className="text-base leading-relaxed text-white">Es el primer EP de Billie Eilish, lanzado el 11 de
              agosto de 2017. Este trabajo marcó el inicio de su ascenso meteórico en la música, destacándose por
              su estilo único que combina letras oscuras, melodías melancólicas y una producción minimalista a
              cargo de su hermano, Finneas O'Connell. El EP incluye temas icónicos como "Ocean Eyes", que la
              catapultó a la fama, "Bellyache" y "idontwannabeyouanymore", mostrando su capacidad para transmitir
              emociones complejas con una voz cautivadora. Con este proyecto, Billie se consolidó como una de las
              artistas emergentes más prometedoras de su generación.</p>
          </div>
          <img src="/src/assets/img/imgOceanEyes.gif" alt="primer album ep de Billie"
            className="w-full h-auto rounded-lg" />

        </div>
        <br /><br />
        {/* <!--primer album de estudio--> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <img src="/src/assets/img/album1.gif" alt="primer album de Estudio de Billie"
            className="w-full h-auto rounded-lg" />
          <div className="w-full h-full flex flex-col justify-center">
            <h1 className="text-2xl text-emerald-300 font-bold mb-4">When We All Fall Asleep, Where Do We Go?</h1>
            <p className="text-base leading-relaxed text-white">Es el primer álbum de estudio de Billie Eilish, lanzado
              el 29 de marzo de 2019. Este álbum revolucionó el pop contemporáneo con su enfoque experimental y su
              fusión de géneros como electropop, trap y baladas melancólicas. Producido íntegramente por Billie y
              su hermano Finneas, incluye éxitos como "Bad Guy", "Bury a Friend" y "When the Party's Over", que se
              convirtieron en himnos globales. Con letras introspectivas y sonidos innovadores, el álbum explora
              temas como la ansiedad, el sueño y las inseguridades, conectando profundamente con su audiencia. Fue
              un éxito comercial y crítico, ganando múltiples premios Grammy, incluido Álbum del Año, y
              posicionando a Billie como una figura clave en la música contemporánea.</p>
          </div>
        </div>
        <br /><br />
        {/* <!--segundo album de estudio--> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="w-full h-full flex flex-col justify-center">
            <h1 className="text-2xl text-emerald-300 font-bold mb-4">Happier Than Ever</h1>
            <p className="text-base leading-relaxed text-white">Es el segundo álbum de estudio de Billie Eilish, lanzado
              el 30 de julio de 2021. Con un enfoque más maduro y emocional, el álbum muestra una evolución en su
              estilo musical, combinando pop, rock y baladas suaves con toques de jazz y bossa nova. La
              producción, nuevamente realizada por Billie y Finneas, explora temas de crecimiento personal,
              relaciones tóxicas y la lucha por encontrar la paz interior. Canciones como "Therefore I Am", "Your
              Power" y "Happier Than Ever" destacan por su profundidad lírica y su enfoque más orgánico en
              comparación con su trabajo anterior. El álbum fue aclamado por la crítica y recibió múltiples
              premios, incluyendo un Grammy, consolidando aún más a Billie como una de las artistas más
              innovadoras y versátiles de la música moderna.</p>
          </div>
          <img src="/src/assets/img/album2.gif" alt="segundo album de Estudio de Billie"
            className="w-full h-auto rounded-lg" />

        </div>
        <br /><br />
        {/*  <!--tercer album de estudio--> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <img src="/src/assets/img/album3.gif" alt="tercer album de Estudio de Billie"
            className="w-full h-auto rounded-lg" />
          <div className="w-full h-full flex flex-col justify-center">
            <h1 className="text-2xl text-emerald-300 font-bold mb-4">Hit Me Hard And Soft</h1>
            <p className="text-base leading-relaxed text-white">Es el tercer álbum de estudio de Billie Eilish, lanzado
              en 2024. Con este proyecto, Billie da un paso más hacia una madurez artística, explorando sonidos
              más complejos y oscuros mientras profundiza en temas como el amor, la vulnerabilidad y la lucha
              interna. El álbum mezcla géneros como el pop experimental, el indie y la electrónica, manteniendo la
              producción minimalista que la caracteriza, pero con una mayor riqueza instrumental y emocional.
              Canciones como "Numb", "Cold Hands" y "Wasted Youth" reflejan una evolución en su estilo, tanto
              lírico como sonoro. Con "Hit Me Hard and Soft", Billie Eilish reafirma su lugar como una de las
              artistas más influyentes de su generación, continuando su camino hacia la experimentación y la
              conexión profunda con sus seguidores.</p>
          </div>
        </div>
        {/* <!--despedida--> */}
        <br /><br />
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 ">
          <div className="w-full h-full flex flex-col justify-center">
            <h1 className="text-2xl text-emerald-300 font-bold mb-4 text-center">! Congratulations ¡</h1>
            <p className="text-base leading-relaxed text-white">¡Felicidades! Ahora has aprendido mucho más sobre Billie
              Eilish, su increíble carrera y su evolución como artista. Desde su debut con "Ocean Eyes" hasta su
              último álbum "Hit Me Hard and Soft", has descubierto cómo ha logrado cautivar al mundo con su música
              única y su estilo auténtico. ¡Ahora puedes seguir explorando Elish Vibes!</p>
            <br />
            <div className="mt-0 flex items-center justify-center gap-x-6 lg:justify-center">
              <Link to={'/'}
                className="rounded-md bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium text-sm px-3.5 py-2.5 text-white shadow-sm hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1  gap-4 ">
          <img src="/src/assets/img/despedida2.gif" alt="gif cute de Billie" className="w-full h-auto rounded-lg" />
          <img src="/src/assets/img/despedida1.gif" alt="gif cute de Billie" className="w-full h-auto rounded-lg" />
          <img src="/src/assets/img/despedida3.gif" alt="gif cute de Billie" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      <FutterComponent />
    </>
  )
}
