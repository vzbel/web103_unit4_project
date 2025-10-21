import React from 'react'
import { useRoutes } from 'react-router-dom'
import Navigation from './components/Navigation'
import ViewCharacters from './pages/ViewCharacters'
import EditCar from './pages/EditCharacter'
import CreateCharacter from './pages/CreateCharacter'
import CharacterDetails from './pages/CharacterDetails'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <CreateCharacter title='HeroForge | Customize' />
    },
    {
      path:'/customcharacters',
      element: <ViewCharacters title='HeroForge | Custom Characters' />
    },
    {
      path: '/customcharacters/:id',
      element: <CharacterDetails title='HeroForge | View' />
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