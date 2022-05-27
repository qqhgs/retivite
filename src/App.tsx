import { Heading, Image, Switch, VStack, Text, Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import './App.css'

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const mode = localStorage.getItem('dark-mode')
    mode !== 'dark' ? setDarkMode(false) : setDarkMode(true)
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const handleDarkMode = () => {
    if (darkMode) {
      localStorage.setItem('dark-mode', 'light')
      setDarkMode(false)
    } else {
      localStorage.setItem('dark-mode', 'dark')
      setDarkMode(true)
    }
  }

  return (
    <Box className='App'>
      <VStack h='100vh' justifyContent='center'>
				<Image className='logo' boxSize='80px' src='/logo.svg' alt='react'/>
        <Heading as='h1'>Good luck, have fun!</Heading>
        <Text>[ "React", "TypeScript", "Vite", "Chakra UI" ]</Text>
				<Switch size='lg' onChange={handleDarkMode} isChecked={darkMode} />
      </VStack>
    </Box>
  )
}
export default App
