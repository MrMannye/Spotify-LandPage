import Head from 'next/head'
import Container from '../components/Container'
import Cat from '../components/Cat'
import ClientLogos from '../components/client-logos'
import Skills from '../components/skills'
import AboutUs from '../components/aboutus'

export default function Home() {
  return (
    <div className='overflow-x-hidden bg-white w-full'>
      <Head>
        <title>Songs SEA</title>
      </Head>

      <div className="flex h-full" >
        <Container />
      </div>
      
      <div className='flex items-center px-16 mt-20 overflow-y-hidden overflow-x-hidden'>
        <div className='mb-3 flex flex-col w-3/5'>
          <p className="text-gray-900 text-lg">
            Estas son
          </p>
          <p className="font-bold text-3xl text-gray-800 transform -translate-y-2">
            Las canciones que te gustan!
          </p>
          <p className='text-gray-600 mb-4'>Somos una empresa que se dedica a la recopilacion de datos de Spotify
            para darte las mejores recomendaciones de playlist o canciones, más escuchadas
            por toda la comunidad de Spotify. Aqui podras encontrar todo tipo de genero como asi tambien seleccion
            las canciones que a ti te gustan para que puedas guardarlas y poder escucharlas en otra ocasión
          </p>
          <ClientLogos></ClientLogos>

        </div>
        <div className="flex items-center mt-6 space-x-6 mr-4">
          <Cat></Cat>
        </div>
      </div>

      <Skills></Skills>
      <AboutUs></AboutUs>

    </div>
  )
}


