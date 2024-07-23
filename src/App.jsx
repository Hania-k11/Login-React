import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Loginform from './components/Loginform'
import Home from './components/Home'
import Unauthorized from './components/Unauthorized'
import { useAuth } from './context/AuthContext'
import { AuthContext } from './context/AuthContext'

function App() {

  const state = useContext(AuthContext)
  console.log("Context", state)

  return (
    <>

    <Loginform/>
    {/* <Home/> */}
    {/* <Unauthorized/> */}
    </>
  )
}

export default App
