import React from 'react'
import { useRoutes } from 'react-router-dom'
import Navigation from './components/Navigation'
import ViewCharacters from './pages/ViewCharacters'
import EditCar from './pages/EditCar'
import CreateCharacter from './pages/CreateCharacter'
import CarDetails from './pages/CarDetails'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <CreateCharacter title='HeroForge | Customize' />
    },
    {
      path:'/customcars',
      element: <ViewCharacters title='HeroForge | Custom Characters' />
    },
    {
      path: '/customcars/:id',
      element: <CarDetails title='HeroForge | View' />
    },
    {
      path: '/edit/:id',
      element: <EditCar title='HeroForge | Edit' />
    }
  ])

  return (
    <div className='app max-w-6xl mx-auto min-h-screen'>

      <Navigation />

      { element }

    </div>
  )
}

export default App